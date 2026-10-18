import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layout, Smartphone, Cpu, Database, Cloud, Shield,
  ArrowRight, MessageCircle, Globe2
} from 'lucide-react';

const services = [
  {
    title: 'Enterprise Web & Cloud Platforms',
    description: 'Bespoke high-concurrency web platforms, SaaS ecosystems, and API gateways built with React 19, Next.js, and distributed microservices architecture.',
    icon: Layout,
    features: ['Next.js 15 & React 19 Ecosystems', 'High-Throughput Microservice APIs', 'B2B Admin & Customer Dashboards', 'Multi-Region High Availability'],
  },
  {
    title: 'Cross-Platform Mobile Engineering',
    description: 'High-performance iOS and Android mobile software engineered with React Native and Flutter, featuring offline persistence and native hardware integration.',
    icon: Smartphone,
    features: ['iOS & Android Cross-Platform', 'React Native & Flutter Architecture', 'App Store & Play Store Compliance', 'Low-Latency WebSocket Real-Time Sync'],
  },
  {
    title: 'Autonomous AI & Computer Vision',
    description: 'Enterprise generative AI workflows, proprietary RAG neural search pipelines, and edge-deployed computer vision models for automated surveillance.',
    icon: Cpu,
    features: ['Enterprise RAG & Custom LLMs', 'Edge Computer Vision & ANPR', 'Autonomous Operational Agents', 'Predictive Resource Modeling'],
  },
  {
    title: 'Distributed Database Systems',
    description: 'High-availability data layer architecture. We design, optimize, index, and secure mission-critical PostgreSQL, MySQL, Redis, and MongoDB databases.',
    icon: Database,
    features: ['Zero-Downtime Data Migrations', 'Query Optimization & Index Auditing', 'Multi-Node Sharding & Replication', 'Automated Point-in-Time Recovery'],
  },
  {
    title: 'Cloud Architecture & DevOps',
    description: 'Multi-cloud orchestration across AWS, Azure, and DigitalOcean. Infrastructure as Code (Terraform), Kubernetes autoscaling, and zero-downtime CI/CD.',
    icon: Cloud,
    features: ['AWS & Kubernetes Orchestration', 'Automated CI/CD Delivery Pipelines', 'Multi-Region Disaster Recovery', '24/7 Production Observability'],
  },
  {
    title: 'Zero-Trust Cybersecurity Consulting',
    description: 'Safeguard your corporate assets against modern attack vectors. We conduct comprehensive vulnerability assessments, penetration audits, and SOC-2 alignment.',
    icon: Shield,
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
    <div className="animate-fade-in bg-white dark:bg-dark">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-slate-900 dark:bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4">
            <Globe2 className="h-4 w-4" />
            <span>Enterprise Service Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Comprehensive Digital <br />
            <span className="text-blue-400">Engineering Practices</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-normal">
            Mactis provides full-lifecycle software engineering, custom enterprise platforms, and strategic technology consulting designed for global business scale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to schedule an enterprise consultation regarding Mactis IT services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary space-x-2 py-3 px-6 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Schedule Architecture Briefing</span>
            </a>
            <Link to="/contact" className="btn-outline py-3 px-6 text-sm text-white border-slate-700 hover:bg-slate-800">
              Submit RFP Specs
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid (Solid clean cards, no liquid glass, no checkmark overload) */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
              Specialized Practices
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Enterprise Practice Areas
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs sm:text-sm">
              Engineered to eliminate bottleneck risks and accelerate digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div>
                    <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-400 w-fit mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="space-y-1.5 mb-6 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center text-xs text-slate-600 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mr-2" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I would like to consult with Mactis regarding your "${service.title}" practice.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline pt-2 border-t border-slate-100 dark:border-slate-800/60"
                  >
                    <span>Request Practice Consultation</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process (Clean flat cards, crisp typography) */}
      <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
              Engineering Methodology
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Our Delivery Framework</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs sm:text-sm">A disciplined, agile engineering cadence providing complete transparency at every sprint.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div 
                key={step.step} 
                className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-left space-y-2"
              >
                <div className="text-2xl font-bold font-mono text-blue-700 dark:text-blue-400">{step.step}</div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Ready to Modernize Your Stack?</h2>
          <p className="text-slate-300 text-xs sm:text-sm mb-8 leading-relaxed font-normal">
            Schedule an initial discovery session with our technical leads. We will review your requirements and provide an architectural roadmap.
          </p>
          <a
            href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to schedule an enterprise consultation regarding Mactis IT services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-3 px-6 space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Connect on WhatsApp</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
