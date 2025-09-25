import React from 'react';

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    gradientId: 'linkedin-gradient',
    gradient: (
      <linearGradient id="linkedin-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#0ea5e9" />
        <stop offset="1" stopColor="#06b6d4" />
      </linearGradient>
    )
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Mariadonnadelossantos19',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" fill="url(#github-gradient)" />
        <path d="M9.5 17c-3.5 1-3.5-2-5-2m10 4v-2.2c0-.6-.2-1-.5-1.3 1.7-.2 3.5-.8 3.5-3.7 0-.8-.3-1.5-.8-2 .1-.2.3-1-.1-2 0 0-.6-.2-2 .8a6.7 6.7 0 00-3.5 0c-1.4-1-2-.8-2-.8-.4 1-.2 1.8-.1 2-.5.5-.8 1.2-.8 2 0 2.9 1.8 3.5 3.5 3.7-.2.2-.4.5-.4 1V19" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    gradientId: 'github-gradient',
    gradient: (
      <linearGradient id="github-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#8b5cf6" />
        <stop offset="1" stopColor="#ec4899" />
      </linearGradient>
    )
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#facebook-gradient)" />
        <path d="M15 8h-2a2 2 0 00-2 2v2h-2v3h2v5h3v-5h2.1l.4-3H16v-1a.5.5 0 01.5-.5H17V8z" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    gradientId: 'facebook-gradient',
    gradient: (
      <linearGradient id="facebook-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#8b5cf6" />
        <stop offset="1" stopColor="#ec4899" />
      </linearGradient>
    )
  }
];

const SocialMediaBar = () => (
  <div className="fixed top-1/2 left-4 -translate-y-1/2 z-50 flex flex-col gap-3">
    <svg width="0" height="0">
      {socials.map(s => s.gradient)}
    </svg>
    {socials.map((s, i) => (
      <a
        key={s.name}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-lg shadow-lg bg-black/20 backdrop-blur-md p-3 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 border border-cyan-500/20 hover:border-cyan-400/40"
        style={{ boxShadow: '0 2px 12px 0 rgba(6,182,212,0.15)' }}
        aria-label={s.name}
      >
        {React.cloneElement(s.icon, {
          className: 'w-6 h-6 text-cyan-400 group-hover:text-black transition-colors duration-300',
          style: { filter: 'drop-shadow(0 0 6px #06b6d4aa)' }
        })}
      </a>
    ))}
  </div>
);

export default SocialMediaBar; 