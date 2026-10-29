import React from 'react';

export interface TechItem {
  name: string;
  category: string;
  svg: React.ReactNode;
}

export const techStackLogos: TechItem[] = [
  {
    name: 'Amazon Web Services',
    category: 'Cloud Infrastructure',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M6.8 14.8c-.8.6-2 .9-3 .9-1.4 0-2.6-.5-3.6-1.5-.2-.2-.2-.5 0-.7l.8-.8c.2-.2.5-.2.7 0 .7.7 1.4 1 2.1 1 .7 0 1.5-.2 2.1-.6.2-.1.5-.1.7.1l.6.8c.2.2.1.5-.4.8z" fill="#FF9900" />
        <path d="M19.5 17.5c-4.2 3.1-10.4 4.7-15.7 2.1-.3-.1-.3-.6 0-.7 5.1-2.5 11.1-1 15.2-1.9.5-.1.8.3.5.5z" fill="#FF9900" />
        <path d="M20.5 16.3c-.4-.5-2.6-.3-3.6-.1-.3 0-.4-.3-.1-.5 1.8-1.3 4.7-.9 5.1-.4.4.5-.1 3.4-1.8 4.8-.3.2-.5.1-.4-.2.4-1 .2-3.1-.2-3.6z" fill="#FF9900" />
        <path d="M7.7 6.4h1.7l2.4 8.7h-1.5l-.6-2.3H6.8l-.6 2.3H4.8l2.9-8.7zm1.6 5.1l-.8-3.4-.9 3.4h1.7z" fill="currentColor" />
        <path d="M11.9 6.4h1.4l1.2 5.6 1.3-5.6h1.4l1.3 5.6 1.2-5.6h1.4l-1.8 8.7h-1.5l-1.3-5.5-1.3 5.5h-1.5l-1.8-8.7z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Microsoft Azure',
    category: 'Enterprise Cloud',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M13.2 2.5L4 18.2h5.7L15 8.3l3.5 9.9H20L13.2 2.5z" fill="#0089D6" />
        <path d="M9.7 18.2l3.5-6 4.3 6H9.7z" fill="#0072C6" />
        <path d="M15 8.3l-5.3 9.9H4l9.2-15.7 1.8 5.8z" fill="#0089D6" />
        <path d="M13.2 12.2l-3.5 6h7.8l-4.3-6z" fill="#1B4F9B" />
      </svg>
    ),
  },
  {
    name: 'Google Cloud Platform',
    category: 'Distributed Systems',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" opacity="0.15" />
        <path d="M12 4c2.8 0 5.2 1.8 6.1 4.3l.3.9 1 .1c1.8.2 3.1 1.7 3.1 3.5 0 2-.8 3.5-2.5 3.7V17c2.5-.2 4.5-2.3 4.5-4.8 0-2.4-1.8-4.4-4.2-4.7-.6-3.2-3.4-5.6-6.8-5.6-2.7 0-5 1.5-6.2 3.8l-.8 1.5-1.6.4C3.1 9 1.5 10.5 1.5 12.5 1.5 15 3.5 17 6 17v-.5C4 16.5 2.5 15 2.5 13.2c0-1.6 1.2-3 2.8-3.2l1-.1.4-.9C7.7 6.4 9.7 5 12 5v-1z" fill="#4285F4" />
        <path d="M16 11l-4-4-4 4h2.5v5h3v-5H16z" fill="#EA4335" />
        <circle cx="12" cy="13.5" r="1.5" fill="#FBBC05" />
        <path d="M6 14c0-1.7 1.3-3.1 3-3.4v-1.1C6.7 9.9 5 11.7 5 14h1z" fill="#34A853" />
      </svg>
    ),
  },
  {
    name: 'Kubernetes',
    category: 'Container Orchestration',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" stroke="#326CE5" strokeWidth="1.8" strokeLinejoin="round" fill="#326CE5" fillOpacity="0.1" />
        <circle cx="12" cy="12" r="3" fill="#326CE5" />
        <path d="M12 9V5M12 19v-4M9.5 10.5L6 8.5M18 15.5l-3.5-2M9.5 13.5L6 15.5M18 8.5l-3.5 2" stroke="#326CE5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Docker Engine',
    category: 'Containerization',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M22.5 11.5c-.3-.2-1.5-.4-2.7.2-.3-.8-.9-1.4-1.7-1.8l-.5-.3-.3.5c-.5.8-.6 1.8-.3 2.7-.4.2-1.4.3-2.1.1-.3-.1-.5 0-.7.2-.5.5-.8 1.1-.8 1.8 0 3 3.5 4.5 7.5 4.5 5 0 6.5-2.5 6.5-4.5 0-.7-.4-1.3-.9-1.8-.4-.3-.9-.5-1.4-.6-.2-.3-.5-.7-.7-.9l-.3-.3-.2.3c-.2.4-.2.7-.1 1.1z" fill="#2496ED" />
        <rect x="2" y="11" width="2.5" height="2" rx="0.3" fill="#2496ED" />
        <rect x="5.5" y="11" width="2.5" height="2" rx="0.3" fill="#2496ED" />
        <rect x="9" y="11" width="2.5" height="2" rx="0.3" fill="#2496ED" />
        <rect x="5.5" y="8" width="2.5" height="2" rx="0.3" fill="#2496ED" />
        <rect x="9" y="8" width="2.5" height="2" rx="0.3" fill="#2496ED" />
        <rect x="12.5" y="11" width="2.5" height="2" rx="0.3" fill="#2496ED" />
        <rect x="12.5" y="8" width="2.5" height="2" rx="0.3" fill="#2496ED" />
        <rect x="9" y="5" width="2.5" height="2" rx="0.3" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL Enterprise',
    category: 'Mission-Critical SQL',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5c-2.8 0-4.5-1.7-4.5-3.5 0-.8.4-1.5 1.1-2 .3-.2.7-.4 1.1-.5-.6-.9-1-2-1-3.2 0-2.3 1.8-4.1 4.1-4.1 1.9 0 3.5 1.3 3.9 3.1.8.2 1.5.6 2 1.2.6.8.9 1.7.9 2.7 0 2.6-2.5 4.8-5.7 6.1-.6.1-1.2.2-1.9.2z" fill="#4169E1" opacity="0.15" />
        <path d="M12.5 5.5c-1.9 0-3.5 1.4-3.5 3.2 0 1 .5 2 1.3 2.6-.5.4-.8.9-.8 1.5 0 1.3 1.3 2.5 3.3 2.5.4 0 .8-.1 1.2-.2 1.8-.7 3-2 3-3.6 0-.8-.3-1.6-.8-2.2-.4-.5-1-.8-1.7-.9-.4-1.6-1.7-2.9-3.2-2.9h-1.8z" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11.5" cy="8.5" r="0.8" fill="#4169E1" />
      </svg>
    ),
  },
  {
    name: 'React 19',
    category: 'Frontend Engineering',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js 15',
    category: 'Full-Stack Framework',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="currentColor" className="text-slate-900 dark:text-white" />
        <path d="M15.5 17L8.5 7.5H7v9h1.5v-7l7 9h1z" fill="currentColor" className="text-white dark:text-slate-900" />
        <rect x="14" y="7.5" width="1.5" height="6" fill="currentColor" className="text-white dark:text-slate-900" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'Type-Safe Architecture',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
        <path d="M7 9h6v2H10.5v6H8.5v-6H7V9zm7 2.5c.5-.4 1.2-.6 2.1-.6 1.4 0 2.4.7 2.4 2 0 .9-.5 1.5-1.5 1.9l-1 .4c-.6.2-.9.5-.9.9 0 .4.4.7 1 .7.6 0 1.2-.3 1.7-.7l.8 1.3c-.7.6-1.6.9-2.6.9-1.7 0-2.6-.9-2.6-2.2 0-1 .6-1.7 1.6-2.1l1-.4c.5-.2.8-.4.8-.8 0-.4-.4-.6-.9-.6-.5 0-1.1.2-1.5.6l-.9-1.4z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Python 3.12',
    category: 'AI & Data Engineering',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2c-3.1 0-4.9.4-4.9 2.2v2.2h5v.8H5.2c-1.8 0-3.2 1.4-3.2 3.2 0 1.8 1.1 3.1 3 3.1h1.5v-2c0-1.4 1.2-2.5 2.5-2.5h5V7.2c0-1.8-1.5-3.2-3.2-3.2h1.1-2z" fill="#3776AB" />
        <circle cx="9.5" cy="4.5" r="0.8" fill="white" />
        <path d="M12.1 22c3.1 0 4.9-.4 4.9-2.2v-2.2h-5v-.8h6.8c1.8 0 3.2-1.4 3.2-3.2 0-1.8-1.1-3.1-3-3.1h-1.5v2c0 1.4-1.2 2.5-2.5 2.5h-5v1.8c0 1.8 1.5 3.2 3.2 3.2h-1.1z" fill="#FFD43B" />
        <circle cx="14.5" cy="19.5" r="0.8" fill="#3776AB" />
      </svg>
    ),
  },
  {
    name: 'PyTorch AI',
    category: 'Deep Learning & LLMs',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12.5 2.5a.7.7 0 00-.9.2L9.4 6.3a8 8 0 106.8 6.4.7.7 0 00-.7-.8h-1.2a.7.7 0 00-.7.6 5.5 5.5 0 11-4.7-4.4l1.6-2.5a.7.7 0 00-.2-.9l-1.3-.8z" fill="#EE4C2C" />
        <circle cx="15.5" cy="4.5" r="1.2" fill="#EE4C2C" />
      </svg>
    ),
  },
  {
    name: 'Node.js Enterprise',
    category: 'Backend Microservices',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="#5FA04E" opacity="0.15" />
        <path d="M12 2.5l7.8 4.5v9L12 20.5l-7.8-4.5V7L12 2.5z" stroke="#5FA04E" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 7v5l4 2.5" stroke="#5FA04E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Redis In-Memory',
    category: 'Low-Latency Cache',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L2 7.5l10 4.5 10-4.5L12 3z" fill="#DC382D" />
        <path d="M2 12l10 4.5 10-4.5" stroke="#DC382D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 16.5l10 4.5 10-4.5" stroke="#DC382D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Modern UI Systems',
    svg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M6 10c1.5-3 3.5-4 6-3 1.8.8 2.6 2.2 3.8 3.4 1.9 1.9 4 2.6 6.2 1.6 1.5-3 3.5-4 6-3-1.8.8-2.6 2.2-3.8 3.4-1.9 1.9-4 2.6-6.2 1.6-1.5 3-3.5 4-6 3-1.8-.8-2.6-2.2-3.8-3.4C6.3 11.7 4.2 11 2 12c1.5-3 3.5-4 6-3z" fill="#06B6D4" />
      </svg>
    ),
  },
];

export const TechEcosystemMarquee: React.FC = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900/90 py-5 border-y border-slate-200 dark:border-slate-800 overflow-hidden relative">
      {/* Infinite Running Marquee Track */}
      <div className="relative w-full overflow-hidden flex mask-gradient">
        {/* Subtle edge fades for ultra high-end look */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-slate-100 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-slate-100 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 py-1">
          {/* First loop of items */}
          {techStackLogos.map((tech, idx) => (
            <div
              key={`tech-1-${idx}`}
              className="flex items-center space-x-3.5 px-5 py-3 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500 dark:hover:border-blue-400 transition-colors shrink-0 group cursor-default"
            >
              {tech.svg}
              <div className="text-left">
                <div className="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {tech.category}
                </div>
              </div>
            </div>
          ))}

          {/* Duplicated track for seamless infinite looping */}
          {techStackLogos.map((tech, idx) => (
            <div
              key={`tech-2-${idx}`}
              className="flex items-center space-x-3.5 px-5 py-3 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500 dark:hover:border-blue-400 transition-colors shrink-0 group cursor-default"
            >
              {tech.svg}
              <div className="text-left">
                <div className="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
