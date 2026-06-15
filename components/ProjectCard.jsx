/**
 * ProjectCard — Displays a single project as a structured case study.
 * Shows: title, role, tags, key metrics, and the 4-part story
 * (Problem → Analysis → Recommendation → Outcome).
 */
export default function ProjectCard({ project, index }) {
  // Labels for each story section
  const storySections = [
    { key: "problem", label: "Problem", color: "text-red-600" },
    { key: "analysis", label: "Analysis", color: "text-blue-600" },
    { key: "recommendation", label: "Recommendation", color: "text-amber-600" },
    { key: "outcome", label: "Outcome", color: "text-green-600" },
  ];

  return (
    <article className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md md:p-8">
      {/* Header row: number + title + role */}
      <div className="mb-4">
        <span className="text-xs font-bold tracking-widest text-accent">
          CASE {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-1 font-heading text-xl font-bold text-foreground md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.role}</p>
      </div>

      {/* Tags */}
      <div className="mb-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent/20 bg-accent-soft/50 px-3 py-1 text-xs font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Key metrics row */}
      <div className="mb-6 grid grid-cols-3 gap-3 rounded-xl bg-accent-soft/30 p-4">
        {project.metrics.map((m, i) => (
          <div key={i} className="text-center">
            <div className="text-lg font-bold text-accent">{m.value}</div>
            <div className="mt-0.5 text-xs text-muted">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Story: Problem → Analysis → Recommendation → Outcome */}
      <div className="space-y-4">
        {storySections.map((section) => (
          <div key={section.key}>
            <h4 className={`mb-1 text-sm font-bold ${section.color}`}>
              {section.label}
            </h4>
            <p className="text-sm leading-relaxed text-foreground/80">
              {project[section.key]}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
