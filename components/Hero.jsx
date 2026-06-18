"use client";

import { useEffect, useRef } from "react";
import { Download, Github, Instagram, Linkedin } from "lucide-react";
import { personalInfo, heroStats, socialLinks } from "@/data/portfolio";
import AnimatedMetric from "./AnimatedMetric";

/**
 * Hero — Dark themed 2-column hero section.
 * Left: greeting, name, role, social icons, CTAs, stats
 * Right: profile image in circular frame with glow effect
 */
export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    /* Stagger children animations */
    const children = el.querySelectorAll(".hero-animate");
    children.forEach((child, i) => {
      child.style.animationDelay = `${i * 0.12}s`;
    });
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-5 pt-24 pb-16 md:flex-row md:gap-16 lg:gap-20">
        
        {/* Left column — Text content */}
        <div className="flex-1 text-center md:text-left">
          {/* Greeting */}
          <p className="hero-animate animate-fade-in-up text-sm font-medium tracking-wider text-muted uppercase">
            {personalInfo.greeting}
          </p>

          {/* Name */}
          <h2 className="hero-animate animate-fade-in-up mt-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
            {personalInfo.name}
          </h2>

          {/* Role — Large & prominent */}
          <h1 className="hero-animate animate-fade-in-up mt-3 font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-gradient">{personalInfo.role}</span>
          </h1>

          {/* Social Icons */}
          <div className="hero-animate animate-fade-in-up mt-6 flex items-center justify-center gap-4 md:justify-start">
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted social-icon hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/20"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted social-icon hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/20"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted social-icon hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>

          {/* CTAs */}
          <div className="hero-animate animate-fade-in-up mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <a
              href="#contact"
              className="btn inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light"
            >
              Hire Me
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn inline-flex items-center justify-center gap-2 rounded-lg border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="hero-animate animate-fade-in-up mt-12 flex items-center justify-center gap-8 md:justify-start md:gap-12">
            {heroStats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <AnimatedMetric
                  value={stat.value}
                  className="text-2xl font-bold text-accent tabular-nums md:text-3xl"
                />
                <div className="mt-1 text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — Profile image */}
        <div className="hero-animate animate-fade-in-up flex-shrink-0">
          <div className="animate-float relative">
            {/* Glow behind the image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-3/4 w-3/4 rounded-full bg-accent/20 blur-3xl" />
            
            {/* Profile image container — transparent PNG friendly */}
            <div className="relative h-72 w-72 md:h-[22rem] md:w-[22rem] lg:h-[26rem] lg:w-[26rem]">
              {personalInfo.profileImage ? (
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_0_40px_rgba(168,85,247,0.15)]"
                />
              ) : (
                /* Placeholder when no image is set */
                <div className="flex h-full w-full items-center justify-center rounded-2xl border border-border bg-card/50">
                  <div className="text-center">
                    <div className="text-5xl text-accent/40">👤</div>
                    <p className="mt-2 text-xs text-muted/50">Add your photo</p>
                  </div>
                </div>
              )}
              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 z-20 h-16 bg-gradient-to-t from-background to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
