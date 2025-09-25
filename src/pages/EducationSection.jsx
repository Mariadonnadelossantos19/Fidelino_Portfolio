import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import yourProfilePhoto from '../assets/images/pro1.JPG';
import istqbPDF from '../assets/pdf/Basic level of software enginnering.pdf';
import seleniumPDF from '../assets/pdf/CISCO1.pdf';
import reactPDF from '../assets/pdf/CISCO2.pdf';
import jsPDF from '../assets/pdf/Cybersecurity Policy  Foundations.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CERTIFICATES = [
  {
    title: 'With Distinction',
    provider: 'College of Information and Computing Sciences',
    date: '2025',
    file: istqbPDF,
    type: 'pdf',
    icon: '🎓',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Best Intern Award',
    provider: 'College of Information and Computing Sciences',
    date: '2025',
    file: istqbPDF,
    type: 'pdf',
    icon: '🏆',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Model Intern Award',
    provider: 'Department of Science and Technology',
    date: '2025',
    file: seleniumPDF,
    type: 'pdf',
    icon: '⭐',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Outstanding Programmer Award',
    provider: 'Department of Science and Technology',
    date: '2025',
    file: reactPDF,
    type: 'pdf',
    icon: '💻',
    color: 'from-green-500 to-emerald-500'
  },
];

const EducationSection = () => {
  const [activeCert, setActiveCert] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCert((prev) => (prev + 1) % CERTIFICATES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/5 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-cyan-500/5 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Credentials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic excellence and professional achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Profile & Education */}
          <div className="space-y-6">
            {/* Profile Photo with Enhanced Graphics */}
            <div className="relative mb-8">
              <div className="relative group">
          <img
            src={yourProfilePhoto}
            alt="Ma. Donna Fidelino"
                  className="h-[350px] w-auto object-cover rounded-2xl shadow-2xl border border-cyan-500/30 transition-all duration-500 group-hover:scale-105 mx-auto"
                  style={{ boxShadow: '0 8px 40px 0 rgba(6,182,212,0.25)' }}
                />
                {/* Floating Graphics Elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center shadow-lg animate-bounce border border-cyan-500/30">
                  <span className="text-cyan-400 text-lg">🎓</span>
                </div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center shadow-lg animate-pulse border border-purple-500/30">
                  <span className="text-purple-400 text-sm">⭐</span>
                </div>
                {/* Background Glow Effects */}
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Education Details */}
            <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 shadow-2xl">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono">Academic Background</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg">🎓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-mono">BS in Information Technology</h4>
                    <p className="text-gray-300 text-sm">Marinduque State University</p>
                    <p className="text-cyan-400 text-xs font-mono">Graduated: 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Certificates */}
          <div className="space-y-6">
            <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 shadow-2xl">
              <h3 className="text-xl font-bold text-cyan-400 mb-6 font-mono text-center">
                Awards & Certificates
              </h3>
              
              {/* Certificate Navigation */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1 bg-gray-800/50 rounded-lg p-1">
                  {CERTIFICATES.map((cert, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCert(index)}
                      className={`px-2 py-1 rounded-md text-xs font-mono transition-all duration-300 ${
                        activeCert === index
                          ? 'bg-cyan-500 text-black'
                          : 'text-gray-400 hover:text-cyan-400'
                      }`}
                    >
                      {cert.icon}
                    </button>
                  ))}
                </div>
        </div>

              {/* Active Certificate Display */}
              <div className="relative mb-6">
                <div className={`p-4 rounded-xl border-2 bg-gradient-to-br ${CERTIFICATES[activeCert].color}/10 border-cyan-500/30 transition-all duration-500`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${CERTIFICATES[activeCert].color} flex items-center justify-center shadow-lg text-lg`}>
                      {CERTIFICATES[activeCert].icon}
          </div>
          <div>
                      <h4 className="text-lg font-bold text-white font-mono">{CERTIFICATES[activeCert].title}</h4>
                      <p className="text-gray-300 text-sm">{CERTIFICATES[activeCert].provider}</p>
                      <p className="text-cyan-400 text-xs font-mono">{CERTIFICATES[activeCert].date}</p>
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center mt-4 space-x-1">
                  {CERTIFICATES.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        index === activeCert ? 'bg-cyan-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Certificate Grid */}
            <div className="grid grid-cols-2 gap-3">
              {CERTIFICATES.map((cert, index) => (
                <div
                  key={`${cert.title}-${cert.date}-${index}`}
                  className={`bg-black/50 backdrop-blur-sm rounded-xl p-3 border transition-all duration-300 cursor-pointer hover:scale-105 ${
                    activeCert === index
                      ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                      : 'border-gray-700 hover:border-cyan-400/30'
                  }`}
                  onClick={() => setActiveCert(index)}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg text-lg`}>
                      {cert.icon}
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-semibold text-white font-mono line-clamp-2">{cert.title}</div>
                      <div className="text-xs text-gray-400">{cert.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 text-cyan-400/5 text-4xl font-mono animate-pulse">{"</>"}</div>
        <div className="absolute bottom-20 right-10 text-blue-400/5 text-3xl font-mono animate-bounce">{"{}"}</div>
        <div className="absolute top-1/2 left-5 text-cyan-300/5 text-2xl font-mono animate-ping">{"=>"}</div>
        <div className="absolute top-1/3 right-5 text-purple-400/5 text-xl font-mono animate-pulse">{"⚡"}</div>
        <div className="absolute bottom-1/3 left-10 text-green-400/5 text-2xl font-mono animate-bounce">{"💻"}</div>
      </div>
    </section>
  );
};

export default EducationSection; 