import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect para sa sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'education', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const menuItems = [
    { id: 'home', label: 'Home',color: 'from-blue-500 to-cyan-500' },
    { id: 'about', label: 'About Me', color: 'from-purple-500 to-pink-500' },
    { id: 'education', label: 'Education', color: 'from-green-500 to-emerald-500' },
    { id: 'projects', label: 'Projects',  color: 'from-orange-500 to-red-500' },
    { id: 'certificates', label: 'Certificates', color: 'from-yellow-500 to-amber-500' },
    { id: 'contact', label: 'Contact',  color: 'from-indigo-500 to-purple-500' },
    { id: 'Experience', label: 'Work',  color: 'from-teal-500 to-blue-500' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
          ? 'bg-black/80 backdrop-blur-2xl shadow-2xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Minimalist Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => scrollToSection('home')}
          >
              <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-500/20">
                <span className="text-black font-bold text-sm">MF</span>
                </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"
                whileHover={{ scale: 1.2 }}
              />
              </div>
              <div className="flex flex-col">
              <motion.span 
                className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-mono"
                whileHover={{ scale: 1.02 }}
              >
                  Fidelino
              </motion.span>
              <span className="text-xs text-cyan-400 font-medium font-mono">QA Engineer</span>
              </div>
          </motion.div>

          {/* Minimalist Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group font-mono ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 backdrop-blur-sm border border-transparent hover:border-cyan-500/20'
                  }`}
                >
                  <span className="text-sm group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <span className="ml-2 group-hover:translate-x-0.5 transition-transform duration-300">{item.label}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tablet Menu */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-center space-x-1">
              {menuItems.slice(0, 4).map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-full text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-white/10 backdrop-blur-sm'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
              >
                <span className="text-sm">⋯</span>
              </motion.button>
            </div>
          </div>

          {/* Minimalist Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle menu</span>
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  animate={{ 
                    y: isOpen ? 0 : -4,
                    rotate: isOpen ? 45 : 0,
                    opacity: isOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={{ 
                    rotate: isOpen ? 45 : 0,
                    opacity: isOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={{ 
                    y: isOpen ? 0 : 4,
                    rotate: isOpen ? -45 : 0,
                    opacity: isOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-0.5 bg-current rounded-full"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Minimalist Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-black/20 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-1">
              {menuItems.map((item, index) => (
                <motion.button
              key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                      ? 'text-white bg-white/10 backdrop-blur-sm'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </motion.button>
          ))}
        </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimalist Tablet Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden md:block lg:hidden overflow-hidden bg-black/20 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-1">
              {menuItems.slice(4).map((item, index) => (
                <motion.button
              key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                      ? 'text-white bg-white/10 backdrop-blur-sm'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </motion.button>
          ))}
        </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
