import React from 'react';
import { Layout, Smartphone, Cpu, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Web & Distributed Cloud Platforms",
    description: "High-performance, fault-tolerant web applications engineered with Next.js, React 19, and scalable microservices architectures.",
    deliverables: "High-concurrency APIs, multi-region database replication, sub-second latency.",
    icon: Layout,
    link: "/services"
  },
  {
    id: 2,
    title: "Enterprise Mobile Systems",
    description: "Cross-platform iOS and Android applications engineered for sub-second responsiveness, offline data persistence, and native hardware telemetry.",
    deliverables: "React Native & Flutter, WebSocket sync, biometrics, App Store compliance.",
    icon: Smartphone,
    link: "/services"
  },
  {
    id: 3,
    title: "Cognitive AI & Computer Vision",
    description: "Production LLM pipelines, autonomous multi-agent operational workflows, and real-time surveillance computer vision models.",
    deliverables: "Custom RAG embeddings, edge ANPR vision, operational automation.",
    icon: Cpu,
    link: "/services"
  },
  {
    id: 4,
    title: "Data Architecture & Cloud DevOps",
    description: "High-availability PostgreSQL & Redis clustering, Kubernetes container orchestration, and automated zero-downtime CI/CD deployment pipelines.",
    deliverables: "Terraform IaC, Docker clusters, 24/7 observability, automated failover.",
    icon: Database,
    link: "/services"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
            Engineering Practices
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Core Technical Practices
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Full-lifecycle software engineering and digital infrastructure modernization for high-growth enterprises.
          </p>
        </div>

        {/* 2x2 Structured Editorial Matrix (Replaces bubbly feature cards in a row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-3 mb-6">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Deliverables: </span>
                    {service.deliverables}
                  </div>
                </div>
                
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline"
                >
                  <span>Practice Specifications</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-outline text-xs py-2.5 px-6">
            View Complete Services Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
