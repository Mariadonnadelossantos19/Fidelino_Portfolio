import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// PDF imports
import pdf1 from '../assets/pdf/microsoft_productivity_tools.pdf';
import pdf2 from '../assets/pdf/Programming for Intermediate Users Using Python.pdf';
import pdf3 from '../assets/pdf/Basic level of software enginnering.pdf';
import pdf4 from '../assets/pdf/MA. DONNA D. FIDELINO  - Figma 101 P1 Cert of Participation(sgd) (1).pdf';
import pdf5 from '../assets/pdf/MA. DONNA D. FIDELINO - Figma 101 P2 Cert of Participation(sgd).pdf';
import pdf6 from '../assets/pdf/MA. DONNA D. FIDELINO  Certificate of Participation.pdf';
import pdf7 from '../assets/pdf/Ma. Donna D. Fidelino (1).pdf';
import pdf8 from '../assets/pdf/MA. DONNA D. FIDELINO - Basic Photography Techniques Cert of Participation(sgd) (1).pdf';
import pdf9 from '../assets/pdf/WOPS_MA. DONNA D. FIDELINO.pdf';
import pdf10 from '../assets/pdf/Coursera 23PXHPVJ454H.pdf';
import pdf11 from '../assets/pdf/Cybersecurity Policy  Foundations.pdf';
import pdf12 from '../assets/pdf/excel.pdf';
import pdf13 from '../assets/pdf/Google_Sheets.pdf';
import pdf14 from '../assets/pdf/The foundation of online Teaching.pdf';
import pdf15 from '../assets/pdf/CISCO1.pdf';
import pdf16 from '../assets/pdf/CISCO2.pdf';
import pdf17 from '../assets/pdf/_certificate_fidelino-madonna-marsu-edu-ph_a7dd6698-8947-4b13-a10a-2802d89d419d.pdf';
import pdf18 from '../assets/pdf/Introduction_to_Cybersecurity_certificate_madonnafidelino0119-gmail-com_cdf8d3de-224c-45ed-8e1b-ec821a84bd38.pdf';
// Example image import (add your image certificates here)
// import img1 from '../assets/img/certificate1.jpg';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CERTIFICATES = [
  { title: 'Microsoft Productivity Tools', provider: 'DICT', topic: 'Tools & Platforms', date: '2022', file: pdf1, type: 'pdf' },
  { title: 'Programming for Intermediate Users Using Python', provider: 'DICT', topic: 'Web Development', date: '2022', file: pdf2, type: 'pdf' },
  { title: 'Basic Level of Software Engineering', provider: 'School/University', topic: 'Software Testing', date: '2022', file: pdf3, type: 'pdf' },
  { title: 'Figma 101 P1 Cert of Participation', provider: 'DICT', topic: 'Web Development', date: '2023', file: pdf4, type: 'pdf' },
  { title: 'Figma 101 P2 Cert of Participation', provider: 'DICT', topic: 'Web Development', date: '2023', file: pdf5, type: 'pdf' },
  { title: 'Certificate of Participation', provider: 'School/University', topic: 'General IT / Seminars', date: '2022', file: pdf6, type: 'pdf' },
  { title: 'Ma. Donna D. Fidelino (1)', provider: 'School/University', topic: 'General IT / Seminars', date: '2022', file: pdf7, type: 'pdf' },
  { title: 'Basic Photography Techniques Cert of Participation', provider: 'School/University', topic: 'General IT / Seminars', date: '2022', file: pdf8, type: 'pdf' },
  { title: 'WOPS', provider: 'School/University', topic: 'General IT / Seminars', date: '2022', file: pdf9, type: 'pdf' },
  { title: 'Coursera Certificate', provider: 'Coursera', topic: 'Cybersecurity', date: '2023', file: pdf10, type: 'pdf' },
  { title: 'Cybersecurity Policy Foundations', provider: 'DICT', topic: 'Cybersecurity', date: '2023', file: pdf11, type: 'pdf' },
  { title: 'Excel', provider: 'School/University', topic: 'Tools & Platforms', date: '2022', file: pdf12, type: 'pdf' },
  { title: 'Google Sheets', provider: 'School/University', topic: 'Tools & Platforms', date: '2022', file: pdf13, type: 'pdf' },
  { title: 'The Foundation of Online Teaching', provider: 'School/University', topic: 'General IT / Seminars', date: '2022', file: pdf14, type: 'pdf' },
  { title: 'CISCO1', provider: 'Cisco', topic: 'General IT / Seminars', date: '2022', file: pdf15, type: 'pdf' },
  { title: 'CISCO2', provider: 'Cisco', topic: 'General IT / Seminars', date: '2022', file: pdf16, type: 'pdf' },
  { title: 'Certificate (fidelino-madonna-marsu)', provider: 'School/University', topic: 'General IT / Seminars', date: '2022', file: pdf17, type: 'pdf' },
  { title: 'Introduction to Cybersecurity', provider: 'Cisco', topic: 'Cybersecurity', date: '2023', file: pdf18, type: 'pdf' },
  // Example image certificate:
  // { title: 'Web Dev Bootcamp', provider: 'Udemy', topic: 'Web Development', date: '2021', file: img1, type: 'image' },
];

const PROVIDERS = Array.from(new Set(CERTIFICATES.map(c => c.provider)));
const TOPICS = Array.from(new Set(CERTIFICATES.map(c => c.topic)));

const CertificatesSection = () => {
  const [selectedProvider, setSelectedProvider] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCert, setModalCert] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter logic
  const filtered = CERTIFICATES.filter(c =>
    (selectedProvider === 'All' || c.provider === selectedProvider) &&
    (selectedTopic === 'All' || c.topic === selectedTopic)
  );

  // Modal open/close
  const openModal = cert => {
    setModalCert(cert);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <section id="certificates" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center gradient-text">
          Professional Certificates
        </h2>
        {/* Provider Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <button
            onClick={() => { setSelectedProvider('All'); setSelectedTopic('All'); setVisibleCount(6); }}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400/60 ${selectedProvider === 'All' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : 'bg-white/10 text-white hover:bg-purple-500/20'}`}
          >
            All
          </button>
          {PROVIDERS.map(provider => (
            <button
              key={provider}
              onClick={() => { setSelectedProvider(provider); setSelectedTopic('All'); setVisibleCount(6); }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400/60 ${selectedProvider === provider ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : 'bg-white/10 text-white hover:bg-purple-500/20'}`}
            >
              {provider}
            </button>
          ))}
        </div>
        {/* Topic Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            onClick={() => { setSelectedTopic('All'); setVisibleCount(6); }}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400/60 ${selectedTopic === 'All' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow' : 'bg-white/10 text-white hover:bg-purple-500/20'}`}
          >
            All
          </button>
          {TOPICS.map(topic => (
            <button
              key={topic}
              onClick={() => { setSelectedTopic(topic); setVisibleCount(6); }}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400/60 ${selectedTopic === topic ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow' : 'bg-white/10 text-white hover:bg-purple-500/20'}`}
            >
              {topic}
            </button>
          ))}
        </div>
        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {filtered.slice(0, visibleCount).map(cert => (
            <button
              key={cert.title + cert.date}
              onClick={() => openModal(cert)}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full flex flex-col cursor-pointer focus:outline-none"
              tabIndex={0}
              aria-label={`Preview certificate: ${cert.title}`}
            >
              <div className="w-full h-40 bg-white/10 flex items-center justify-center overflow-hidden">
                {cert.type === 'pdf' ? (
                  <Document file={cert.file} loading={<div className="text-gray-400">Loading...</div>}>
                    <Page pageNumber={1} width={250} renderTextLayer={false} renderAnnotationLayer={false} />
                  </Document>
                ) : (
                  <img src={cert.file} alt={cert.title} className="object-contain h-full w-full" />
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
                <p className="text-purple-300 text-xs font-medium mb-2">{cert.topic}</p>
                <p className="text-gray-300 text-xs">{cert.provider}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none blur-xl -z-10"></div>
            </button>
          ))}
        </div>
        {/* Load More Button */}
        {filtered.length > visibleCount && (
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setVisibleCount(v => v + 6)}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
            >
              Load More
            </button>
          </div>
        )}
        {/* Modal Preview */}
        {modalOpen && modalCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="bg-slate-900 rounded-2xl p-6 max-w-3xl w-full relative shadow-2xl">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-pink-500/80 hover:bg-pink-600 rounded-full p-2 focus:outline-none"
                aria-label="Close preview"
              >
                &times;
              </button>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold text-white mb-2">{modalCert.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{modalCert.provider} &bull; {modalCert.topic} &bull; {modalCert.date}</p>
                <div className="w-full flex justify-center items-center my-4">
                  {modalCert.type === 'pdf' ? (
                    <Document file={modalCert.file} loading={<div className="text-gray-400">Loading...</div>}>
                      <Page pageNumber={1} width={500} renderTextLayer={false} renderAnnotationLayer={false} />
                    </Document>
                  ) : (
                    <img src={modalCert.file} alt={modalCert.title} className="object-contain max-h-[60vh] w-auto" />
                  )}
                </div>
                <a
                  href={modalCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  View Full Certificate
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection; 