import React from 'react';
import { Link } from 'react-router-dom';

const engagementPrinciples = [
  {
    number: '01',
    title: 'Direct Access to Senior Engineers',
    description: 'You collaborate directly with principal software developers and technical architects. We eliminate non-technical intermediaries so engineering decisions are resolved quickly and accurately.',
  },
  {
    number: '02',
    title: '100% Client Code & IP Ownership',
    description: 'All repository code, database schemas, design files, and deployment configurations belong entirely to your company upon milestone delivery. We operate with zero vendor lock-in.',
  },
  {
    number: '03',
    title: 'Transparent Bi-Weekly Sprints',
    description: 'Structured two-week sprint cadences with staging environments and clear demos so your leadership team can test and verify working software at every stage of the project.',
  },
  {
    number: '04',
    title: 'Production Reliability & Support',
    description: 'Applications are built for high availability, multi-region backups, and low latencies, backed by post-launch warranty support and ongoing server maintenance.',
  },
];

const industrySectors = [
  {
    sector: 'Agro-Industrial & Supply Chain',
    focus: 'Weighbridge IoT automation, grain inventory tracking, and multi-branch ledgers.',
    metric: '10M+ Kg Managed'
  },
  {
    sector: 'Smart City & Traffic Vision',
    focus: 'Neural computer vision, automatic license plate recognition, and violation reporting.',
    metric: '99.4% Recognition'
  },
  {
    sector: 'High-Volume Digital Commerce',
    focus: 'Headless storefronts, global edge CDN delivery, and real-time inventory synchronization.',
    metric: 'Sub-350ms Latency'
  },
  {
    sector: 'On-Demand Mobile Delivery',
    focus: 'Driver dispatch, warehouse picking apps, and live GPS order telemetry.',
    metric: '18-Min Fulfillment'
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
            Our Standards
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Why Companies Partner with Mactis
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            How we structure every technology partnership to ensure architectural quality, transparent delivery, and reliable business outcomes.
          </p>
        </div>

        {/* 4 Pillars Grid (Clean typography, no Lucide icons in colored boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {engagementPrinciples.map((item, idx) => (
            <div 
              key={idx}
              className="p-7 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 hover:border-blue-500/40 transition-colors shadow-sm"
            >
              <div className="text-xs font-extrabold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                Standard {item.number}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Industry Deployment Track Record */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 mb-6 gap-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Industry Experience & Track Record
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Representative production domains architected and maintained by our engineering teams.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              <span>Discuss Your Industry Specs</span>
              <span className="ml-1 font-bold">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industrySectors.map((sector, i) => (
              <div 
                key={i} 
                className="p-4 rounded-lg border border-slate-100 dark:border-slate-850 bg-slate-50/60 dark:bg-slate-900/40 space-y-2"
              >
                <div className="text-xs font-bold text-blue-700 dark:text-blue-400">
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
