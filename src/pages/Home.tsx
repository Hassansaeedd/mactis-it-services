import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Code, ShieldCheck, Cpu, Terminal, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import SoftwareShowcase from '../components/SoftwareShowcase';
import ParticlesBackground from '../components/ParticlesBackground';

const Home: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'ai' | 'cloud'>('architecture');

  const copySnippet = () => {
    navigator.clipboard.writeText('npx create-mactis-app@latest');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techBadges = [
    { name: 'React 19 & Next.js', color: 'border-blue-500/30 text-blue-500 dark:text-blue-400 bg-blue-500/10' },
    { name: 'Node.js & Laravel', color: 'border-purple-500/30 text-purple-500 dark:text-purple-400 bg-purple-500/10' },
    { name: 'Generative AI & LLMs', color: 'border-indigo-500/30 text-indigo-500 dark:text-indigo-400 bg-indigo-500/10' },
    { name: 'PostgreSQL & Redis', color: 'border-cyan-500/30 text-cyan-500 dark:text-cyan-400 bg-cyan-500/10' },
    { name: 'Docker & AWS', color: 'border-amber-500/30 text-amber-500 dark:text-amber-400 bg-amber-500/10' },
  ];

  return (
    <div className="animate-fade-in relative">
      {/* 1. High-Tech Hero Section with Casberry Particles & Origin UI Terminal */}
      <section className="relative py-24 md:py-36 bg-slate-900 dark:bg-dark overflow-hidden border-b border-slate-200/50 dark:border-white/10">
        {/* Interactive Casberry Particle Canvas */}
        <ParticlesBackground quantity={75} className="z-0" />

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-primary/20 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-500/20 blur-[160px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left space-y-8">
              {/* Origin UI Pill Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 text-slate-200 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                <span>Next-Gen Software & AI Engineering</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                We Build Intelligent <br />
                <span className="text-gradient">Software & AI Ecosystems</span>
              </h1>

              <p className="text-slate-300 dark:text-slate-300 text-lg sm:text-xl leading-relaxed max-w-xl">
                Mactis is a premier technology agency. We architect scalable web platforms, high-performance mobile apps, and enterprise AI models engineered for business growth.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! Can I get more info on this?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center text-base py-3.5 px-7 rounded-xl shadow-xl shadow-primary/30 group"
                >
                  <MessageCircle className="mr-2.5 h-5 w-5" />
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/services"
                  className="px-6 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 backdrop-blur-md font-semibold text-base inline-flex items-center justify-center transition-all"
                >
                  Explore Services
                </Link>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 flex flex-wrap gap-2.5">
                {techBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-3 py-1 rounded-lg border font-medium transition-all backdrop-blur-sm ${badge.color}`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Origin UI Interactive Cyber Terminal */}
            <div className="lg:col-span-5">
              <div className="glass-card rounded-2xl border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl bg-slate-950/80">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="h-3.5 w-3.5 text-primary-light" />
                    <span>mactis-system-core.v2</span>
                  </div>

                  <button
                    onClick={copySnippet}
                    className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                    title="Copy command"
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Interactive Code Selector */}
                <div className="flex border-b border-white/10 text-xs font-mono bg-slate-900/50">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-4 py-2 flex-1 text-center transition-colors ${
                      activeTab === 'architecture' ? 'bg-primary/20 text-white border-b-2 border-primary font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`px-4 py-2 flex-1 text-center transition-colors ${
                      activeTab === 'ai' ? 'bg-primary/20 text-white border-b-2 border-primary font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    AI Engine
                  </button>
                  <button
                    onClick={() => setActiveTab('cloud')}
                    className={`px-4 py-2 flex-1 text-center transition-colors ${
                      activeTab === 'cloud' ? 'bg-primary/20 text-white border-b-2 border-primary font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Cloud & Scale
                  </button>
                </div>

                {/* Code Window Content */}
                <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 space-y-3 min-h-[220px]">
                  {activeTab === 'architecture' && (
                    <>
                      <p className="text-slate-500">// Initialize Mactis High-Speed Stack</p>
                      <p><span className="text-purple-400">import</span> &#123; <span className="text-blue-400">MicroServices</span>, <span className="text-amber-400">SanctumAuth</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">'@mactis/core'</span>;</p>
                      <p className="pt-1"><span className="text-purple-400">const</span> system = <span className="text-purple-400">await</span> MicroServices.<span className="text-blue-400">init</span>(&#123;</p>
                      <p className="pl-4">framework: <span className="text-emerald-400">'React 19 + Next.js'</span>,</p>
                      <p className="pl-4">database: <span className="text-emerald-400">'PostgreSQL + Redis'</span>,</p>
                      <p className="pl-4">security: <span className="text-emerald-400">'AES-256 + OAuth2'</span>,</p>
                      <p>&#125;);</p>
                      <p className="text-emerald-400 flex items-center pt-2">
                        <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 shrink-0" />
                        <span>System status: 99.99% Uptime Verified</span>
                      </p>
                    </>
                  )}

                  {activeTab === 'ai' && (
                    <>
                      <p className="text-slate-500">// Custom AI Agent & Automation Pipeline</p>
                      <p><span className="text-purple-400">const</span> aiAgent = <span className="text-purple-400">new</span> <span className="text-blue-400">MactisAIAgent</span>(&#123;</p>
                      <p className="pl-4">model: <span className="text-emerald-400">'GPT-4o-Enterprise'</span>,</p>
                      <p className="pl-4">knowledgeBase: <span className="text-emerald-400">'Custom Vector DB'</span>,</p>
                      <p className="pl-4">capabilities: [<span className="text-emerald-400">'Support'</span>, <span className="text-emerald-400">'Automated ERP'</span>],</p>
                      <p>&#125;);</p>
                      <p className="text-purple-300 pt-1">aiAgent.<span className="text-blue-400">streamResponse</span>(&#123; latency: <span className="text-amber-400">'14ms'</span> &#125;);</p>
                    </>
                  )}

                  {activeTab === 'cloud' && (
                    <>
                      <p className="text-slate-500">// Automated CI/CD & Deployment Engine</p>
                      <p><span className="text-purple-400">deploy</span>: <span className="text-emerald-400">'AWS EC2 / DigitalOcean'</span></p>
                      <p><span className="text-purple-400">container</span>: <span className="text-emerald-400">'Docker + Kubernetes Cluster'</span></p>
                      <p><span className="text-purple-400">cdn</span>: <span className="text-emerald-400">'Global Cloudflare Edge'</span></p>
                      <div className="mt-3 p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] flex items-center justify-between">
                        <span>Status: Live Production Ready</span>
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                    </>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Origin UI Style Feature Cards */}
      <section className="py-20 bg-slate-100 dark:bg-dark-lighter border-b border-slate-200 dark:border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              Why Partner With Mactis
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Enterprise Engineering <br />
              <span className="text-gradient">Built For Maximum Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="glass p-8 rounded-3xl border border-slate-200/60 dark:border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start group">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-6 group-hover:scale-110 transition-transform">
                <Code className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Enterprise Web & App Architecture</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Clean, maintainable, and type-safe code written with modern technologies (React 19, Next.js, Node.js, and Laravel).
              </p>
              <ul className="space-y-2 mt-auto">
                <li className="flex items-center text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                  Fast page load performance
                </li>
                <li className="flex items-center text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                  Custom backend APIs & Dashboards
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="glass p-8 rounded-3xl border border-slate-200/60 dark:border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start group">
              <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-500 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">AI Agents & Workflow Automation</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Streamline operations, automate manual data work, and deploy custom generative AI agents for customer support and ERPs.
              </p>
              <ul className="space-y-2 mt-auto">
                <li className="flex items-center text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-400 mr-2" />
                  Custom LLM & Chatbot integrations
                </li>
                <li className="flex items-center text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-400 mr-2" />
                  Process & Inventory automation
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="glass p-8 rounded-3xl border border-slate-200/60 dark:border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start group">
              <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Scalable Cloud & Security</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Optimized database systems, penetration-tested APIs, and secure cloud setups hosted on AWS & DigitalOcean.
              </p>
              <ul className="space-y-2 mt-auto">
                <li className="flex items-center text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2" />
                  Zero-downtime CI/CD deployment
                </li>
                <li className="flex items-center text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2" />
                  Audited PostgreSQL & MySQL DBs
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

      {/* 5. Software Products Showcase */}
      <SoftwareShowcase />

      {/* 6. Client Testimonials */}
      <TestimonialsSection />

      {/* 7. Conversion CTA Banner with Particle Background */}
      <section className="relative py-24 bg-gradient-to-br from-primary/20 via-slate-100 dark:via-dark-lighter to-blue-500/20 border-t border-slate-200 dark:border-white/10 overflow-hidden">
        <ParticlesBackground quantity={40} className="z-0" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Ready to Build Your Custom Software?</h2>
          <p className="text-slate-500 dark:text-slate-300 text-lg mb-10 leading-relaxed">
            Partner with Pakistan's leading software architects and developers. Tell us about your project requirements and get a detailed proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! Can I get more info on this?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center text-lg px-8 py-4 shadow-xl shadow-primary/30"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start on WhatsApp
            </a>
            <Link 
              to="/contact" 
              className="btn-outline text-lg px-8 py-4 bg-white/5 backdrop-blur-md"
            >
              Submit Project Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
