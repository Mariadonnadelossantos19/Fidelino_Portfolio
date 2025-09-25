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
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/5 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-pink-500/5 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences through full-stack development and quality engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a dedicated <span className="text-cyan-400 font-semibold">Full Stack Developer & QA Engineer</span> with a passion for building end-to-end solutions and ensuring software excellence. With expertise in both frontend and backend development, plus comprehensive testing strategies, I create robust applications that exceed user expectations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to create meaningful solutions. I believe in the power of full-stack development combined with thorough testing to build trust and deliver exceptional user experiences.
              </p>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">1+</div>
                <div className="text-gray-300 text-sm font-mono">Years Experience</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-gray-300 text-sm font-mono">Projects Completed</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group">
                <div className="text-3xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-gray-300 text-sm font-mono">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Skills */}
          <div className="relative">
            <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 shadow-2xl">
              <h3 className="text-2xl font-bold text-cyan-400 font-mono mb-8 text-center">
                What I Do
              </h3>
              
              {/* Skills Navigation */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-2 bg-gray-800/50 rounded-lg p-1">
                  {skills.map((skill, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSkill(index)}
                      className={`px-4 py-2 rounded-md text-sm font-mono transition-all duration-300 ${
                        activeSkill === index
                          ? 'bg-cyan-500 text-black'
                          : 'text-gray-400 hover:text-cyan-400'
                      }`}
                    >
                      {skill.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Skill Display */}
              <div className="relative">
                <div className={`p-6 rounded-xl border-2 ${skills[activeSkill].borderColor} ${skills[activeSkill].bgColor} transition-all duration-500`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skills[activeSkill].color} flex items-center justify-center shadow-lg`}>
                      {skills[activeSkill].icon}
                    </div>
                    <h4 className="text-xl font-bold text-white font-mono">{skills[activeSkill].title}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{skills[activeSkill].description}</p>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {skills.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeSkill ? 'bg-cyan-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Graphics Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center shadow-lg animate-bounce border border-cyan-500/30">
              <span className="text-cyan-400 text-2xl">💻</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center shadow-lg animate-pulse border border-purple-500/30">
              <span className="text-purple-400 text-lg">⚡</span>
            </div>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 text-cyan-400/10 text-6xl font-mono animate-pulse">{"</>"}</div>
        <div className="absolute bottom-20 right-10 text-blue-400/10 text-4xl font-mono animate-bounce">{"{}"}</div>
        <div className="absolute top-1/2 left-5 text-cyan-300/10 text-3xl font-mono animate-ping">{"=>"}</div>
        <div className="absolute top-1/3 right-5 text-purple-400/10 text-2xl font-mono animate-pulse">{"⚡"}</div>
        <div className="absolute bottom-1/3 left-10 text-green-400/10 text-3xl font-mono animate-bounce">{"💻"}</div>
      </div>
    </section>
  );
};

export default AboutSection; 