import React from 'react';
import cvFile from '../assets/pdf/Ma. Donna Fidellino CV.pdf';
import heroImage from '../assets/images/donna1.jpg';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen min-h-[100dvh] flex items-center justify-center relative pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 md:pb-20 px-3 sm:px-4 safe-top">
      <div className="section-container w-full max-w-4xl">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Left: Name & intro first so it’s the main focus */}
          <div className="text-center lg:text-left order-1 min-w-0">
            <p className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-teal-700 dark:text-teal-300 bg-teal-500/15 dark:bg-teal-500/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md mb-3 sm:mb-4 break-words max-w-full">
              QA Engineer & Full Stack Developer
            </p>
            <h1 className="text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-slate-800 dark:text-slate-100 leading-[1.15] tracking-tight mb-3 sm:mb-5 pb-2 border-b-4 border-teal-500 dark:border-teal-400 inline-block break-words">
              Ma. Donna D. Fidelino
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-5 sm:mb-8 font-medium break-words">
              I build and test web applications. Focused on clean code, automation, and shipping things that work.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start mb-6 sm:mb-8">
              {['React', 'Node.js', 'Python', 'Laravel', 'Selenium', 'Postman'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-[11px] sm:text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="min-h-[44px] px-5 sm:px-6 py-3 sm:py-2.5 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-medium rounded-lg text-sm transition-colors shadow-sm touch-manipulation"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="min-h-[44px] px-5 sm:px-6 py-3 sm:py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transition-colors touch-manipulation"
              >
                Contact
              </button>
              <a
                href={cvFile}
                download
                className="min-h-[44px] px-5 sm:px-6 py-3 sm:py-2.5 border border-teal-500/50 dark:border-teal-400/50 text-teal-600 dark:text-teal-400 font-medium rounded-lg text-sm hover:bg-teal-50 dark:hover:bg-teal-500/10 transition-colors inline-flex items-center justify-center touch-manipulation"
              >
                Download CV
              </a>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <span><strong className="text-slate-700 dark:text-slate-300">1+</strong> years</span>
              <span><strong className="text-slate-700 dark:text-slate-300">10+</strong> projects</span>
              <span><strong className="text-slate-700 dark:text-slate-300">QA</strong> & dev</span>
            </div>
          </div>

          {/* Right: Professional headshot — modest size so name stays the focus */}
          <div className="w-full flex justify-center lg:justify-end order-2 min-w-0">
            <div className="w-full max-w-[160px] min-[375px]:max-w-[200px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px] aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-lg ring-1 ring-slate-200/50 dark:ring-slate-600/50 shrink-0">
              <img
                src={heroImage}
                alt="Ma. Donna D. Fidelino"
                className="w-full h-full object-cover object-top"
                width={280}
                height={373}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 