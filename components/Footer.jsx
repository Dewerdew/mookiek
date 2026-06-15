import { personalInfo } from "@/data/portfolio";

/**
 * Footer — Simple copyright line at the bottom of the page.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted sm:flex-row">
        <span>
          © {year} {personalInfo.name} — Marketing × Data Portfolio
        </span>
        <span>
          Built as a hybrid profile: marketing operations + analysis + communication.
        </span>
      </div>
    </footer>
  );
}
