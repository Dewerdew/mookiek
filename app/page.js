import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import SelectedProjects from "@/components/SelectedProjects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

/**
 * Home page — Single-page portfolio layout.
 * Sections: Hero → Credibility Strip → Projects → Skills → Contact
 */
export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <SelectedProjects />
      <Skills />
      <Contact />
    </>
  );
}
