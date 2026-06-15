import SectionWrapper from "./SectionWrapper";
import SkillCategory from "./SkillCategory";
import { skillCategories } from "@/data/portfolio";

/**
 * Skills — Grouped into 3 categories.
 * Kept visually secondary to the Projects section (smaller heading, lighter styling).
 */
export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-accent-soft/10">
      <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
        Skills & Tools
      </h2>
      <p className="mt-2 text-sm text-muted">
        Core capabilities grouped by area of focus.
      </p>

      {/* 3-column grid on desktop, stacked on mobile */}
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
