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
import GraphicsTechStack from './components/GraphicsTechStack'


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
      const sections = ['home', 'about', 'education', 'skills', 'work-experience', 'projects', 'certificates', 'contact']
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
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Subtle background tint only */}
      <div className="fixed inset-0 bg-slate-100/50 dark:bg-zinc-900/50 pointer-events-none" aria-hidden="true" />

      {/* Social Media Bar */}
      <SocialMediaBar />
      {/* Navigation */}
      <Navbar />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <EducationSection />
      <GraphicsTechStack />
      <WorkExperience />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
