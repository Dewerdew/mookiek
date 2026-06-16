"use client";

import { useEffect, useRef } from "react";

/**
 * SectionWrapper — Reusable container for each page section.
 * Adds consistent padding, max-width, and a fade-in-up animation
 * triggered by Intersection Observer when the section scrolls into view.
 */
export default function SectionWrapper({ id, children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el); // animate only once
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`fade-section mx-auto w-full max-w-6xl px-5 py-16 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}
