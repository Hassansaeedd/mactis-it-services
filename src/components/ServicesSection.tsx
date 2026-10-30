import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    code: '01',
    title: "Websites & Web Applications",
    description: "Custom websites, online stores, and customer web portals designed to look great on any screen, load quickly, and convert visitors into customers.",
    tags: ['React', 'Next.js', 'Online Store', 'Admin Dashboards', 'Stripe'],
    deliverables: "Mobile-responsive website, easy admin panel, customer accounts, and secure checkout.",
    link: "/services"
  },
  {
    id: 2,
    code: '02',
    title: "Mobile App Development",
    description: "Dedicated mobile apps for iPhone and Android with clean modern designs, fast loading speeds, and smooth offline performance.",
    tags: ['iOS & Android', 'React Native', 'Flutter', 'Push Alerts', 'GPS Tracking'],
    deliverables: "Ready-to-publish iOS and Android apps, push notifications, and App Store assistance.",
    link: "/services"
  },
  {
    id: 3,
    code: '03',
    title: "Smart AI & Business Automation",
    description: "Automate repetitive daily tasks, answer client questions around the clock, and streamline business paperwork with tailored smart tools.",
    tags: ['WhatsApp AI Bot', 'Auto Invoicing', 'Smart Document Scanner', 'Sales Reports'],
    deliverables: "Automated WhatsApp & web customer assistants, document data extractors, and live business dashboards.",
    link: "/services",
    featured: true
  },
  {
    id: 4,
    code: '04',
    title: "Cloud Hosting & Maintenance",
    description: "Safe, high-speed hosting and ongoing maintenance to keep your software online, up-to-date, and completely protected 24/7.",
    tags: ['AWS', 'Google Cloud', 'Daily Backups', 'Speed Optimization', 'Security'],
    deliverables: "Fast cloud setup, automated daily backups, security updates, and friendly on-demand technical support.",
    link: "/services"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-2">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Custom Software Services for Your Business
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            From new websites and mobile apps to smart automation and cloud hosting, we help you launch and grow your digital tools.
          </p>
        </div>

        {/* 2x2 Grid with Smooth Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className={`group relative p-7 rounded-xl flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg ${
                service.featured
                  ? 'bg-sky-50/60 dark:bg-slate-900 border-2 border-sky-500/80 dark:border-sky-500/70'
                  : 'bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide">
                    Service {service.code}
                  </span>
                  {service.featured && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                      Popular Request
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-3.5 mb-6">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Deliverables: </span>
                  {service.deliverables}
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors"
                >
                  <span>Explore this Service</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <Link to="/services" className="btn-outline text-xs py-3 px-8 font-semibold">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
