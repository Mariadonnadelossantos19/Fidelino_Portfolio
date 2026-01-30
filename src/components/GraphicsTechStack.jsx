import React, { useState, useEffect } from 'react';

const GraphicsTechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [animatedTechs, setAnimatedTechs] = useState([]);

  const techStack = [
    { 
      name: 'React', 
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <path d="M12 1C8.5 1 5.73 3.11 5.73 5.83c0 2.72 2.77 4.83 6.27 4.83s6.27-2.11 6.27-4.83C18.27 3.11 15.5 1 12 1z" fill="#61DAFB"/>
          <path d="M12 9.17c-3.5 0-6.27 2.11-6.27 4.83s2.77 4.83 6.27 4.83 6.27-2.11 6.27-4.83-2.77-4.83-6.27-4.83z" fill="#61DAFB"/>
          <path d="M12 17.34c-3.5 0-6.27 2.11-6.27 4.83S8.5 23 12 23s6.27-2.11 6.27-4.83-2.77-4.83-6.27-4.83z" fill="#61DAFB"/>
        </svg>
      ), 
      color: 'from-blue-400 to-cyan-400', 
      bgColor: 'bg-blue-500/10', 
      borderColor: 'border-blue-400/30', 
      description: 'Frontend Library' 
    },
    { 
      name: 'Node.js', 
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#339933"/>
        </svg>
      ), 
      color: 'from-green-400 to-emerald-400', 
      bgColor: 'bg-green-500/10', 
      borderColor: 'border-green-400/30', 
      description: 'Backend Runtime' 
    },
    { 
      name: 'Python', 
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#3776AB"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#FFD43B"/>
        </svg>
      ), 
      color: 'from-yellow-400 to-orange-400', 
      bgColor: 'bg-yellow-500/10', 
      borderColor: 'border-yellow-400/30', 
      description: 'Programming Language' 
    },
    { 
      name: 'JavaScript', 
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="#F7DF1E"/>
          <path d="M8 8h8v2H8V8zm0 4h8v2H8v-2z" fill="#000"/>
        </svg>
      ), 
      color: 'from-yellow-300 to-yellow-500', 
      bgColor: 'bg-yellow-500/10', 
      borderColor: 'border-yellow-400/30', 
      description: 'Dynamic Language' 
    },
    { 
      name: 'MongoDB', 
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M17.193 9.555c-1.51-3.755-3.031-7.51-4.54-11.265C12.462 3.988 12.462 3.988 12 4.5c-.462-.512-.462-.512-.653-1.21C9.838 7.045 8.317 10.8 6.807 14.555c-3.031 7.51-1.51 13.5 1.51 13.5 1.51 0 3.031-1.51 4.54-4.54 1.51 3.03 3.031 4.54 4.54 4.54 3.031 0 4.54-6 1.51-13.5z" fill="#47A248"/>
        </svg>
      ), 
      color: 'from-green-500 to-green-600', 
      bgColor: 'bg-green-500/10', 
      borderColor: 'border-green-400/30', 
      description: 'NoSQL Database' 
    },
    { 
      name: 'PostgreSQL', 
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#336791"/>
        </svg>
      ), 
      color: 'from-blue-500 to-blue-600', 
      bgColor: 'bg-blue-500/10', 
      borderColor: 'border-blue-400/30', 
      description: 'SQL Database' 
    },
    { 
      name: 'Docker', 
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V8.774a.186.186 0 0 0-.186-.185h-2.119a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm-4.635 0h2.119a.186.186 0 0 0 .186-.185V8.774a.186.186 0 0 0-.186-.185H9.348a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm-4.636 0h2.119a.186.186 0 0 0 .186-.185V8.774a.186.186 0 0 0-.186-.185H4.712a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm9.271-4.635h2.119a.186.186 0 0 0 .186-.185V4.139a.186.186 0 0 0-.186-.185h-2.119a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm-4.635 0h2.119a.186.186 0 0 0 .186-.185V4.139a.186.186 0 0 0-.186-.185H9.348a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm-4.636 0h2.119a.186.186 0 0 0 .186-.185V4.139a.186.186 0 0 0-.186-.185H4.712a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm9.271-4.635h2.119a.186.186 0 0 0 .186-.185V.504a.186.186 0 0 0-.186-.185h-2.119a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm-4.635 0h2.119a.186.186 0 0 0 .186-.185V.504a.186.186 0 0 0-.186-.185H9.348a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185zm-4.636 0h2.119a.186.186 0 0 0 .186-.185V.504a.186.186 0 0 0-.186-.185H4.712a.186.186 0 0 0-.186.185v2.119c0 .102.084.185.186.185z" fill="#2496ED"/>
        </svg>
      ), 
      color: 'from-blue-400 to-cyan-500', 
      bgColor: 'bg-cyan-500/10', 
      borderColor: 'border-cyan-400/30', 
      description: 'Containerization' 
    },
    { 
      name: 'AWS', 
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#FF9900"/>
        </svg>
      ), 
      color: 'from-orange-400 to-orange-500', 
      bgColor: 'bg-orange-500/10', 
      borderColor: 'border-orange-400/30', 
      description: 'Cloud Platform' 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * techStack.length);
      setAnimatedTechs(prev => [...prev, randomIndex]);
      
      setTimeout(() => {
        setAnimatedTechs(prev => prev.filter(index => index !== randomIndex));
      }, 2000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-gray-900 dark:via-black dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Animated Background Graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-purple-500/5 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 font-mono">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300">
            Interactive technology showcase with visual animations
          </p>
        </div>

        {/* Interactive Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-110 ${
                animatedTechs.includes(index) ? 'animate-pulse' : ''
              }`}
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Tech Card */}
              <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                hoveredTech === index
                  ? `${tech.bgColor} ${tech.borderColor} shadow-lg shadow-cyan-500/20`
                  : 'border-gray-700 bg-gray-800/50 hover:border-cyan-400/50'
              }`}>
                {/* Logo with Animation */}
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                    hoveredTech === index ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                  }`}>
                    {tech.logo}
                  </div>
                </div>

                {/* Tech Name */}
                <h3 className="text-center text-lg font-bold text-slate-800 dark:text-white font-mono mb-2">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-center text-sm text-gray-400 mb-4">
                  {tech.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000`}
                    style={{ 
                      width: `${Math.random() * 40 + 60}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>

                {/* Skill Level */}
                <div className="text-center text-xs text-gray-500 font-mono">
                  {Math.floor(Math.random() * 3) + 3}/5
                </div>
              </div>

              {/* Hover Effect Graphics */}
              {hoveredTech === index && (
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-sm -z-10 animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 text-cyan-400/10 text-6xl font-mono animate-pulse">{"</>"}</div>
        <div className="absolute bottom-20 right-10 text-blue-400/10 text-4xl font-mono animate-bounce">{"{}"}</div>
        <div className="absolute top-1/2 left-5 text-cyan-300/10 text-3xl font-mono animate-ping">{"=>"}</div>
        <div className="absolute top-1/3 right-5 text-purple-400/10 text-2xl font-mono animate-pulse">{"⚡"}</div>
        <div className="absolute bottom-1/3 left-10 text-green-400/10 text-3xl font-mono animate-bounce">{"💻"}</div>

        {/* Tech Stack Visualization */}
        <div className="mt-16">
          <div className="bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-xl border border-cyan-500/40 dark:border-cyan-500/30 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 font-mono mb-6 text-center">
              Technology Ecosystem
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-3xl shadow-lg">
                  🎨
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white font-mono mb-3">Frontend</h4>
                <div className="space-y-2">
                  {['React', 'JavaScript'].map(tech => (
                    <div key={tech} className="px-3 py-1 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-400 text-sm font-mono">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center text-3xl shadow-lg">
                  ⚙️
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white font-mono mb-3">Backend</h4>
                <div className="space-y-2">
                  {['Node.js', 'Python'].map(tech => (
                    <div key={tech} className="px-3 py-1 bg-green-500/10 border border-green-400/30 rounded-full text-green-400 text-sm font-mono">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Infrastructure */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-3xl shadow-lg">
                  🏗️
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white font-mono mb-3">Infrastructure</h4>
                <div className="space-y-2">
                  {['Docker', 'AWS'].map(tech => (
                    <div key={tech} className="px-3 py-1 bg-purple-500/10 border border-purple-400/30 rounded-full text-purple-400 text-sm font-mono">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsTechStack;
