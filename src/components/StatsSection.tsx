import React, { useEffect, useRef, useState } from 'react';
import { Users, Database, Star, Clock } from 'lucide-react';

const stats = [
  { value: 12, suffix: '+', label: 'Enterprise Clients', icon: Users, color: 'text-blue-400' },
  { value: 20, suffix: '+', label: 'Production Deployments', icon: Database, color: 'text-purple-400' },
  { value: 99, suffix: '.9%', label: 'System Uptime SLA', icon: Star, color: 'text-amber-400' },
  { value: 3, suffix: '+', label: 'Years of Experience', icon: Clock, color: 'text-primary' },
];

function useCountUp(target: number, duration: number, isVisible: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);
  return count;
}

const StatCard: React.FC<{ stat: typeof stats[0]; isVisible: boolean }> = ({ stat, isVisible }) => {
  const count = useCountUp(stat.value, 1500, isVisible);
  const Icon = stat.icon;
  return (
    <div className="flex flex-col items-center text-center p-8 glass-card rounded-3xl border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group shadow-sm">
      <div className={`${stat.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
        <Icon size={36} strokeWidth={1.5} />
      </div>
      <div className={`text-4xl sm:text-5xl font-black mb-2 font-mono ${stat.color}`}>
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="text-slate-600 dark:text-slate-400 font-bold text-xs sm:text-sm uppercase tracking-wider">{stat.label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-dark relative overflow-hidden border-b border-slate-200/80 dark:border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Operational Metrics</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Verified Engineering Scale</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">Measurable performance delivered across enterprise infrastructure and international deployments.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
