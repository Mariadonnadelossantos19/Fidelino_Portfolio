import React, { useState, useEffect } from 'react';

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
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About Me', icon: '👤' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'certificates', label: 'Certificates', icon: '🏆' },
    { id: 'contact', label: 'Contact', icon: '📧' },
    { id: 'Experience', label: 'Work', icon: '📧' },

  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/10 backdrop-blur-xl shadow-2xl border-b border-white/20' 
        : 'bg-white/5 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 transform group-hover:scale-105">
                  <span className="text-white font-bold text-lg">MF</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Fidelino
                </span>
                <span className="text-sm text-gray-300 font-medium">QA Engineer & Developer</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 shadow-lg shadow-purple-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-purple-400/30'
                  }`}
                >
                  <span className="text-base group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300">{item.label}</span>
                  
                  {/* Glowing effect on hover */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 blur-sm -z-10`}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Tablet Menu (Simplified) */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-center space-x-1">
              {menuItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                </button>
              ))}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <span className="text-sm">⋯</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-3 rounded-full text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6 transition-all duration-300`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6 transition-all duration-300`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 to-pink-500/0 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 blur-sm -z-10"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white/10 backdrop-blur-xl border-t border-white/20 shadow-2xl">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center space-x-4 w-full text-left px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 group ${
                activeSection === item.id
                  ? 'text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-purple-400/30'
              }`}
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
              
              {/* Glowing effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 blur-sm -z-10`}></div>
            </button>
          ))}
        </div>
      </div>

      {/* Tablet Dropdown Menu */}
      <div className={`hidden md:block lg:hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white/10 backdrop-blur-xl border-t border-white/20 shadow-2xl">
          {menuItems.slice(4).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center space-x-4 w-full text-left px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 group ${
                activeSection === item.id
                  ? 'text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-purple-400/30'
              }`}
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
              
              {/* Glowing effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 blur-sm -z-10`}></div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
