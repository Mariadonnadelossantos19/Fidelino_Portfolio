import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import yourProfilePhoto from '../assets/images/pro1.JPG';
import istqbPDF from '../assets/pdf/Basic level of software enginnering.pdf';
import seleniumPDF from '../assets/pdf/CISCO1.pdf';
import reactPDF from '../assets/pdf/CISCO2.pdf';
import jsPDF from '../assets/pdf/Cybersecurity Policy  Foundations.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CERTIFICATES = [
  {
    title: 'Best Intern Award',
    provider: 'College of Information and Computing Sciences',
    date: '2025',
    file: istqbPDF,
    type: 'pdf',
  },
  {
    title: 'Model Intern Award',
    provider: 'Department of Science and Technology',
    date: '2025',
    file: seleniumPDF,
    type: 'pdf',
  },
  {
    title: 'Oustanding Programmer Award',
    provider: 'Department of Science and Technology',
    date: '2025',
    file: reactPDF,
    type: 'pdf',
  },
  {
    title: 'Collegiate Sports Achievement Award',
    provider: 'College of Information and Technology',
    date: '2023',
    file: jsPDF,
    type: 'pdf',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
        {/* Profile Photo - Main Visual */}
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:block">
          <img
            src={yourProfilePhoto}
            alt="Ma. Donna Fidelino"
            className="h-[380px] w-auto md:h-[480px] object-cover rounded-3xl shadow-2xl border-none bg-gradient-to-b from-purple-500/10 to-pink-500/10"
            style={{ boxShadow: '0 8px 40px 0 rgba(128,0,128,0.25)' }}
          />
        </div>
        {/* Education Details & Certificates */}
        <div className="flex-1 w-full">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Education & Credentials</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-300 mb-1">BS in Information Technology</h3>
            <p className="text-lg text-gray-200 mb-1">Marinduque State University</p>
            <p className="text-md text-gray-400">Graduated:2025 </p>
            {/* Optional: honors/awards */}
          </div>
          {/* Certificates Gallery */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Relevant Certificates</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {CERTIFICATES.map(cert => (
                <div key={cert.title} className="bg-white/10 rounded-xl p-2 flex flex-col items-center gap-2 shadow hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 flex items-center justify-center bg-white/20 rounded-lg overflow-hidden">
                    {cert.type === 'pdf' ? (
                      <Document file={cert.file} loading={<div className='text-xs text-gray-400'>Loading...</div>}>
                        <Page pageNumber={1} width={60} renderTextLayer={false} renderAnnotationLayer={false} />
                      </Document>
                    ) : (
                      <img src={cert.file} alt={cert.title} className="object-contain h-full w-full" />
                    )}
                  </div>
                  <div className="text-xs text-white text-center font-semibold line-clamp-2">{cert.title}</div>
                  <div className="text-[10px] text-gray-400 text-center">{cert.provider} <br /> {cert.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 