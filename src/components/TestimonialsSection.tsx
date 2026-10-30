import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const engagementPrinciples = [
  {
    number: '01',
    title: 'Direct Communication with Developers',
    description: 'You talk directly with the designers and software engineers building your project. No confusing middlemen or miscommunications.',
  },
  {
    number: '02',
    title: 'You Own 100% of Your Code',
    description: 'All project files, source code, designs, and database access belong entirely to you and your company with zero locked contracts.',
  },
  {
    number: '03',
    title: 'Regular Updates & Live Demos',
    description: 'We show you real working progress every two weeks on a private test link so you can see your software take shape step-by-step.',
  },
  {
    number: '04',
    title: 'Long-Term Support & Maintenance',
    description: 'We do not disappear after launch. We provide ongoing assistance, server monitoring, and software updates to keep your business running smoothly.',
  },
];

const industrySectors = [
  {
    sector: 'Factories & Supply Chains',
    focus: 'Electronic scale sync, warehouse stock logs, and automatic invoicing.',
    metric: '10M+ Kg Managed'
  },
  {
    sector: 'Smart Security & Cameras',
    focus: 'Automatic car number plate reading and live traffic violation detection.',
    metric: '99.4% Accuracy'
  },
  {
    sector: 'Online Retail & E-Commerce',
    focus: 'High-speed online shops, fast smartphone checkout, and secure payments.',
    metric: 'Sub-350ms Speed'
  },
  {
    sector: 'Food & Grocery Delivery',
    focus: 'Customer ordering app, rider GPS tracking, and store packing dashboard.',
    metric: '18-Min Delivery'
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-2">
            Why Choose Mactis
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            A Trusted Technology Partner for Your Business
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            We focus on honest communication, clean work, and software that delivers real business results without headaches.
          </p>
        </div>

        {/* 4 Standards Grid with Smooth Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {engagementPrinciples.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="p-7 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 hover:border-sky-400 dark:hover:border-sky-500 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="text-xs font-extrabold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                Standard {item.number}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Industry Deployment Track Record */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 mb-6 gap-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Industries We Serve
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Real software built and tested across diverse industries.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300"
            >
              <span>Discuss Your Industry Needs</span>
              <span className="ml-1 font-bold">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industrySectors.map((sector, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.15 }}
                className="p-4 rounded-lg border border-slate-100 dark:border-slate-850 bg-slate-50/60 dark:bg-slate-900/40 space-y-2 hover:border-sky-300 dark:hover:border-sky-700 transition-colors"
              >
                <div className="text-xs font-bold text-sky-600 dark:text-sky-400">
                  {sector.metric}
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {sector.sector}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  {sector.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
