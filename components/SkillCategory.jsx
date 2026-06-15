/**
 * SkillCategory — A single column showing a category title and skill list.
 * Reusable — rendered once per category by the Skills section.
 */
export default function SkillCategory({ title, skills }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold tracking-wide text-accent uppercase">
        {title}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground/80 transition-colors hover:border-accent-soft hover:bg-accent-soft/20"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
