import React from 'react';
import { Layout, Smartphone, Cpu, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Web & Cloud Platforms",
    description: "High-performance, fault-tolerant web applications engineered with Next.js, React 19, and scalable microservices.",
    icon: <Layout className="h-9 w-9" />,
    color: "bg-blue-600",
    link: "/services"
  },
  {
    id: 2,
    title: "Enterprise Mobile Systems",
    description: "Cross-platform iOS and Android apps engineered for sub-second latency, offline persistence, and seamless UX.",
    icon: <Smartphone className="h-9 w-9" />,
    color: "bg-purple-600",
    link: "/services"
  },
  {
    id: 3,
    title: "Cognitive AI & Computer Vision",
    description: "Production LLM pipelines, autonomous multi-agent workflows, and real-time smart surveillance computer vision.",
    icon: <Cpu className="h-9 w-9" />,
    color: "bg-indigo-600",
    link: "/services"
  },
  {
    id: 4,
    title: "Data Architecture & DevOps",
    description: "Distributed PostgreSQL, Redis caching, Kubernetes clustering, and zero-downtime CI/CD cloud infrastructure.",
    icon: <Database className="h-9 w-9" />,
    color: "bg-cyan-600",
    link: "/services"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-dark-lighter border-b border-slate-200/80 dark:border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Full-Lifecycle Engineering</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Enterprise IT & Engineering Services</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base md:text-lg">
            End-to-end digital engineering capabilities built to modernize legacy systems and build scalable products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="glass-card p-8 rounded-3xl group relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-white/5 shadow-md shadow-black/[0.02] flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-12 -translate-y-12 blur-2xl group-hover:bg-primary/20 transition-all duration-500 pointer-events-none" />
              
              <div>
                <div className={`mb-6 p-4 rounded-2xl w-fit ${service.color} text-white shadow-lg shadow-black/10`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
              
              <Link 
                to={service.link} 
                className="flex items-center text-primary font-bold text-sm group-hover:translate-x-1 transition-transform"
              >
                <span>Technical Specifications</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/services" className="btn-outline font-bold text-sm py-3 px-8 border-slate-300 dark:border-white/20 text-slate-800 dark:text-white">
            View Complete Services Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
