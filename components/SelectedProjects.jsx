import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects, portfolioSection } from "@/data/portfolio";

/**
 * SelectedProjects — Dark themed portfolio section.
 * Renders all projects from the data file as structured case-study cards.
 */
export default function SelectedProjects() {
  return (
    <SectionWrapper id="portfolio" className="bg-background-secondary">
      {/* Section heading */}
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          {portfolioSection.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
          {portfolioSection.subtitle}
        </p>
      </div>

      {/* Project cards */}
      <div className="mt-12 grid gap-8 lg:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
