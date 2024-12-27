import { TimelineDemo } from "@/components/Timeline";
import { AboutSection } from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Contact/>
      <Footer />
    </div>
  );
}
