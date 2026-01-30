import React, { useState } from 'react';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: ['User Authentication', 'Payment Processing', 'Admin Dashboard', 'Real-time Updates'],
      github: '#',
      live: '#',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features',
      image: '📋',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL', 'Docker'],
      features: ['Real-time Collaboration', 'Team Management', 'File Sharing', 'Notifications'],
      github: '#',
      live: '#',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Interactive portfolio website with modern animations and responsive design',
      image: '💼',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Netlify'],
      features: ['Responsive Design', 'Smooth Animations', 'Dark Mode', 'SEO Optimized'],
      github: '#',
      live: '#',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'API Gateway',
      description: 'Microservices API gateway with authentication, rate limiting, and monitoring',
      image: '🌐',
      technologies: ['Node.js', 'Express.js', 'Redis', 'JWT', 'Docker'],
      features: ['Rate Limiting', 'Authentication', 'Load Balancing', 'Monitoring'],
      github: '#',
      live: '#',
      status: 'Completed'
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 dark:from-cyan-500/5 dark:via-transparent dark:to-blue-500/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 font-mono">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            Full-stack applications showcasing modern development practices and technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project Navigation */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`p-6 rounded-lg border-2 transition-all duration-500 cursor-pointer ${
                  activeProject === index
                    ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                    : 'border-gray-700 bg-gray-800/50 hover:border-cyan-400/50 hover:bg-cyan-500/5'
                }`}
                onClick={() => setActiveProject(index)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{project.image}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white font-mono">{project.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-mono ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Project Display */}
          <div className="relative">
            <div className="bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-500/40 dark:border-cyan-500/30 p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl">{projects[activeProject].image}</span>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 font-mono">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-gray-300">{projects[activeProject].description}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white font-mono mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white font-mono mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {projects[activeProject].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-slate-600 dark:text-gray-300">
                        <span className="text-cyan-400">▶</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href={projects[activeProject].github}
                    className="px-6 py-3 bg-slate-200 dark:bg-gray-800 border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 rounded-lg hover:bg-slate-300 dark:hover:bg-gray-700 transition-colors duration-300 font-mono"
                  >
                    View Code
                  </a>
                  <a
                    href={projects[activeProject].live}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-mono"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
