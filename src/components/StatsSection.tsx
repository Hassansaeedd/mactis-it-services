import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 12, suffix: '+', label: 'Enterprise Clients', subtext: 'Global corporate partners' },
  { value: 20, suffix: '+', label: 'Production Projects', subtext: 'Web, mobile & cloud systems' },
  { value: 99, suffix: '.9%', label: 'Production Uptime SLA', subtext: 'High-availability infrastructure' },
  { value: 3, suffix: '+', label: 'Years of Engineering', subtext: 'Continuous delivery track record' },
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
  return (
    <div className="p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center shadow-sm hover:border-blue-500/40 transition-colors">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="text-slate-900 dark:text-white text-sm font-bold mb-1">
        {stat.label}
      </p>
      <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">
        {stat.subtext}
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
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
