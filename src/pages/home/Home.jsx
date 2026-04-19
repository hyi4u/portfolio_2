import CTAFooter from "../../components/CTAFooter";
import Navbar from "../../components/Navbar";
import useScrollReveal from "../../hooks/useScrollReveal";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import LogoCloud from "./LogoCloud";
import ProjectsGrid from "./ProjectsGrid";
import StatusBar from "./StatusBar";
import TechStack from "./TechStack";
import Testimonials from "./Testimonials";

const Home = () => {
      useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatusBar />
      <LogoCloud />
      <div className="fade-up">
        <AboutSection />
      </div>
      <div className="fade-up">
        <TechStack />
      </div>
      <div className="fade-up">
        <ProjectsGrid />
      </div>
      <div className="fade-up">
        <Testimonials />
      </div>
      <div className="fade-up">
        <CTAFooter />
      </div>
    </div>
  );
};

export default Home;
