import React from 'react';
import CarouselSlider from '../components/CarouselSlider';

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
  const experienceCards = experiences.map((exp, i) => (
    <article
      key={`${exp.company}-${exp.jobTitle}-${i}`}
      className="h-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-zinc-900/80 p-6 md:p-8 transition-colors hover:border-teal-500/30 dark:hover:border-teal-500/30"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-slate-100">
            {exp.jobTitle}
          </h3>
          <p className="text-teal-600 dark:text-teal-400 font-medium mt-1">
            {exp.company}
          </p>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-500/20 w-fit shrink-0">
          {exp.startDate} – {exp.endDate}
        </span>
      </div>
      <p className="text-sm text-black/70 dark:text-slate-400 mb-5 flex items-center gap-1.5">
        <svg className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {exp.location}
      </p>
      <ul className="space-y-2.5">
        {exp.description.map((item, j) => (
          <li
            key={j}
            className="flex gap-3 text-sm text-black dark:text-slate-400 leading-relaxed"
          >
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 mt-1.5" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  ));

  return (
    <section id="work-experience" className="py-16 px-4 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-label text-teal-600 dark:text-teal-400 mb-2">Experience</p>
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-slate-100 tracking-tight">
            Work experience
          </h2>
          <p className="text-black/80 dark:text-slate-400 text-sm mt-2 max-w-xl">
            QA, technical support, and development roles at DOST and partner organizations.
          </p>
        </div>

        <CarouselSlider
          items={experienceCards}
          title=""
          subtitle=""
          autoPlay={true}
          autoPlayInterval={6000}
          showDots={true}
          showArrows={true}
          itemsPerView={1}
          simple={true}
          className="max-w-3xl mx-auto"
        />
      </div>
    </section>
  );
};

export default WorkExperience;
