import { ArrowDown, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

/**
 * Hero — The first thing recruiters see.
 * Shows the positioning headline, subtitle, body, and two CTAs.
 */
export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] w-full max-w-5xl flex-col items-start justify-center px-5 pt-28 pb-12 md:pt-36 md:pb-16">
      {/* Small label */}
      <span className="mb-4 inline-block rounded-full border border-accent-soft bg-accent-soft/40 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent">
        Portfolio
      </span>

      {/* Headline */}
      <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {personalInfo.headline}
      </h1>

      {/* Subtitle */}
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
        {personalInfo.subtitle}
      </p>

      {/* Body */}
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80">
        {personalInfo.body}
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        {/* View Projects */}
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent/90 hover:shadow-lg"
        >
          <ArrowDown size={16} />
          View Projects
        </a>

        {/* Download Resume */}
        <a
          href={personalInfo.resumeUrl}
          download
          className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-accent hover:text-accent hover:shadow-md"
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>
    </section>
  );
}
