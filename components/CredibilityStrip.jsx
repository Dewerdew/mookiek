import { credibilityHighlights } from "@/data/portfolio";

/**
 * CredibilityStrip — A slim, compact row of proof-point highlights
 * shown directly under the Hero to reinforce expertise at a glance.
 */
export default function CredibilityStrip() {
  return (
    <div className="border-y border-border bg-accent-soft/30">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-4 text-sm text-muted">
        {credibilityHighlights.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            {/* Small dot separator (hidden on first item) */}
            {index > 0 && (
              <span className="hidden h-1 w-1 rounded-full bg-accent/40 sm:block" />
            )}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
