import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    code: '01',
    title: "Web & SaaS Development",
    description: "High-performance web applications and multi-tenant SaaS platforms built with Next.js, React 19, and scalable microservices architectures.",
    tags: ['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'REST & GraphQL'],
    deliverables: "B2B client portals, admin dashboards, responsive web apps, and secure REST/GraphQL APIs.",
    link: "/services"
  },
  {
    id: 2,
    code: '02',
    title: "Mobile App Development",
    description: "Cross-platform iOS and Android mobile apps engineered for fast response times, offline storage, smooth animations, and native device hardware features.",
    tags: ['React Native', 'Flutter', 'iOS & Android', 'WebSockets', 'SQLite'],
    deliverables: "Unified mobile applications, live real-time sync, push notifications, and App Store / Play Store deployment.",
    link: "/services"
  },
  {
    id: 3,
    code: '03',
    title: "AI Integration & Automation",
    description: "Applied artificial intelligence workflows, custom retrieval-augmented (RAG) knowledge search, smart chatbots, and computer vision models.",
    tags: ['PyTorch', 'Vector Search', 'Document Parsing', 'Computer Vision', 'LLM Bots'],
    deliverables: "Automated business document extractors, customer service AI assistants, and video/camera feed analytics.",
    link: "/services",
    featured: true
  },
  {
    id: 4,
    code: '04',
    title: "Cloud DevOps & Database Architecture",
    description: "High-availability database design, Docker containerization, Kubernetes orchestration, and automated zero-downtime deployment pipelines.",
    tags: ['AWS', 'Microsoft Azure', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
    deliverables: "Multi-cloud infrastructure setup, automated CI/CD releases, disaster recovery, and 24/7 server monitoring.",
    link: "/services"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
            Services & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Core Engineering Practices
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Full-lifecycle software engineering and digital infrastructure modernization for growing businesses and enterprises.
          </p>
        </div>

        {/* 2x2 Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`group relative p-7 rounded-xl flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md ${
                service.featured
                  ? 'bg-slate-50/90 dark:bg-slate-900 border-2 border-blue-600/70 dark:border-blue-500/70'
                  : 'bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wide">
                    Practice {service.code}
                  </span>
                  {service.featured && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      Popular Request
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                  {service.title}
                </h3>
                
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

                <div className="text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-3.5 mb-6">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Deliverables: </span>
                  {service.deliverables}
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-xs font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors"
                >
                  <span>View Practice Details</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <Link to="/services" className="btn-outline text-xs py-3 px-8 font-semibold">
            View Complete Services Catalog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
