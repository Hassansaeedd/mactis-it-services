import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Raza',
    location: 'Lahore, Pakistan',
    role: 'Chief Technology Officer',
    company: 'Apex FinTech Global',
    rating: 5,
    text: 'Mactis engineered our high-frequency transaction ledger and custom analytics suite with flawless execution. Their microservices architecture and zero-downtime database migration exceeded our highest enterprise benchmarks.',
    image: '/images/client_1.jpg',
  },
  {
    name: 'Fatima Malik',
    location: 'Karachi, Pakistan',
    role: 'Director of Digital Operations',
    company: 'Malik Retail & Apparel Group',
    rating: 5,
    text: 'The headless digital commerce and inventory synchronization platform Mactis built scaled our seasonal sales across global markets without a single second of latency. Their engineering discipline is world-class.',
    image: '/images/client_2.jpg',
  },
  {
    name: 'Usman Tariq',
    location: 'Islamabad, Pakistan',
    role: 'Founder & Managing Director',
    company: 'EdVantage Systems',
    rating: 5,
    text: 'From the initial architectural discovery to App Store & Play Store publishing, Mactis delivered an ultra-performant React Native ecosystem. Highly responsive, transparent, and technically elite team.',
    image: '/images/client_3.jpg',
  },
  {
    name: 'Sara Khan',
    location: 'Faisalabad, Pakistan',
    role: 'VP of Industrial Operations',
    company: 'Indus Agro Industries',
    rating: 5,
    text: 'Automating our mill weighbridge and multi-warehouse ledger with Mactis cut operational reconciliation delays by 70%. Their domain knowledge in industrial ERP and IoT hardware connectivity is unmatched.',
    image: '/images/client_4.jpg',
  },
  {
    name: 'Bilal Ahmed',
    location: 'Lahore, Pakistan',
    role: 'VP of Cloud Infrastructure',
    company: 'CloudMatrix Technologies',
    rating: 5,
    text: 'Mactis orchestrated our Kubernetes cluster deployments on AWS with automated CI/CD pipelines and comprehensive Prometheus monitoring. We have maintained 99.99% uptime since our system launch.',
    image: '/images/client_5.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);

  const getCard = (offset: number) => testimonials[(activeIndex + offset + testimonials.length) % testimonials.length];

  return (
    <section className="py-24 bg-slate-100 dark:bg-dark overflow-hidden border-b border-slate-200/80 dark:border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            Client Endorsements & Proof
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trusted by Leaders <br />
            <span className="text-gradient">Across Enterprise Sectors</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base md:text-lg">
            Hear directly from technology executives, operations directors, and founders who rely on Mactis engineering.
          </p>
        </div>

        {/* Desktop: 3 cards, Mobile: 1 card */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-10 items-stretch">
          {[-1, 0, 1].map((offset) => {
            const t = getCard(offset);
            const isCenter = offset === 0;
            return (
              <div
                key={t.name + offset}
                onClick={() => setActiveIndex((activeIndex + offset + testimonials.length) % testimonials.length)}
                className={`glass-card p-8 rounded-3xl border transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                  isCenter
                    ? 'border-primary/40 scale-105 shadow-2xl shadow-primary/10 bg-white dark:bg-slate-900/90'
                    : 'border-slate-200 dark:border-white/5 opacity-70 hover:opacity-90 scale-95'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="text-primary/40 h-8 w-8" />
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 text-sm">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/60 dark:border-white/5">
                  <div className="relative">
                    <img 
                      src={t.image} 
                      alt={t.name}
                      className="h-13 w-13 rounded-full object-cover ring-2 ring-primary/30"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-0.5 text-white" title="Verified Client">
                      <CheckCircle2 size={12} />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</p>
                    <p className="text-xs font-semibold text-primary">{t.role}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.company}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden glass-card p-8 rounded-3xl border border-primary/30 mb-8 bg-white dark:bg-slate-900/90 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <Quote className="text-primary/40 h-8 w-8" />
            <div className="flex items-center space-x-1">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 text-sm">
            "{testimonials[activeIndex].text}"
          </p>
          <div className="flex items-center space-x-4 pt-4 border-t border-slate-200 dark:border-white/5">
            <div className="relative">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30"
              />
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-0.5 text-white">
                <CheckCircle2 size={12} />
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{testimonials[activeIndex].name}</p>
              <p className="text-xs font-semibold text-primary">{testimonials[activeIndex].role}</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{testimonials[activeIndex].company}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-4">
          <button 
            onClick={prev} 
            aria-label="Previous testimonial"
            className="p-3 glass rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white border border-slate-200 dark:border-white/10 transition-all shadow-sm hover:scale-105"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-slate-300 dark:bg-white/20'}`}
              />
            ))}
          </div>
          <button 
            onClick={next} 
            aria-label="Next testimonial"
            className="p-3 glass rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white border border-slate-200 dark:border-white/10 transition-all shadow-sm hover:scale-105"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
