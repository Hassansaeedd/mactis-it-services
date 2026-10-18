import React, { useEffect, useRef, useState } from 'react';
import { Users, Database, Star, Clock } from 'lucide-react';

const stats = [
  { value: 12, suffix: '+', label: 'Enterprise Clients', icon: Users },
  { value: 20, suffix: '+', label: 'Production Deployments', icon: Database },
  { value: 99, suffix: '.9%', label: 'System Uptime SLA', icon: Star },
  { value: 3, suffix: '+', label: 'Years of Experience', icon: Clock },
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
    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-center">
      <div className="text-blue-700 dark:text-blue-400 mb-3 flex justify-center">
        <Icon size={24} strokeWidth={1.75} />
      </div>
      <div className="text-3xl md:text-4xl font-bold font-mono text-slate-900 dark:text-white mb-1">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
        {stat.label}
      </p>
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
    <section ref={ref} className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
