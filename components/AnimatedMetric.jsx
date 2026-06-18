"use client";

import { useEffect, useRef, useState } from "react";

/**
 * AnimatedMetric — Animates a number counting up from 0.
 * Parses the value string to extract:
 *   prefix (e.g. "−"), number (e.g. 20), suffix (e.g. "%")
 * Non-numeric values like "—" render immediately without animation.
 */
export default function AnimatedMetric({ value, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    // Parse: prefix (non-digit chars) + number + suffix (non-digit chars)
    const match = value.match(/^([^\d]*?)(\d+)([^\d]*)$/);
    if (!match) return; // no number found (e.g. "—"), show as-is

    const prefix = match[1];
    const target = parseInt(match[2], 10);
    const suffix = match[3];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.unobserve(el);
          animateCount(prefix, target, suffix);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  function animateCount(prefix, target, suffix) {
    const duration = 1200; // ms
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    // Use easeOutCubic for a premium feel
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const timer = setInterval(() => {
      current++;
      const progress = easeOut(current / steps);
      const num = Math.round(progress * target);

      if (current >= steps) {
        setDisplay(`${prefix}${target}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplay(`${prefix}${num}${suffix}`);
      }
    }, stepTime);
  }

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
