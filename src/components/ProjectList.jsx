import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { UI_COPY, useLanguage } from "../i18n/LanguageContext";
import { localizeProject } from "../i18n/projectCh";

export default function ProjectList() {
  const { language, t } = useLanguage();
  const localizedProjects = projects.map((project) =>
    localizeProject(project, language),
  );
  const [first, ...rest] = localizedProjects;

  const pairs = [];
  for (let i = 0; i < rest.length; i += 2) {
    pairs.push(rest.slice(i, i + 2));
  }

  return (
    <section id="projects">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-24 bg-chalk text-ink">
        <h2 className="text-6xl mb-6 leading-snug">
          {t(UI_COPY.home.focusHeading)}
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-ink/60">
          {t(UI_COPY.home.focusBody)}
        </p>
      </div>

      <ProjectCard project={first} variant="full" />
      {pairs.map((pair, i) => (
        <div key={i} className="flex flex-col md:flex-row">
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
