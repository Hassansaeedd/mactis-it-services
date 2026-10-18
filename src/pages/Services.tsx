import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layout, Smartphone, Cpu, Database, Cloud, Shield,
  ArrowRight, MessageCircle, Globe2
} from 'lucide-react';
import { TechEcosystemMarquee } from '../components/TechEcosystemMarquee';

interface ServiceItem {
  code: string;
  title: string;
  description: string;
  slaMetric: string;
  icon: React.ElementType;
  tags: string[];
  features: string[];
  featured?: boolean;
}

const services: ServiceItem[] = [
  {
    code: '01',
    title: 'Enterprise Web & Cloud Platforms',
    description: 'Bespoke high-concurrency web platforms, SaaS ecosystems, and API gateways built with React 19, Next.js, and distributed microservices architecture.',
    slaMetric: 'P99 < 100ms',
    icon: Layout,
    tags: ['Next.js 15', 'React 19', 'GraphQL', 'Microservices', 'Node.js'],
    features: ['Next.js 15 & React 19 SSR Ecosystems', 'High-Throughput Microservice APIs', 'B2B Multi-Tenant Portals & Dashboards', 'Multi-Region High Availability Deployment'],
  },
  {
    code: '02',
    title: 'Cross-Platform Mobile Engineering',
    description: 'High-performance iOS and Android mobile software engineered with React Native and Flutter, featuring offline persistence and native hardware integration.',
    slaMetric: '60 FPS Native',
    icon: Smartphone,
    tags: ['React Native', 'Flutter', 'WebSockets', 'Swift', 'Kotlin'],
    features: ['iOS & Android Unified Codebase', 'React Native & Flutter Architecture', 'Biometric Auth & Hardware Integration', 'Low-Latency WebSocket Real-Time Sync'],
  },
  {
    code: '03',
    title: 'Autonomous AI & Computer Vision',
    description: 'Enterprise generative AI workflows, proprietary RAG neural search pipelines, and edge-deployed computer vision models for automated surveillance.',
    slaMetric: '99.4% Precision',
    icon: Cpu,
    tags: ['PyTorch', 'Enterprise RAG', 'Edge Vision', 'Vector Search', 'Agents'],
    features: ['Enterprise RAG & Proprietary LLMs', 'Edge Computer Vision & Real-time ANPR', 'Autonomous Operational CRM & ERP Agents', 'Zero Corporate Data Leakage Safeguards'],
    featured: true,
  },
  {
    code: '04',
    title: 'Distributed Database Systems',
    description: 'High-availability data layer architecture. We design, optimize, index, and secure mission-critical PostgreSQL, MySQL, Redis, and MongoDB databases.',
    slaMetric: 'Zero Data Loss',
    icon: Database,
    tags: ['PostgreSQL', 'Redis', 'Multi-Node Sharding', 'MongoDB', 'CDC'],
    features: ['Zero-Downtime Live Data Migrations', 'Query Optimization & Index Auditing', 'Multi-Node Sharding & High-Speed Caching', 'Automated Point-in-Time Recovery'],
  },
  {
    code: '05',
    title: 'Cloud Architecture & DevOps',
    description: 'Multi-cloud orchestration across AWS, Azure, and Google Cloud. Infrastructure as Code (Terraform), Kubernetes autoscaling, and zero-downtime CI/CD.',
    slaMetric: '99.9% Uptime SLA',
    icon: Cloud,
    tags: ['AWS EKS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
    features: ['AWS & Kubernetes Auto-Scaling Clusters', 'Automated CI/CD Delivery Pipelines', 'Multi-Region Disaster Recovery Topologies', '24/7 Production Observability & Telemetry'],
  },
  {
    code: '06',
    title: 'Zero-Trust Cybersecurity Consulting',
    description: 'Safeguard your corporate assets against modern attack vectors. We conduct comprehensive vulnerability assessments, penetration audits, and SOC-2 alignment.',
    slaMetric: 'SOC-2 Ready',
    icon: Shield,
    tags: ['Penetration Testing', 'OAuth2 / SAML', 'Zero-Trust', 'AES-256', 'OWASP'],
    features: ['Full-Scope Penetration Testing & Audits', 'API Security & OAuth2 / SAML Hardening', 'End-to-End TLS / AES Encryption Standards', 'Compliance Governance Support (GDPR & SOC-2)'],
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
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4 font-mono">
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

      {/* Running Technology Ecosystem Marquee */}
      <TechEcosystemMarquee />

      {/* Services Grid (Stylish Enterprise Architecture Cards) */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2 font-mono">
              SPECIALIZED PRACTICES // ARCHITECTURE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Enterprise Practice Areas
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm md:text-base leading-relaxed">
              Engineered to eliminate bottleneck risks, optimize operational costs, and accelerate digital roadmap execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`group relative p-7 rounded-xl flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md ${
                    service.featured
                      ? 'bg-slate-50/90 dark:bg-slate-900 border-2 border-blue-600/70 dark:border-blue-500/70'
                      : 'bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50'
                  }`}
                >
                  {/* Top Accent Line */}
                  <div
                    className={`absolute top-0 left-6 right-6 h-[2px] rounded-full ${
                      service.featured ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-600 transition-colors'
                    }`}
                  />

                  {service.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full bg-blue-700 text-white text-[10px] font-bold tracking-wider uppercase font-mono shadow-sm">
                        Strategic Core Practice
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header Metadata */}
                    <div className="flex items-center justify-between mb-5 pt-1">
                      <span className="text-[11px] font-mono font-semibold tracking-wider text-blue-700 dark:text-blue-400 uppercase">
                        PRACTICE // {service.code}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {service.slaMetric}
                      </span>
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/40 text-blue-700 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Deliverables / Capabilities List */}
                    <div className="space-y-2 border-t border-slate-100 dark:border-slate-800/80 pt-4 mb-6">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-start text-xs text-slate-600 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mr-2 mt-1.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <a
                      href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I would like to consult with Mactis regarding your "${service.title}" practice.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors"
                    >
                      <span>Request Practice Consultation</span>
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Framework */}
      <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2 font-mono">
              ENGINEERING METHODOLOGY // PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Our Delivery Framework</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm md:text-base leading-relaxed">
              A disciplined, agile engineering cadence providing complete transparency at every sprint.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div 
                key={step.step} 
                className="p-6 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl text-left space-y-3 hover:border-blue-500/40 transition-colors"
              >
                <div className="text-2xl font-bold font-mono text-blue-700 dark:text-blue-400">{step.step}</div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{step.title}</h3>
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
