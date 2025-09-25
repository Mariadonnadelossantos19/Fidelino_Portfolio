import React, { useState } from 'react';

const GraphicsProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database',
      icon: '🛒',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: ['User Authentication', 'Payment Processing', 'Admin Dashboard', 'Real-time Updates'],
      github: '#',
      live: '#',
      status: 'Completed',
      progress: 100,
      image: '🛍️'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features',
      icon: '📋',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL', 'Docker'],
      features: ['Real-time Collaboration', 'Team Management', 'File Sharing', 'Notifications'],
      github: '#',
      live: '#',
      status: 'In Progress',
      progress: 75,
      image: '📊'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Interactive portfolio website with modern animations and responsive design',
      icon: '💼',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Netlify'],
      features: ['Responsive Design', 'Smooth Animations', 'Dark Mode', 'SEO Optimized'],
      github: '#',
      live: '#',
      status: 'Completed',
      progress: 100,
      image: '🎨'
    },
    {
      id: 4,
      title: 'API Gateway',
      description: 'Microservices API gateway with authentication, rate limiting, and monitoring',
      icon: '🌐',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      technologies: ['Node.js', 'Express.js', 'Redis', 'JWT', 'Docker'],
      features: ['Rate Limiting', 'Authentication', 'Load Balancing', 'Monitoring'],
      github: '#',
      live: '#',
      status: 'Completed',
      progress: 100,
      image: '🔗'
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Visual Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive project showcase with visual progress indicators and technology graphics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project Navigation with Graphics */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`p-6 rounded-xl border-2 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  activeProject === index
                    ? `${project.bgColor} ${project.borderColor} shadow-lg shadow-cyan-500/20`
                    : 'border-gray-700 bg-gray-800/50 hover:border-cyan-400/50 hover:bg-cyan-500/5'
                }`}
                onClick={() => setActiveProject(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white font-mono">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${project.color} transition-all duration-1000`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-400 font-mono">{project.progress}% Complete</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Project Visualization */}
          <div className="relative">
            <div className="bg-black/80 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${projects[activeProject].color} flex items-center justify-center text-3xl shadow-lg`}>
                  {projects[activeProject].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 font-mono">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-gray-300">{projects[activeProject].description}</p>
                </div>
              </div>
              
              {/* Project Progress Circle */}
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
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - projects[activeProject].progress / 100)}`}
                      className={`text-cyan-400 transition-all duration-1000`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-400 font-mono">
                      {projects[activeProject].progress}%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white font-mono mb-3">Technologies Used:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <div
                        key={tech}
                        className={`px-4 py-2 rounded-lg border ${projects[activeProject].borderColor} ${projects[activeProject].bgColor} text-center transition-all duration-300 hover:scale-105`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="text-cyan-400 text-sm font-mono">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white font-mono mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {projects[activeProject].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-300">
                        <span className="text-cyan-400">▶</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href={projects[activeProject].github}
                    className="px-6 py-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-mono flex items-center space-x-2"
                  >
                    <span>📁</span>
                    <span>View Code</span>
                  </a>
                  <a
                    href={projects[activeProject].live}
                    className={`px-6 py-3 bg-gradient-to-r ${projects[activeProject].color} text-white rounded-lg hover:opacity-80 transition-all duration-300 font-mono flex items-center space-x-2`}
                  >
                    <span>🚀</span>
                    <span>Live Demo</span>
                  </a>
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
        <div className="absolute bottom-1/3 left-10 text-green-400/20 text-3xl font-mono animate-bounce">{"💻"}</div>
      </div>
    </div>
  );
};

export default GraphicsProjectShowcase;
