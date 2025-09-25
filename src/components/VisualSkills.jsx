import React, { useState, useEffect } from 'react';

const VisualSkills = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const skills = [
    {
      name: 'Frontend Development',
      icon: '🎨',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      level: 95,
      description: 'Creating beautiful and responsive user interfaces'
    },
    {
      name: 'Backend Development',
      icon: '⚙️',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      technologies: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'REST APIs'],
      level: 90,
      description: 'Building robust server-side applications and APIs'
    },
    {
      name: 'Database Management',
      icon: '🗄️',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
      level: 85,
      description: 'Designing and optimizing database schemas'
    },
    {
      name: 'DevOps & Cloud',
      icon: '☁️',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      technologies: ['Docker', 'AWS', 'GitHub Actions', 'CI/CD', 'Linux'],
      level: 80,
      description: 'Deploying and maintaining cloud applications'
    },
    {
      name: 'Quality Assurance',
      icon: '🧪',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      technologies: ['Jest', 'Cypress', 'Selenium', 'Postman', 'Testing'],
      level: 92,
      description: 'Ensuring code quality through comprehensive testing'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveSkill(prev => (prev + 1) % skills.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-purple-500/20 rounded-full blur-xl animate-ping"></div>
        <div className="absolute top-1/2 right-20 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Visual Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive skill visualization with progress indicators and technology stacks
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills Navigation with Graphics */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`p-6 rounded-xl border-2 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  activeSkill === index
                    ? `${skill.bgColor} ${skill.borderColor} shadow-lg shadow-cyan-500/20`
                    : 'border-gray-700 bg-gray-800/50 hover:border-cyan-400/50 hover:bg-cyan-500/5'
                }`}
                onClick={() => setActiveSkill(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white font-mono mb-2">{skill.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{skill.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%`
                      }}></div>
                    </div>
                    <div className="text-sm text-gray-400 font-mono">{skill.level}% Proficiency</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Skill Visualization */}
          <div className="relative">
            <div className="bg-black/80 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${skills[activeSkill].color} flex items-center justify-center text-3xl shadow-lg`}>
                  {skills[activeSkill].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 font-mono">
                    {skills[activeSkill].name}
                  </h3>
                  <p className="text-gray-300">{skills[activeSkill].description}</p>
                </div>
              </div>
              
              {/* Circular Progress */}
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-700"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - skills[activeSkill].level / 100)}`}
                      className={`text-cyan-400 transition-all duration-1000`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-400 font-mono">
                      {skills[activeSkill].level}%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white font-mono">Technologies:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {skills[activeSkill].technologies.map((tech, index) => (
                    <div
                      key={tech}
                      className={`px-4 py-2 rounded-lg border ${skills[activeSkill].borderColor} ${skills[activeSkill].bgColor} text-center transition-all duration-300 hover:scale-105`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-cyan-400 text-sm font-mono">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Graphics Elements */}
        <div className="absolute top-20 left-10 text-cyan-400/20 text-6xl font-mono animate-pulse">{"</>"}</div>
        <div className="absolute bottom-20 right-10 text-blue-400/20 text-4xl font-mono animate-bounce">{"{}"}</div>
        <div className="absolute top-1/2 left-5 text-cyan-300/10 text-3xl font-mono animate-ping">{"=>"}</div>
        <div className="absolute top-1/3 right-5 text-purple-400/20 text-2xl font-mono animate-pulse">{"⚡"}</div>
      </div>
    </div>
  );
};

export default VisualSkills;
