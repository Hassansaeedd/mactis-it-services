import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, MessageCircle, Code2, ShieldCheck, Cpu
} from 'lucide-react';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import SoftwareShowcase from '../components/SoftwareShowcase';
import { ImageWithSkeleton } from '../components/SkeletonLoader';

const Home: React.FC = () => {
  const techEcosystem = [
    { name: 'Amazon Web Services', tag: 'Cloud Infrastructure' },
    { name: 'Microsoft Azure', tag: 'Enterprise Cloud' },
    { name: 'Google Cloud Platform', tag: 'AI & BigQuery' },
    { name: 'Docker & Kubernetes', tag: 'Container Orchestration' },
    { name: 'PostgreSQL Enterprise', tag: 'Distributed Relational DB' },
    { name: 'React 19 & Next.js', tag: 'Frontend Systems' },
    { name: 'Python & PyTorch', tag: 'Neural AI Models' },
  ];

  return (
    <div className="animate-fade-in relative bg-white dark:bg-dark">
      {/* 1. Global Enterprise Hero Section */}
      <section className="relative py-16 lg:py-24 bg-slate-900 dark:bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight">
                Architecting Resilient <br />
                <span className="text-blue-400">Enterprise Software & AI</span> Systems
              </h1>

              {/* Corporate Value Proposition */}
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
                Mactis partners with high-growth companies and established organizations to design, engineer, and deploy mission-critical web applications, high-throughput AI pipelines, and custom industrial ERPs built for scale.
              </p>

              {/* Key Proof Points (Clean borders, exact requested stats) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-800 max-w-2xl text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white">12+</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white">20+</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">Deployments</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white">3+</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">Years Experience</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-blue-400">99.9%</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">Uptime SLA</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to schedule an enterprise consultation with Mactis engineering leadership.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary space-x-2 py-3 px-6"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Schedule Executive Briefing</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  to="/services"
                  className="btn-outline py-3 px-6 text-white border-slate-700 hover:bg-slate-800"
                >
                  Explore Capabilities
                </Link>
              </div>

            </div>

            {/* Right: Real-World Enterprise Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900 shadow-sm">
                <ImageWithSkeleton 
                  src="/images/hero_enterprise.jpg" 
                  alt="Mactis Global Enterprise Software Engineering Team" 
                  aspectRatio="aspect-[4/3]"
                  className="w-full bg-slate-900"
                />
                <div className="p-4 bg-slate-900 border-t border-slate-800">
                  <p className="text-white font-semibold text-sm">Senior Engineering & Architecture Pods</p>
                  <p className="text-slate-400 text-xs mt-0.5">Cross-functional agile squads architecting scalable enterprise systems.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Enterprise Tech Ecosystem Bar */}
      <div className="bg-slate-100 dark:bg-slate-900 py-4 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 shrink-0">
              Technology Ecosystem & Standards
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3">
              {techEcosystem.map((item, idx) => (
                <div 
                  key={idx}
                  className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Strategic Engineering Capabilities Matrix (Structured, flat, no checkmark overload) */}
      <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
              Capabilities Matrix
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Enterprise Software Architecture
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              We eliminate technical debt and accelerate roadmap delivery with robust, secure, and future-proof digital engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Capability 1 */}
            <div className="p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-400">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Enterprise Web & Cloud Platforms
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Clean, type-safe, and microservices-based software architectures built with React 19, Next.js, and high-performance backend APIs.
                </p>
                <div className="space-y-2 border-t border-slate-100 dark:border-slate-800/80 pt-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>Sub-second response time architecture</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>Multi-tenant B2B administrative dashboards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>Audited REST and GraphQL microservices</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Capability 2 */}
            <div className="p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-400">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    AI Agents & Computer Vision
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Operationalize autonomous intelligence: custom retrieval-augmented LLMs, intelligent workflow automation, and edge computer vision suites.
                </p>
                <div className="space-y-2 border-t border-slate-100 dark:border-slate-800/80 pt-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>Enterprise vector search and RAG pipelines</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>Real-time video analytics and ANPR recognition</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>ERP and CRM workflow autonomous agents</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Capability 3 */}
            <div className="p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Cloud DevOps & Security
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Resilient infrastructure engineered for 99.9% availability, zero-downtime CI/CD pipelines, and rigorous penetration-tested security controls.
                </p>
                <div className="space-y-2 border-t border-slate-100 dark:border-slate-800/80 pt-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>Kubernetes cluster auto-scaling on AWS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>High-availability PostgreSQL and Redis caching</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>End-to-end encryption and compliance audits</span>
                  </div>
                </div>
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

      {/* 6. Enterprise Delivery Standards */}
      <TestimonialsSection />

      {/* 7. Conversion CTA Banner (Clean solid dark background, no radial neon orbs) */}
      <section className="py-20 md:py-24 bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Engineer Your Next Technical Initiative?
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed">
            Consult with our principal software architects. Discuss your roadmap, architecture requirements, and timeline for a comprehensive technical proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to consult with Mactis regarding our software project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3 px-6 space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Direct Briefing</span>
            </a>
            <Link 
              to="/contact" 
              className="btn-outline py-3 px-6 text-white border-slate-700 hover:bg-slate-800"
            >
              Submit Enterprise RFP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
