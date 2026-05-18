import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectList() {
  const [first, ...rest] = projects;

  const pairs = [];
  for (let i = 0; i < rest.length; i += 2) {
    pairs.push(rest.slice(i, i + 2));
  }

  return (
    <section id="projects">
      <ProjectCard project={first} variant="full" />
      {pairs.map((pair, i) => (
        <div key={i} className="flex">
          {pair.map((p) => (
            <div key={p.id} className="flex-1 min-w-0">
              <ProjectCard project={p} variant="half" />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
