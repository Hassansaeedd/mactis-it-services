import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImageWithSkeleton } from '../components/SkeletonLoader';
import { TechEcosystemMarquee } from '../components/TechEcosystemMarquee';
import { InteractiveProjectEstimator } from '../components/InteractiveProjectEstimator';

interface ServiceItem {
  code: string;
  title: string;
  image: string;
  description: string;
  badge: string;
  tags: string[];
  features: string[];
  featured?: boolean;
}

const services: ServiceItem[] = [
  {
    code: '01',
    title: 'Custom Websites & Web Applications',
    image: '/images/service_web.jpg',
    description: 'Custom, fast-loading websites, customer portals, and online platforms designed to convert visitors and run smoothly on all devices.',
    badge: 'Fast & Modern',
    tags: ['Next.js', 'React', 'Mobile Ready', 'Admin Panel', 'Stripe Payments'],
    features: [
      'Tailored responsive design for smartphones, tablets, and desktops',
      'Search engine optimization (SEO) to help new customers discover you',
      'Secure user accounts, customer profiles, and fast checkout',
      'Simple admin dashboard to update photos, products, and content'
    ],
  },
  {
    code: '02',
    title: 'Mobile App Development (iOS & Android)',
    image: '/images/service_mobile.jpg',
    description: 'Native-feel mobile apps for Apple iPhones and Android phones, crafted for speed, easy navigation, and seamless performance.',
    badge: 'iOS & Android',
    tags: ['React Native', 'Flutter', 'Apple App Store', 'Google Play', 'Offline Mode'],
    features: [
      'Single unified app that runs smoothly on both iPhone and Android',
      'Works offline so your users can see data even without internet',
      'Instant push notifications to message and engage your customers',
      'Full assistance publishing to the Apple App Store & Google Play Store'
    ],
  },
  {
    code: '03',
    title: 'AI Solutions & Smart Automation',
    image: '/images/service_ai.jpg',
    description: 'Save hours each week by automating repetitive tasks, customer messaging, and paperwork with smart, easy-to-use digital tools.',
    badge: 'Popular Choice',
    tags: ['WhatsApp AI Bot', 'Auto-Invoicing', 'Document Scanner', 'Smart Reports'],
    features: [
      '24/7 automated WhatsApp and website customer service assistants',
      'Automatic digital paperwork sorting and invoice data extraction',
      'Daily business analytics and sales alerts directly to your phone',
      'Strict data privacy keeping your customer records 100% confidential'
    ],
    featured: true,
  },
  {
    code: '04',
    title: 'Business Management & ERP Software',
    image: '/images/service_erp.jpg',
    description: 'Centralized software tailored to your factory, warehouse, or retail operations to manage stock, sales, and employee approvals.',
    badge: 'Tailored Software',
    tags: ['Inventory', 'Weighbridges', 'Billing', 'Ledgers', 'Branch Sync'],
    features: [
      'Automated weighbridge and scale integration for accurate weights',
      'Multi-warehouse stock tracking and automated reorder alerts',
      'Double-entry ledgers, automated tax calculations, and invoices',
      'Role-based permissions for managers, cashiers, and staff'
    ],
  },
  {
    code: '05',
    title: 'Cloud Hosting & DevOps Maintenance',
    image: '/images/service_cloud.jpg',
    description: 'Secure cloud hosting, daily backups, and round-the-clock maintenance to keep your software fast and online 24 hours a day.',
    badge: '99.9% Uptime',
    tags: ['AWS', 'Google Cloud', 'Daily Backups', 'SSL Security', 'Speed Boost'],
    features: [
      'High-speed cloud servers with 99.9% guaranteed uptime',
      'Automatic daily database backups to safeguard your company data',
      'Zero-downtime updates so your software never goes offline',
      'Friendly technical support ready whenever you need assistance'
    ],
  },
  {
    code: '06',
    title: 'Security & Software Maintenance',
    image: '/images/service_security.jpg',
    description: 'Protect your business records, user accounts, and customer transactions with proactive security checks and system updates.',
    badge: 'Security Protected',
    tags: ['SSL/TLS', 'Data Encryption', 'Account Security', 'Security Audits'],
    features: [
      'Comprehensive security scanning to protect against data leaks',
      'Two-factor authentication and safe password login systems',
      'End-to-end data encryption for sensitive financial records',
      'Routine software patches and security updates to keep you protected'
    ],
  },
];

const processSteps = [
  { step: '01', title: 'Free Consultation', desc: 'We listen to your business goals, discuss your ideas, and outline a straightforward, transparent plan.' },
  { step: '02', title: 'Design & Prototype', desc: 'We design clear visual mockups and screens so you can see exactly how your software will look and work.' },
  { step: '03', title: 'Building & Testing', desc: 'Our developers build your software with regular updates and live previews so you can test working features.' },
  { step: '04', title: 'Launch & Support', desc: 'We launch your system smoothly and provide friendly ongoing support and maintenance so you never get stuck.' },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white dark:bg-dark">
      {/* Hero with Light Blue Brand Theme */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-sky-50 via-white to-sky-50/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-sky-100 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-4">
            <span>Our Services & Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white mb-4 tracking-tight leading-[1.15]">
            Custom Software Built for <br />
            <span className="text-sky-600 dark:text-sky-400">Speed, Simplicity & Growth</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-normal">
            Mactis builds custom websites, mobile apps, and business management tools. We work directly with you to turn your ideas into dependable software delivered on time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to consult with Mactis about custom software development.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary space-x-2 py-3.5 px-7 text-sm font-semibold shadow-md"
            >
              <span>Schedule Free WhatsApp Consultation</span>
              <span className="ml-1 font-bold">→</span>
            </a>
            <Link to="/contact" className="btn-outline py-3.5 px-7 text-sm font-semibold">
              Send Project Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Running Technology Ecosystem Marquee */}
      <TechEcosystemMarquee />

      {/* Services Grid (Smooth Flowing Cards with Real Photos) */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-2">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Our Core Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm md:text-base leading-relaxed">
              Tailored software development and cloud solutions designed to solve real business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`group relative rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl ${
                  service.featured
                    ? 'bg-sky-50/70 dark:bg-slate-900 border-2 border-sky-500/80 dark:border-sky-500/70'
                    : 'bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500'
                }`}
              >
                <div>
                  {/* Real Photo Header */}
                  <div className="relative overflow-hidden aspect-[16/10] bg-slate-900">
                    <ImageWithSkeleton
                      src={service.image}
                      alt={service.title}
                      aspectRatio="aspect-[16/10]"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Service Code Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 rounded-md bg-slate-900/90 text-white text-xs font-bold backdrop-blur-md border border-slate-800">
                        Service {service.code}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 z-10">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-md shadow-sm ${
                        service.featured 
                          ? 'bg-sky-600 text-white' 
                          : 'bg-slate-900/80 text-slate-200 backdrop-blur-md border border-slate-700'
                      }`}>
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features List with Clean Checkmark SVGs */}
                    <div className="space-y-2.5 border-t border-slate-100 dark:border-slate-800/80 pt-4 mb-2">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-start text-xs text-slate-600 dark:text-slate-300">
                          <svg className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-slate-50/70 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I would like to discuss your "${service.title}" service.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center text-xs font-semibold py-2.5 px-4 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600 transition-all duration-200"
                  >
                    <span>Inquire About This Service</span>
                    <span className="ml-1.5 font-bold">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Scope & Architecture Estimator */}
      <InteractiveProjectEstimator />

      {/* Delivery Framework */}
      <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-2">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">How We Work Together</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm md:text-base leading-relaxed">
              A transparent, friendly process that delivers your software on schedule with full visibility at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <motion.div 
                key={step.step} 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.15 }}
                className="p-6 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl text-left space-y-3 hover:border-sky-400 transition-colors shadow-sm"
              >
                <div className="text-2xl font-extrabold text-sky-600 dark:text-sky-400 tracking-tight">{step.step}</div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner with Light Blue Brand Theme */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">Ready to Discuss Your Project?</h2>
          <p className="text-sky-100 text-sm mb-8 leading-relaxed font-normal">
            Schedule an initial consultation with our technical team. We will review what you need and provide a realistic timeline and cost estimate.
          </p>
          <a
            href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to consult with Mactis about software development.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-8 font-bold bg-white text-sky-700 hover:bg-sky-50 rounded-lg shadow-xl transition-all duration-200 inline-flex items-center justify-center space-x-2"
          >
            <span>Connect on WhatsApp</span>
            <span className="ml-1 font-bold">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
