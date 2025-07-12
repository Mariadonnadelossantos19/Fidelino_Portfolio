import React, { useState } from 'react';
import CarouselSlider from '../components/CarouselSlider';

const sampleImage = require('../assets/images/DONNA.jpg'); // Placeholder image

const CertificatesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "ISTQB Foundation Level",
      provider: "International Software Testing Qualifications Board",
      description: "Comprehensive certification covering fundamental testing concepts, methodologies, and best practices in software testing.",
      issuedDate: "December 2023",
      validUntil: "December 2026",
      category: "Testing & QA",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
      tags: ["Testing", "ISTQB", "Foundation"],
      image: sampleImage
    },
    {
      id: 2,
      title: "Selenium WebDriver Advanced",
      provider: "Selenium Certification Program",
      description: "Advanced automation testing certification covering Selenium WebDriver, TestNG, and comprehensive automation frameworks.",
      issuedDate: "June 2022",
      validUntil: "June 2025",
      category: "Automation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-blue-500 to-purple-500",
      tags: ["Selenium", "Automation", "Java"],
      image: sampleImage
    },
    {
      id: 3,
      title: "React Development",
      provider: "Meta (Facebook)",
      description: "Modern React development certification covering hooks, context, advanced patterns, and best practices.",
      issuedDate: "March 2023",
      validUntil: "March 2026",
      category: "Frontend Development",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-green-500 to-blue-500",
      tags: ["React", "JavaScript", "Frontend"],
      image: sampleImage
    },
    {
      id: 4,
      title: "AWS Certified Cloud Practitioner",
      provider: "Amazon Web Services",
      description: "Cloud computing fundamentals and AWS services overview for modern application deployment and management.",
      issuedDate: "September 2023",
      validUntil: "September 2026",
      category: "Cloud Computing",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      gradient: "from-orange-500 to-yellow-500",
      tags: ["AWS", "Cloud", "DevOps"],
      image: sampleImage
    },
    {
      id: 5,
      title: "Postman API Testing",
      provider: "Postman",
      description: "Comprehensive API testing and automation using Postman, including collections, environments, and CI/CD integration.",
      issuedDate: "January 2023",
      validUntil: "January 2026",
      category: "API Testing",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-red-500 to-orange-500",
      tags: ["Postman", "API", "Testing"],
      image: sampleImage
    },
    {
      id: 6,
      title: "Scrum Master Certified",
      provider: "Scrum Alliance",
      description: "Agile project management certification covering Scrum methodology, team facilitation, and sprint management.",
      issuedDate: "November 2022",
      validUntil: "November 2025",
      category: "Project Management",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      gradient: "from-indigo-500 to-purple-500",
      tags: ["Scrum", "Agile", "Management"],
      image: sampleImage
    }
  ];

  const handleViewCertificate = (certificateId) => {
    const cert = certificates.find(c => c.id === certificateId);
    setSelectedCertificate(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertificate(null);
  };

  // Create certificate cards for carousel
  const certificateCards = certificates.map((certificate) => (
    <div
      key={certificate.id}
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl h-full transform hover:-translate-y-2"
    >
      {/* Animated Badge/Seal */}
      <div className="absolute top-4 left-4 z-20 animate-float">
        <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse-glow">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          Verified
        </span>
      </div>
      {/* Certificate Header */}
      <div className={`bg-gradient-to-r ${certificate.gradient} p-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
            <div className="text-white group-hover:rotate-12 transition-transform duration-300">
              {certificate.icon}
            </div>
          </div>
          <div className="text-right">
            <div className="text-white/80 text-sm font-medium">{certificate.category}</div>
            <div className="text-white text-xs">Valid until {certificate.validUntil}</div>
          </div>
        </div>
      </div>
      {/* Certificate Content */}
      <div className="p-6 space-y-4 flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
            {certificate.title}
          </h3>
          <p className="text-purple-300 font-medium text-sm mb-3">
            {certificate.provider}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            {certificate.description}
          </p>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 overflow-x-auto">
          {certificate.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20 group-hover:bg-purple-500/20 group-hover:border-purple-400/50 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Certificate Details */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex justify-between items-center text-sm">
            <div>
              <span className="text-gray-400">Issued:</span>
              <span className="text-white ml-1">{certificate.issuedDate}</span>
            </div>
            <button
              onClick={() => handleViewCertificate(certificate.id)}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 group-hover:shadow-xl"
            >
              View Certificate
            </button>
          </div>
        </div>
      </div>
      {/* Enhanced Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none"></div>
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none blur-xl -z-10"></div>
    </div>
  ));

  return (
    <section id="certificates" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <CarouselSlider
          items={certificateCards}
          title="Professional Certificates"
          subtitle="Continuous learning and professional development are key to delivering exceptional results. These certifications validate my expertise and commitment to staying current with industry best practices."
          autoPlay={true}
          autoPlayInterval={4000}
          showDots={true}
          showArrows={true}
          itemsPerView={3}
          className="mb-16"
        />
        {/* Modal Preview */}
        {modalOpen && selectedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-slate-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative border border-purple-500/30 animate-slide-in">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-purple-500/20 hover:bg-pink-500/30 rounded-full p-2 transition-all duration-300"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="flex flex-col items-center">
                <img src={selectedCertificate.image} alt={selectedCertificate.title} className="w-32 h-32 object-cover rounded-xl mb-4 shadow-lg border-4 border-white/10" />
                <h3 className="text-2xl font-bold text-white mb-2 gradient-text">{selectedCertificate.title}</h3>
                <p className="text-purple-300 font-medium text-sm mb-2">{selectedCertificate.provider}</p>
                <p className="text-gray-300 text-sm mb-4 text-center">{selectedCertificate.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedCertificate.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between w-full text-sm mb-2">
                  <span className="text-gray-400">Issued: <span className="text-white">{selectedCertificate.issuedDate}</span></span>
                  <span className="text-gray-400">Valid until: <span className="text-white">{selectedCertificate.validUntil}</span></span>
                </div>
                <button
                  onClick={closeModal}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuously Learning & Growing
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always pursuing new certifications and learning opportunities to enhance my skills and stay ahead of industry trends.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection; 