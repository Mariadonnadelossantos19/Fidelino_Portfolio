import React from 'react';

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#linkedin-gradient)" />
        <path d="M7 10v7" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="7" cy="7" r="1.5" fill="white" />
        <path d="M11 10v7m0-7h3.5a2.5 2.5 0 012.5 2.5V17" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    gradientId: 'linkedin-gradient',
    gradient: (
      <linearGradient id="linkedin-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#8b5cf6" />
        <stop offset="1" stopColor="#ec4899" />
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
  <div className="fixed top-1/2 left-4 -translate-y-1/2 z-50 flex flex-col gap-4">
    <svg width="0" height="0">
      {socials.map(s => s.gradient)}
    </svg>
    {socials.map((s, i) => (
      <a
        key={s.name}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-full shadow-lg bg-white/10 backdrop-blur-md p-3 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500"
        style={{ boxShadow: '0 2px 12px 0 rgba(139,92,246,0.15)' }}
        aria-label={s.name}
      >
        {React.cloneElement(s.icon, {
          className: 'w-7 h-7 text-white group-hover:text-white',
          style: { filter: 'drop-shadow(0 0 6px #8b5cf6aa)' }
        })}
      </a>
    ))}
  </div>
);

export default SocialMediaBar; 