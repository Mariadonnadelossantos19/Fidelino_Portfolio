import React from 'react'
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
      'Nagsagawa ng manual at automated testing para sa mobile at web applications gamit ang JIRA at Selenium.',
      'Gumamit ng Git para sa version control at SQL para sa database validation.',
      'Nakapag-report ng 50+ bugs na nagresulta sa mas mataas na product quality.',
      'Nakipag-collaborate sa 5-member development team para sa mabilisang pag-resolba ng issues.',
      'Nag-present ng test results sa weekly sprint meetings.'
    ],
    photo: donnaImage
  },
  {
    jobTitle: 'QA Analyst',
    company: 'XYZ Innovations',
    location: 'Taguig City, Philippines',
    startDate: 'September 2022',
    endDate: 'Present',
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

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Larawan kung meron */}
              {exp.photo && (
                <div className="flex-shrink-0 w-40 h-40 rounded-xl overflow-hidden bg-slate-900 border-4 border-purple-400/30">
                  <img src={exp.photo} alt={exp.jobTitle + ' photo'} className="w-full h-full object-cover" />
                </div>
              )}
              {/* Info at Descriptions */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">{exp.jobTitle}</h3>
                <p className="text-purple-300 text-lg font-semibold mb-1">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-1">{exp.location}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.startDate} – {exp.endDate}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-200 text-base">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience


