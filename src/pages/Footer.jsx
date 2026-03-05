import React from 'react';

const Footer = () => {
  const scrollToTop = () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="py-6 sm:py-8 px-4 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 safe-bottom">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left break-words">
          © {new Date().getFullYear()} Ma. Donna Fidelino
        </p>
        <button
          type="button"
          onClick={scrollToTop}
          className="min-h-[44px] min-w-[44px] px-4 py-2 text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors touch-manipulation"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer; 