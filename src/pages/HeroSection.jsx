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
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-16">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 dark:text-teal-400">
                QA Engineer & Full Stack Developer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-slate-800 dark:text-slate-100 leading-[1.15] tracking-tight">
                Ma. Donna D. Fidelino
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Building reliable web applications and ensuring quality through testing and modern development practices.
              </p>
              
              {/* Tech Stack – simple pills */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
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
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-200/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                    >
                      <span className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">{tech.logo}</span>
                      {tech.name}
                    </span>
                  ))}
              </div>
            </div>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-medium rounded-md text-sm transition-colors"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-md text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Contact
              </button>
              <a
                href={cvFile}
                download
                className="px-5 py-2.5 text-teal-600 dark:text-teal-400 font-medium rounded-md text-sm hover:underline inline-flex items-center justify-center gap-1.5"
              >
                Download CV
              </a>
            </div>
            {/* Stats – single line */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-2 text-sm text-slate-500 dark:text-slate-400">
              <span><strong className="text-slate-700 dark:text-slate-300">1+</strong> years</span>
              <span><strong className="text-slate-700 dark:text-slate-300">10+</strong> projects</span>
              <span><strong className="text-slate-700 dark:text-slate-300">QA</strong> & dev</span>
            </div>
          </div>
          {/* Terminal – clean, no decorations */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-800 dark:bg-slate-900 shadow-lg">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-700/80 dark:bg-slate-800 border-b border-slate-600/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                </div>
                <span className="text-slate-400 text-xs font-mono ml-2">portfolio</span>
              </div>
              <div className="p-4 font-mono text-sm text-slate-300 dark:text-slate-400">
                <pre className="whitespace-pre-wrap leading-relaxed">{terminalText}{isTyping && <span className="animate-pulse">▌</span>}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 