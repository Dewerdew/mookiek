"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

/**
 * Header — Sticky navigation bar.
 * Transparent on top, solid background on scroll.
 * Includes a mobile hamburger menu.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "View Resume", href: personalInfo.resumeUrl, external: true },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        {/* Brand */}
        <a href="#" className="font-heading text-lg font-bold tracking-wide text-foreground">
          {personalInfo.name.toUpperCase()} PORTFOLIO
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent-soft hover:bg-white hover:shadow-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="flex flex-col gap-2 bg-white px-5 pb-4 shadow-md md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
