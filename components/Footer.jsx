import { personalInfo } from "@/data/portfolio";

/**
 * Footer — Dark themed footer with gradient accent line.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-muted sm:flex-row">
        <span>
          © {year} {personalInfo.name} — All rights reserved.
        </span>
        <span className="text-muted/60">
          Designed with ♥
        </span>
      </div>
    </footer>
  );
}
