import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectList() {
  return (
    <section>
      <div className="sticky top-0">
        <div>
          {/* 這裡改用 projects.map */}
          {projects.map((p) => (
            <div
              key={p.id}
              className="flex-shrink-0 h-full"
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                scrollSnapAlign: "start",
              }}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
