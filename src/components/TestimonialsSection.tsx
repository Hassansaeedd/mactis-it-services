import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Raza',
    location: 'Lahore, Pakistan',
    role: 'CTO, FinTech Startup',
    rating: 5,
    text: 'Mactis designed and delivered our custom enterprise dashboard with complete accuracy. Their code quality and architectural decisions are superb!',
    avatar: 'AR',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Fatima Malik',
    location: 'Karachi, Pakistan',
    role: 'Director, Malik Retail Group',
    rating: 5,
    text: 'I had Mactis build a custom inventory web app for my business. The team was professional, met all deadlines, and the quality exceeded my expectations.',
    avatar: 'FM',
    color: 'from-purple-500 to-purple-700',
  },
  {
    name: 'Usman Tariq',
    location: 'Islamabad, Pakistan',
    role: 'Founder, EdTech Co',
    rating: 5,
    text: 'Mactis built our mobile app on React Native and successfully published it to both App Store and Google Play. Highly responsive and skilled engineers!',
    avatar: 'UT',
    color: 'from-primary to-blue-600',
  },
  {
    name: 'Sara Khan',
    location: 'Faisalabad, Pakistan',
    role: 'Operations Head',
    rating: 5,
    text: 'Mactis migrated our legacy database systems to PostgreSQL on AWS with zero downtime. Their database architects really understand scale!',
    avatar: 'SK',
    color: 'from-amber-500 to-amber-700',
  },
  {
    name: 'Bilal Ahmed',
    location: 'Lahore, Pakistan',
    role: 'IT Director',
    rating: 5,
    text: 'Mactis handles our cloud hosting and Docker-based server monitoring. Since partnering with them, we have experienced 100% uptime. Highly recommend!',
    avatar: 'BA',
    color: 'from-green-500 to-green-700',
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);

  const getCard = (offset: number) => testimonials[(activeIndex + offset + testimonials.length) % testimonials.length];

  return (
    <section className="py-20 bg-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">What Our Clients Say</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">Reviews from organizations across Pakistan who trust Mactis for their enterprise software needs.</p>
        </div>

        {/* Desktop: 3 cards, Mobile: 1 card */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
          {[-1, 0, 1].map((offset) => {
            const t = getCard(offset);
            const isCenter = offset === 0;
            return (
              <div
                key={t.name + offset}
                onClick={() => setActiveIndex((activeIndex + offset + testimonials.length) % testimonials.length)}
                className={`glass-card p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                  isCenter
                    ? 'border-primary/30 scale-105 shadow-2xl shadow-primary/10'
                    : 'border-white/5 opacity-60 hover:opacity-80 scale-95'
                }`}
              >
                <Quote className="text-primary/40 mb-4 h-8 w-8" />
                <p className="text-slate-300 leading-relaxed mb-8 text-sm">"{t.text}"</p>
                <div className="flex items-center space-x-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-sm shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role} • {t.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden glass-card p-8 rounded-3xl border border-primary/30 mb-8">
          <Quote className="text-primary/40 mb-4 h-8 w-8" />
          <p className="text-slate-300 leading-relaxed mb-8">"{testimonials[activeIndex].text}"</p>
          <div className="flex items-center space-x-1 mb-6">
            {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
              <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${testimonials[activeIndex].color} flex items-center justify-center text-white font-black text-sm shrink-0`}>
              {testimonials[activeIndex].avatar}
            </div>
            <div>
              <p className="font-bold text-white">{testimonials[activeIndex].name}</p>
              <p className="text-xs text-slate-500">{testimonials[activeIndex].role} • {testimonials[activeIndex].location}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-4">
          <button onClick={prev} className="p-3 glass rounded-xl text-slate-400 hover:text-white border border-white/5 hover:border-white/20 transition-all">
            <ChevronLeft size={20} />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-3 glass rounded-xl text-slate-400 hover:text-white border border-white/5 hover:border-white/20 transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
