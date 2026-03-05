import React, { useState } from 'react';

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
];

const PROVIDERS = Array.from(new Set(CERTIFICATES.map(c => c.provider)));
const TOPICS = Array.from(new Set(CERTIFICATES.map(c => c.topic)));

const CertificatesSection = () => {
  const [selectedProvider, setSelectedProvider] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCert, setModalCert] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Filter logic
  const filtered = CERTIFICATES.filter(c =>
    (selectedProvider === 'All' || c.provider === selectedProvider) &&
    (selectedTopic === 'All' || c.topic === selectedTopic)
  );

  // Modal open/close
  const openModal = cert => {
    setModalCert(cert);
    setModalOpen(true);
    setIsFullscreen(false);
  };
  const closeModal = () => {
    setModalOpen(false);
    setIsFullscreen(false);
  };
  
  // Fullscreen toggle
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="certificates" className="py-16 px-4 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-10">
          <p className="section-label text-teal-600 dark:text-teal-400 mb-2">Certificates</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            Certificates
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => { setSelectedProvider('All'); setSelectedTopic('All'); setVisibleCount(6); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedProvider === 'All' ? 'bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-900' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-600'}`}
          >
            All
          </button>
          {PROVIDERS.map(provider => (
            <button
              key={provider}
              onClick={() => { setSelectedProvider(provider); setSelectedTopic('All'); setVisibleCount(6); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedProvider === provider ? 'bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-900' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-600'}`}
            >
              {provider}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => { setSelectedTopic('All'); setVisibleCount(6); }}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${selectedTopic === 'All' ? 'bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-900' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'}`}
          >
            All topics
          </button>
          {TOPICS.map(topic => (
            <button
              key={topic}
              onClick={() => { setSelectedTopic(topic); setVisibleCount(6); }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${selectedTopic === topic ? 'bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-900' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'}`}
            >
              {topic}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filtered.slice(0, visibleCount).map((cert, index) => (
            <button
              key={`${cert.title}-${cert.date}-${index}`}
              onClick={() => openModal(cert)}
              className="text-left rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 overflow-hidden hover:border-teal-500/40 transition-colors h-full flex flex-col focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
              tabIndex={0}
              aria-label={`Preview certificate: ${cert.title}`}
            >
              <div className="w-full h-36 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                {cert.type === 'pdf' ? (
                  <iframe src={cert.file} className="w-full h-full border-0" title={cert.title} />
                ) : (
                  <img src={cert.file} alt={cert.title} className="object-contain h-full w-full" />
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1 line-clamp-2">{cert.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs">{cert.provider} · {cert.date}</p>
                <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{cert.topic}</p>
              </div>
            </button>
          ))}
        </div>

        {filtered.length > visibleCount && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisibleCount(v => v + 6)}
              className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-medium rounded-lg text-sm transition-colors"
            >
              Load more
            </button>
          </div>
        )}

        {modalOpen && modalCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 dark:bg-black/90 p-4">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 max-w-3xl w-full relative border border-slate-200 dark:border-slate-700">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none"
                aria-label="Close preview"
              >
                &times;
              </button>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">{modalCert.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{modalCert.provider} · {modalCert.topic} · {modalCert.date}</p>
              <div className="w-full flex justify-center my-4 min-h-[50vh]">
                {modalCert.type === 'pdf' ? (
                  <iframe src={modalCert.file} className="w-full h-[60vh] border-0 rounded-lg" title={modalCert.title} />
                ) : (
                  <img src={modalCert.file} alt={modalCert.title} className="object-contain max-h-[60vh] w-auto" />
                )}
              </div>
              <a
                href={modalCert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2.5 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-medium rounded-lg text-sm transition-colors"
              >
                Open certificate
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection; 