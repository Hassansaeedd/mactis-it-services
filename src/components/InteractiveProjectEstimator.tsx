import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PlatformOption {
  id: string;
  name: string;
  subtitle: string;
  defaultWeeks: number;
  stack: string[];
  deliverables: string[];
}

const platforms: PlatformOption[] = [
  {
    id: 'web',
    name: 'Web & SaaS Platform',
    subtitle: 'React 19, Next.js & Distributed APIs',
    defaultWeeks: 8,
    stack: ['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    deliverables: [
      'Responsive, high-concurrency B2B/B2C web application',
      'Sub-second server-side rendering & edge CDN caching',
      'Secure role-based authentication (RBAC) & payments',
      'Zero-downtime CI/CD automated deployment pipelines',
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Application',
    subtitle: 'Native iOS & Android Engineering',
    defaultWeeks: 10,
    stack: ['React Native', 'Flutter', 'TypeScript', 'WebSockets', 'REST APIs', 'Firebase'],
    deliverables: [
      'Dual iOS and Android builds ready for App Store & Play Store',
      'Offline-first SQLite local data persistence',
      'Real-time push notifications & background synchronization',
      'Hardware camera, GPS, and biometrics authentication',
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps Infrastructure',
    subtitle: 'Kubernetes, AWS / Azure & Terraform',
    defaultWeeks: 6,
    stack: ['AWS', 'Microsoft Azure', 'Kubernetes', 'Docker', 'Terraform', 'PostgreSQL'],
    deliverables: [
      'Multi-region cluster provisioning with Terraform IaC',
      'Automated horizontal auto-scaling & load balancing',
      'Automated encrypted backups & disaster recovery drill',
      'Real-time Prometheus & Grafana telemetry dashboards',
    ],
  },
  {
    id: 'erp',
    name: 'Industrial ERP & Custom Automation',
    subtitle: 'Hardware Sync, Ledgers & Databases',
    defaultWeeks: 12,
    stack: ['PostgreSQL', 'Python / Go', 'Next.js', 'IoT Serial Sync', 'Microservices'],
    deliverables: [
      'Weighbridge / IoT hardware serial-port automated sync',
      'Double-entry inventory & financial ledger engine',
      'Multi-warehouse batch tracking & automated barcode logs',
      'Role-restricted managerial approvals & audit compliance',
    ],
  },
];

const scopeTiers = [
  {
    id: 'mvp',
    name: 'MVP Rapid Sprint',
    timeline: '4 – 6 Weeks',
    sprints: '3 Two-Week Sprints',
    description: 'Fast architectural prototype ready for real market validation and stakeholder sign-off.',
  },
  {
    id: 'production',
    name: 'Production Release',
    timeline: '8 – 12 Weeks',
    sprints: '5 Two-Week Sprints',
    description: 'Full-featured enterprise software with comprehensive test coverage, staging, and SLA compliance.',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Modernization',
    timeline: '14 – 18+ Weeks',
    sprints: '8+ Two-Week Sprints',
    description: 'Complex legacy migration, distributed microservices, multi-region cluster, and security audits.',
  },
];

const slaTiers = [
  {
    id: 'standard',
    name: 'Standard Commercial',
    sla: '99.5% Uptime SLA',
    support: 'Business Hours Escalation',
  },
  {
    id: 'high_availability',
    name: 'High Availability',
    sla: '99.9% Uptime SLA',
    support: '24/7 Automated Health Monitors',
  },
  {
    id: 'zero_trust',
    name: 'Zero-Trust Enterprise',
    sla: '99.99% Uptime SLA',
    support: 'Dedicated Tier-1 On-Call Pod',
  },
];

export const InteractiveProjectEstimator: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformOption>(platforms[0]);
  const [selectedScope, setSelectedScope] = useState(scopeTiers[1]);
  const [selectedSla, setSelectedSla] = useState(slaTiers[1]);

  const whatsappMessage = `Hello Mactis Engineering! I used your Project Scope Planner to configure:
- Platform: ${selectedPlatform.name}
- Scope & Timeline: ${selectedScope.name} (${selectedScope.timeline})
- Reliability SLA: ${selectedSla.name} (${selectedSla.sla})
I would like to schedule an architectural consultation to discuss this scope.`;

  return (
    <section id="project-estimator" className="py-20 md:py-28 bg-slate-900 dark:bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {/* Section Header (Clean, No Harsh Pill Badge) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Plan Your Software Scope & Architecture
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Configure your technical requirements below to instantly preview recommended architecture sprints, dedicated pod structure, and estimated engineering milestones.
          </p>
        </div>

        {/* Aesthetic Configuration Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Step 1: Platform Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-300">
                  01 / Select Software Domain
                </span>
                <span className="text-[11px] text-slate-400">Click to switch</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {platforms.map((p) => {
                  const isSelected = p.id === selectedPlatform.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPlatform(p)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? 'bg-slate-800/90 border-slate-400 text-white shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {p.name}
                        </span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        )}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1">
                        {p.subtitle}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scope & Phase */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-300">
                  02 / Delivery Scope & Timeline
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scopeTiers.map((s) => {
                  const isSelected = s.id === selectedScope.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedScope(s)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? 'bg-slate-800/90 border-slate-400 text-white shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                      }`}
                    >
                      <div className={`text-xs font-medium mb-1 ${isSelected ? 'text-slate-200' : 'text-slate-400'}`}>
                        {s.name}
                      </div>
                      <div className={`text-base font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                        {s.timeline}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        {s.sprints}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: SLA & Reliability */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-300">
                  03 / Service Level Agreement (SLA)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {slaTiers.map((sla) => {
                  const isSelected = sla.id === selectedSla.id;
                  return (
                    <button
                      key={sla.id}
                      onClick={() => setSelectedSla(sla)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? 'bg-slate-800/90 border-slate-400 text-white shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                      }`}
                    >
                      <div className={`text-xs font-medium ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {sla.name}
                      </div>
                      <div className="text-xs font-medium text-emerald-400 mt-1">
                        {sla.sla}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {sla.support}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Aesthetic Scope Summary Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 md:p-7 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                <div>
                  <span className="text-[11px] font-medium text-slate-400 block">
                    Scope Blueprint
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {selectedPlatform.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 inline-block mb-1">
                    {selectedSla.sla}
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    {selectedScope.timeline}
                  </span>
                </div>
              </div>

              {/* Cadence Metrics Bar */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-5 text-center">
                <div>
                  <span className="text-[11px] text-slate-400 block">Cadence</span>
                  <span className="text-sm font-semibold text-white">{selectedScope.sprints}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Dedicated Pod</span>
                  <span className="text-sm font-semibold text-slate-200">4-5 Engineers</span>
                </div>
              </div>

              {/* Recommended Stack */}
              <div className="mb-5">
                <span className="text-xs font-medium text-slate-300 block mb-2">
                  Audited Production Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPlatform.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-[11px] font-normal rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Scope Deliverables */}
              <div className="mb-6">
                <span className="text-xs font-medium text-slate-300 block mb-2">
                  Key Sprint Deliverables:
                </span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPlatform.id + selectedScope.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 text-xs text-slate-300"
                  >
                    {selectedPlatform.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                        <span className="leading-relaxed font-normal">{del}</span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Primary Consultation Trigger */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                <a
                  href={`https://wa.me/923154327855?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-3.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 shadow-md"
                >
                  <span>Consult Engineering on this Scope</span>
                  <span className="font-bold">→</span>
                </a>
                <p className="text-[11px] text-center text-slate-400">
                  Includes free 30-minute architectural assessment & technical breakdown.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
