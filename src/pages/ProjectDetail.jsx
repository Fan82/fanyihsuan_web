import { useParams, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { getProject } from "../data/projects";

// ─── Sub-sections ────────────────────────────────────────────

function HeroSection({ project }) {
  return (
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

        {project.demoUrl && (
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
        )}

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
        src={`./public/projects/${project.id}/hero-mockup.png`}
        alt={`${project.name} mockup`}
        className="w-full object-contain drop-shadow-2xl rounded-2xl"
      />
    </div>
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

// function UsingMockup({ project }) {
//   return (
//     <section className="px-6 lg:px-12 py-24 max-w-[1200px] mx-auto">
//       <img
//         src={`./public/projects/${project.id}/using-mockup.png`}
//         alt={`${project.name} in use`}
//         className="w-full rounded-2xl object-cover"
//         style={{ maxHeight: "620px", objectPosition: "center 50%" }}
//       />
//     </section>
//   );
// }

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
        {Array.from({ length: 10 }, (_, i) => {
          // 將索引 (0-9) 轉為字串並補零 (01, 02...10)
          const pageNum = String(i + 1).padStart(2, "0");

          return (
            <img
              key={pageNum}
              src={`./public/projects/${project.id}/screen/${pageNum}.png`}
              alt={`${project.name} screen ${pageNum}`}
              className="w-full max-w-48 rounded-2xl mb-4" // 加上 mb-4 讓圖片之間有間距
            />
          );
        })}
      </div>
    </section>
  );
}

// function VideoSection({ project }) {
//   return (
//     <section className="px-6 lg:px-12 py-20 max-w-[1200px] mx-auto">
//       <div
//         className="w-full rounded-2xl overflow-hidden flex items-center justify-center py-16 px-8"
//         style={{ background: "rgba(255,255,255,0.04)" }}
//       >
//         <video
//           src={`./public/projects/${project.id}/MP4.mp4`}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="rounded-3xl shadow-2xl"
//           style={{ maxHeight: "70vh", width: "auto" }}
//         />
//       </div>
//     </section>
//   );
// }

// ─── Page ────────────────────────────────────────────────────

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);
  const pageRef = useRef(null);

  // Apply the project theme + bg colour to the page wrapper
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
      {/* <UsingMockup project={project} /> */}
      <ProcessSection project={project} />
      <UserFlowSection project={project} />
      {/* <VideoSection project={project} /> */}

      {/* Bottom nav — next project */}
      <NextProject currentId={id} />
    </div>
  );
}

// ─── Next project nav ────────────────────────────────────────

import { projects } from "../data/projects";

function NextProject({ currentId }) {
  const idx = projects.findIndex((p) => p.id === currentId);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div
      className="border-t px-6 lg:px-12 py-2 flex justify-between items-center"
      style={{ borderColor: "rgba(250,250,250,0.07)" }}
    >
      {/* ← Back link */}
      <Link to="/" className="text-sm group">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline mr-2 scale-x-[-1] group-hover:-translate-x-1 transition-transform"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
        <span className="text-sm inline">Back</span>
      </Link>
      <Link to={`./${next.id}`} className="text-sm group">
        <span className="text-sm inline">Next project</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline ml-2 group-hover:translate-x-1 transition-transform"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </Link>
    </div>
  );
}
