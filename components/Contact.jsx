import { Mail, Linkedin, Download } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { socialLinks } from "@/data/portfolio";

/**
 * Contact — Simple recruiter-friendly contact block.
 * No form in v1 — just email, LinkedIn, and resume download.
 */
export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Let&apos;s Connect
        </h2>
        <p className="mt-3 text-base text-muted">
          Open to marketing operations and analyst roles — feel free to reach out.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* Email */}
          <a
            href={`mailto:${socialLinks.email}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/15 bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-accent hover:text-accent hover:shadow-md sm:w-auto"
          >
            <Mail size={16} />
            Email Me
          </a>

          {/* LinkedIn */}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/15 bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-accent hover:text-accent hover:shadow-md sm:w-auto"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

          {/* Download Resume */}
          <a
            href={socialLinks.resumeUrl}
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent/90 hover:shadow-lg sm:w-auto"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
