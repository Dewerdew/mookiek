import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

/**
 * SelectedProjects — The main proof section.
 * Renders all projects from the data file as structured case-study cards.
 */
export default function SelectedProjects() {
  return (
    <SectionWrapper id="projects">
      {/* Section heading */}
      <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
        Data & Operations Projects
      </h2>
      <p className="mt-3 max-w-2xl text-base text-muted">
        Three case studies from my current role, focusing on reward optimization,
        tier design, and using feedback to improve notifications.
      </p>

      {/* Project cards */}
      <div className="mt-10 grid gap-8 lg:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
