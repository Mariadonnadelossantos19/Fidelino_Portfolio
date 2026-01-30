import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React, JavaScript, and modern CSS frameworks',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-400/30'
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js, Python, and database management',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-400/30'
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive testing strategies, automated testing, and quality assurance processes',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-400/30'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-zinc-900/50 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            Background & focus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            Full-stack development and quality assurance—focused on reliable, well-tested applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: copy + stats */}
          <div className="space-y-8">
            <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I'm a <strong className="text-slate-800 dark:text-slate-200">Full Stack Developer & QA Engineer</strong> focused on end-to-end solutions and software quality. I work across frontend and backend, with strong emphasis on testing and automation.
              </p>
              <p>
                I care about clear code, solid test coverage, and shipping features that work reliably for users.
              </p>
            </div>

            {/* Stats – simple row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/50 p-5 text-center">
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">1+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Years</div>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/50 p-5 text-center">
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">10+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Projects</div>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/50 p-5 text-center">
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">QA</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">& Dev</div>
              </div>
            </div>
          </div>

          {/* Right: skills tabs + content */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-6">
              What I do
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSkill(index)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    activeSkill === index
                      ? 'bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-900'
                      : 'bg-slate-200/80 dark:bg-slate-700/80 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-600'
                  }`}
                >
                  {skill.title}
                </button>
              ))}
            </div>
            <div className={`p-5 rounded-lg border ${skills[activeSkill].borderColor} ${skills[activeSkill].bgColor} transition-colors`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skills[activeSkill].color} flex items-center justify-center text-white`}>
                  {skills[activeSkill].icon}
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100">{skills[activeSkill].title}</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{skills[activeSkill].description}</p>
            </div>
            <div className="flex justify-center gap-1.5 mt-5">
              {skills.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    index === activeSkill ? 'bg-teal-500' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 