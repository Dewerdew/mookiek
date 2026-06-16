/**
 * ProjectCard — Dark themed case study card.
 * Shows: title, role, tags, key metrics, and the 4-part story
 * (Problem → Analysis → Recommendation → Outcome).
 */
export default function ProjectCard({ project, index }) {
  const storySections = [
    { key: "problem", label: "Problem", color: "text-red-400" },
    { key: "analysis", label: "Analysis", color: "text-blue-400" },
    { key: "recommendation", label: "Recommendation", color: "text-amber-400" },
    { key: "outcome", label: "Outcome", color: "text-emerald-400" },
  ];

  return (
    <article className="card-glow group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 md:p-8">
      {/* Header row: number + title + role */}
      <div className="mb-5">
        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold tracking-widest text-accent">
          CASE {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-3 font-heading text-xl font-bold text-foreground md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.role}</p>
      </div>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent-light"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Key metrics row */}
      <div className="mb-8 grid grid-cols-3 gap-4 rounded-xl border border-border bg-background/50 p-5">
        {project.metrics.map((m, i) => (
          <div key={i} className="text-center">
            <div className="text-xl font-bold text-accent md:text-2xl">{m.value}</div>
            <div className="mt-1 text-xs text-muted">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Story: Problem → Analysis → Recommendation → Outcome */}
      <div className="space-y-5">
        {storySections.map((section) => (
          <div key={section.key}>
            <h4 className={`mb-2 flex items-center gap-2 text-sm font-bold ${section.color}`}>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
              {section.label}
            </h4>
            <p className="pl-4 text-sm leading-relaxed text-muted border-l border-border-light">
              {project[section.key]}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
