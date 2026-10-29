import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import SoftwareShowcase from '../components/SoftwareShowcase';
import { HeroBackgroundSlider } from '../components/HeroBackgroundSlider';
import { TechEcosystemMarquee } from '../components/TechEcosystemMarquee';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in relative bg-white dark:bg-dark">
      {/* 1. Full-Width Background Photo Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center py-20 lg:py-28 overflow-hidden border-b border-slate-800">
        <HeroBackgroundSlider />

        {/* Foreground Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          {/* Sub-badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Software Development & Cloud Engineering</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6">
            Engineering Custom Software, <br />
            <span className="text-blue-400">Cloud Systems & Intelligent</span> Solutions
          </h1>

          {/* Value Proposition */}
          <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-normal mb-8">
            Mactis designs, builds, and scales custom software for growing businesses and established organizations. From mission-critical web platforms and mobile apps to custom industrial ERPs and cloud architecture, we build reliable digital systems tailored to your business.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to discuss a software project with Mactis engineering leadership.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3.5 px-7 text-sm font-semibold shadow-lg shadow-blue-900/30 w-full sm:w-auto"
            >
              <span>Schedule a Consultation</span>
              <span className="ml-2 font-bold">→</span>
            </a>

            <Link
              to="/services"
              className="btn-outline py-3.5 px-7 text-sm font-semibold text-white border-slate-600/80 bg-slate-900/60 backdrop-blur-md hover:bg-slate-800 w-full sm:w-auto"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Key Proof Points Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 max-w-3xl mx-auto text-center shadow-xl">
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">12+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Enterprise Clients</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">20+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Production Projects</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">3+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Years Track Record</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">99.9%</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Ecosystem Running Marquee */}
      <TechEcosystemMarquee />

      {/* 2. Core Capabilities Matrix */}
      <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
              What We Do
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
            <div className="group relative p-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-md">
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
                  className="inline-flex items-center text-xs font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors"
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
                  Featured Service
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
                  Practical AI integration that automates repetitive tasks, extracts actionable insights from documents, and provides conversational assistants for your users.
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
            <div className="group relative p-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-md">
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
                  className="inline-flex items-center text-xs font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors"
                >
                  <span>Learn more about Cloud & DevOps</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Services Section */}
      <ServicesSection />

      {/* 4. Stats Counters */}
      <StatsSection />

      {/* 5. Software Products & Projects Showcase */}
      <SoftwareShowcase />

      {/* 6. Why Teams Choose Mactis */}
      <TestimonialsSection />

      {/* 7. Conversion CTA Banner */}
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
              className="btn-primary py-3 px-6 space-x-2 font-semibold"
            >
              <span>Contact on WhatsApp</span>
              <span className="ml-1 font-bold">→</span>
            </a>
            <Link 
              to="/contact" 
              className="btn-outline py-3 px-6 text-white border-slate-700 hover:bg-slate-800 font-semibold"
            >
              Send Project Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
