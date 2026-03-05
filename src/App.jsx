import { useState, useEffect } from 'react';
import './App.css';
import { SECTION_IDS } from './constants/sections';
import Navbar from './components/Navbar';
import SocialMediaBar from './components/SocialMediaBar';
import GraphicsTechStack from './components/GraphicsTechStack';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import WorkExperience from './pages/WorkExperience';
import ProjectsSection from './pages/ProjectsSection';
import CertificatesSection from './pages/CertificatesSection';
import ContactSection from './pages/ContactSection';
import Footer from './pages/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const sectionId of SECTION_IDS) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen min-h-[100dvh] w-full max-w-[100vw] overflow-x-hidden bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <SocialMediaBar />
      <Navbar />
      {/* Sections in order: Home → About → Skills → Work → Projects → Certificates → Contact */}
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <GraphicsTechStack />
      <WorkExperience />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
