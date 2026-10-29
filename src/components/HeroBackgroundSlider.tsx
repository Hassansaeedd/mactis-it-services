import React, { useState, useEffect, useCallback } from 'react';

export interface SlideData {
  id: number;
  image: string;
  badge: string;
  title: string;
  description: string;
}

export const slides: SlideData[] = [
  {
    id: 1,
    image: '/images/hero_enterprise.jpg',
    badge: '01 / Custom Software',
    title: 'Senior Engineering Pods & Web Platforms',
    description: 'High-concurrency React 19 & Next.js architectures with clean microservices.',
  },
  {
    id: 2,
    image: '/images/hero_cloud.jpg',
    badge: '02 / Cloud & DevOps',
    title: 'Automated Kubernetes & Multi-Cloud Clusters',
    description: 'Resilient AWS and Azure deployments with zero-downtime CI/CD automation.',
  },
  {
    id: 3,
    image: '/images/hero_sprint.jpg',
    badge: '03 / Mobile Sprints',
    title: 'Cross-Platform iOS & Android Mobile Apps',
    description: 'Native performance mobile apps with live telemetry and offline sync.',
  },
  {
    id: 4,
    image: '/images/hero_warroom.jpg',
    badge: '04 / Enterprise Systems',
    title: 'Industrial ERPs, Weighbridges & IoT Automation',
    description: 'Mission-critical database schemas, hardware sync, and audit compliance.',
  },
];

interface HeroBackgroundSliderProps {
  onSlideChange?: (index: number) => void;
}

export const HeroBackgroundSlider: React.FC<HeroBackgroundSliderProps> = ({ onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 6000; // 6 seconds per slide
  const TICK_INTERVAL = 50; // update progress every 50ms

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % slides.length;
      if (onSlideChange) onSlideChange(next);
      return next;
    });
    setProgress(0);
  }, [onSlideChange]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev - 1 + slides.length) % slides.length;
      if (onSlideChange) onSlideChange(next);
      return next;
    });
    setProgress(0);
  }, [onSlideChange]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    if (onSlideChange) onSlideChange(index);
    setProgress(0);
  }, [onSlideChange]);

  // Timer for smooth progress and automatic slide rotation
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (TICK_INTERVAL / SLIDE_DURATION) * 100;
      });
    }, TICK_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div 
      className="absolute inset-0 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with Cinematic Dissolve & Smooth Ken Burns */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        );
      })}

      {/* Light, crisp contrast overlay - allows real offices, servers, and engineering teams to be clearly visible and prominent */}
      <div className="absolute inset-0 bg-slate-950/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-slate-950/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/50" />

      {/* Interactive Story Pillar Navigator Bar (Apple & Vercel Style) */}
      <div className="absolute bottom-6 left-0 right-0 z-30 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`text-left p-3 sm:p-3.5 rounded-lg backdrop-blur-md transition-all duration-300 relative overflow-hidden border ${
                    isActive
                      ? 'bg-slate-900/90 border-blue-500/80 shadow-lg shadow-blue-950/40'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  {/* Active Progress Filling Bar */}
                  {isActive && (
                    <div 
                      className="absolute top-0 left-0 bottom-0 bg-blue-500/15 transition-all duration-75 pointer-events-none"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                  {/* Top Bar Indicator */}
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
                    <div
                      className={`h-full transition-all duration-75 ${
                        isActive ? 'bg-blue-400' : 'bg-transparent'
                      }`}
                      style={{ width: isActive ? `${progress}%` : '0%' }}
                    />
                  </div>

                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-bold tracking-wider uppercase ${
                      isActive ? 'text-blue-400' : 'text-slate-400'
                    }`}>
                      {slide.badge}
                    </span>
                    {isActive && (
                      <span className="flex h-1.5 w-1.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
                      </span>
                    )}
                  </div>
                  <div className={`text-xs sm:text-sm font-semibold truncate ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}>
                    {slide.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Manual Slide Control Arrows & Pause Indicator */}
      <div className="absolute top-6 right-6 z-20 hidden lg:flex items-center space-x-2 bg-slate-950/70 backdrop-blur-md border border-slate-800 rounded-full p-1.5 text-xs text-slate-300">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="px-2 font-mono text-[11px] font-medium text-slate-400">
          0{currentIndex + 1} / 0{slides.length}
        </span>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
