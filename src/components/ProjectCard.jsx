import { Link } from "react-router-dom";
import { useRef, useState } from "react";

/**
 * ProjectCard — appears in the homepage project grid.
 *
 * On hover (desktop): dark overlay fades in, title + description slide up.
 * On touch (mobile):  overlay is always visible at 20% height.
 */
export default function ProjectCard({ project, variant = "full" }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link
      to={`/projects/${project.id}`}
      className="relative block overflow-hidden bg-white cursor-pointer"
      style={{ height: variant === "full" ? "100vh" : "100vh" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background image */}
      <img
        src={`/projects/${project.id}/hero-mockup.png`}
        alt={project.name}
        className={project.theme}
        style={{
          filter: hovered ? "brightness(0.25)" : "brightness(1)",
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

      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm z-10 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Content */}
      <div
        className="absolute left-0 right-0 z-20 text-center px-4 pointer-events-none"
        style={{
          bottom: hovered ? "25%" : "0",
          transform: hovered ? "translateY(-50%)" : "translateY(100%)",
          opacity: hovered ? 1 : 0,
          transition: "all 0.5s ease 0.1s",
        }}
      >
        <img
          src={`/projects/${project.id}/logo.png`}
          alt={`${project.name} logo`}
          className="w-16 mx-auto mb-4 rounded-xl"
        />
        <p className="text-chalk text-2xl font-medium mb-2">{project.name}</p>
        <p
          className="text-chalk/50 text-xl mx-auto leading-relaxed"
          style={{ maxWidth: "40%" }}
        >
          {project.desc}
        </p>
      </div>

      {/* Touch fallback — always visible on mobile */}
      <div className="absolute bottom-0 left-0 right-0 z-20 text-center p-10 bg-gradient-to-t from-ink/80 to-transparent xl:hidden">
        <img
          src={`/projects/${project.id}/logo.png`}
          alt={`${project.name} logo`}
          className="w-10 mx-auto mb-4 rounded-md"
        />
        <p className="text-chalk text-lg mb-6">{project.name}</p>
        <p className="text-chalk text-sm">{project.desc}</p>
      </div>
    </Link>
  );
}
