import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
      const sections = ['home', 'about', 'education', 'work-experience', 'projects', 'certificates', 'contact'];
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
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'work-experience', label: 'Work Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
          ? 'bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800' 
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
              <div className="w-10 h-10 bg-teal-600 dark:bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-slate-900 font-bold text-sm">MF</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Fidelino
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">QA Engineer</span>
            </div>
          </motion.div>

          {/* Theme Toggle */}
          <motion.button
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mr-2"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </motion.button>

          {/* Minimalist Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-teal-600 dark:text-teal-400 bg-teal-500/10 border border-teal-500/20'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 border border-transparent'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
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
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-teal-600 dark:text-teal-400 bg-teal-500/10'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
            className="md:hidden overflow-hidden bg-white/90 dark:bg-black/20 backdrop-blur-2xl border-t border-slate-200 dark:border-white/10"
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
                  className={`flex items-center w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                      ? 'text-teal-600 dark:text-teal-400 bg-teal-500/10'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </motion.button>
          ))}
        </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tablet Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden md:block lg:hidden overflow-hidden bg-white/90 dark:bg-black/20 backdrop-blur-2xl border-t border-slate-200 dark:border-white/10"
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
                  className={`flex items-center w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                      ? 'text-teal-600 dark:text-teal-400 bg-teal-500/10'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
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
