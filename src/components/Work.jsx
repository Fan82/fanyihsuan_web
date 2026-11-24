import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UI_COPY, tx, useLanguage } from "../i18n/LanguageContext";

const LAYOUTS = ["wide", "detail", "comparison"];
// Sections already shown during this page load. Kept in memory so Back from
// a case study doesn't replay them, while a reload or new visit does.
const seenThisLoad = new Set();

/**
 * Work — one full-bleed <article> per project.
 *
 * Each article's `id` is the project id: stable, and used by the anchor
 * index, deep links (/#planify) and "Back to Work" on case studies.
 *
 * Layout comes from the project's material (`project.work.layout`), never
 * from its position in the list:
 *   comparison  text ⅓ | English source beside the Traditional Chinese translation
 *   wide        text on top, a wide screen below (default)
 *   detail      one enlarged screen detail | narrow text, bottom-aligned
 * DOM order is always text → visual; CSS Grid only moves them visually.
 */
export default function Work({ projects }) {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  // Entrance motion: each article eases in the first time it reaches 6%
  // above the viewport's bottom edge. Articles already passed (deep link,
  // Back, earlier in this tab) are shown as they are.
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      delete section.dataset.motion;
      return undefined;
    }

    const seen = seenThisLoad;
    const line = window.innerHeight * 0.94;
    const articles = [...section.querySelectorAll(":scope > article")];
    for (const el of articles) {
      if (seen.has(el.id) || el.getBoundingClientRect().top < line) {
        el.dataset.seen = "";
        seen.add(el.id);
      }
    }
    section.dataset.motion = "on";

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.dataset.seen = "";
          seen.add(entry.target.id);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );
    articles.filter((el) => !("seen" in el.dataset)).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [projects]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="work"
      aria-label={t(UI_COPY.home.workLabel)}
    >
      {/* Keeps old /#projects links working */}
      <span id="projects" className="work-alias" aria-hidden="true" />

      {projects.map((project, i) => {
        const layout = resolveLayout(project.work);
        return (
          <article
            key={project.id}
            id={project.id}
            className={`work-article ${project.theme ?? ""}`}
            data-layout={layout}
            aria-labelledby={`${project.id}-title`}
          >
            <div className="work-article__text">
              {project.focus && (
                <p className="work-article__category">{project.focus}</p>
              )}
              <h2 id={`${project.id}-title`} className="work-article__title">
                {project.name}
              </h2>
              <div className="work-article__more">
              <p className="work-article__summary">{project.desc}</p>
              <Link
                to={`/projects/${project.id}`}
                className="c-btn c-btn--primary"
              >
                {t(UI_COPY.home.readCaseStudy)}
                <span className="sr-only">: {project.name}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              </div>
            </div>

            {layout === "comparison" ? (
              <Comparison data={project.work.comparison} />
            ) : (
              <Visual project={project} layout={layout} eager={i === 0} />
            )}
          </article>
        );
      })}
    </section>
  );
}

function Visual({ project, layout, eager }) {
  const { language, t } = useLanguage();
  const image = project.work?.image;
  const src = image?.src ?? `/projects/${project.id}/hero-mockup.png`;
  const alt = image?.alt
    ? tx(image.alt, language)
    : `${project.name} ${t(UI_COPY.home.keyVisual)}`;

  return (
    <figure className="work-article__visual">
      <picture>
        {image?.mobileSrc && (
          <source media="(max-width: 48rem)" srcSet={image.mobileSrc} />
        )}
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          style={
            layout === "detail" && image?.focusY
              ? { objectPosition: `50% ${image.focusY}` }
              : undefined
          }
        />
      </picture>
    </figure>
  );
}

function Comparison({ data }) {
  const { language } = useLanguage();
  const fields = data.fields;
  const columns = [
    { side: "source", ...data.source },
    { side: "target", ...data.target },
  ];

  return (
    <figure
      className="work-article__visual work-compare"
      style={{ "--compare-rows": fields.length + 1 }}
    >
      {columns.map((col) => (
        <div key={col.side} className="work-compare__col" role="group" aria-label={tx(col.label, language)}>
          <p className="work-compare__lang">{tx(col.label, language)}</p>
          {fields.map((field) => (
            <div key={tx(field.label, "en")} className="work-compare__field">
              <p className="work-compare__label">{tx(field.label, language)}</p>
              <p className="work-compare__value" lang={col.lang}>
                {field[col.side]}
              </p>
            </div>
          ))}
        </div>
      ))}
    </figure>
  );
}

// Missing or incomplete material falls back to the wide layout.
function resolveLayout(work) {
  const layout = LAYOUTS.includes(work?.layout) ? work.layout : "wide";
  if (layout === "comparison" && !hasComparison(work.comparison)) return "wide";
  if (layout === "detail" && !work.image?.src) return "wide";
  return layout;
}

function hasComparison(c) {
  return Boolean(
    c?.fields?.length &&
      c.fields.every((f) => f.source?.trim() && f.target?.trim()),
  );
}
