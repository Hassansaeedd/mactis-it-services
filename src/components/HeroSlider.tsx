import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSlide {
  id: number;
  type: 'video' | 'image';
  src: string;
  tag: string;
  title: string;
  titleAccent: string;
  description: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

const slides: HeroSlide[] = [
  {
    id: 0,
    type: 'video',
    src: '/images/hero_video.mp4',
    tag: 'Enterprise Software & Cloud Engineering',
    title: 'Engineering Digital Excellence through',
    titleAccent: 'Modern Technology',
    description: 'Strategy, custom software engineering, and high-availability cloud platforms built for the next era of enterprise growth.',
    primaryBtnText: 'Schedule Consultation',
    primaryBtnLink: `https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to consult with Mactis about enterprise software development.')}`,
    secondaryBtnText: 'Explore Solutions',
    secondaryBtnLink: '#services',
  },
  {
    id: 1,
    type: 'image',
    src: '/images/hero_cloud.jpg',
    tag: 'Cloud Architecture & DevOps Systems',
    title: 'High-Availability Cloud Systems Built for',
    titleAccent: '99.9% Uptime',
    description: 'Multi-region server clusters, automated daily database backups, and zero-downtime microservices designed to safeguard your business.',
    primaryBtnText: 'Consult on Cloud Setup',
    primaryBtnLink: `https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to consult with Mactis about cloud hosting and DevOps.')}`,
    secondaryBtnText: 'View Cloud Services',
    secondaryBtnLink: '/services',
  },
  {
    id: 2,
    type: 'image',
    src: '/images/service_ai.jpg',
    tag: 'Intelligent AI & Automated Systems',
    title: 'Automate Business Operations with',
    titleAccent: 'AI-Powered Tools',
    description: 'Deploy 24/7 intelligent WhatsApp assistants, automate invoice generation, and extract live analytics directly to your smartphone.',
    primaryBtnText: 'Discuss AI Solutions',
    primaryBtnLink: `https://wa.me/923154327855?text=${encodeURIComponent('Hello! I am interested in custom AI and automation tools for our company.')}`,
    secondaryBtnText: 'Explore AI Capabilities',
    secondaryBtnLink: '/services',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/service_erp.jpg',
    tag: 'Industrial ERP & Management Software',
    title: 'Custom Management Software Built for',
    titleAccent: 'Industrial Scale',
    description: 'Weighbridge IoT hardware integration, multi-warehouse stock management, and automated financial ledgers built for large mills and factories.',
    primaryBtnText: 'Consult on Custom ERP',
    primaryBtnLink: `https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to inquire about industrial ERP and business management software.')}`,
    secondaryBtnText: 'View ERP Solutions',
    secondaryBtnLink: '/services',
  },
];

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const active = slides[current];

  return (
    <section 
      className="relative min-h-[720px] lg:min-h-[820px] flex flex-col justify-between overflow-hidden border-b border-slate-800 bg-slate-950 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Media Cross-Fade (Completely Visible & Vibrant) */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            {active.type === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src={active.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={active.src}
                alt={active.title}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Directional Scrim: Transparent on the right/center for complete visibility, soft contrast on the left for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl pt-32 pb-20 sm:pt-40 sm:pb-24 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-4 drop-shadow-md">
              {active.tag}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
              {active.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-sky-200">
                {active.titleAccent}
              </span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-2xl font-normal leading-relaxed mb-8 drop-shadow">
              {active.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={active.primaryBtnLink}
                target={active.primaryBtnLink.startsWith('http') ? '_blank' : undefined}
                rel={active.primaryBtnLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="btn-primary py-3.5 px-8 text-sm font-bold shadow-2xl w-full sm:w-auto text-center"
              >
                <span>{active.primaryBtnText}</span>
                <span className="ml-2 font-bold">→</span>
              </a>

              <a
                href={active.secondaryBtnLink}
                className="py-3.5 px-8 text-sm font-semibold text-white bg-slate-900/60 hover:bg-slate-900/80 border border-white/40 hover:border-white rounded-md backdrop-blur-md transition-all duration-200 w-full sm:w-auto text-center shadow-lg"
              >
                {active.secondaryBtnText}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Arrow Controls */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col space-y-3 z-20">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-12 h-12 rounded-full bg-slate-900/70 hover:bg-sky-600 text-white border border-white/20 hover:border-sky-400 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl"
          >
            <span className="text-base font-bold">↑</span>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-12 h-12 rounded-full bg-slate-900/70 hover:bg-sky-600 text-white border border-white/20 hover:border-sky-400 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl"
          >
            <span className="text-base font-bold">↓</span>
          </button>
        </div>
      </div>

      {/* Slide Navigation Pagination Bar */}
      <div className="relative z-10 border-t border-white/10 bg-slate-950/85 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {slides.map((s, idx) => {
              const isCurrent = idx === current;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrent(idx)}
                  className={`text-left p-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
                    isCurrent
                      ? 'bg-white/10 border border-sky-400/60'
                      : 'hover:bg-white/5 border border-white/5 text-slate-400'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className={`text-[10px] font-bold ${isCurrent ? 'text-sky-400' : 'text-slate-500'}`}>
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-white truncate block">
                      {idx === 0 ? 'Enterprise AI Video' : idx === 1 ? 'Cloud & DevOps' : idx === 2 ? 'AI Automation' : 'Industrial ERP'}
                    </span>
                  </div>

                  {/* Active Progress Bar */}
                  <div className="w-full bg-white/10 h-0.5 rounded-full mt-2 overflow-hidden">
                    {isCurrent && (
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 6.5, ease: 'linear' }}
                        className="h-full bg-sky-400"
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Global Key Stats Ribbon */}
        <div className="border-t border-white/5 py-4 bg-slate-950/90">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white">12+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white">20+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Production Deliveries</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-sky-400">99.9%</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Server Reliability</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white">3+ Years</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Engineering Track Record</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
