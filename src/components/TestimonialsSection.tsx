import React from 'react';
import { Shield, Layers, Clock, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const engagementPrinciples = [
  {
    title: 'Direct Architectural Access',
    description: 'You collaborate directly with principal software engineers and solutions architects. We eliminate non-technical intermediaries so technical decisions are resolved with speed and precision.',
    icon: Cpu,
  },
  {
    title: '100% Client Code Ownership',
    description: 'Full repository access, database schemas, and deployment documentation belong entirely to your enterprise upon milestone completion. We practice zero proprietary lock-in.',
    icon: Shield,
  },
  {
    title: 'SLA-Backed High Availability',
    description: 'Mission-critical applications are architected for 99.9% production uptime, automated multi-region database replication, point-in-time recovery, and 24/7 observability.',
    icon: Clock,
  },
  {
    title: 'Disciplined Sprint Cadence',
    description: 'Bi-weekly sprint releases with staging preview environments, automated test coverage, and transparent project velocity tracking keep milestones on schedule and on budget.',
    icon: Layers,
  },
];

const industrySectors = [
  {
    sector: 'Agro-Industrial & Supply Chain',
    focus: 'Weighbridge IoT automation, grain quality telemetry, and multi-branch ledgers.',
    metric: '10M+ Kg Tracked'
  },
  {
    sector: 'Municipal & Smart City Vision',
    focus: 'Neural computer vision, automated license plate recognition, and violation reporting.',
    metric: '99.4% Recognition'
  },
  {
    sector: 'High-Volume Digital Commerce',
    focus: 'Headless storefronts, global edge CDN delivery, and real-time inventory synchronization.',
    metric: 'Sub-350ms Latency'
  },
  {
    sector: 'Hyperlocal Logistics & Fulfillment',
    focus: 'Rider route optimization, warehouse wave picking, and automated delivery dispatch.',
    metric: '18-Min Fulfillment SLA'
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
            Engagement Governance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Enterprise Delivery Standards
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            How we structure every technology partnership to ensure architectural integrity, complete transparency, and measurable return on investment.
          </p>
        </div>

        {/* 4 Pillars Grid (Structured flat cards, no liquid glass or bouncy animations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {engagementPrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 md:p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg space-y-3"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded bg-slate-100 dark:bg-slate-850 text-blue-700 dark:text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Industry Deployment Track Record Table / Split */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 mb-6 gap-2">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Industry Sectors & Proven Track Record
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Representative production domains architected and maintained by our engineering teams.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industrySectors.map((sector, i) => (
              <div 
                key={i} 
                className="p-4 rounded border border-slate-100 dark:border-slate-850 bg-slate-50/60 dark:bg-slate-900/40 space-y-2"
              >
                <div className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400">
                  {sector.metric}
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {sector.sector}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  {sector.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
