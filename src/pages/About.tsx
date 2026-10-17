import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Shield, Zap, Award, Users, MessageCircle, Globe2, CheckCircle2 } from 'lucide-react';
import CEOSection from '../components/CEOSection';

const teamMembers = [
  { 
    name: 'Ali Raza', 
    role: 'Chief Technology Officer', 
    image: '/images/client_1.jpg', 
    bio: 'Distributed systems architect with 10+ years designing fault-tolerant cloud engines, microservices, and high-concurrency database layers.' 
  },
  { 
    name: 'Sara Khan', 
    role: 'VP of Global Client Engagement', 
    image: '/images/client_4.jpg', 
    bio: 'Enterprise technology advisor facilitating multinational digital transformation initiatives and strategic enterprise roadmaps.' 
  },
  { 
    name: 'Usman Tariq', 
    role: 'Principal Software Architect', 
    image: '/images/client_3.jpg', 
    bio: 'Senior full-stack engineering lead specializing in high-throughput React ecosystems, Next.js, and autonomous AI pipeline integration.' 
  },
];

const values = [
  { icon: Zap, title: 'Architectural Rigor', desc: 'We engineer robust, type-safe, and scalable systems built to resist technical debt from day one.', color: 'text-amber-400' },
  { icon: Award, title: 'Production Excellence', desc: 'Every custom system and enterprise microservice complies with rigorous SLAs and ISO-grade security standards.', color: 'text-primary' },
  { icon: Shield, title: 'Zero-Trust Governance', desc: 'Transparent engineering practices, robust confidentiality, and total enterprise IP ownership protection.', color: 'text-blue-400' },
  { icon: Users, title: 'Global Delivery Pods', desc: 'Agile senior development squads collaborating seamlessly with international client teams across all timezones.', color: 'text-emerald-400' },
];

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative py-28 bg-slate-950 dark:bg-dark overflow-hidden border-b border-slate-800 dark:border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-blue-600/10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold uppercase tracking-wider mb-6">
            <Globe2 className="h-3.5 w-3.5" />
            <span>Enterprise Digital Consultancy</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Engineering Global <br />
            <span className="text-gradient">Digital Dominance</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-normal">
            Mactis is a global software engineering and enterprise digital consultancy. We partner with visionary enterprises and ambitious startups to build the technical infrastructure that drives market disruption.
          </p>
        </div>
      </section>

      {/* Corporate Overview & Real Imagery */}
      <section className="py-20 bg-white dark:bg-dark-lighter border-b border-slate-200/80 dark:border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10">
                <img 
                  src="/images/hero_dashboard.jpg" 
                  alt="Mactis Advanced Engineering Systems"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-1">Global Standard</span>
                  <h4 className="text-white text-lg font-bold">Resilient Cloud & AI Architecture</h4>
                  <p className="text-slate-300 text-xs">Architected for multi-region failover, data privacy, and sub-second execution.</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-primary font-bold uppercase tracking-widest text-xs block">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Senior Engineering Talent Delivering Measurable Business Valuation
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                Founded by seasoned technologists, Mactis was created to bridge the gap between high-level business strategy and deep, hands-on software architecture. We reject off-the-shelf mediocrity in favor of bespoke, highly optimized platforms engineered specifically for each client’s operational dynamics.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                  <div className="text-2xl font-black text-primary">100%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Enterprise Code IP Guarantee</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                  <div className="text-2xl font-black text-emerald-500">14-Day</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Sprint Deployment Cadence</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 dark:bg-dark border-b border-slate-200/80 dark:border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-3xl hover:border-primary/30 transition-all duration-300 group shadow-md shadow-black/[0.02]">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary w-fit mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Enterprise Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                To engineer resilient, high-speed, and secure digital software platforms that unlock unprecedented operational efficiency, automate manual workflows, and expand client revenue worldwide.
              </p>
            </div>
            <div className="glass-card p-10 rounded-3xl hover:border-purple-500/30 transition-all duration-300 group shadow-md shadow-black/[0.02]">
              <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 w-fit mb-6 group-hover:scale-110 transition-transform">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Global Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                To stand as the international benchmark for software craftsmanship, recognized globally for executing complex enterprise architectures that define modern digital business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Executive Section */}
      <CEOSection />

      {/* Brand Values */}
      <section className="py-24 bg-white dark:bg-dark-lighter border-b border-slate-200/80 dark:border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Engineering Culture</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Our Core Principles</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">The non-negotiable architectural and cultural foundations behind every solution we deliver.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 text-center group border border-slate-200 dark:border-white/5">
                  <div className={`${val.color} mb-5 flex justify-center transition-transform group-hover:scale-110 duration-300`}>
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{val.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Executive Leadership Team with Real Photos */}
      <section className="py-24 bg-slate-50 dark:bg-dark border-b border-slate-200/80 dark:border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Senior Leadership</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Meet Our Engineering Leads</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-base">Principal software architects and consultants leading your project implementation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="glass-card rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 text-center group border border-slate-200 dark:border-white/10 shadow-lg shadow-black/[0.02]">
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-white text-lg">{member.name}</h3>
                    <p className="text-primary-light text-xs font-semibold">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-slate-950 via-primary/20 to-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Partner with Principal Engineers</h2>
          <p className="text-slate-300 text-base md:text-lg mb-10 leading-relaxed font-normal">
            Whether starting a greenfield enterprise build or scaling existing infrastructure, our architects are ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to discuss our enterprise software engineering requirements.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center text-base px-8 py-4 font-bold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn-outline text-base px-8 py-4 text-white border-white/20">
              Submit Enterprise RFP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
