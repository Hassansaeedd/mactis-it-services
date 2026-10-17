import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, MessageCircle, Code2, ShieldCheck, Cpu, 
  Sparkles, CheckCircle2, Globe2, Activity, Server
} from 'lucide-react';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import SoftwareShowcase from '../components/SoftwareShowcase';
import ParticlesBackground from '../components/ParticlesBackground';

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
    <div className="animate-fade-in relative">
      {/* 1. Global Multinational Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950 dark:bg-dark overflow-hidden border-b border-slate-800/80 dark:border-white/10">
        {/* Subtle Ambient Particle Field */}
        <ParticlesBackground quantity={35} className="z-0 opacity-60" />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/6 left-1/4 w-[360px] lg:w-[500px] h-[360px] lg:h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none transform-gpu" />
        <div className="absolute bottom-1/6 right-1/4 w-[360px] lg:w-[500px] h-[360px] lg:h-[500px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none transform-gpu" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-7">
              {/* Executive Tag Pill */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-slate-200 text-xs font-semibold backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-white">Global Digital Engineering & Software Consultancy</span>
                <span className="text-slate-400">•</span>
                <span className="text-primary-light font-bold">Enterprise Scale</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Architecting Resilient <br />
                <span className="text-gradient">Enterprise Software & AI</span> Systems
              </h1>

              {/* Corporate Value Proposition */}
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
                Mactis partners with high-growth companies and multinational enterprises to design, engineer, and deploy mission-critical web applications, high-throughput AI pipelines, and custom industrial ERPs built for uncompromised scale.
              </p>

              {/* Key Proof Points */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2 border-y border-white/10 max-w-2xl">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white">99.98%</div>
                  <div className="text-xs text-slate-400 font-medium">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white">15+</div>
                  <div className="text-xs text-slate-400 font-medium">Global Markets</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white">100%</div>
                  <div className="text-xs text-slate-400 font-medium">IP Ownership</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white">24/7</div>
                  <div className="text-xs text-slate-400 font-medium">DevOps Telemetry</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <a
                  href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to schedule an enterprise consultation with Mactis engineering leadership.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center text-base py-4 px-8 rounded-xl shadow-xl shadow-primary/25 font-bold group"
                >
                  <MessageCircle className="mr-2.5 h-5 w-5" />
                  Schedule Executive Briefing
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/services"
                  className="px-6 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-md font-semibold text-base inline-flex items-center justify-center transition-all"
                >
                  Explore Capabilities
                </Link>
              </div>

            </div>

            {/* Right: Real-World Enterprise Visual Showcase */}
            <div className="lg:col-span-5 relative">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-indigo-500 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>

              {/* Main Enterprise Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900">
                
                {/* High-Resolution Real-World Photograph of Enterprise Team & Workspace */}
                <div className="relative h-[340px] sm:h-[400px] w-full overflow-hidden">
                  <img 
                    src="/images/hero_enterprise.jpg" 
                    alt="Mactis Global Enterprise Software Engineering Team" 
                    className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Glassmorphic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Top Bar inside image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white">
                      <Globe2 className="h-3.5 w-3.5 text-blue-400" />
                      <span>Global Delivery Network</span>
                    </span>
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-[10px] font-bold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
                      SOC 2 Aligned
                    </span>
                  </div>

                  {/* Bottom caption in image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-base">Senior Engineering & Architecture Center</p>
                    <p className="text-slate-300 text-xs">Collaborative agile delivery teams managing multi-tier enterprise deployments.</p>
                  </div>
                </div>

                {/* Sub-Panel: Live System Reliability Status */}
                <div className="p-5 bg-slate-950/90 backdrop-blur-xl border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-2 text-slate-300">
                      <Activity className="h-4 w-4 text-emerald-400" />
                      <span>Production Telemetry Status</span>
                    </div>
                    <span className="text-emerald-400 font-bold">100% Operational</span>
                  </div>

                  {/* Telemetry Progress Bars */}
                  <div className="grid grid-cols-3 gap-3 pt-1">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-[10px] text-slate-400 font-medium">Avg API Latency</div>
                      <div className="text-sm font-bold text-white font-mono mt-0.5">14.2 ms</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-[10px] text-slate-400 font-medium">Uptime SLA</div>
                      <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">99.99%</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-[10px] text-slate-400 font-medium">Automated Tests</div>
                      <div className="text-sm font-bold text-primary-light font-mono mt-0.5">1,420+</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Pill Card (Bottom Left) */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 glass-card p-3.5 rounded-2xl border border-white/20 backdrop-blur-xl shadow-2xl items-center space-x-3 bg-slate-900/90 z-20">
                <div className="p-2.5 rounded-xl bg-primary/20 text-primary-light">
                  <Server className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Multi-Cloud Infrastructure</div>
                  <div className="text-[11px] text-slate-400">AWS • Azure • Kubernetes Hybrid</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Enterprise Tech Ecosystem & Standards Bar */}
      <div className="bg-slate-900 dark:bg-dark-lighter py-6 border-b border-slate-800 dark:border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center space-x-2 shrink-0">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Enterprise Technology Ecosystem</span>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
              {techEcosystem.map((item, idx) => (
                <div 
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300 flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Core Enterprise Capabilities Section */}
      <section className="py-24 bg-white dark:bg-dark-lighter border-b border-slate-200/80 dark:border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              Strategic Engineering Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Enterprise Software Architecture <br />
              <span className="text-gradient">Engineered for Scale & Security</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-base md:text-lg">
              We eliminate technical debt and accelerate roadmap delivery with robust, secure, and future-proof digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Capability 1 */}
            <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start group shadow-lg shadow-black/[0.02]">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Enterprise Web & Cloud Platforms</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Clean, type-safe, and microservices-based software architectures built with React 19, Next.js, Node.js, and high-performance backend APIs.
              </p>
              <ul className="space-y-2.5 mt-auto w-full pt-4 border-t border-slate-100 dark:border-white/5">
                <li className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2.5 shrink-0" />
                  Sub-second response time architecture
                </li>
                <li className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2.5 shrink-0" />
                  Multi-tenant B2B admin dashboards
                </li>
                <li className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2.5 shrink-0" />
                  Audited REST & GraphQL microservices
                </li>
              </ul>
            </div>

            {/* Capability 2 */}
            <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start group shadow-lg shadow-black/[0.02]">
              <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-500 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">AI Agents & Computer Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Operationalize autonomous intelligence: custom retrieval-augmented LLMs, intelligent workflow automation, and edge computer vision suites.
              </p>
              <ul className="space-y-2.5 mt-auto w-full pt-4 border-t border-slate-100 dark:border-white/5">
                <li className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-400 mr-2.5 shrink-0" />
                  Enterprise vector search & RAG pipelines
                </li>
                <li className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-400 mr-2.5 shrink-0" />
                  Real-time video analytics & ANPR recognition
                </li>
                <li className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-400 mr-2.5 shrink-0" />
                  ERP & CRM workflow autonomous agents
                </li>
              </ul>
            </div>

            {/* Capability 3 */}
            <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start group shadow-lg shadow-black/[0.02]">
              <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Cloud DevOps & Zero-Trust Security</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Resilient infrastructure engineered for 99.99% availability, zero-downtime CI/CD pipelines, and rigorous penetration-tested security controls.
              </p>
              <ul className="space-y-2.5 mt-auto w-full pt-4 border-t border-slate-100 dark:border-white/5">
                <li className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0" />
                  Kubernetes cluster auto-scaling on AWS
                </li>
                <li className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0" />
                  High-availability PostgreSQL & Redis caching
                </li>
                <li className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0" />
                  End-to-end encryption & compliance audits
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Services Section */}
      <ServicesSection />

      {/* 4. Stats Counters */}
      <StatsSection />

      {/* 5. Software Products & Projects Showcase (with Real World Images) */}
      <SoftwareShowcase />

      {/* 6. Client Testimonials */}
      <TestimonialsSection />

      {/* 7. Conversion CTA Banner */}
      <section className="relative py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-primary/30 border-t border-slate-800 dark:border-white/10 overflow-hidden">
        <ParticlesBackground quantity={30} className="z-0 opacity-50" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 backdrop-blur-md">
            <span>Ready for Global Deployment</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Ready to Engineer Your Next Enterprise Breakthrough?
          </h2>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed font-normal">
            Consult with our principal software architects. Discuss your roadmap, architecture requirements, and timeline for a comprehensive technical proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to consult with Mactis regarding our software project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center text-base sm:text-lg px-8 py-4 shadow-xl shadow-primary/30 font-bold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Direct WhatsApp Briefing
            </a>
            <Link 
              to="/contact" 
              className="btn-outline text-base sm:text-lg px-8 py-4 bg-white/5 border-white/20 text-white hover:bg-white hover:text-slate-950 font-semibold"
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
