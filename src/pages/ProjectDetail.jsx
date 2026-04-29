import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getProject } from "../data/projects";

// ─── Phone Demo Modal ─────────────────────────────────────────

function PhoneModal({ url, onClose }) {
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
          ✕ Close
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

// ─── Sub-sections ────────────────────────────────────────────

function HeroSection({ project }) {
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    if (showDemo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // cleanup：component 卸載時還原
    return () => {
      document.body.style.overflow = "";
    };
  }, [showDemo]);

  return (
    <>
      {showDemo && (
        <PhoneModal url={project.demoUrl} onClose={() => setShowDemo(false)} />
      )}

      <div className="px-6 pt-24 pb-8 mx-auto max-w-[1200px] grid items-center gap-16 relative overflow-hidden lg:grid-cols-2 lg:px-12">
        {/* Left: copy */}
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
            className="font-serif italic mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--accent)",
            }}
          >
            {project.tagline}
          </p>

          <p className="text-muted leading-relaxed mb-12">{project.desc}</p>

          {project.demoUrl &&
            (project.demoMobile ? (
              // 手機 app — 彈出手機框架
              <button onClick={() => setShowDemo(true)} className="btn-accent">
                Try the demo
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
              // 其他專案 — 直接開新分頁
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-accent"
              >
                Try the demo
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

          {/* Meta row */}
          <div className="flex gap-8 mt-12">
            {Object.entries(project.meta).map(([key, val]) => (
              <div key={key}>
                <small className="block key-title mb-1">{key}</small>
                <span className="font-light">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: hero image */}
        <img
          src={`/projects/${project.id}/hero-mockup.png`}
          alt={`${project.name} mockup`}
          className="w-full object-contain drop-shadow-2xl rounded-2xl"
        />
      </div>
    </>
  );
}

function OverviewSection({ project }) {
  return (
    <section className="px-6 pt-12 pb-8 max-w-[1200px] flex gap-6 lg:px-12 mx-auto">
      <div className="flex-1">
        <p className="key-title">PROBLEM</p>
        <h2
          className="text-xl font-medium leading-snug mb-5"
          style={{ color: "var(--accent-text)" }}
        >
          {project.overview.problem.split(".")[0]}.
        </h2>
        <p
          className="text-base font-light leading-relaxed opacity-60"
          style={{ color: "var(--accent-text)" }}
        >
          {project.overview.problem}
        </p>
      </div>
      <div className="flex-1">
        <p className="key-title">SOLUTION</p>
        <h2
          className="text-xl font-medium leading-snug mb-5"
          style={{ color: "var(--accent-text)" }}
        >
          {project.overview.solution.split(".")[0]}.
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
  return (
    <div className="px-6 pt-12 pb-8 max-w-[1200px] mx-auto lg:px-12">
      <p className="key-title">INSPIRATION</p>
      <blockquote
        className="font-serif italic text-2xl leading-relaxed pl-6 lg:text-4xl lg:leading-relaxed"
        style={{
          borderLeft: `2px solid var(--accent)`,
          color: "var(--accent-text)",
        }}
      >
        {project.inspiration}
      </blockquote>
    </div>
  );
}

function ProcessSection({ project }) {
  return (
    <section className="px-6 pt-12 pb-8 max-w-[1200px] gap-6 lg:px-12 mx-auto">
      <p className="key-title">PROCESS</p>
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
  return (
    <section className="px-6 lg:px-12 py-24 max-w-[1200px] mx-auto space-y-8">
      <p className="key-title">Screens</p>
      <div className="flex gap-4 overflow-x-auto">
        {Array.from({ length: project.screenCount ?? 0 }, (_, i) => {
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

// ─── Page ────────────────────────────────────────────────────

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted text-lg">Project not found.</p>
        <Link to="/" className="underline text-sm">
          ← Back home
        </Link>
      </main>
    );
  }

  return (
    <div
      ref={pageRef}
      className={project.theme}
      style={{
        background: "var(--project-bg)",
        color: "var(--accent-text)",
      }}
    >
      <HeroSection project={project} />
      <OverviewSection project={project} />
      <InspirationSection project={project} />
      <ProcessSection project={project} />
      <UserFlowSection project={project} />
      <NextProject currentId={id} />
    </div>
  );
}

// ─── Next project nav ────────────────────────────────────────

import { projects } from "../data/projects";

function NextProject({ currentId }) {
  const idx = projects.findIndex((p) => p.id === currentId);
  const isLast = idx === projects.length - 1;
  const next = !isLast ? projects[idx + 1] : null;

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
        <span className="text-sm inline">Back</span>
      </Link>
      {next && (
        <Link
          to={`/projects/${next.id}`}
          className="text-sm flex items-center gap-2 group"
        >
          <span className="text-sm inline">Next project</span>
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
