import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import AboutSection from './pages/AboutSection'
import EducationSection from './pages/EducationSection'
import CertificatesSection from './pages/CertificatesSection'
import ProjectsSection from './pages/ProjectsSection'
import ContactSection from './pages/ContactSection'
import Footer from './pages/Footer'
import SocialMediaBar from './components/SocialMediaBar'
import WorkExperience from './pages/WorkExperience'
import InteractiveSkills from './components/InteractiveSkills'
import ProjectShowcase from './components/ProjectShowcase'
import GraphicsTechStack from './components/GraphicsTechStack'
import GraphicsProjectShowcase from './components/GraphicsProjectShowcase'


function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Smooth scrolling for navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'certificates', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-gray-900 dark:via-black dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background overlay - light / dark */}
      <div className="fixed inset-0 bg-slate-200/30 dark:bg-black/50 transition-colors duration-300"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 dark:from-cyan-500/5 dark:via-transparent dark:to-blue-500/5 transition-colors duration-300"></div>
      
      {/* Matrix-style grid overlay (visible in dark mode) */}
      <div className="fixed inset-0 opacity-0 dark:opacity-5 transition-opacity duration-300">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Social Media Bar */}
      <SocialMediaBar />
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />
      {/* Interactive Skills Section */}
      <InteractiveSkills />
      {/* Graphics Tech Stack */}
      <GraphicsTechStack />
      {/* About Section */}
      <AboutSection />
      {/* Education Section */}
      <EducationSection />
      {/* Work Experience Section */}
      <WorkExperience />
      {/* Graphics Project Showcase */}
      <GraphicsProjectShowcase />
      {/* Project Showcase */}
      <ProjectShowcase />
      {/* Certificates Section */}
      <CertificatesSection />
      {/* Projects Section */}
      <ProjectsSection />
      {/* Contact Section */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
