import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import donnaImage from '../assets/images/DONNA.jpg'
import pro1Image from '../assets/images/pro1.JPG'

// Sample data ng work experiences. Palitan mo ito ayon sa iyong aktwal na karanasan.
const experiences = [
  {
    jobTitle: 'Software Quality Assurance Analyst Intern',
    company: 'League of Developers Initiatives',
    location: 'DOST, MIMAROPA',
    startDate: 'January 2025',
    endDate: 'May 2025',
    description: [
      'Performed both manual and automated testing to ensure the functionality, performance, and reliability of various DOST system',
      'Developed and executed automated test scripts using Selenium and Python for the DOST Information Systems Strategic Plan(ISSP)',
      'Conducted end-to-end validation and manual testing of the DOST Internal Audit Management System (IAMS)',
      'Created new test cases and made the “TestResultsSummary” for the Balik Scientist Program Management System to ensure(BSPMS) thorough test coverage and accurate reporting',
      'Applied a wide range of testing methodologies including functional testing, regression testing, user acceptance testing (UAT), and cross-browser testing.',
      'Documented test results, reported bugs, and collaborated with developers to verify fixes and enhance overall software quality.'
    ],
    photo: donnaImage
  },
  {
    jobTitle: 'Technical Support',
    company: 'Department of Science and Technology',
    location: 'Marinduque, Philippines',
    startDate: 'January  2025',
    endDate: 'May 2025',
    description: [
      'Nagplano at nagsagawa ng regression at exploratory testing para sa bagong features.',
      'Gumamit ng JIRA para sa bug tracking at documentation.',
      'Nag-automate ng test cases gamit ang Cypress at Selenium.',
      'Nakipag-ugnayan sa cross-functional teams para mapabilis ang release cycle.',
      'Nakatulong sa pagbuo ng QA best practices sa team.'
    ],
    photo: pro1Image
  },
  {
    jobTitle: 'Programmer',
    company: 'Department of Science and Technology',
    location: 'Marinduque, Philippines',
    startDate: 'January  2025',
    endDate: 'May 2025',
    description: [
      'Nagplano at nagsagawa ng regression at exploratory testing para sa bagong features.',
      'Gumamit ng JIRA para sa bug tracking at documentation.',
      'Nag-automate ng test cases gamit ang Cypress at Selenium.',
      'Nakipag-ugnayan sa cross-functional teams para mapabilis ang release cycle.',
      'Nakatulong sa pagbuo ng QA best practices sa team.'
    ],
    photo: pro1Image
  }
]

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.5 }
  })
}

const WorkExperience = () => {
  const [[index, direction], setIndex] = useState([0, 0]);
  const exp = experiences[index];

  const paginate = (newDirection) => {
    setIndex(([prev, _]) => {
      let next = prev + newDirection;
      if (next < 0) next = experiences.length - 1;
      if (next >= experiences.length) next = 0;
      return [next, newDirection];
    });
  };

  return (
    <section id="work-experience" className="py-20 px-4 bg-gradient-to-br from-slate-200 via-purple-100/30 to-slate-200 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-slate-800 dark:text-white text-center mb-12">
          Work <span className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="relative w-full flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 z-10 bg-slate-200/80 dark:bg-white/10 hover:bg-purple-400/40 dark:hover:bg-purple-400/30 text-slate-700 dark:text-white rounded-full p-3 shadow transition-all duration-300"
            aria-label="Previous Experience"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          {/* Carousel Card */}
          <div className="w-full max-w-xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x < -100) paginate(1);
                  else if (offset.x > 100) paginate(-1);
                }}
                className="bg-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-grab active:cursor-grabbing"
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(139,92,246,0.15)' }}
              >
                {exp.photo && (
                  <div className="flex-shrink-0 w-40 h-40 rounded-xl overflow-hidden bg-slate-900 border-4 border-purple-400/30">
                    <img src={exp.photo} alt={exp.jobTitle + ' photo'} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{exp.jobTitle}</h3>
                  <p className="text-purple-600 dark:text-purple-300 text-lg font-semibold mb-1">{exp.company}</p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm mb-1">{exp.location}</p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm mb-4">{exp.startDate} – {exp.endDate}</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-gray-200 text-base">
                    {exp.description.map((item, i) => (
                      <motion.li key={`${exp.jobTitle}-${i}-${item.substring(0, 20)}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }}>{item}</motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 z-10 bg-slate-200/80 dark:bg-white/10 hover:bg-pink-400/40 dark:hover:bg-pink-400/30 text-slate-700 dark:text-white rounded-full p-3 shadow transition-all duration-300"
            aria-label="Next Experience"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
        {/* Carousel Dots */}
        <div className="flex gap-2 mt-8">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-purple-500 dark:bg-purple-400 scale-125' : 'bg-slate-300 dark:bg-white/20 hover:bg-purple-400 dark:hover:bg-purple-300'}`}
              aria-label={`Go to experience ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience


