import React from 'react';

const experiences = [
  {
    jobTitle: 'Software Quality Assurance Analyst Intern',
    company: 'League of Developers Initiatives',
    location: 'DOST, MIMAROPA',
    startDate: 'Jan 2025',
    endDate: 'May 2025',
    description: [
      'Performed manual and automated testing for DOST systems to ensure functionality, performance, and reliability.',
      'Developed and executed automated test scripts with Selenium and Python for the Information Systems Strategic Plan (ISSP).',
      'Conducted end-to-end validation and manual testing of the Internal Audit Management System (IAMS).',
      'Created test cases and Test Results Summary for the Balik Scientist Program Management System (BSPMS).',
      'Applied functional, regression, UAT, and cross-browser testing; documented results and collaborated with developers on fixes.'
    ]
  },
  {
    jobTitle: 'Technical Support',
    company: 'Department of Science and Technology',
    location: 'Marinduque, Philippines',
    startDate: 'Jan 2025',
    endDate: 'May 2025',
    description: [
      'Planned and executed regression and exploratory testing for new features.',
      'Used JIRA for bug tracking and documentation.',
      'Automated test cases with Cypress and Selenium.',
      'Worked with cross-functional teams to support release cycles and QA best practices.'
    ]
  },
  {
    jobTitle: 'Programmer',
    company: 'Department of Science and Technology',
    location: 'Marinduque, Philippines',
    startDate: 'Jan 2025',
    endDate: 'May 2025',
    description: [
      'Developed and maintained applications in support of DOST programs.',
      'Collaborated with QA and technical support on testing and documentation.',
      'Contributed to internal tools and development workflows.'
    ]
  }
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-20 px-4 bg-slate-50/80 dark:bg-zinc-900/50 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-3">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            Work experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            Roles and responsibilities in QA, technical support, and development.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <article
              key={`${exp.company}-${exp.jobTitle}-${i}`}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-zinc-900/80 p-6 md:p-8 shadow-sm dark:shadow-none transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                    {exp.jobTitle}
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mt-0.5">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {exp.startDate} – {exp.endDate}
                </p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
                {exp.location}
              </p>
              <ul className="list-none space-y-2">
                {exp.description.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 mt-1.5" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
