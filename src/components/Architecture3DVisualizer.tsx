import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ArchitectureLayer {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  color: string;
  glowColor: string;
  tech: string[];
  features: string[];
  metrics: { label: string; value: string }[];
}

const layers: ArchitectureLayer[] = [
  {
    id: 'frontend',
    number: '01',
    name: 'Frontend & Mobile Apps',
    subtitle: 'Client Experience Layer',
    color: 'from-sky-500 via-sky-400 to-blue-600',
    glowColor: 'rgba(56, 189, 248, 0.45)',
    tech: ['React 19', 'Next.js', 'React Native', 'Tailwind CSS'],
    features: [
      'Sub-300ms page load times with edge caching',
      'Unified single codebase for iPhone, Android & Web',
      'Search engine optimized (SEO) to attract new clients',
      'Smooth micro-animations and accessibility standards'
    ],
    metrics: [
      { label: 'Page Load Speed', value: '< 300ms' },
      { label: 'Mobile Fluidity', value: '60 FPS' }
    ]
  },
  {
    id: 'logic',
    number: '02',
    name: 'Smart AI & Automation Engine',
    subtitle: 'Business Intelligence & Workflows',
    color: 'from-blue-600 via-indigo-500 to-sky-500',
    glowColor: 'rgba(99, 102, 241, 0.45)',
    tech: ['AI Agents', 'WhatsApp Bots', 'REST APIs', 'WebSockets'],
    features: [
      'Automated WhatsApp and web support answering clients 24/7',
      'Digital document scanning and automatic invoice generation',
      'Real-time business notifications sent directly to your phone',
      'Custom logic pipelines eliminating repetitive manual paperwork'
    ],
    metrics: [
      { label: 'Support Response', value: 'Instant' },
      { label: 'Data Accuracy', value: '99.8%' }
    ]
  },
  {
    id: 'cloud',
    number: '03',
    name: 'Cloud Hosting & Database Core',
    subtitle: 'Reliability & Storage Foundation',
    color: 'from-slate-900 via-slate-800 to-sky-950',
    glowColor: 'rgba(14, 165, 233, 0.45)',
    tech: ['AWS', 'Google Cloud', 'PostgreSQL', 'Redis', 'Docker'],
    features: [
      'Multi-region high-availability servers with 99.9% uptime',
      'Automated encrypted daily backups protecting your business records',
      'Hardware IoT sync (electronic weighbridges, barcode scanners)',
      'Zero-downtime updates so your software never stops running'
    ],
    metrics: [
      { label: 'Server Availability', value: '99.9%' },
      { label: 'Backup Frequency', value: 'Daily Auto' }
    ]
  }
];

export const Architecture3DVisualizer: React.FC = () => {
  const [isExploded, setIsExploded] = useState(true);
  const [activeLayerId, setActiveLayerId] = useState<string>('frontend');
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse rotation for 3D stage
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Default isometric viewing angle with subtle interactive tilt
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [26, 14]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-24, -10]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const activeLayer = layers.find(l => l.id === activeLayerId) || layers[0];

  return (
    <section className="py-20 md:py-28 bg-[#080D1A] text-white relative overflow-hidden border-y border-slate-800">
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Subtle 3D Perspective Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(600px) rotateX(60deg) translateY(-100px) scale(2)',
          transformOrigin: 'top center'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-sky-400 shadow-sm shadow-sky-400" />
            <span>Interactive 3D System Architecture</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            How We Architect Your Software in 3D
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Every platform we engineer is built across three high-performance layers. Interact with the 3D model below to inspect the frontend, intelligence, and cloud foundation.
          </p>
        </div>

        {/* 3D Visualizer Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 3D Stage Column (7 cols) */}
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 relative h-[440px] sm:h-[500px] flex items-center justify-center select-none"
            style={{ perspective: '1200px' }}
          >
            {/* View Mode Controls Toolbar */}
            <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-20">
              <div className="flex items-center space-x-2 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-1.5 rounded-xl shadow-lg">
                <button
                  onClick={() => setIsExploded(true)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isExploded
                      ? 'bg-sky-500 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Exploded 3D View
                </button>
                <button
                  onClick={() => setIsExploded(false)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    !isExploded
                      ? 'bg-sky-500 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Unified Stack
                </button>
              </div>

              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline-block bg-slate-900/60 px-3 py-1 rounded-lg border border-slate-800">
                Move cursor to rotate 3D
              </span>
            </div>

            {/* Main 3D Rotating Isometric Stage */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-[300px] sm:w-[360px] h-[340px] flex items-center justify-center transition-all duration-300"
            >
              {/* Vertical Connecting Laser Guide Lines in 3D Space */}
              {isExploded && (
                <div 
                  style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {/* Four Corner Data Beams */}
                  <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-sky-400 via-indigo-500 to-sky-600 opacity-40" />
                  <div className="absolute right-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-sky-400 via-indigo-500 to-sky-600 opacity-40" />
                  <div className="absolute left-1/2 top-6 bottom-6 w-[1px] bg-gradient-to-b from-sky-400 via-indigo-500 to-sky-600 opacity-30" />
                </div>
              )}

              {/* LAYER 1: FRONTEND & MOBILE (Top Layer) */}
              <motion.div
                animate={{
                  y: isExploded ? -110 : -25,
                  z: isExploded ? 60 : 20,
                  scale: activeLayerId === 'frontend' ? 1.05 : 1,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 180 }}
                onClick={() => setActiveLayerId('frontend')}
                style={{ transformStyle: 'preserve-3d' }}
                className={`absolute w-full h-[120px] rounded-2xl p-4 cursor-pointer transition-shadow duration-300 ${
                  activeLayerId === 'frontend'
                    ? 'ring-2 ring-sky-400 shadow-2xl shadow-sky-500/40 bg-gradient-to-br from-slate-900 via-slate-850 to-sky-950/90'
                    : 'bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 shadow-xl'
                }`}
              >
                {/* 3D Glass Header */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-bold text-sky-400 ml-1">LAYER 01</span>
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-sky-300 bg-sky-900/50 px-2 py-0.5 rounded border border-sky-500/30">
                    UI & Mobile
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Frontend & Mobile UI</h4>
                    <p className="text-[11px] text-slate-300">Fast Web, iOS & Android</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-sky-400 block">&lt; 300ms</span>
                    <span className="text-[9px] text-slate-400">Page Load</span>
                  </div>
                </div>

                {/* Simulated Mini App UI Preview Elements */}
                <div className="flex items-center space-x-1.5 mt-2.5 pt-1">
                  <div className="h-1.5 w-12 bg-sky-400/80 rounded-full" />
                  <div className="h-1.5 w-20 bg-slate-700 rounded-full" />
                  <div className="h-1.5 w-8 bg-sky-500/60 rounded-full ml-auto" />
                </div>
              </motion.div>

              {/* LAYER 2: SMART AI & AUTOMATION (Middle Layer) */}
              <motion.div
                animate={{
                  y: isExploded ? 5 : 0,
                  z: isExploded ? 0 : 0,
                  scale: activeLayerId === 'logic' ? 1.05 : 1,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 180 }}
                onClick={() => setActiveLayerId('logic')}
                style={{ transformStyle: 'preserve-3d' }}
                className={`absolute w-full h-[120px] rounded-2xl p-4 cursor-pointer transition-shadow duration-300 ${
                  activeLayerId === 'logic'
                    ? 'ring-2 ring-indigo-400 shadow-2xl shadow-indigo-500/40 bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950/90'
                    : 'bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 shadow-xl'
                }`}
              >
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    <span className="text-[11px] font-bold text-indigo-400">LAYER 02</span>
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-indigo-300 bg-indigo-900/50 px-2 py-0.5 rounded border border-indigo-500/30">
                    Smart AI Core
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Logic & Automation</h4>
                    <p className="text-[11px] text-slate-300">WhatsApp Bots & Auto-Tasks</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-indigo-400 block">Instant</span>
                    <span className="text-[9px] text-slate-400">Response</span>
                  </div>
                </div>

                {/* Simulated Neural Data Points */}
                <div className="flex items-center justify-between mt-2.5 pt-1 text-[10px] text-slate-400">
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1" />
                    Auto-Invoicing
                  </span>
                  <span>WhatsApp 24/7</span>
                  <span>OCR Scanner</span>
                </div>
              </motion.div>

              {/* LAYER 3: CLOUD & DATABASE CORE (Base Layer) */}
              <motion.div
                animate={{
                  y: isExploded ? 120 : 25,
                  z: isExploded ? -60 : -20,
                  scale: activeLayerId === 'cloud' ? 1.05 : 1,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 180 }}
                onClick={() => setActiveLayerId('cloud')}
                style={{ transformStyle: 'preserve-3d' }}
                className={`absolute w-full h-[120px] rounded-2xl p-4 cursor-pointer transition-shadow duration-300 ${
                  activeLayerId === 'cloud'
                    ? 'ring-2 ring-sky-500 shadow-2xl shadow-sky-600/40 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950'
                    : 'bg-slate-950/90 hover:bg-slate-900 border border-slate-700/80 shadow-xl'
                }`}
              >
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                    <span className="text-[11px] font-bold text-sky-400">LAYER 03</span>
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    99.9% Uptime
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Cloud & Database</h4>
                    <p className="text-[11px] text-slate-300">AWS, PostgreSQL, Backups</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-400 block">Daily</span>
                    <span className="text-[9px] text-slate-400">Auto Backups</span>
                  </div>
                </div>

                {/* Simulated Server Disk Activity Bar */}
                <div className="flex items-center space-x-2 mt-2.5 pt-1">
                  <div className="h-1.5 flex-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-sky-500 rounded-full" />
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono">Encrypted</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Interactive Inspection Detail Card (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-md"
              >
                {/* Active Layer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <div>
                    <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                      LAYER {activeLayer.number} / {activeLayer.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {activeLayer.name}
                    </h3>
                  </div>
                  <span className="text-2xl font-black text-slate-700">
                    {activeLayer.number}
                  </span>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {activeLayer.metrics.map((m, i) => (
                    <div key={i} className="p-3 bg-slate-850/80 rounded-xl border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">{m.label}</span>
                      <span className="text-base font-extrabold text-sky-300 mt-0.5 block">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Included Technologies */}
                <div className="mb-5">
                  <span className="text-xs font-semibold text-slate-300 block mb-2">
                    Technologies Built-In:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeLayer.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-800 text-slate-200 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Business Benefits Checklist */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-semibold text-slate-300 block mb-1">
                    What This Layer Does For Your Business:
                  </span>
                  {activeLayer.features.map((f, i) => (
                    <div key={i} className="flex items-start text-xs text-slate-300">
                      <svg className="w-4 h-4 text-sky-400 shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed font-normal">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Consultation Trigger */}
                <div className="pt-4 border-t border-slate-800">
                  <a
                    href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I am reviewing the 3D Architecture for ${activeLayer.name} on Mactis and would like to consult on my project.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full py-3 text-xs font-bold flex items-center justify-center space-x-2 shadow-lg shadow-sky-500/25"
                  >
                    <span>Discuss Architecture for My Project</span>
                    <span className="font-bold">→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Architecture3DVisualizer;
