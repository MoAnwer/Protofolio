import Header from "@/components/Header";
import ModernHero from "@/components/ModernHero";
import ModernAbout from "@/components/ModernAbout";
import FuturisticSkills from "@/components/FuturisticSkills";
import FuturisticExperience from "@/components/FuturisticExperience";
import FilterableProjects from "@/components/FilterableProjects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <ModernHero />
        <ModernAbout />
        <FuturisticSkills />
        <FuturisticExperience />
        <FilterableProjects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
