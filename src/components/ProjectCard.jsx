import { Link } from "react-router-dom";
import { useState } from "react";

/**
 * ProjectCard — full-viewport or half-viewport card.
 *
 * variant="full"  → 100vh  (featured / first project)
 * variant="half"  → 50vh   (paired projects)
 *
 * On hover (desktop): dark overlay + content fades in at center.
 * On touch (mobile):  gradient strip always visible at bottom.
 */
export default function ProjectCard({ project, variant = "full" }) {
  const [hovered, setHovered] = useState(false);
  const cardHeight = variant === "half" ? "50vh" : "100vh";

  return (
    <Link
      to={`/projects/${project.id}`}
      className="relative block overflow-hidden cursor-pointer"
      style={{ height: cardHeight }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <img
        src={`/projects/${project.id}/hero-mockup.png`}
        alt={project.name}
        className={project.theme}
        style={{
          filter: hovered ? "brightness(0.22)" : "brightness(1)",
          transition: "filter 0.5s ease",
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
          background: "var(--project-mainbg)",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-ink/65 backdrop-blur-sm z-10 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Hover content — centered */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 pointer-events-none text-center"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.45s ease 0.08s, transform 0.45s ease 0.08s",
        }}
      >
        <img
          src={`/projects/${project.id}/logo.png`}
          alt={`${project.name} logo`}
          className="mb-5 rounded-xl"
          style={{ width: variant === "half" ? 40 : 56 }}
        />
        <p
          className="text-chalk font-medium mb-2"
          style={{ fontSize: variant === "half" ? "1.25rem" : "1.75rem" }}
        >
          {project.name}
        </p>
        <p
          className="text-chalk/55 leading-relaxed"
          style={{
            fontSize: variant === "half" ? "0.85rem" : "1.05rem",
            maxWidth: "32ch",
          }}
        >
          {project.desc}
        </p>
      </div>

      {/* Touch fallback — always visible on mobile */}
      <div className="absolute bottom-0 left-0 right-0 z-20 text-center px-8 pb-8 pt-20 bg-gradient-to-t from-ink/80 to-transparent xl:hidden">
        <img
          src={`/projects/${project.id}/logo.png`}
          alt={`${project.name} logo`}
          className="w-10 mx-auto mb-3 rounded-md"
        />
        <p className="text-chalk text-base font-medium mb-2">{project.name}</p>
        <p className="text-chalk/60 text-sm leading-relaxed truncate max-w-md text-center mr-auto ml-auto">
          {project.desc}
        </p>
      </div>
    </Link>
  );
}
