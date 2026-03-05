import React, { useState } from 'react';

const GraphicsTechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    { name: 'React', category: 'Frontend', description: 'UI library' },
    { name: 'Node.js', category: 'Backend', description: 'Runtime' },
    { name: 'Python', category: 'Backend', description: 'Scripting & automation' },
    { name: 'JavaScript', category: 'Frontend', description: 'Web & tooling' },
    { name: 'MongoDB', category: 'Data', description: 'NoSQL' },
    { name: 'PostgreSQL', category: 'Data', description: 'Relational DB' },
    { name: 'Docker', category: 'Infrastructure', description: 'Containers' },
    { name: 'AWS', category: 'Infrastructure', description: 'Cloud' },
  ];

  const ecosystem = [
    { label: 'Frontend', techs: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'] },
    { label: 'Backend & QA', techs: ['Node.js', 'Python', 'Express', 'Selenium', 'Postman'] },
    { label: 'Infrastructure', techs: ['Docker', 'AWS', 'GitHub Actions', 'CI/CD'] },
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="section-container max-w-4xl">
        <div className="mb-12">
          <p className="section-label text-teal-600 dark:text-teal-400 mb-2">Skills</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            Tech stack
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm max-w-xl">
            Tools and runtimes I use for development and testing.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className={`rounded-lg border px-4 py-3 transition-colors cursor-default ${
                hoveredTech === tech.name
                  ? 'border-teal-500/40 bg-teal-500/5 dark:bg-teal-500/10'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                {tech.name}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {tech.description}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-6 md:p-8">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-6">
            Technology ecosystem
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {ecosystem.map((group) => (
              <div key={group.label}>
                <h4 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  {group.label}
                </h4>
                <ul className="space-y-1.5">
                  {group.techs.map((t) => (
                    <li
                      key={t}
                      className="text-sm text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicsTechStack;
