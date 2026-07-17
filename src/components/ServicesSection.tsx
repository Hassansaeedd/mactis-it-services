import React from 'react';
import { Layout, Smartphone, Cpu, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern, secure, and scalable web applications built for speed and performance.",
    icon: <Layout className="h-10 w-10" />,
    color: "bg-blue-500",
    link: "/services"
  },
  {
    id: 2,
    title: "App Development",
    description: "Cross-platform mobile apps that deliver native experiences and high user engagement.",
    icon: <Smartphone className="h-10 w-10" />,
    color: "bg-purple-500",
    link: "/services"
  },
  {
    id: 3,
    title: "AI & ML Solutions",
    description: "Intelligence for your business. Data analysis, automation, and predictive modeling.",
    icon: <Cpu className="h-10 w-10" />,
    color: "bg-indigo-500",
    link: "/services"
  },
  {
    id: 4,
    title: "Database Management",
    description: "Reliable database design, optimization, and management solutions for all scales.",
    icon: <Database className="h-10 w-10" />,
    color: "bg-cyan-500",
    link: "/services"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-dark-lighter">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Expert IT Services</h2>
          <p className="text-slate-400 text-lg">
            Mactis provides professional software and IT solutions to help businesses scale in the digital era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="glass-card p-8 rounded-3xl group relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-12 -translate-y-12 blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              
              <div className={`mb-6 p-4 rounded-2xl w-fit ${service.color} text-white shadow-lg`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <Link 
                to={service.link} 
                className="flex items-center text-primary font-bold group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
