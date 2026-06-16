"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { aboutMe, aboutSkills, personalInfo } from "@/data/portfolio";

/**
 * CircularProgress — SVG-based circular progress bar with animation.
 */
function CircularProgress({ percentage, name, isVisible }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      {/* SVG Circle */}
      <div className="relative h-24 w-24 md:h-28 md:w-28">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-border"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? offset : circumference}
            className="transition-all duration-[1500ms] ease-out"
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
        </svg>
        {/* Percentage text in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-accent md:text-xl">
            {percentage}%
          </span>
        </div>
      </div>
      {/* Skill name */}
      <span className="text-xs font-medium text-muted md:text-sm">{name}</span>
    </div>
  );
}

/**
 * AboutMe — Dark themed About section.
 * Left: profile photo (black & white style)
 * Right: bio text with Download CV button
 * Bottom: circular progress bars for skills
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
      { threshold: 0.3 }
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

      {/* Bottom — Circular Progress Skills */}
      <div
        ref={skillsRef}
        className="mt-16 rounded-2xl border border-border bg-card/50 p-8 md:p-12"
      >
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {aboutSkills.map((skill, index) => (
            <CircularProgress
              key={index}
              percentage={skill.percentage}
              name={skill.name}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
