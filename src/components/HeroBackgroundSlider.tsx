import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideData {
  id: number;
  image: string;
  badge: string;
  title: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: '/images/hero_enterprise.jpg',
    badge: 'Enterprise Engineering',
    title: 'Senior Architecture Pods & Agile Squads',
  },
  {
    id: 2,
    image: '/images/hero_cloud.jpg',
    badge: 'Cloud Infrastructure',
    title: 'Mission-Critical Cloud Datacenters & DevOps',
  },
  {
    id: 3,
    image: '/images/hero_sprint.jpg',
    badge: 'High-Velocity Delivery',
    title: 'Full-Stack Software Sprints & Modernization',
  },
  {
    id: 4,
    image: '/images/hero_warroom.jpg',
    badge: 'Systems Governance',
    title: 'Zero-Trust Security & High-Concurrency Systems',
  },
];

export const HeroBackgroundSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Background Slides with Smooth Crossfade */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        );
      })}

      {/* High-End Enterprise Contrast Overlays */}
      {/* 1. Deep slate directional gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/80" />
      {/* 2. Vertical top & bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/90" />
      {/* 3. Subtle dark slate tint */}
      <div className="absolute inset-0 bg-slate-950/40" />

      {/* Slide Navigation & Indicator Pills (Pointer events enabled for interaction) */}
      <div className="absolute bottom-6 right-6 md:right-12 z-20 pointer-events-auto flex items-center space-x-3 bg-slate-900/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-slate-700/60 shadow-lg">
        <span className="text-[11px] font-medium text-slate-300 tracking-wide pr-1">
          {slides[currentIndex].badge}
        </span>
        <div className="flex items-center space-x-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to background slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-blue-500' : 'w-1.5 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center space-x-1 pl-1 border-l border-slate-700/80">
          <button
            onClick={prevSlide}
            aria-label="Previous backdrop slide"
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next backdrop slide"
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
