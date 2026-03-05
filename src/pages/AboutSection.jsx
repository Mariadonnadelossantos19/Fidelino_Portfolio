import React from 'react';
import yourProfilePhoto from '../assets/images/pro1.JPG';

const FOCUS_AREAS = [
  { title: 'Frontend', detail: 'React, JavaScript, Tailwind. Responsive UIs and clear UX.' },
  { title: 'Backend', detail: 'Node.js, Python, Laravel. APIs and server-side logic.' },
  { title: 'QA & Testing', detail: 'Selenium, Postman, test cases. Manual and automated testing.' },
];

const AWARDS = [
  { title: 'With Distinction', from: 'College of Information and Computing Sciences', year: '2025' },
  { title: 'Best Intern Award', from: 'College of Information and Computing Sciences', year: '2025' },
  { title: 'Model Intern Award', from: 'Department of Science and Technology', year: '2025' },
  { title: 'Outstanding Programmer Award', from: 'Department of Science and Technology', year: '2025' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label text-teal-600 dark:text-teal-400 mb-2">About</p>
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-slate-100 tracking-tight">
            About & Education
          </h2>
        </div>

        {/* Intro + Photo row */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-12">
          <div className="space-y-4">
            <p className="text-black dark:text-slate-400 leading-relaxed">
              I'm a <strong className="text-black dark:text-slate-200">QA Engineer and Full Stack Developer</strong>. I've worked on DOST projects—testing, automation, and building internal tools—and I'm comfortable across the stack: frontend, backend, and quality assurance.
            </p>
            <p className="text-black dark:text-slate-400 leading-relaxed">
              I care about maintainable code, good test coverage, and shipping features that work for users.
            </p>
            <div className="flex gap-8 text-sm text-black dark:text-slate-400 pt-2">
              <span><strong className="text-black dark:text-slate-300">1+</strong> year exp</span>
              <span><strong className="text-black dark:text-slate-300">10+</strong> projects</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-[260px] flex-shrink-0 overflow-hidden rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 shadow-xl">
              <img
                src={yourProfilePhoto}
                alt="Ma. Donna Fidelino"
                className="w-full h-auto block object-cover object-top"
                width={260}
                height={347}
                fetchPriority="high"
                decoding="sync"
              />
            </div>
          </div>
        </div>

        {/* Education | Focus | Awards — three equal cards */}s
        <div className="grid md:grid-cols-3 gap-6">
          {/* Education */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex flex-col">
            <h3 className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
              Education
            </h3>
            <p className="text-lg font-semibold text-black dark:text-slate-100">
              BS Information Technology
            </p>
            <p className="text-black dark:text-slate-400 mt-1">
              Marinduque State University
            </p>
            <p className="text-black/80 dark:text-slate-500 text-sm mt-2">
              2025
            </p>
          </div>

          {/* Focus */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex flex-col">
            <h3 className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
              Focus
            </h3>
            <ul className="space-y-4">
              {FOCUS_AREAS.map((item) => (
                <li key={item.title}>
                  <p className="font-medium text-black dark:text-slate-100 text-sm">{item.title}</p>
                  <p className="text-xs text-black dark:text-slate-400 mt-0.5">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Awards */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-6 h-full flex flex-col">
            <h3 className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
              Awards
            </h3>
            <ul className="space-y-3">
              {AWARDS.map((award, index) => (
                <li key={`${award.title}-${index}`}>
                  <p className="font-medium text-black dark:text-slate-100 text-sm">{award.title}</p>
                  <p className="text-xs text-black dark:text-slate-400 mt-0.5">{award.from}</p>
                  <p className="text-xs text-black/80 dark:text-slate-500 mt-0.5">{award.year}</p>
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
