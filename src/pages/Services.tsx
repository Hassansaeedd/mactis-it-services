import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layout, Smartphone, Cpu, Database, Cloud, Shield,
  ArrowRight, CheckCircle2, MessageCircle, Globe2
} from 'lucide-react';

const services = [
  {
    title: 'Enterprise Web & Cloud Platforms',
    description: 'Bespoke high-concurrency web platforms, SaaS ecosystems, and API gateways built with React 19, Next.js, and distributed microservices architecture.',
    icon: Layout,
    color: 'bg-blue-600',
    features: ['Next.js 15 & React 19 Ecosystems', 'High-Throughput Microservice APIs', 'B2B Admin & Customer Dashboards', 'Multi-Region High Availability'],
  },
  {
    title: 'Cross-Platform Mobile Engineering',
    description: 'High-performance iOS and Android mobile software engineered with React Native and Flutter, featuring offline persistence and native hardware integration.',
    icon: Smartphone,
    color: 'bg-purple-600',
    features: ['iOS & Android Cross-Platform', 'React Native & Flutter Architecture', 'App Store & Play Store Compliance', 'Low-Latency WebSocket Real-Time Sync'],
  },
  {
    title: 'Autonomous AI & Computer Vision',
    description: 'Enterprise generative AI workflows, proprietary RAG neural search pipelines, and edge-deployed computer vision models for automated surveillance.',
    icon: Cpu,
    color: 'bg-indigo-600',
    features: ['Enterprise RAG & Custom LLMs', 'Edge Computer Vision & ANPR', 'Autonomous Operational Agents', 'Predictive Resource Modeling'],
  },
  {
    title: 'Distributed Database Systems',
    description: 'High-availability data layer architecture. We design, optimize, index, and secure mission-critical PostgreSQL, MySQL, Redis, and MongoDB databases.',
    icon: Database,
    color: 'bg-cyan-600',
    features: ['Zero-Downtime Data Migrations', 'Query Optimization & Index Auditing', 'Multi-Node Sharding & Replication', 'Automated Point-in-Time Recovery'],
  },
  {
    title: 'Cloud Architecture & DevOps',
    description: 'Multi-cloud orchestration across AWS, Azure, and DigitalOcean. Infrastructure as Code (Terraform), Kubernetes autoscaling, and zero-downtime CI/CD.',
    icon: Cloud,
    color: 'bg-sky-600',
    features: ['AWS & Kubernetes Orchestration', 'Automated CI/CD Delivery Pipelines', 'Multi-Region Disaster Recovery', '24/7 Production Observability'],
  },
  {
    title: 'Zero-Trust Cybersecurity Consulting',
    description: 'Safeguard your corporate assets against modern attack vectors. We conduct comprehensive vulnerability assessments, penetration audits, and SOC-2 alignment.',
    icon: Shield,
    color: 'bg-rose-600',
    features: ['Full-Scope Penetration Testing', 'API Security & OAuth2 Hardening', 'End-to-End TLS / AES Encryption', 'Compliance Governance Support'],
  },
];

const processSteps = [
  { step: '01', title: 'Architectural Discovery', desc: 'In-depth stakeholder sessions to evaluate business requirements, technical dependencies, and system architecture blueprints.' },
  { step: '02', title: 'System Prototyping', desc: 'Design interactive high-fidelity UX prototypes, database ERDs, API schemas, and deployment topologies.' },
  { step: '03', title: 'Agile Engineering', desc: 'Bi-weekly sprint deliveries with senior engineering squads, strict code reviews, and automated CI test suites.' },
  { step: '04', title: 'Production & SLA', desc: 'Rigorous staging verification, automated zero-downtime production rollout, and continuous 24/7 SLA telemetry monitoring.' },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative py-28 bg-slate-950 dark:bg-dark overflow-hidden border-b border-slate-800 dark:border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-blue-600/10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold uppercase tracking-wider mb-6">
            <Globe2 className="h-3.5 w-3.5" />
            <span>Enterprise Service Catalog</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Comprehensive Digital <br />
            <span className="text-gradient">Engineering Services</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 font-normal">
            Mactis provides full-lifecycle software engineering, custom enterprise platforms, and strategic technology consulting designed for global business scale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to schedule an enterprise consultation regarding Mactis IT services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center text-base px-8 py-4 font-bold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Schedule Architecture Briefing
            </a>
            <Link to="/contact" className="btn-outline border-white/20 text-white hover:bg-white hover:text-slate-950 text-base px-8 py-4 font-semibold">
              Submit RFP Specs
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50 dark:bg-dark-lighter border-b border-slate-200/80 dark:border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Specialized Practices</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Enterprise Practice Areas</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">Engineered to eliminate bottleneck risks and accelerate digital transformation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="glass-card p-8 rounded-3xl group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-white/5 shadow-md shadow-black/[0.02] flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16 blur-2xl group-hover:bg-primary/10 transition-all pointer-events-none" />
                  
                  <div>
                    <div className={`mb-6 p-4 rounded-2xl w-fit ${service.color} text-white shadow-lg`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm">{service.description}</p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={14} className="text-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I would like to consult with Mactis regarding your "${service.title}" practice.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                  >
                    <span>Request Practice Consultation</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white dark:bg-dark border-b border-slate-200/80 dark:border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Engineering Methodology</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Our Delivery Framework</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-base">A disciplined, agile engineering cadence providing complete transparency at every sprint.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}
                <div className="glass-card p-8 rounded-3xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-center relative z-10 border border-slate-200 dark:border-white/5 shadow-md shadow-black/[0.02]">
                  <div className="text-5xl font-black text-gradient mb-4 font-mono">{step.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-slate-950 via-primary/25 to-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to Modernize Your Stack?</h2>
          <p className="text-slate-300 text-base md:text-lg mb-10 leading-relaxed font-normal">
            Schedule an initial discovery session with our technical leads. We will review your requirements and provide an architectural roadmap.
          </p>
          <a
            href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to schedule an enterprise consultation regarding Mactis IT services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center text-base px-10 py-5 font-bold shadow-xl shadow-primary/30"
          >
            <MessageCircle className="mr-3 h-5 w-5" />
            Connect with an Architect on WhatsApp
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
