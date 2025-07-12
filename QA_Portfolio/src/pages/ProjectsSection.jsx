import React from 'react';
import CarouselSlider from '../components/CarouselSlider';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce QA Automation",
      description: "Comprehensive automated testing suite for an e-commerce platform, covering user flows, payment processing, and inventory management.",
      technologies: ["Selenium", "Java", "TestNG"],
      icon: (
        <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 2,
      title: "React Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimal user experience.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      icon: (
        <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 3,
      title: "API Testing Framework",
      description: "Robust API testing framework with comprehensive test coverage, automated reporting, and CI/CD integration.",
      technologies: ["Postman", "JavaScript", "Newman"],
      icon: (
        <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-green-500/20 to-blue-500/20"
    },
    {
      id: 4,
      title: "Mobile App Testing Suite",
      description: "Comprehensive mobile testing framework covering iOS and Android platforms with real device testing capabilities.",
      technologies: ["Appium", "Python", "Jenkins"],
      icon: (
        <svg className="w-16 h-16 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-orange-500/20 to-yellow-500/20"
    },
    {
      id: 5,
      title: "Performance Testing Dashboard",
      description: "Real-time performance monitoring dashboard with automated load testing and detailed analytics reporting.",
      technologies: ["JMeter", "Grafana", "Docker"],
      icon: (
        <svg className="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-red-500/20 to-pink-500/20"
    },
    {
      id: 6,
      title: "CI/CD Pipeline Automation",
      description: "End-to-end CI/CD pipeline with automated testing, deployment, and monitoring for continuous delivery.",
      technologies: ["GitHub Actions", "Docker", "AWS"],
      icon: (
        <svg className="w-16 h-16 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  // Create project cards for carousel
  const projectCards = projects.map((project) => (
    <div
      key={project.id}
      className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300 h-full transform hover:-translate-y-2 hover:scale-105"
    >
      <div className={`aspect-video ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:to-black/40 transition-all duration-300"></div>
        <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
          {project.icon}
        </div>
      </div>
      <div className="p-6 flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full group-hover:bg-purple-500/30 group-hover:text-purple-200 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-all duration-300 group-hover:translate-x-1 transform hover:scale-105">
            View Project
          </button>
          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-all duration-300 group-hover:translate-x-1 transform hover:scale-105">
            Source Code
          </button>
        </div>
      </div>

      {/* Enhanced Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none"></div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none blur-xl -z-10"></div>
    </div>
  ));

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <CarouselSlider
          items={projectCards}
          title="Featured Projects"
          subtitle="Explore my latest work showcasing expertise in quality assurance, web development, and automation testing. Each project demonstrates my commitment to delivering high-quality, user-centric solutions."
          autoPlay={true}
          autoPlayInterval={5000}
          showDots={true}
          showArrows={true}
          itemsPerView={3}
          className="mb-16"
        />

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's collaborate to bring your ideas to life with cutting-edge technology and exceptional quality assurance.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 