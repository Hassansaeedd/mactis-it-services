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
  tag: string;
  tech: string[];
  deliverable: string;
  sla: string;
  link: string;
}

const architecturePillars: ArchitecturalPillar[] = [
  {
    id: 'web',
    name: 'Web & SaaS Platforms',
    tag: 'Practice 01',
    tech: ['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL'],
    deliverable: 'High-concurrency B2B web portals, sub-second SSR, and role-based access control.',
    sla: 'Sub-300ms Page Loads • 99.9% Uptime',
    link: '/services',
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps Clusters',
    tag: 'Practice 02',
    tech: ['AWS', 'Microsoft Azure', 'Kubernetes', 'Docker', 'Terraform'],
    deliverable: 'Autoscaling microservices, multi-region failover, and automated CI/CD pipelines.',
    sla: '99.99% Infrastructure SLA • Zero-Downtime Deploys',
    link: '/services',
  },
  {
    id: 'mobile',
    name: 'Mobile Engineering',
    tag: 'Practice 03',
    tech: ['React Native', 'Flutter', 'WebSockets', 'SQLite', 'REST APIs'],
    deliverable: 'Dual iOS and Android apps with live GPS telemetry, push notifications, and offline sync.',
    sla: '60 FPS Native Performance • App Store Compliance',
    link: '/services',
  },
  {
    id: 'erp',
    name: 'Industrial ERP & IoT',
    tag: 'Practice 04',
    tech: ['PostgreSQL', 'Python / Go', 'IoT COM Sync', 'Weighbridges'],
    deliverable: 'Hardware weighbridge automated logging, multi-branch ledgers, and inventory audit logs.',
    sla: '100% ACID Audit Trail • Multi-Branch Synchronization',
    link: '/services',
  },
];

const Home: React.FC = () => {
  const [activePillar, setActivePillar] = useState<ArchitecturalPillar>(architecturePillars[0]);

  return (
    <div className="relative bg-white dark:bg-dark">
      {/* 1. Cinematic Full-Width Background Photo Hero Section */}
      <section className="relative min-h-[750px] lg:min-h-[860px] flex items-center justify-center pt-24 pb-36 sm:pb-40 overflow-hidden border-b border-slate-800">
        <HeroBackgroundSlider />

        {/* Foreground Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          {/* Live Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-6 shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Q4 2026 / 2027 Engineering Sprints Open</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6"
          >
            Engineering Custom Software, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
              Cloud Systems & Intelligent
            </span> Solutions
          </motion.h1>

          {/* Value Proposition */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-normal mb-8 text-shadow-sm"
          >
            Mactis designs, builds, and deploys high-availability custom software for organizations. From mission-critical web platforms and mobile apps to industrial ERPs and cloud architecture, we build reliable digital systems tailored to your business.
          </motion.p>

          {/* Dual Primary Call-to-Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10"
          >
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to schedule an architectural consultation with Mactis engineering leadership.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3.5 px-7 text-sm font-bold shadow-xl shadow-blue-900/40 w-full sm:w-auto"
            >
              <span>Schedule Architecture Consultation</span>
              <span className="ml-2 font-bold">→</span>
            </a>

            <a
              href="#project-estimator"
              className="btn-outline py-3.5 px-7 text-sm font-semibold text-white border-slate-600/90 bg-slate-900/70 backdrop-blur-md hover:bg-slate-800 w-full sm:w-auto"
            >
              Estimate Your Project Scope ↓
            </a>
          </motion.div>

          {/* Interactive Live Architectural Switcher (Direct in Hero) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-slate-800 p-4 sm:p-5 shadow-2xl text-left"
          >
            {/* Pill tabs */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Interactive Architecture Preview:
              </span>
              <div className="flex flex-wrap gap-1">
                {architecturePillars.map((p) => {
                  const isActive = p.id === activePillar.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePillar(p)}
                      className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-slate-850'
                      }`}
                    >
                      {p.name.split(' ')[0]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active blueprint details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
              >
                <div className="sm:col-span-8 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">
                      {activePillar.name}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800 font-mono">
                      {activePillar.sla}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activePillar.deliverable}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {activePillar.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-4 sm:border-l sm:border-slate-800 sm:pl-4 flex flex-col justify-center">
                  <Link
                    to={activePillar.link}
                    className="inline-flex items-center text-xs font-bold text-blue-400 hover:text-blue-300 group"
                  >
                    <span>Inspect Full Practice</span>
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  <span className="text-[10px] text-slate-400 mt-1">
                    Audited Production Delivery
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
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
              Engineering Disciplines
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Core Engineering Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              We build maintainable, high-performance software with clean codebases, automated deployments, and battle-tested architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* Capability 1: Web & SaaS */}
            <div className="group relative p-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-400 tracking-wide uppercase">
                    Practice 01
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    High Performance
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Web & SaaS Applications
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Fast, responsive, and secure web applications built with modern frameworks including React 19, Next.js, and high-performance backend microservices.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Capabilities */}
                <div className="space-y-2.5 border-t border-slate-100 dark:border-slate-800/80 pt-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                    <span>High-concurrency portals and B2B administrative dashboards</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                    <span>Fast page loads with server-side rendering and edge caching</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                    <span>Type-safe REST and GraphQL APIs with schema validation</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs font-bold text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors"
                >
                  <span>Learn more about Web & SaaS</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* Capability 2: AI & Automation */}
            <div className="group relative p-7 bg-slate-50/90 dark:bg-slate-900 border-2 border-blue-600/70 dark:border-blue-500/70 rounded-xl flex flex-col justify-between shadow-lg transition-all duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-semibold tracking-wide uppercase shadow-sm">
                  Featured Discipline
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-5 pt-1">
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-400 tracking-wide uppercase">
                    Practice 02
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    Production Ready
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  AI & Intelligent Automation
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Practical AI integration that automates repetitive workflows, extracts actionable insights from documents, and provides conversational assistants for your users.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['PyTorch', 'Vector Search', 'Document AI', 'Computer Vision', 'Custom Agents'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-blue-100/70 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Capabilities */}
                <div className="space-y-2.5 border-t border-slate-200 dark:border-slate-800 pt-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                    <span>Custom retrieval-augmented (RAG) knowledge bases and search</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                    <span>Automated video analytics, license plate recognition, and detection</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                    <span>Customer support chatbots and operational workflow automation</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs font-bold text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors"
                >
                  <span>Learn more about AI Solutions</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* Capability 3: Cloud & DevOps */}
            <div className="group relative p-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wide uppercase">
                    Practice 03
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    99.9% Uptime
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Cloud Infrastructure & DevOps
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Resilient cloud hosting, automated CI/CD pipelines, container orchestration, and multi-region backups designed for high availability and security.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Capabilities */}
                <div className="space-y-2.5 border-t border-slate-100 dark:border-slate-800/80 pt-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                    <span>Kubernetes cluster auto-scaling on AWS and Microsoft Azure</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                    <span>High-availability PostgreSQL and Redis caching layers</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                    <span>Automated zero-downtime deployment pipelines with test suites</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs font-bold text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors"
                >
                  <span>Learn more about Cloud & DevOps</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

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

      {/* 8. Conversion CTA Banner */}
      <section className="py-20 md:py-24 bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Build or Scale Your Software?
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed">
            Discuss your project requirements, timeline, and architecture with our engineering leadership. We will evaluate your specs and provide a realistic, phased roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to consult with Mactis regarding our software project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3.5 px-7 font-bold shadow-lg shadow-blue-900/40"
            >
              <span>Schedule WhatsApp Consultation</span>
              <span className="ml-2 font-bold">→</span>
            </a>
            <Link 
              to="/contact" 
              className="btn-outline py-3.5 px-7 text-white border-slate-700 hover:bg-slate-800 font-semibold"
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
