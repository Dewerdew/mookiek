import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutMe from "@/components/AboutMe";
import SelectedProjects from "@/components/SelectedProjects";
import Contact from "@/components/Contact";

/**
 * Home page — Dark themed single-page portfolio layout.
 * Sections: Hero → Services → About Me → Portfolio → Contact
 */
export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Services />
      <SelectedProjects />
      <Contact />
    </>
  );
}
