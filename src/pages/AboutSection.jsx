import React from 'react';

const FOCUS_AREAS = [
  { title: 'Frontend', detail: 'React, JavaScript, Tailwind. Responsive UIs and clear UX.' },
  { title: 'Backend', detail: 'Node.js, Python, Laravel. APIs and server-side logic.' },
  { title: 'QA & Testing', detail: 'Selenium, Postman, test cases. Manual and automated testing.' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="section-container"> 
        <div className="mb-12">
          <p className="section-label text-teal-600 dark:text-teal-400 mb-2">About</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            About
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a <strong className="text-slate-800 dark:text-slate-200">QA Engineer and Full Stack Developer</strong>. I've worked on DOST projects—testing, automation, and building internal tools—and I'm comfortable across the stack: frontend, backend, and quality assurance.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I care about maintainable code, good test coverage, and shipping features that work for users.
            </p>
            <div className="flex gap-8 pt-2 text-sm text-slate-500 dark:text-slate-400">
              <span><strong className="text-slate-700 dark:text-slate-300">1+</strong> year exp</span>
              <span><strong className="text-slate-700 dark:text-slate-300">10+</strong> projects</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-6">
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
              Focus
            </h3>
            <ul className="space-y-4">
              {FOCUS_AREAS.map((item) => (
                <li key={item.title}>
                  <p className="font-medium text-slate-800 dark:text-slate-100">{item.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
