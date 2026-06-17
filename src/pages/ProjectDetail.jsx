import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProject, projects } from "../data/projects";
import { useScrollLock } from "../hooks/useScrollLock";
import { UI_COPY, useLanguage } from "../i18n/LanguageContext";
import { localizeProject } from "../i18n/projectCh";

// ─── Phone Demo Modal ─────────────────────────────────────────

function PhoneModal({ url, onClose }) {
  const { t } = useLanguage();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="mb-4 text-white/60 hover:text-white text-sm transition-colors"
        >
          ✕ {t(UI_COPY.project.closeDemo)}
        </button>
        <div
          className="relative bg-zinc-900 rounded-[40px]
          w-[310px] h-[620px]
          sm:w-[320px] sm:h-[640px]
          md:w-[390px] md:h-[760px]
          border-[8px] border-zinc-800
          shadow-[0_0_0_2px_#3f3f46,0_40px_80px_rgba(0,0,0,0.6)]"
        >
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2 bg-zinc-800 rounded-full z-10"
            style={{ width: "120px", height: "34px" }}
          />
          <iframe
            src={url}
            title="demo"
            className="w-full h-full rounded-[32px]"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}

function DesktopModal({ url, onClose }) {
  const { t } = useLanguage();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1440px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-sm transition-colors"
          >
            ✕ {t(UI_COPY.project.closeDemo)}
          </button>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            {t(UI_COPY.project.openInNewTab)}
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
          <iframe
            src={url}
            title="demo"
            className="h-[78vh] min-h-[620px] w-full"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────

function HeroSection({ project }) {
  const { t } = useLanguage();
  const [showDemo, setShowDemo] = useState(false);
  useScrollLock(showDemo);
  const isDesktopDemo = project.demoMode === "desktop";

  return (
    <>
      {showDemo && isDesktopDemo && (
        <DesktopModal
          url={project.demoUrl}
          onClose={() => setShowDemo(false)}
        />
      )}
      {showDemo && !isDesktopDemo && (
        <PhoneModal url={project.demoUrl} onClose={() => setShowDemo(false)} />
      )}

      <div className="px-6 pt-24 pb-8 mx-auto max-w-[1200px] grid items-center gap-16 relative overflow-hidden lg:grid-cols-2 lg:px-12">
        <div className="pt-5 lg:pt-0">
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="accent-pill">
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="mb-3"
            style={{
              fontSize: "clamp(3rem, 6vw, 5rem)",
              lineHeight: 1.25,
              color: "var(--accent-text)",
            }}
          >
            {project.name}
          </h1>

          <p
            className="mb-4"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              color: "var(--accent)",
              fontWeight: 300,
            }}
          >
            {project.tagline}
          </p>

          <p className="text-muted leading-relaxed mb-12">{project.desc}</p>

          {project.demoUrl &&
            (isDesktopDemo || project.demoMobile ? (
              <button onClick={() => setShowDemo(true)} className="btn-accent">
                {t(UI_COPY.project.tryDemo)}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            ) : (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-accent"
              >
                {t(UI_COPY.project.tryDemo)}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            ))}

          <div className="flex gap-8 mt-12">
            {Object.entries(project.meta).map(([key, val]) => (
              <div key={key}>
                <small className="block key-title mb-1">
                  {t(UI_COPY.project.meta[key] ?? { en: key, zh: key })}
                </small>
                <span className="font-light">{val}</span>
              </div>
            ))}
          </div>
        </div>

        <img
          src={`/projects/${project.id}/hero-mockup.png`}
          alt={`${project.name} mockup`}
          className="w-full object-contain drop-shadow-2xl rounded-2xl"
        />
      </div>
    </>
  );
}

// ─── Story (new: for projects with a `story` array) ───────────

function StorySection({ project }) {
  if (!project.story?.length) return null;

  return (
    <section className="px-6 lg:px-12 mx-auto max-w-[1200px] pt-16 pb-4">
      {project.story.map((beat, i) => (
        <div
          key={beat.label}
          className="grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-16 py-12"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Left: label + number */}
          <div className="flex lg:flex-col items-baseline lg:items-start gap-3 lg:gap-2 pt-1">
            <span
              className="tabular-nums"
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "var(--accent)",
                textTransform: "uppercase",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent-text)",
                opacity: 0.35,
              }}
            >
              {beat.label}
            </span>
          </div>

          {/* Right: heading + body */}
          <div>
            <h3
              className="font-medium mb-4 leading-snug"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.375rem)",
                color: "var(--accent-text)",
              }}
            >
              {beat.heading}
            </h3>
            <p
              className="leading-relaxed"
              style={{
                fontSize: "0.9375rem",
                color: "var(--accent-text)",
                opacity: 0.6,
                maxWidth: "64ch",
              }}
            >
              {beat.body}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

// ─── Product lens ─────────────────────────────────────────────

function ProductLensSection({ project }) {
  const { t } = useLanguage();
  if (!project.productLens?.length) return null;

  return (
    <section className="px-6 lg:px-12 mx-auto max-w-[1200px] pt-12 pb-8">
      <p className="key-title">{t(UI_COPY.project.productLens)}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {project.productLens.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border p-5"
            style={{
              borderColor:
                "color-mix(in srgb, var(--accent-text) 10%, transparent)",
              background:
                "color-mix(in srgb, var(--accent-text) 4%, transparent)",
            }}
          >
            <p
              className="text-xs uppercase mb-3"
              style={{
                color: "var(--accent)",
                letterSpacing: "0.1em",
              }}
            >
              {item.label}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "var(--accent-text)",
                opacity: 0.62,
              }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Legacy sections (kept for older projects) ────────────────

function OverviewSection({ project }) {
  const { t } = useLanguage();
  if (project.story?.length) return null; // replaced by StorySection
  return (
    <section className="px-6 pt-12 pb-8 max-w-[1200px] flex gap-6 lg:px-12 mx-auto">
      <div className="flex-1">
        <p className="key-title">{t(UI_COPY.project.problem)}</p>
        <h2
          className="text-xl font-medium leading-snug mb-5"
          style={{ color: "var(--accent-text)" }}
        >
          {project.overview.problemSummary ??
            project.overview.problem.split(/[.?!]/)[0] + "."}
        </h2>
        <p
          className="text-base font-light leading-relaxed opacity-60"
          style={{ color: "var(--accent-text)" }}
        >
          {project.overview.problem}
        </p>
      </div>
      <div className="flex-1">
        <p className="key-title">{t(UI_COPY.project.solution)}</p>
        <h2
          className="text-xl font-medium leading-snug mb-5"
          style={{ color: "var(--accent-text)" }}
        >
          {project.overview.solutionSummary ??
            project.overview.solution.split(/[.?!]/)[0] + "."}
        </h2>
        <p
          className="text-base font-light leading-relaxed opacity-60"
          style={{ color: "var(--accent-text)" }}
        >
          {project.overview.solution}
        </p>
      </div>
    </section>
  );
}

function InspirationSection({ project }) {
  const { t } = useLanguage();
  if (project.story?.length || !project.inspiration) return null;
  return (
    <div className="px-6 pt-12 pb-8 max-w-[1200px] mx-auto lg:px-12">
      <p className="key-title">{t(UI_COPY.project.inspiration)}</p>
      <blockquote
        className="text-2xl leading-relaxed pl-6 lg:text-4xl lg:leading-relaxed"
        style={{
          borderLeft: "2px solid var(--accent)",
          color: "var(--accent-text)",
          fontWeight: 300,
        }}
      >
        {project.inspiration}
      </blockquote>
    </div>
  );
}

function ProcessSection({ project }) {
  const { t } = useLanguage();
  if (project.story?.length || !project.process?.length) return null;
  return (
    <section className="px-6 pt-12 pb-8 max-w-[1200px] gap-6 lg:px-12 mx-auto">
      <p className="key-title">{t(UI_COPY.project.process)}</p>
      <div className="grid md:grid-cols-3 gap-10">
        {project.process.map((step) => (
          <div key={step.num}>
            <p
              className="text-xs font-medium tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              {step.num}
            </p>
            <h3
              className="text-base font-medium mb-2"
              style={{ color: "var(--accent-text)" }}
            >
              {step.title}
            </h3>
            <p
              className="text-sm font-light leading-relaxed opacity-60"
              style={{ color: "var(--accent-text)" }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function UserFlowSection({ project }) {
  const { t } = useLanguage();
  if (!project.screenCount) return null;
  return (
    <section className="px-6 lg:px-12 py-24 max-w-[1200px] mx-auto space-y-8">
      <p className="key-title">{t(UI_COPY.project.screens)}</p>
      <div className="flex gap-4 overflow-x-auto">
        {Array.from({ length: project.screenCount }, (_, i) => {
          const pageNum = String(i + 1).padStart(2, "0");
          return (
            <img
              key={pageNum}
              src={`/projects/${project.id}/screen/${pageNum}.png`}
              alt={`${project.name} screen ${pageNum}`}
              className="w-full max-w-48 rounded-2xl mb-4"
            />
          );
        })}
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────

export default function ProjectDetail() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const baseProject = getProject(id);
  const project = baseProject ? localizeProject(baseProject, language) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted text-lg">{t(UI_COPY.project.notFound)}</p>
        <Link to="/" className="underline text-sm">
          ← {t(UI_COPY.project.backHome)}
        </Link>
      </main>
    );
  }

  return (
    <div
      className={project.theme}
      style={{
        background: "var(--project-bg)",
        color: "var(--accent-text)",
      }}
    >
      <HeroSection project={project} />

      {/* New story format — shown when project has a `story` array */}
      <StorySection project={project} />

      {/* Legacy format — shown only when project has no `story` */}
      <OverviewSection project={project} />
      <ProductLensSection project={project} />
      <InspirationSection project={project} />
      <ProcessSection project={project} />

      {/* Screens — shown for both formats if screenCount > 0 */}
      <UserFlowSection project={project} />

      <NextProject currentId={id} />
    </div>
  );
}

// ─── Next project nav ──────────────────────────────────────────

function NextProject({ currentId }) {
  const { t } = useLanguage();
  const idx = projects.findIndex((p) => p.id === currentId);
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <div
      className="border-t px-6 lg:px-12 py-2 flex justify-between items-center"
      style={{ borderColor: "rgba(250,250,250,0.07)" }}
    >
      <Link to="/" className="text-sm flex items-center gap-2 group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:-translate-x-1 transition-transform"
        >
          <path d="M6 8L2 12L6 16" />
          <path d="M2 12H22" />
        </svg>
        <span className="text-sm inline">{t(UI_COPY.project.back)}</span>
      </Link>
      {next && (
        <Link
          to={`/projects/${next.id}`}
          className="text-sm flex items-center gap-2 group"
        >
          <span className="text-sm inline">
            {t(UI_COPY.project.nextProject)}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </Link>
      )}
    </div>
  );
}
