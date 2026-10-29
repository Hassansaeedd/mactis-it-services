import React from 'react';
import { Link } from 'react-router-dom';
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
    role: 'Head of Client Engineering', 
    image: '/images/client_4.jpg', 
    bio: 'Technical advisor coordinating enterprise project deliveries, architectural discovery, and sprint roadmaps.' 
  },
  { 
    name: 'Usman Tariq', 
    role: 'Principal Software Architect', 
    image: '/images/client_3.jpg', 
    bio: 'Senior full-stack engineering lead specializing in modern React ecosystems, Next.js, and practical AI workflow integration.' 
  },
];

const values = [
  { number: '01', title: 'Clean Architecture First', desc: 'We build modular, type-safe, and thoroughly documented codebases that are easy to maintain and extend over time.' },
  { number: '02', title: 'Direct Engineering Access', desc: 'You collaborate directly with the senior developers and architects building your product, not non-technical middlemen.' },
  { number: '03', title: '100% Code Ownership', desc: 'You own every line of code, database schema, repository, and deployment configuration from day one.' },
  { number: '04', title: 'Transparent Sprint Cadence', desc: 'Bi-weekly demo releases and staging environments keep you informed and in control throughout the project lifecycle.' },
];

const About: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white dark:bg-dark">
      {/* Hero with Light Blue Brand Theme */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-sky-50 via-white to-sky-50/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-sky-100 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span>About Mactis IT Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white mb-4 tracking-tight leading-[1.15]">
            Engineering Reliable Software for <br />
            <span className="text-sky-600 dark:text-sky-400">Ambitious Businesses</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Mactis is a software engineering and technology consulting company. We partner with businesses to architect, build, and support the digital platforms that drive daily operations and business growth.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-20 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Showcase */}
            <div className="lg:col-span-6">
              <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-900 shadow-sm">
                <ImageWithSkeleton 
                  src="/images/hero_dashboard.jpg" 
                  alt="Mactis Engineering Systems"
                  aspectRatio="aspect-[16/10]"
                  className="w-full bg-slate-900"
                />
                <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-slate-900 dark:text-white text-sm font-bold">Cloud & Enterprise Systems</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">High-availability architectures engineered for uptime and security.</p>
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
                Founded by experienced software engineers, Mactis was created to solve a common problem: software projects failing due to poor architecture, bloated scopes, and communication gaps. We take pride in building clean, well-tested, and maintainable software tailored to your specific business workflows.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-2xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400">100%</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">Client Code IP Ownership</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
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
            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 shadow-sm">
              <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                Purpose
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                To engineer dependable, high-performance software platforms that eliminate operational bottlenecks, automate manual workflows, and empower businesses to scale with confidence.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 shadow-sm">
              <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                Direction
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                To be the trusted technology partner for companies seeking engineering excellence, transparent communication, and software that consistently performs in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story & Technical Values */}
      <section className="py-20 md:py-24 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Frame */}
            <div className="lg:col-span-5">
              <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-900 shadow-sm">
                <ImageWithSkeleton 
                  src="/images/hero_enterprise.jpg" 
                  alt="Mactis Software Engineering Pod" 
                  aspectRatio="aspect-[4/3]"
                  className="w-full bg-slate-900"
                />
                <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-slate-900 dark:text-white text-sm font-bold">Engineering Culture</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Collaborative agile pods focused on code quality and client outcomes.</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider block">
                Our Story
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Building Software with Craftsmanship and Integrity
              </h2>

              <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <p>
                  Mactis was founded on a simple belief: that businesses deserve software partners who deliver what they promise. We do not use cookie-cutter templates or outsource our commitments. Every line of code is crafted by skilled engineers who understand modern architecture and best practices.
                </p>
                <p>
                  From agro-industrial supply chain ERPs handling millions of kilograms of grain to high-accuracy municipal computer vision and modern e-commerce storefronts, our track record reflects a relentless commitment to software that works under real-world operational pressure.
                </p>
              </div>

              {/* Company Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">Maintainable Codebase</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Strict typing, modular microservices, and thorough automated tests from sprint one.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">Direct Communication</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Direct Slack/WhatsApp channels with the lead developers building your software.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
              Our Principles
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">How We Operate</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">The foundational engineering and operational standards behind every project.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((val) => (
              <div key={val.title} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-left space-y-2 shadow-sm">
                <div className="text-xs font-extrabold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                  Principle {val.number}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{val.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-2">
              Engineering Leads
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Our Technical Leads</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Seasoned software architects bringing real-world production experience to your project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4 shadow-sm">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-xs font-semibold text-blue-700 dark:text-blue-400">{member.role}</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Light Blue Brand Theme */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl relative z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">Let's Build Something Together</h2>
          <p className="text-sky-100 text-sm mb-8 leading-relaxed font-normal">
            Have an upcoming software project or need to augment your team with senior engineers? Reach out today to start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to discuss our software engineering requirements with Mactis.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-8 font-bold bg-white text-sky-700 hover:bg-sky-50 rounded-lg shadow-xl transition-all duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>Chat on WhatsApp</span>
              <span className="ml-1 font-bold">→</span>
            </a>
            <Link to="/contact" className="py-3.5 px-7 text-white font-semibold border-2 border-white/60 hover:bg-white/15 rounded-lg backdrop-blur-sm transition-all duration-200">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
