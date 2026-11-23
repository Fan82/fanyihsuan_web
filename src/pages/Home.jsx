import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigationType,
} from "react-router-dom";
import Work from "../components/Work";
import WorkIndex from "../components/WorkIndex";
import { projects } from "../data/projects";
import { UI_COPY, useLanguage } from "../i18n/LanguageContext";
import { localizeProject } from "../i18n/projectCh";

export default function Home() {
  const { language, t } = useLanguage();
  const location = useLocation();
  const navigationType = useNavigationType();
  const navigate = useNavigate();
  const mounted = useRef(false);

  const work = useMemo(
    () => projects.map((project) => localizeProject(project, language)),
    [language],
  );
  const indexItems = useMemo(
    () => work.map(({ id, name }) => ({ id, name })),
    [work],
  );

  // Before following any same-site link (case study, About, a Work dot…),
  // remember the scroll position on this history entry so Back resumes here.
  useEffect(() => {
    const onClick = (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const link = e.target.closest?.("a[href]");
      if (!link || (link.target && link.target !== "_self")) return;
      if (new URL(link.href).origin !== window.location.origin) return;
      window.history.replaceState(
        { ...window.history.state, workScroll: window.scrollY },
        "",
      );
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Scroll handling (browser restoration is off, see main.jsx):
  //   Back/Forward → saved position
  //   Same-page #fragment click → left to the browser's smooth scroll
  //   First load → the #section, else top
  //   Link to /#section → that section; link to / → top
  useLayoutEffect(() => {
    const firstRun = !mounted.current;
    mounted.current = true;

    // Legacy link: /?scroll=projects → /#work
    if (new URLSearchParams(location.search).get("scroll") === "projects") {
      navigate({ pathname: "/", hash: "#work" }, { replace: true });
      return;
    }

    if (navigationType === "POP") {
      const saved = window.history.state?.workScroll;
      if (typeof saved === "number") {
        window.scrollTo({ top: saved, behavior: "instant" });
        return;
      }
      // A plain #fragment click (Work dots, View projects): the browser is
      // already smooth-scrolling there, so don't interrupt it.
      if (!firstRun) return;
    }

    const behavior =
      !firstRun && navigationType === "PUSH" ? "smooth" : "instant";
    const id = decodeURIComponent(location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;
    if (target) {
      target.scrollIntoView({ behavior, block: "start" });
    } else if (navigationType !== "REPLACE") {
      window.scrollTo({ top: 0, behavior });
    }
    // Depend on the location object: native #fragment entries all share the
    // key "default", so location.key alone would miss back/forward between them.
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main>
      <header className="home-hero">
        <div className="home-hero__inner">
          <p className="home-hero__eyebrow">{t(UI_COPY.home.eyebrow)}</p>
          <h1 className="home-hero__name">Fan YiHsuan</h1>
          <p className="home-hero__role">{t(UI_COPY.home.role)}</p>
          <p className="home-hero__intro">{t(UI_COPY.home.intro)}</p>
          <div className="home-hero__actions">
            <a href="#work" className="c-btn c-btn--primary">
              {t(UI_COPY.home.viewProjects)}
            </a>
            <Link to="/about" className="c-btn c-btn--ghost">
              {t(UI_COPY.nav.about)}
            </Link>
          </div>
        </div>
      </header>

      <Work projects={work} />
      <WorkIndex items={indexItems} label={t(UI_COPY.home.indexLabel)} />
    </main>
  );
}
