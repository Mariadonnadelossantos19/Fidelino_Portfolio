import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="section-container text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Ma. Donna Fidelino
        </p>
      </div>
    </footer>
  );
};

export default Footer; 