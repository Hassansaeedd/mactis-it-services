import React from 'react';
import { Layout, Smartphone, Cpu, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    code: '01',
    title: "Web & Distributed Cloud Platforms",
    description: "High-performance, fault-tolerant web applications engineered with Next.js, React 19, and scalable microservices architectures.",
    tags: ['React 19', 'Next.js 15', 'GraphQL', 'Microservices'],
    deliverables: "High-concurrency APIs, multi-region database replication, sub-second latency.",
    icon: Layout,
    link: "/services"
  },
  {
    id: 2,
    code: '02',
    title: "Enterprise Mobile Systems",
    description: "Cross-platform iOS and Android applications engineered for sub-second responsiveness, offline data persistence, and native hardware telemetry.",
    tags: ['React Native', 'Flutter', 'WebSockets', 'Swift'],
    deliverables: "Unified mobile codebase, WebSocket sync, biometrics, App Store compliance.",
    icon: Smartphone,
    link: "/services"
  },
  {
    id: 3,
    code: '03',
    title: "Cognitive AI & Computer Vision",
    description: "Production LLM pipelines, autonomous multi-agent operational workflows, and real-time surveillance computer vision models.",
    tags: ['PyTorch', 'Enterprise RAG', 'Edge Vision', 'LLMs'],
    deliverables: "Custom RAG embeddings, edge ANPR vision, autonomous operational automation.",
    icon: Cpu,
    link: "/services",
    featured: true
  },
  {
    id: 4,
    code: '04',
    title: "Data Architecture & Cloud DevOps",
    description: "High-availability PostgreSQL & Redis clustering, Kubernetes container orchestration, and automated zero-downtime CI/CD deployment pipelines.",
    tags: ['AWS EKS', 'Kubernetes', 'PostgreSQL', 'Terraform'],
    deliverables: "Terraform IaC, Docker clusters, 24/7 telemetry observability, automated failover.",
    icon: Database,
    link: "/services"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
            Core Disciplines
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Core Technical Practices
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Full-lifecycle software engineering and digital infrastructure modernization for high-growth enterprises.
          </p>
        </div>

        {/* 2x2 Structured Editorial Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className={`group relative p-7 rounded-xl flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md ${
                  service.featured
                    ? 'bg-slate-50/90 dark:bg-slate-900 border-2 border-blue-600/70 dark:border-blue-500/70'
                    : 'bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pt-1">
                    <span className="text-xs font-semibold tracking-wider text-blue-700 dark:text-blue-400 uppercase">
                      Practice {service.code}
                    </span>
                    {service.featured && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        High Demand
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/40 text-blue-700 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-3.5 mb-6 flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Deliverables: </span>
                      {service.deliverables}
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-xs font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors"
                  >
                    <span>Practice Specifications & SLA</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-14 text-center">
          <Link to="/services" className="btn-outline text-xs py-3 px-8 font-semibold">
            View Complete Services Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
