import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PlatformOption {
  id: string;
  name: string;
  subtitle: string;
  stack: string[];
  deliverables: string[];
}

const platforms: PlatformOption[] = [
  {
    id: 'web',
    name: 'Custom Website or Web Portal',
    subtitle: 'Modern websites, customer dashboards & online shops',
    stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Secure Payments'],
    deliverables: [
      'Mobile-friendly design that looks great on all screens and phones',
      'Fast page loading speed with search engine optimization (SEO)',
      'Secure customer logins, accounts, and online payment checkout',
      'Easy-to-use admin panel to manage content, users, and orders',
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile App (iOS & Android)',
    subtitle: 'Smooth mobile apps for iPhones and Android phones',
    stack: ['React Native', 'Flutter', 'iOS & Android', 'Cloud Sync', 'Push Alerts'],
    deliverables: [
      'Published apps ready for Apple App Store and Google Play Store',
      'Smooth offline capability so users can access data without internet',
      'Instant push notifications to engage your customers',
      'Seamless camera, GPS location, and fingerprint/face login',
    ],
  },
  {
    id: 'erp',
    name: 'Business Management Software',
    subtitle: 'Billing, stock inventory & operational management',
    stack: ['PostgreSQL', 'Node.js', 'Automated Billing', 'Inventory Tracking'],
    deliverables: [
      'Automated customer invoices, bills, and tax receipts',
      'Multi-warehouse inventory tracking and stock alerts',
      'Electronic scale & hardware integration for accurate weight logging',
      'Role-based manager approvals and transparent financial activity logs',
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud Hosting & Maintenance',
    subtitle: 'High-speed servers, backups & continuous support',
    stack: ['AWS', 'Google Cloud', 'Docker', 'Automated Daily Backups'],
    deliverables: [
      'Secure cloud server setup on AWS, Google Cloud, or Microsoft Azure',
      'Automatic daily backups to protect your business records safely',
      '99.9% uptime with 24/7 server monitoring',
      'Speed optimizations and regular security updates',
    ],
  },
];

const scopeTiers = [
  {
    id: 'mvp',
    name: 'Quick Launch',
    timeline: '4 – 6 Weeks',
    sprints: 'Quick Delivery',
    description: 'Quick delivery of essential features to test your idea or get your business online fast.',
  },
  {
    id: 'production',
    name: 'Complete System',
    timeline: '8 – 12 Weeks',
    sprints: 'Standard Delivery',
    description: 'Full-featured, tested software customized and ready for your daily business operations.',
  },
  {
    id: 'enterprise',
    name: 'Large Enterprise',
    timeline: '14 – 18+ Weeks',
    sprints: 'Comprehensive Delivery',
    description: 'Comprehensive software for large companies with custom integrations and data migration.',
  },
];

const slaTiers = [
  {
    id: 'standard',
    name: 'Standard Support',
    sla: 'Business Hours',
    support: 'Fast email & business hours assistance',
  },
  {
    id: 'priority',
    name: 'Priority Support',
    sla: '24/7 Monitoring',
    support: 'Direct WhatsApp support & server monitoring',
  },
  {
    id: 'dedicated',
    name: 'Dedicated Partner',
    sla: 'Dedicated Support',
    support: 'Direct developer contact & continuous improvements',
  },
];

export const InteractiveProjectEstimator: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformOption>(platforms[0]);
  const [selectedScope, setSelectedScope] = useState(scopeTiers[1]);
  const [selectedSla, setSelectedSla] = useState(slaTiers[1]);

  const whatsappMessage = `Hello Mactis! I used your Project Planner to configure:
- Project Type: ${selectedPlatform.name}
- Timeline & Size: ${selectedScope.name} (${selectedScope.timeline})
- Support Plan: ${selectedSla.name} (${selectedSla.sla})
I would like to discuss this project and get an estimate for my business.`;

  return (
    <section id="project-estimator" className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-slate-900 border-y border-sky-100 dark:border-slate-800 text-slate-900 dark:text-white relative overflow-hidden">
      {/* Soft Ambient Light Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/40 dark:bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/30 dark:bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-2">
            Interactive Project Planner
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950 dark:text-white mb-3">
            Plan Your Project & Estimate Timelines
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            Choose what you want to build and how quickly you need it. See the estimated delivery time, team setup, and what you will receive.
          </p>
        </div>

        {/* Contrasting Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols on Light Cream Surface) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Step 1: Platform Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  01 / Choose Your Project Type
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Click to select</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {platforms.map((p) => {
                  const isSelected = p.id === selectedPlatform.id;
                  return (
                    <motion.button
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.15 }}
                      key={p.id}
                      onClick={() => setSelectedPlatform(p)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? 'bg-sky-50/80 dark:bg-sky-950/40 border-2 border-sky-500 text-slate-900 dark:text-white shadow-md ring-2 ring-sky-400/20'
                          : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-sky-300 text-slate-700 dark:text-slate-300 shadow-xs'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                          {p.name}
                        </span>
                        {isSelected && (
                          <svg className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 font-normal">
                        {p.subtitle}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scope & Phase */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  02 / Project Size & Timeline
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scopeTiers.map((s) => {
                  const isSelected = s.id === selectedScope.id;
                  return (
                    <motion.button
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.15 }}
                      key={s.id}
                      onClick={() => setSelectedScope(s)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? 'bg-sky-50/80 dark:bg-sky-950/40 border-2 border-sky-500 text-slate-900 dark:text-white shadow-md ring-2 ring-sky-400/20'
                          : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-sky-300 text-slate-700 dark:text-slate-300 shadow-xs'
                      }`}
                    >
                      <div className={`text-xs font-semibold mb-1 ${isSelected ? 'text-sky-700 dark:text-sky-400' : 'text-slate-500 dark:text-slate-400'}`}>
                        {s.name}
                      </div>
                      <div className="text-base font-extrabold text-slate-900 dark:text-white">
                        {s.timeline}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        {s.sprints}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: SLA & Reliability */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  03 / Ongoing Support & Updates
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {slaTiers.map((sla) => {
                  const isSelected = sla.id === selectedSla.id;
                  return (
                    <motion.button
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.15 }}
                      key={sla.id}
                      onClick={() => setSelectedSla(sla)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? 'bg-sky-50/80 dark:bg-sky-950/40 border-2 border-sky-500 text-slate-900 dark:text-white shadow-md ring-2 ring-sky-400/20'
                          : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-sky-300 text-slate-700 dark:text-slate-300 shadow-xs'
                      }`}
                    >
                      <div className="text-xs font-semibold text-slate-900 dark:text-white">
                        {sla.name}
                      </div>
                      <div className="text-xs font-bold text-sky-600 dark:text-sky-400 mt-1">
                        {sla.sla}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                        {sla.support}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Contrasting Ink-Black Summary Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 md:p-7 rounded-2xl bg-[#0B1120] text-white border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="border-b border-slate-800 pb-4 mb-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 block mb-1">
                  Project Summary
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {selectedPlatform.name}
                </h3>
                <span className="text-xs text-slate-400 mt-0.5 block">
                  Estimated Timeline: <span className="text-white font-semibold">{selectedScope.timeline}</span>
                </span>
              </div>

              {/* Delivery Structure Bar */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-5 text-center">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">Delivery Pace</span>
                  <span className="text-sm font-bold text-white">{selectedScope.sprints}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">Dedicated Team</span>
                  <span className="text-sm font-bold text-sky-300">Designers & Developers</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-5">
                <span className="text-xs font-semibold text-slate-300 block mb-2">
                  Modern Technologies Used:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPlatform.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-slate-300 block mb-2">
                  What You Receive:
                </span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPlatform.id + selectedScope.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2.5 text-xs text-slate-300"
                  >
                    {selectedPlatform.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start space-x-2.5">
                        <svg className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed font-normal">{del}</span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Primary Consultation Trigger */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800">
                <a
                  href={`https://wa.me/923154327855?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-lg shadow-sky-500/25"
                >
                  <span>Discuss this Plan on WhatsApp</span>
                  <span className="font-bold">→</span>
                </a>
                <p className="text-[11px] text-center text-slate-400">
                  Includes a free consultation and customized quote for your business.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
