"use client";

import { Users } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { services, servicesSection } from "@/data/portfolio";

/**
 * Services — Dark themed 3-column grid of service cards.
 * Each card has a subtle glow on hover with purple accent.
 */
export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-background-secondary">
      {/* Section heading */}
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          {servicesSection.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
          {servicesSection.subtitle}
        </p>
      </div>

      {/* Service cards grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="card-glow group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/40 hover:bg-card-hover hover:shadow-xl hover:shadow-accent/5"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/20">
              <Users size={28} />
            </div>

            {/* Title */}
            <h3 className="mb-3 font-heading text-lg font-bold text-foreground">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
