import { Mail, Linkedin, Download, Send } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { socialLinks, contactSection, personalInfo } from "@/data/portfolio";

/**
 * Contact — Dark themed contact section with action buttons.
 */
export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-2xl text-center">
        {/* Heading */}
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          {contactSection.title}
        </h2>
        <p className="mt-4 text-base text-muted">
          {contactSection.subtitle}
        </p>

        {/* Action buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* Email */}
          <a
            href={`mailto:${socialLinks.email}`}
            className="btn inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm hover:border-accent hover:text-accent sm:w-auto"
          >
            <Mail size={16} />
            Email Me
          </a>

          {/* LinkedIn */}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm hover:border-accent hover:text-accent sm:w-auto"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

          {/* Download Resume */}
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light sm:w-auto"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        {/* Decorative accent line */}
        <div className="mx-auto mt-12 h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>
    </SectionWrapper>
  );
}
