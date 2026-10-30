import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import SoftwareShowcase from '../components/SoftwareShowcase';
import { HeroBackgroundSlider } from '../components/HeroBackgroundSlider';
import { TechEcosystemMarquee } from '../components/TechEcosystemMarquee';
import { InteractiveProjectEstimator } from '../components/InteractiveProjectEstimator';

interface ArchitecturalPillar {
  id: string;
  name: string;
  tabLabel: string;
  tech: string[];
  deliverable: string;
  link: string;
}

const architecturePillars: ArchitecturalPillar[] = [
  {
    id: 'web',
    name: 'Websites & Online Stores',
    tabLabel: 'Websites',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    deliverable: 'Modern, fast websites, online stores, and customer web portals designed to look great on any screen.',
    link: '/services',
  },
  {
    id: 'mobile',
    name: 'Mobile Applications (iOS & Android)',
    tabLabel: 'Mobile Apps',
    tech: ['React Native', 'Flutter', 'iOS', 'Android', 'Cloud Sync'],
    deliverable: 'Custom mobile apps designed for speed, easy navigation, and seamless performance on iPhones and Android phones.',
    link: '/services',
  },
  {
    id: 'erp',
    name: 'Business Management Systems',
    tabLabel: 'Management Software',
    tech: ['PostgreSQL', 'Node.js', 'Python', 'Automated Billing'],
    deliverable: 'Tailored software for billing, warehouse inventory, order tracking, and day-to-day business operations.',
    link: '/services',
  },
  {
    id: 'cloud',
    name: 'Cloud Hosting & Maintenance',
    tabLabel: 'Cloud & Hosting',
    tech: ['AWS', 'Google Cloud', 'Docker', 'Automated Backups'],
    deliverable: 'Fast, secure cloud setup and round-the-clock maintenance so your software runs smoothly and never goes offline.',
    link: '/services',
  },
];

const Home: React.FC = () => {
  const [activePillar, setActivePillar] = useState<ArchitecturalPillar>(architecturePillars[0]);

  return (
    <div className="relative bg-white dark:bg-dark">
      {/* 1. Cinematic Full-Width Background Photo Hero Section */}
      <section className="relative min-h-[750px] lg:min-h-[840px] flex items-center justify-center pt-24 pb-36 sm:pb-40 overflow-hidden border-b border-slate-800">
        <HeroBackgroundSlider />

        {/* Foreground Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6 pt-6"
          >
            We Build Custom Websites, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
              Mobile Apps & Software
            </span> for Your Business
          </motion.h1>

          {/* Value Proposition */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-normal mb-8 text-shadow-sm"
          >
            Mactis helps companies automate daily operations, sell online, and build custom digital tools. From modern websites to complete management software, we turn your ideas into fast, dependable tools that help your company grow.
          </motion.p>

          {/* Dual Primary Call-to-Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10"
          >
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to consult with Mactis about building custom software for our business.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3.5 px-7 text-sm font-bold shadow-xl shadow-blue-900/40 w-full sm:w-auto"
            >
              <span>Schedule Free Consultation</span>
              <span className="ml-2 font-bold">→</span>
            </a>

            <a
              href="#project-estimator"
              className="py-3.5 px-7 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border-2 border-white/50 hover:border-white rounded-md backdrop-blur-md transition-all duration-200 w-full sm:w-auto shadow-lg text-center inline-flex items-center justify-center space-x-1.5"
            >
              <span>Plan Your Project & Estimate Time</span>
              <span className="font-bold">↓</span>
            </a>
          </motion.div>

          {/* Interactive Live Preview Card (Cream White Contrast Aesthetic) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto rounded-2xl bg-[#FAF9F5] text-slate-900 border border-amber-200/60 p-5 sm:p-6 shadow-2xl shadow-black/40 text-left"
          >
            {/* Minimalist Segmented Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-3 mb-4 gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                What We Build:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {architecturePillars.map((p) => {
                  const isActive = p.id === activePillar.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePillar(p)}
                      className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeHeroTab"
                          className="absolute inset-0 bg-slate-900 rounded-lg shadow-sm"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{p.tabLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
              >
                <div className="sm:col-span-8 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-slate-950">
                      {activePillar.name}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {activePillar.deliverable}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {activePillar.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white text-slate-800 border border-slate-200 shadow-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-4 sm:border-l sm:border-slate-200 sm:pl-5 flex flex-col justify-center">
                  <Link
                    to={activePillar.link}
                    className="inline-flex items-center text-xs font-bold text-sky-600 hover:text-sky-700 group"
                  >
                    <span>Explore Our Services</span>
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  <span className="text-[11px] text-slate-400 mt-1 font-medium">
                    Custom Built for Your Company
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Technology Ecosystem Running Marquee */}
      <TechEcosystemMarquee />

      {/* 2. Interactive Enterprise Project Scope & Estimator */}
      <InteractiveProjectEstimator />

      {/* 3. Core Capabilities Matrix */}
      <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-2">
              What We Do Best
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Everything Your Business Needs to Grow Online
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              We take care of the entire software process from idea and design to launch and support, so you can focus on running your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* Capability 1: Websites & Online Stores */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group relative p-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col justify-between hover:border-sky-400 dark:hover:border-sky-500 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wide uppercase">
                    Core Service 01
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Fast & Responsive
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Websites & Online Stores
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Fast, modern websites and e-commerce stores designed to attract customers, rank on Google, and convert visitors into sales.
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['React', 'Next.js', 'Online Payments', 'SEO Setup', 'Mobile Ready'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Deliverables */}
                <div className="space-y-2.5 border-t border-slate-100 dark:border-slate-800/80 pt-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start space-x-2.5">
                    <svg className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom responsive design that works smoothly on all smartphones & computers</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <svg className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Search engine optimization (SEO) so local and global customers can find you</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <svg className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Simple administrative dashboard to easily manage your products and pages</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs font-bold text-sky-600 dark:text-sky-400 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors"
                >
                  <span>Learn more about Website Services</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>

            {/* Capability 2: AI & Smart Automation */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group relative p-7 bg-sky-50/70 dark:bg-slate-900 border-2 border-sky-500/80 dark:border-sky-500/70 rounded-xl flex flex-col justify-between shadow-lg transition-all duration-300"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 rounded-full bg-sky-600 text-white text-xs font-semibold tracking-wide uppercase shadow-sm">
                  Most Requested
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-5 pt-1">
                  <span className="text-xs font-bold text-sky-700 dark:text-sky-400 tracking-wide uppercase">
                    Core Service 02
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    Saves Time & Cost
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  AI & Smart Automation
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Save hours each week by automating repetitive tasks, customer messaging, and paperwork with smart digital solutions.
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['WhatsApp AI Bot', 'Auto-Invoicing', 'Smart Document Scanner', 'Sales Dashboards'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-sky-100/70 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Deliverables */}
                <div className="space-y-2.5 border-t border-slate-200 dark:border-slate-800 pt-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start space-x-2.5">
                    <svg className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated WhatsApp and web support assistants answering clients 24/7</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <svg className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated invoice creation and digital paperwork sorting without manual typing</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <svg className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Instant sales dashboards and daily operational notifications directly on your phone</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs font-bold text-sky-700 dark:text-sky-400 group-hover:text-sky-800 dark:group-hover:text-sky-300 transition-colors"
                >
                  <span>Learn more about Automation</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>

            {/* Capability 3: Cloud & Maintenance */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group relative p-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col justify-between hover:border-sky-400 dark:hover:border-sky-500 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase">
                    Core Service 03
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Always Online
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Cloud Hosting & Support
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  We host, protect, and maintain your software so it runs fast and stays online 24/7 without technical headaches.
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Cloud Servers', 'Daily Backups', 'SSL Security', 'Speed Optimization'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Deliverables */}
                <div className="space-y-2.5 border-t border-slate-100 dark:border-slate-800/80 pt-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start space-x-2.5">
                    <svg className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>High-speed cloud servers with 99.9% uptime guarantee</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <svg className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automatic daily data backups to protect your records safely</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <svg className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ongoing security updates and direct, friendly technical help whenever you need it</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs font-bold text-sky-600 dark:text-sky-400 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors"
                >
                  <span>Learn more about Hosting & Support</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Core Services Section */}
      <ServicesSection />

      {/* 5. Stats Counters (12+ Enterprise Clients, 20+ Production Projects, 3+ Years Track Record, 99.9% Uptime) */}
      <StatsSection />

      {/* 6. Software Products & Projects Showcase with Interactive Architecture Inspection */}
      <SoftwareShowcase />

      {/* 7. Why Teams Choose Mactis */}
      <TestimonialsSection />

      {/* 8. Conversion CTA Banner with Light Blue Brand Theme */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to Build or Scale Your Software?
          </h2>
          <p className="text-sky-100 text-sm md:text-base mb-8 leading-relaxed font-normal">
            Discuss your project requirements, timeline, and architecture with our engineering leadership. We will evaluate your specs and provide a realistic, phased roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to consult with Mactis regarding our software project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-8 font-bold bg-white text-sky-700 hover:bg-sky-50 rounded-lg shadow-xl transition-all duration-200 inline-flex items-center justify-center"
            >
              <span>Schedule WhatsApp Consultation</span>
              <span className="ml-2 font-bold">→</span>
            </a>
            <Link 
              to="/contact" 
              className="py-3.5 px-7 text-white font-semibold border-2 border-white/60 hover:bg-white/15 rounded-lg backdrop-blur-sm transition-all duration-200"
            >
              Send Project Inquiry Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
