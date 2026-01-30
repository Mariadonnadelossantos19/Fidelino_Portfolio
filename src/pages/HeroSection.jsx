import React, { useState, useEffect } from 'react';
import donnaImage from '../assets/images/DONNA.jpg';
import cvFile from '../assets/pdf/Ma. Donna Fidellino CV.pdf';

const HeroSection = ({ scrollToSection }) => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const terminalLines = [
    '$ whoami',
    'Ma. Donna D. Fidelino',
    '',
    '$ cat skills.txt',
    'Full Stack Developer',
    'Quality Assurance Engineer',
    'React | Node.js | Python',
    'Testing | Automation | CI/CD',
    '',
    '$ git status',
    'On branch: portfolio',
    'Your code is ready to deploy!',
    '',
    '$ ./hire_me.sh',
    '> Available for opportunities',
    '> Remote work preferred',
    '> Let\'s build something amazing!'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLine < terminalLines.length) {
        setTerminalText(prev => prev + terminalLines[currentLine] + '\n');
        setCurrentLine(prev => prev + 1);
      } else {
        setIsTyping(false);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [currentLine, terminalLines]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-100/50 dark:from-gray-900/50 dark:to-black/50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white leading-tight font-mono">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Ma. Donna D. Fidelino
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-cyan-600 dark:text-cyan-300 font-medium font-mono">
                Full Stack Developer & QA Engineer
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Building robust web applications from frontend to backend, ensuring quality through comprehensive testing and modern development practices.
              </p>
              
              {/* Tech Stack Badges */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-cyan-600 dark:text-cyan-300 font-mono text-center lg:text-left">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-center lg:justify-start">
                  {[
                    { 
                      name: 'React', 
                      logo: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
                          <path d="M12 1C8.5 1 5.73 3.11 5.73 5.83c0 2.72 2.77 4.83 6.27 4.83s6.27-2.11 6.27-4.83C18.27 3.11 15.5 1 12 1z" fill="#61DAFB"/>
                          <path d="M12 9.17c-3.5 0-6.27 2.11-6.27 4.83s2.77 4.83 6.27 4.83 6.27-2.11 6.27-4.83-2.77-4.83-6.27-4.83z" fill="#61DAFB"/>
                          <path d="M12 17.34c-3.5 0-6.27 2.11-6.27 4.83S8.5 23 12 23s6.27-2.11 6.27-4.83-2.77-4.83-6.27-4.83z" fill="#61DAFB"/>
                        </svg>
                      ), 
                      color: 'from-blue-400 to-cyan-400'
                    },
                    { 
                      name: 'Node.js', 
                      logo: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#339933"/>
                        </svg>
                      ), 
                      color: 'from-green-400 to-emerald-400'
                    },
                    { 
                      name: 'Python', 
                      logo: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#3776AB"/>
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#FFD43B"/>
                        </svg>
                      ), 
                      color: 'from-yellow-400 to-orange-400'
                    },
                    { 
                      name: 'JavaScript', 
                      logo: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="#F7DF1E"/>
                          <path d="M8 8h8v2H8V8zm0 4h8v2H8v-2z" fill="#000"/>
                        </svg>
                      ), 
                      color: 'from-yellow-300 to-yellow-500'
                    },
                    { 
                      name: 'MongoDB', 
                      logo: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path d="M17.193 9.555c-1.51-3.755-3.031-7.51-4.54-11.265C12.462 3.988 12.462 3.988 12 4.5c-.462-.512-.462-.512-.653-1.21C9.838 7.045 8.317 10.8 6.807 14.555c-3.031 7.51-1.51 13.5 1.51 13.5 1.51 0 3.031-1.51 4.54-4.54 1.51 3.03 3.031 4.54 4.54 4.54 3.031 0 4.54-6 1.51-13.5z" fill="#47A248"/>
                        </svg>
                      ), 
                      color: 'from-green-500 to-green-600'
                    },
                    { 
                      name: 'PostgreSQL', 
                      logo: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#336791"/>
                        </svg>
                      ), 
                      color: 'from-blue-500 to-blue-600'
                    },
                    { 
                      name: 'Docker', 
                      logo: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V8.774a.186.186 0 0 0-.186-.185h-2.119a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm-4.635 0h2.119a.186.186 0 0 0 .186-.185V8.774a.186.186 0 0 0-.186-.185H9.348a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm-4.636 0h2.119a.186.186 0 0 0 .186-.185V8.774a.186.186 0 0 0-.186-.185H4.712a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm9.271-4.635h2.119a.186.186 0 0 0 .186-.185V4.139a.186.186 0 0 0-.186-.185h-2.119a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm-4.635 0h2.119a.186.186 0 0 0 .186-.185V4.139a.186.186 0 0 0-.186-.185H9.348a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm-4.636 0h2.119a.186.186 0 0 0 .186-.185V4.139a.186.186 0 0 0-.186-.185H4.712a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm9.271-4.635h2.119a.186.186 0 0 0 .186-.185V.504a.186.186 0 0 0-.186-.185h-2.119a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm-4.635 0h2.119a.186.186 0 0 0 .186-.185V.504a.186.186 0 0 0-.186-.185H9.348a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm-4.636 0h2.119a.186.186 0 0 0 .186-.185V.504a.186.186 0 0 0-.186-.185H4.712a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185z" fill="#2496ED"/>
                        </svg>
                      ), 
                      color: 'from-blue-400 to-cyan-500'
                    },
                    { 
                      name: 'AWS', 
                      logo: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#FF9900"/>
                        </svg>
                      ), 
                      color: 'from-orange-400 to-orange-500'
                    }
                  ].map((tech) => (
                    <div key={tech.name} className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
                      <div className="p-2 rounded-lg border border-cyan-500/40 dark:border-cyan-500/30 bg-cyan-500/15 dark:bg-cyan-500/10 hover:bg-cyan-500/25 dark:hover:bg-cyan-500/20 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 flex items-center justify-center">
                            {tech.logo}
                          </div>
                          <span className="text-cyan-600 dark:text-cyan-400 text-xs font-mono">{tech.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-mono text-sm"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 font-medium rounded-lg hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-black transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-mono text-sm"
              >
                Get In Touch
              </button>
              <a
                href={cvFile}
                download
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm"
                style={{ minWidth: '140px' }}
              >
                Download CV
              </a>
            </div>
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500 dark:text-purple-400">1+</div>
                <div className="text-sm text-slate-500 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500 dark:text-pink-400">10+</div>
                <div className="text-sm text-slate-500 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 dark:text-blue-400">95%</div>
                <div className="text-sm text-slate-500 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
          {/* Interactive Terminal Console */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Terminal Window */}
              <div className="bg-slate-800/95 dark:bg-black/90 backdrop-blur-sm rounded-lg border border-cyan-500/40 dark:border-cyan-500/30 shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-700/50 dark:bg-gray-900/50 border-b border-cyan-500/30 dark:border-cyan-500/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-cyan-400 text-sm font-mono">terminal@portfolio</div>
                </div>
                
                {/* Terminal Content */}
                <div className="p-4 font-mono text-sm">
                  <pre className="text-cyan-300 dark:text-cyan-400 whitespace-pre-wrap leading-relaxed">
                    {terminalText}
                    {isTyping && <span className="animate-pulse">█</span>}
                  </pre>
                </div>
              </div>
              
              {/* Floating Code Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center shadow-lg animate-bounce border border-cyan-500/30">
                <span className="text-cyan-400 text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center shadow-lg animate-pulse border border-blue-500/30">
                <span className="text-blue-400 text-lg">⚡</span>
              </div>
              
              {/* Background Glow Effects */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-cyan-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default HeroSection; 