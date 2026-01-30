import React, { useState, useEffect } from 'react';

const InteractiveSkills = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      name: 'Frontend Development',
      icon: '🎨',
      technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      description: 'Creating beautiful and responsive user interfaces with modern frameworks'
    },
    {
      name: 'Backend Development',
      icon: '⚙️',
      technologies: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'REST APIs'],
      description: 'Building robust server-side applications and APIs'
    },
    {
      name: 'Database Management',
      icon: '🗄️',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
      description: 'Designing and optimizing database schemas for scalability'
    },
    {
      name: 'DevOps & Cloud',
      icon: '☁️',
      technologies: ['Docker', 'AWS', 'GitHub Actions', 'CI/CD', 'Linux'],
      description: 'Deploying and maintaining applications in cloud environments'
    },
    {
      name: 'Quality Assurance',
      icon: '🧪',
      technologies: ['Jest', 'Cypress', 'Selenium', 'Postman', 'Testing'],
      description: 'Ensuring code quality through comprehensive testing strategies'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSkill(prev => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-gray-900 dark:via-black dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-200/30 dark:bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 dark:from-cyan-500/5 dark:via-transparent dark:to-blue-500/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 font-mono">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Full Stack Skills
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            From frontend to backend, I build complete web applications with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills Navigation */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`p-6 rounded-lg border-2 transition-all duration-500 cursor-pointer ${
                  activeSkill === index
                    ? 'border-cyan-500 bg-cyan-500/15 dark:bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                    : 'border-slate-300 dark:border-gray-700 bg-slate-100/80 dark:bg-gray-800/50 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/5'
                }`}
                onClick={() => setActiveSkill(index)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono">{skill.name}</h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Skill Display */}
          <div className="relative">
            <div className="bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-500/40 dark:border-cyan-500/30 p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl">{skills[activeSkill].icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 font-mono">
                    {skills[activeSkill].name}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300">{skills[activeSkill].description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white font-mono">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {skills[activeSkill].technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/25 dark:bg-cyan-500/20 border border-cyan-500/40 dark:border-cyan-500/30 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-mono hover:bg-cyan-500/35 dark:hover:bg-cyan-500/30 transition-colors duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 text-cyan-400/20 text-6xl font-mono animate-pulse">{"</>"}</div>
        <div className="absolute bottom-20 right-10 text-blue-400/20 text-4xl font-mono animate-bounce">{"{}"}</div>
        <div className="absolute top-1/2 left-5 text-cyan-300/10 text-3xl font-mono animate-ping">{"=>"}</div>
      </div>
    </div>
  );
};

export default InteractiveSkills;
