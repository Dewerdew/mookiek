"use client";

import { useEffect, useRef, useState } from "react";
import {
  Download,
  BarChart3,
  Sheet,
  ClipboardList,
  Calculator,
  Megaphone,
  Settings,
  ListChecks,
  ShieldCheck,
  Users,
  MessageSquare,
  Globe,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { aboutMe, aboutSkills, personalInfo } from "@/data/portfolio";

/* Map icon name strings from data to actual Lucide components */
const iconMap = {
  BarChart3,
  Sheet,
  ClipboardList,
  Calculator,
  Megaphone,
  Settings,
  ListChecks,
  ShieldCheck,
  Users,
  MessageSquare,
  Globe,
};

/**
 * AboutMe — Dark themed About section.
 * Left: profile photo (black & white style)
 * Right: bio text with Download CV button
 * Bottom: categorized skill cards with icons
 */
export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Split bio into paragraphs */
  const bioParagraphs = aboutMe.bio.split("\n\n");

  return (
    <SectionWrapper id="about">
      {/* Section heading */}
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          {aboutMe.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-muted">
          {aboutMe.subtitle}
        </p>
      </div>

      {/* 2-column layout: photo + bio */}
      <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Left — Profile photo */}
        <div className="flex-shrink-0">
          <div className="relative h-72 w-64 overflow-hidden rounded-2xl border border-border bg-card md:h-96 md:w-80">
            {aboutMe.profileImage ? (
              <img
                src={aboutMe.profileImage}
                alt="About me"
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-card to-background">
                <div className="text-center">
                  <div className="text-5xl text-accent/30">📷</div>
                  <p className="mt-2 text-xs text-muted/50">Add your photo</p>
                </div>
              </div>
            )}
            {/* Accent border decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-light" />
          </div>
        </div>

        {/* Right — Bio text */}
        <div className="flex-1">
          {bioParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className="mb-4 text-sm leading-relaxed text-muted md:text-base"
            >
              {paragraph}
            </p>
          ))}

          {/* Download CV Button */}
          <a
            href={personalInfo.resumeUrl}
            download
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-accent/40 hover:scale-105"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>

      {/* Bottom — Skill Cards by Category */}
      <div ref={skillsRef} className="mt-16 space-y-10">
        {aboutSkills.map((group, groupIndex) => (
          <div key={group.category}>
            {/* Category label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">
                {group.category}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
            </div>

            {/* Skill cards grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.skills.map((skill, skillIndex) => {
                const IconComponent = iconMap[skill.icon] || BarChart3;
                const delay = (groupIndex * 4 + skillIndex) * 0.08;

                return (
                  <div
                    key={skill.name}
                    className={`group rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-accent/40 hover:bg-card-hover hover:shadow-lg hover:shadow-accent/5 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${delay}s` : "0s",
                    }}
                  >
                    {/* Icon */}
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all group-hover:bg-accent/20 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-accent/20">
                      <IconComponent size={20} />
                    </div>

                    {/* Skill name */}
                    <h4 className="mb-1.5 text-sm font-bold text-foreground">
                      {skill.name}
                    </h4>

                    {/* Description */}
                    <p className="text-xs leading-relaxed text-muted/80">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
