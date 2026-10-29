import React from 'react';
import { Link } from 'react-router-dom';
import { TechEcosystemMarquee } from '../components/TechEcosystemMarquee';

interface ServiceItem {
  code: string;
  title: string;
  description: string;
  slaMetric: string;
  tags: string[];
  features: string[];
  featured?: boolean;
}

const services: ServiceItem[] = [
  {
    code: '01',
    title: 'Web Applications & SaaS Platforms',
    description: 'Custom, high-concurrency web platforms, client portals, and SaaS applications built with React 19, Next.js, and scalable backend microservices.',
    slaMetric: 'Sub-100ms Latency',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'REST & GraphQL'],
    features: ['Server-side rendering (SSR) and edge-cached web architecture', 'High-throughput microservices and API gateways', 'Multi-tenant B2B portals and administrative dashboards', 'Multi-region deployment with automated load balancing'],
  },
  {
    code: '02',
    title: 'Mobile App Engineering',
    description: 'Cross-platform mobile apps for iOS and Android engineered with React Native and Flutter, featuring offline persistence and hardware integration.',
    slaMetric: '60 FPS Native',
    tags: ['React Native', 'Flutter', 'iOS & Android', 'WebSockets', 'SQLite'],
    features: ['Unified single codebase for iOS and Android devices', 'Offline-first database persistence and background sync', 'Biometric login and native device hardware access', 'App Store and Google Play compliance and publishing'],
  },
  {
    code: '03',
    title: 'AI Solutions & Smart Automation',
    description: 'Applied artificial intelligence workflows: document data extraction, retrieval-augmented (RAG) knowledge search, and computer vision models.',
    slaMetric: 'Production Ready',
    tags: ['PyTorch', 'Vector Search', 'Document AI', 'Computer Vision', 'LLM Bots'],
    features: ['Custom retrieval-augmented (RAG) knowledge systems', 'Automated camera analytics and license plate recognition (ANPR)', 'Customer support chatbots and operational workflow bots', 'Private on-premise or cloud deployments with strict data privacy'],
    featured: true,
  },
  {
    code: '04',
    title: 'Database Architecture & Data Pipelines',
    description: 'Scalable data layer design, query optimization, indexing, and management for mission-critical PostgreSQL, MySQL, Redis, and MongoDB databases.',
    slaMetric: 'Zero Data Loss',
    tags: ['PostgreSQL', 'Redis', 'MySQL', 'MongoDB', 'Data Pipelines'],
    features: ['Zero-downtime database migrations and index optimization', 'High-availability read replicas and distributed Redis caching', 'Automated point-in-time recovery and snapshot scheduling', 'ETL pipelines and analytics warehousing'],
  },
  {
    code: '05',
    title: 'Cloud Infrastructure & DevOps',
    description: 'Cloud infrastructure setup, migration, and maintenance across AWS, Google Cloud, and Microsoft Azure using Infrastructure as Code (Terraform).',
    slaMetric: '99.9% Uptime SLA',
    tags: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    features: ['Auto-scaling Kubernetes and Docker container clusters', 'Automated CI/CD build and release pipelines', 'Multi-region disaster recovery and automated failover', '24/7 server health telemetry and active error alerts'],
  },
  {
    code: '06',
    title: 'Security & Vulnerability Audits',
    description: 'Protect your digital assets with practical security auditing: application penetration testing, API hardening, and authentication reviews.',
    slaMetric: 'Security Audited',
    tags: ['Penetration Testing', 'OAuth2 / SAML', 'Zero-Trust', 'SSL/TLS', 'OWASP'],
    features: ['Full application penetration testing and code vulnerability reviews', 'API authentication hardening with OAuth2, JWT, and SAML', 'End-to-end data encryption at rest and in transit', 'Assistance with compliance, data privacy, and security standards'],
  },
];

const processSteps = [
  { step: '01', title: 'Technical Discovery', desc: 'We evaluate your business goals, user requirements, and technical dependencies to map out a clear architecture blueprint.' },
  { step: '02', title: 'Architecture & Design', desc: 'We create high-fidelity user flows, database schemas, API contracts, and infrastructure topologies before writing code.' },
  { step: '03', title: 'Sprint Development', desc: 'Bi-weekly sprint deliveries with senior engineers, automated test coverage, and staging preview environments for your team to test.' },
  { step: '04', title: 'Deployment & Support', desc: 'Production rollout with zero downtime, comprehensive documentation, and ongoing monitoring and support.' },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white dark:bg-dark">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-slate-900 dark:bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Our Services & Practices</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.15]">
            Engineering Practices Designed for <br />
            <span className="text-blue-400">Scale, Speed & Reliability</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-normal">
            Mactis provides full-lifecycle software engineering, custom platforms, and technical infrastructure consulting. We work as dedicated engineering partners to deliver results on time and within scope.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to schedule an enterprise consultation regarding Mactis IT services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary space-x-2 py-3.5 px-7 text-sm font-semibold"
            >
              <span>Schedule a Consultation</span>
              <span className="ml-1">→</span>
            </a>
            <Link to="/contact" className="btn-outline py-3.5 px-7 text-sm font-semibold text-white border-slate-700 hover:bg-slate-800">
              Submit Project Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Running Technology Ecosystem Marquee */}
      <TechEcosystemMarquee />

      {/* Services Grid (Smooth Flowing Cards, No Lucide Icons) */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Our Practice Areas
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm md:text-base leading-relaxed">
              Tailored software development and cloud consulting practices built to solve concrete business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative p-7 rounded-xl flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md ${
                  service.featured
                    ? 'bg-slate-50/90 dark:bg-slate-900 border-2 border-blue-600/70 dark:border-blue-500/70'
                    : 'bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-semibold tracking-wide uppercase shadow-sm">
                      Featured Practice
                    </span>
                  </div>
                )}

                <div>
                  {/* Header Metadata */}
                  <div className="flex items-center justify-between mb-4 pt-1">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-400 tracking-wide uppercase">
                      Practice {service.code}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {service.slaMetric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Deliverables / Capabilities List */}
                  <div className="space-y-2 border-t border-slate-100 dark:border-slate-800/80 pt-4 mb-6">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-start text-xs text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mr-2.5 mt-1.5" />
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
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Framework */}
      <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">How We Deliver</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm md:text-base leading-relaxed">
              A structured, collaborative engineering process that delivers software on schedule with full visibility at every milestone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div 
                key={step.step} 
                className="p-6 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl text-left space-y-3 hover:border-blue-500/40 transition-colors"
              >
                <div className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight">{step.step}</div>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Ready to Discuss Your Project?</h2>
          <p className="text-slate-300 text-xs sm:text-sm mb-8 leading-relaxed font-normal">
            Schedule an initial consultation with our technical leads. We will review your requirements, suggest an architectural approach, and provide a realistic estimate.
          </p>
          <a
            href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to schedule an enterprise consultation regarding Mactis IT services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-3.5 px-7 space-x-2 font-semibold"
          >
            <span>Connect on WhatsApp</span>
            <span className="ml-1 font-bold">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
