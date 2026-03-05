import React from 'react';
import yourProfilePhoto from '../assets/images/pro1.JPG';

const AWARDS = [
  { title: 'With Distinction', from: 'College of Information and Computing Sciences', year: '2025' },
  { title: 'Best Intern Award', from: 'College of Information and Computing Sciences', year: '2025' },
  { title: 'Model Intern Award', from: 'Department of Science and Technology', year: '2025' },
  { title: 'Outstanding Programmer Award', from: 'Department of Science and Technology', year: '2025' },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-16 px-4 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label text-teal-600 dark:text-teal-400 mb-2">Education</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            Education
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo + degree */}
          <div className="space-y-6">
            <div className="flex justify-center lg:justify-start">
              <img
                src={yourProfilePhoto}
                alt="Ma. Donna Fidelino"
                className="w-full max-w-sm aspect-[3/4] object-cover rounded-xl border border-slate-200 dark:border-slate-700"
              />
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-6">
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                Degree
              </h3>
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                BS Information Technology
              </p>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Marinduque State University
              </p>
              <p className="text-slate-500 dark:text-slate-500 text-sm mt-2">
                2025
              </p>
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
              Awards
            </h3>
            <ul className="space-y-4">
              {AWARDS.map((award, index) => (
                <li
                  key={`${award.title}-${index}`}
                  className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-4"
                >
                  <p className="font-medium text-slate-800 dark:text-slate-100">
                    {award.title}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    {award.from}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    {award.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
