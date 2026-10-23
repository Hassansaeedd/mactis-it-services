import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Shield, Zap, Award, Users, MessageCircle, Globe2, ShieldCheck } from 'lucide-react';
import { ImageWithSkeleton } from '../components/SkeletonLoader';

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
  { icon: Zap, title: 'Architectural Rigor', desc: 'We engineer robust, type-safe, and scalable systems built to resist technical debt from day one.' },
  { icon: Award, title: 'Production Excellence', desc: 'Every custom system and enterprise microservice complies with rigorous SLAs and ISO-grade security standards.' },
  { icon: Shield, title: 'Zero-Trust Governance', desc: 'Transparent engineering practices, robust confidentiality, and total enterprise IP ownership protection.' },
  { icon: Users, title: 'Global Delivery Pods', desc: 'Agile senior development squads collaborating seamlessly with international client teams across all timezones.' },
];

const About: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white dark:bg-dark">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-slate-900 dark:bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4">
            <Globe2 className="h-4 w-4" />
            <span>Enterprise Digital Consultancy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Engineering Global <br />
            <span className="text-blue-400">Digital Platforms</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Mactis is an enterprise software engineering and technical consulting agency. We partner with ambitious organizations to architect and deploy the software infrastructure that drives operational resilience and scalable growth.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-20 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Showcase with Skeleton Loader */}
            <div className="lg:col-span-6">
              <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden bg-slate-900 shadow-sm">
                <ImageWithSkeleton 
                  src="/images/hero_dashboard.jpg" 
                  alt="Mactis Advanced Engineering Systems"
                  aspectRatio="aspect-[16/10]"
                  className="w-full bg-slate-900"
                />
                <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-slate-900 dark:text-white text-sm font-bold">Resilient Cloud & AI Architecture</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Architected for multi-region failover, data privacy, and sub-second execution.</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block">
                Who We Are
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Senior Engineering Talent Delivering Real Business Value
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                Founded by seasoned technologists, Mactis bridges the gap between high-level operational strategy and deep software architecture. We reject generic templates in favor of bespoke, type-safe platforms tailored specifically to each client's operational reality.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-2xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400">100%</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">Client Code IP Guarantee</div>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-2xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400">14-Day</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">Sprint Delivery Cadence</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg space-y-3">
              <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-400 w-fit">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Enterprise Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                To engineer resilient, high-speed, and secure digital software platforms that unlock operational efficiency, automate manual workflows, and expand client revenue worldwide.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg space-y-3">
              <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-400 w-fit">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                To stand as a trusted global benchmark for software craftsmanship, recognized internationally for executing complex enterprise architectures that power modern commerce and industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story & Technical Values (No personal CEO photo or personal details) */}
      <section className="py-20 md:py-24 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Frame */}
            <div className="lg:col-span-5">
              <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden bg-slate-900 shadow-sm">
                <ImageWithSkeleton 
                  src="/images/hero_enterprise.jpg" 
                  alt="Mactis Software Engineering Pod" 
                  aspectRatio="aspect-[4/3]"
                  className="w-full bg-slate-900"
                />
                <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-slate-900 dark:text-white text-sm font-bold">The Mactis Standard</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Dedicated senior development squads focused on measurable business outcomes.</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>Our Company Story</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Architecting Mission-Critical Software with Integrity and Precision
              </h2>

              <div className="space-y-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  Mactis IT Services was established with a singular engineering commitment: to build dependable, scalable, and intelligent software platforms that solve complex real-world operational challenges.
                </p>
                <p>
                  From agro-industrial ERPs coordinating weighbridge IoT sensors to computer vision systems monitoring municipal highway traffic and cognitive e-commerce assistants, our work is distinguished by technical discipline, security compliance, and transparent delivery.
                </p>
              </div>

              {/* Company Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">Zero Technical Debt Mindset</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Strict typing, modular microservices, and thorough automated testing from sprint one.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">100% Client Code Ownership</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Complete intellectual property, documentation, and repository access granted to clients.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
              Engineering Culture
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Our Core Principles</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs sm:text-sm">The architectural and operational foundations behind every solution we engineer.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-left space-y-2">
                  <div className="text-blue-700 dark:text-blue-400 mb-3">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{val.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Leads */}
      <section className="py-20 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
              Senior Leadership
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Meet Our Engineering Leads</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs sm:text-sm">Principal software architects and consultants leading your project implementation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
                <ImageWithSkeleton 
                  src={member.image} 
                  alt={member.name}
                  aspectRatio="aspect-[4/3]"
                  className="w-full bg-slate-900"
                />
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">{member.name}</h3>
                  <p className="text-blue-700 dark:text-blue-400 text-xs font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Partner with Principal Engineers</h2>
          <p className="text-slate-300 text-xs sm:text-sm mb-8 leading-relaxed font-normal">
            Whether starting a greenfield enterprise build or scaling existing infrastructure, our architects are ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to discuss our enterprise software engineering requirements.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-3 px-6 space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link to="/contact" className="btn-outline text-xs py-3 px-6 text-white border-slate-700 hover:bg-slate-800">
              Submit Enterprise RFP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
