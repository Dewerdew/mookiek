"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

/**
 * Header — Dark themed sticky navigation bar.
 * Active section highlighting with purple accent.
 * Includes "Hire Me" CTA button and mobile menu.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Track which section is in view for active link highlighting */
  useEffect(() => {
    const sections = ["hero", "services", "about", "portfolio", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact me", href: "#contact" },
  ];

  const isActive = (href) => {
    const sectionId = href.replace("#", "");
    return activeSection === sectionId;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 nav-header ${scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Brand */}
        <a
          href="#hero"
          className="font-heading text-lg font-bold tracking-wider text-foreground"
        >
          <span className="text-accent">MOOK</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link rounded-lg px-4 py-2 text-sm font-medium ${isActive(link.href)
                  ? "text-accent"
                  : "text-foreground/70 hover:text-foreground"
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hire Me CTA */}
        <a
          href="#contact"
          className="btn hidden rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light md:inline-flex"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="flex flex-col gap-1 bg-[#0a0a0a]/98 backdrop-blur-md px-5 pb-6 shadow-lg md:hidden border-t border-border">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`nav-link rounded-lg px-4 py-3 text-sm font-medium ${isActive(link.href)
                  ? "text-accent bg-accent-soft"
                  : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Hire Me
          </a>
        </nav>
      )}
    </header>
  );
}
