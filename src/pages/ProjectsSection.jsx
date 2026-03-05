import React from 'react';
import CarouselSlider from '../components/CarouselSlider';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Customer Satisfaction Feedback System",
      description: "Web app for collecting and managing customer feedback. Built with React and Vite for a fast, modern interface.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      liveUrl: "https://mintcream-termite-167038.hostingersite.com/",
      sourceUrl: null,
    },
    {
      id: 2,
      title: "ICT Equipment Inventory and Management System",
      description: "DOST-MIMAROPA system to track and manage laptops, desktops, monitors, printers, and related assets. One system, full visibility.",
      technologies: ["Laravel", "PHP", "MySQL"],
      liveUrl: "https://lavender-caterpillar-208807.hostingersite.com/",
      sourceUrl: null,
    },
    {
      id: 3,
      title: "Centralized Inventory & Monitoring",
      description: "CIM TSD — Manage and monitor office supplies across all TSD units. Accurate tracking, controlled access, and real-time visibility for Super Admin, Unit Head, and custodians.",
      technologies: ["Laravel", "PHP", "MySQL"],
      liveUrl: "https://slategray-eland-617147.hostingersite.com/",
      sourceUrl: null,
    },
    {
      id: 4,
      title: "Project Management and Notification System",
      description: "DOST-PMNS — Project management and notification system for tracking tasks, deadlines, and team updates.",
      technologies: ["Laravel", "PHP", "MySQL"],
      liveUrl: "https://papayawhip-walrus-915090.hostingersite.com/",
      sourceUrl: null,
    }
  ];

  // Create project cards for carousel — show live system (landing/hero) instead of icon
  const projectCards = projects.map((project) => (
    <div
      key={project.id}
      className="group relative bg-white dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-colors duration-200 h-full min-w-0 w-full max-w-full"
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-video min-h-[140px] sm:min-h-[200px] bg-slate-100 dark:bg-slate-800 relative overflow-hidden w-full"
        aria-label={`Open ${project.title} — live preview`}
      >
        <iframe
          src={project.liveUrl}
          title={project.title}
          className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left pointer-events-none"
          style={{ transform: 'scale(0.5)' }}
          sandbox="allow-scripts allow-same-origin"
        />
      </a>
      <div className="p-4 sm:p-6 flex flex-col h-full min-w-0">
        <div className="flex-grow min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2 break-words">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed break-words overflow-hidden">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:underline text-sm font-medium inline-flex items-center gap-1.5"
            >
              View live site
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          ) : null}
          {project.sourceUrl ? (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:underline text-sm font-medium inline-flex items-center gap-1.5"
            >
              Source code
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  ));

  return (
    <section id="projects" className="py-12 sm:py-16 px-3 sm:px-4 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="section-container max-w-6xl xl:max-w-7xl">
        <div className="mb-8 sm:mb-10">
          <p className="section-label text-teal-600 dark:text-teal-400 mb-2">Projects</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight break-words">
            Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-xl">
            Selected work in QA, automation, and web development.
          </p>
        </div>
        <CarouselSlider
          items={projectCards}
          title=""
          subtitle=""
          autoPlay={true}
          autoPlayInterval={5000}
          showDots={true}
          showArrows={true}
          itemsPerView={2}
          itemsPerViewMobile={1}
          simple={true}
          className="mb-16"
        />

        <div className="text-center px-2">
          <div className="rounded-xl p-5 sm:p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 max-w-xl mx-auto">
            <p className="text-slate-600 dark:text-slate-400 mb-5 sm:mb-6 text-sm break-words">
              Have a project in mind? I’d be glad to hear about it.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="min-h-[44px] px-5 sm:px-6 py-3 sm:py-2.5 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-medium rounded-lg text-sm transition-colors touch-manipulation"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 