import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, MessageCircle, Code2, ShieldCheck, Cpu, CheckCircle2
} from 'lucide-react';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import SoftwareShowcase from '../components/SoftwareShowcase';
import { HeroBackgroundSlider } from '../components/HeroBackgroundSlider';
import { TechEcosystemMarquee } from '../components/TechEcosystemMarquee';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in relative bg-white dark:bg-dark">
      {/* 1. Global Enterprise Hero Section with Full-Width Background Photo Animation */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center py-20 lg:py-28 overflow-hidden border-b border-slate-800">
        {/* Full-Width Animated Image Background */}
        <HeroBackgroundSlider />

        {/* Foreground Content (Centered, Authoritative & High-Contrast) */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          {/* Executive Sub-badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Enterprise Software & AI Architecture</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6">
            Architecting Resilient <br />
            <span className="text-blue-400">Enterprise Software & AI</span> Systems
          </h1>

          {/* Value Proposition */}
          <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-normal mb-8 text-shadow">
            Mactis partners with high-growth companies and established organizations to design, engineer, and deploy mission-critical web applications, high-throughput AI pipelines, and custom industrial ERPs built for scale.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to schedule an enterprise consultation with Mactis engineering leadership.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary space-x-2 py-3.5 px-7 text-sm font-semibold shadow-lg shadow-blue-900/30 w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Schedule Executive Briefing</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              to="/services"
              className="btn-outline py-3.5 px-7 text-sm font-semibold text-white border-slate-600/80 bg-slate-900/60 backdrop-blur-md hover:bg-slate-800 w-full sm:w-auto"
            >
              Explore Capabilities
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
              <div className="text-xs text-slate-400 font-medium mt-1">Deployments</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">3+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Years Experience</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">99.9%</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Tech Ecosystem Running Marquee */}
      <TechEcosystemMarquee />

      {/* 2. Strategic Engineering Capabilities Matrix */}
      <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Enterprise Software Architecture
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              We eliminate technical debt and accelerate roadmap delivery with robust, secure, and future-proof digital engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* Capability 1: Web & Cloud */}
            <div className="group relative p-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-md">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold tracking-wider text-blue-700 dark:text-blue-400 uppercase">
                    Practice 01
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Sub-Second Latency
                  </span>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/40 text-blue-700 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Enterprise Web & Cloud Platforms
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Clean, type-safe, and microservices-based software architectures built with React 19, Next.js, and high-performance backend APIs.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['React 19', 'Next.js 15', 'TypeScript', 'GraphQL', 'Microservices'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-2.5 border-t border-slate-100 dark:border-slate-800/80 pt-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Sub-second response time architecture with SSR & edge caching</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Multi-tenant B2B administrative portals and real-time analytics</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Audited REST and GraphQL microservices with schema validation</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors"
                >
                  <span>Explore Practice Specifications</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Capability 2: AI & Computer Vision */}
            <div className="group relative p-7 bg-slate-50/90 dark:bg-slate-900 border-2 border-blue-600/70 dark:border-blue-500/70 rounded-xl flex flex-col justify-between shadow-lg transition-all duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-semibold tracking-wide uppercase shadow-sm">
                  Strategic Core Practice
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-5 pt-1">
                  <span className="text-xs font-semibold tracking-wider text-blue-700 dark:text-blue-400 uppercase">
                    Practice 02
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    Production Ready
                  </span>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-blue-600 text-white shadow-sm">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    AI Agents & Computer Vision
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Operationalize autonomous intelligence: custom retrieval-augmented LLMs, intelligent workflow automation, and edge computer vision suites.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['PyTorch', 'Enterprise RAG', 'Edge Vision', 'Vector Search', 'LLM Agents'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-blue-100/70 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-2.5 border-t border-slate-200 dark:border-slate-800 pt-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Proprietary vector search pipelines with zero enterprise data leakage</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Real-time multi-camera video analytics, ANPR, and object detection</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Autonomous CRM and ERP reasoning agents automating complex workflows</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs font-bold text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors"
                >
                  <span>Explore AI Practice Specifications</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Capability 3: Cloud DevOps & Security */}
            <div className="group relative p-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-md">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold tracking-wider text-slate-600 dark:text-slate-400 uppercase">
                    Practice 03
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    99.9% Uptime SLA
                  </span>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-blue-700 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Cloud DevOps & Security
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Resilient infrastructure engineered for 99.9% availability, zero-downtime CI/CD pipelines, and rigorous penetration-tested security controls.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['AWS EKS', 'Kubernetes', 'Docker', 'PostgreSQL', 'Terraform IaC'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-2.5 border-t border-slate-100 dark:border-slate-800/80 pt-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Kubernetes cluster auto-scaling with multi-region AWS and Azure failover</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>High-availability PostgreSQL sharding and Redis distributed caching</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Automated zero-downtime CI/CD delivery pipelines with SOC-2 compliance</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors"
                >
                  <span>Explore Infrastructure Specifications</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
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

      {/* 6. Enterprise Delivery Standards */}
      <TestimonialsSection />

      {/* 7. Conversion CTA Banner */}
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
              className="btn-primary py-3 px-6 space-x-2 font-semibold"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Direct Briefing</span>
            </a>
            <Link 
              to="/contact" 
              className="btn-outline py-3 px-6 text-white border-slate-700 hover:bg-slate-800 font-semibold"
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
