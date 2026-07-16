import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layout, Smartphone, Cpu, Database, Cloud, Shield,
  ArrowRight, CheckCircle, MessageCircle
} from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web apps built with cutting-edge technologies like React, Laravel, and Next.js. From corporate sites to complex web portals.',
    icon: Layout,
    color: 'bg-blue-500',
    features: ['React / Next.js Apps', 'Laravel Backend APIs', 'Custom Web Applications', 'Admin Dashboards'],
  },
  {
    title: 'App Development',
    description: 'Cross-platform mobile applications for iOS and Android using React Native and Flutter. Deliver native experiences on every device.',
    icon: Smartphone,
    color: 'bg-purple-500',
    features: ['iOS & Android Apps', 'React Native / Flutter', 'App Store Publishing', 'Push Notifications'],
  },
  {
    title: 'AI & ML Solutions',
    description: 'Intelligent automation and predictive analytics for your business. From chatbots to recommendation engines powered by modern AI.',
    icon: Cpu,
    color: 'bg-indigo-500',
    features: ['AI Chatbots', 'Data Analysis & Insights', 'Automation Workflows', 'Predictive Modeling'],
  },
  {
    title: 'Database Management',
    description: 'Reliable, optimized database architecture for all scales. MySQL, PostgreSQL, MongoDB — we design, optimize, and maintain your data layer.',
    icon: Database,
    color: 'bg-cyan-500',
    features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Migration Services'],
  },
  {
    title: 'Cloud Hosting & DevOps',
    description: 'Deploy to the cloud with confidence. We manage your infrastructure on AWS, DigitalOcean, and Vercel with CI/CD pipelines and zero downtime.',
    icon: Cloud,
    color: 'bg-sky-500',
    features: ['AWS / DigitalOcean', 'CI/CD Pipelines', 'Docker & Kubernetes', '24/7 Monitoring'],
  },
  {
    title: 'Cybersecurity Consulting',
    description: 'Protect your digital assets from modern threats. We conduct security audits, penetration testing, and implement best-practice security frameworks.',
    icon: Shield,
    color: 'bg-red-500',
    features: ['Security Audits', 'Penetration Testing', 'SSL & Data Encryption', 'Compliance Consulting'],
  },
];

const processSteps = [
  { step: '01', title: 'Consult', desc: 'We understand your goals, challenges, and requirements through in-depth discovery sessions.' },
  { step: '02', title: 'Design', desc: 'We create detailed wireframes, prototypes, and architecture plans for your approval.' },
  { step: '03', title: 'Build', desc: 'Our engineers execute with precision using agile sprints and constant communication.' },
  { step: '04', title: 'Launch', desc: 'We deploy, test rigorously, and provide ongoing support after every launch.' },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
            Enterprise IT Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Professional IT Services <br />
            <span className="text-gradient">for Modern Businesses</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed mb-10">
            Mactis provides end-to-end software and IT consulting solutions that help Pakistani businesses scale in the digital era.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! Can I get more info on this?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get a Free Quote
            </a>
            <Link to="/contact" className="btn-outline border-white/20 text-white hover:bg-white hover:text-dark">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-dark-lighter">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Our Core Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="glass-card p-8 rounded-3xl group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-white/10"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16 blur-2xl group-hover:bg-primary/10 transition-all" />
                  <div className={`mb-6 p-4 rounded-2xl w-fit ${service.color}/20 border border-white/10`}>
                    <Icon className={`h-8 w-8 ${service.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center space-x-2 text-sm text-slate-300">
                        <CheckCircle size={14} className="text-primary shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Our Process</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">A transparent, agile process that keeps you in control at every step.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}
                <div className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 text-center relative z-10">
                  <div className="text-5xl font-black text-gradient mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-blue-500/10 to-primary/20 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-slate-400 text-xl mb-10 max-w-xl mx-auto">
            Tell us your idea and we will turn it into a powerful digital solution. First consultation is always free.
          </p>
          <a
            href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! Can I get more info on this?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center text-lg px-10 py-5"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Start on WhatsApp
            <ArrowRight className="ml-3 h-6 w-6" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
