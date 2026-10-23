import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Layers, ShieldCheck, Cloud, Cpu } from 'lucide-react';
import { ImageWithSkeleton } from './SkeletonLoader';

interface HeroSlide {
  id: number;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero_enterprise.jpg',
    badge: 'CORE ENGINEERING',
    title: 'Senior Engineering & Architecture Pods',
    subtitle: 'Cross-functional agile squads architecting scalable enterprise systems.',
    icon: Layers,
  },
  {
    id: 2,
    image: '/images/hero_cloud.jpg',
    badge: 'CLOUD INFRASTRUCTURE',
    title: 'Mission-Critical Cloud Datacenters',
    subtitle: 'Resilient multi-cloud deployments on AWS and Azure with 99.9% uptime SLA.',
    icon: Cloud,
  },
  {
    id: 3,
    image: '/images/hero_sprint.jpg',
    badge: 'AGILE DELIVERY',
    title: 'Full-Stack Software Sprints',
    subtitle: 'High-velocity bi-weekly sprint delivery with automated CI/CD and rigorous code reviews.',
    icon: Cpu,
  },
  {
    id: 4,
    image: '/images/hero_warroom.jpg',
    badge: 'GOVERNANCE & SECURITY',
    title: 'Systems Architecture & Security Governance',
    subtitle: 'Zero-trust enterprise security, SOC-2 readiness, and high-concurrency microservices.',
    icon: ShieldCheck,
  },
];

export const HeroImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const current = slides[currentIndex];
  const Icon = current.icon;

  return (
    <div
      className="relative border border-slate-800 rounded-lg overflow-hidden bg-slate-900 shadow-xl group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Enterprise Engineering Showcase Carousel"
    >
      {/* Slide Visual Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <ImageWithSkeleton
              src={slide.image}
              alt={slide.title}
              aspectRatio="aspect-[4/3]"
              className="w-full h-full object-cover"
            />
            {/* Subtle Gradient vignette for high-end contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 pointer-events-none" />
          </div>
        ))}

        {/* Floating Top Badge */}
        <div className="absolute top-3 left-3 z-20">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-[10px] font-semibold text-blue-400">
            <Icon className="w-3 h-3 text-blue-400" />
            <span>{current.badge}</span>
          </div>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between z-20 pointer-events-none">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-2 rounded-full bg-slate-900/75 border border-slate-700/60 text-white hover:bg-blue-600 transition-colors pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-2 rounded-full bg-slate-900/75 border border-slate-700/60 text-white hover:bg-blue-600 transition-colors pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Counter Indicator */}
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-[10px] font-medium text-slate-300">
            0{currentIndex + 1} / 0{slides.length}
          </span>
        </div>
      </div>

      {/* Slide Caption & Progress Control Footer */}
      <div className="p-4 bg-slate-900 border-t border-slate-800 flex flex-col justify-between">
        <div className="min-h-[44px]">
          <p className="text-white font-semibold text-sm tracking-tight transition-all duration-300">
            {current.title}
          </p>
          <p className="text-slate-400 text-xs mt-0.5 line-clamp-1 transition-all duration-300">
            {current.subtitle}
          </p>
        </div>

        {/* Progress Navigation Bars */}
        <div className="flex items-center space-x-2 mt-3 pt-2 border-t border-slate-800/60">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className="flex-1 h-1.5 rounded-full overflow-hidden bg-slate-800 transition-colors"
            >
              <div
                className={`h-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-full bg-blue-500' : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
