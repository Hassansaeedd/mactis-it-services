import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Zap, Award, Users, MessageCircle } from 'lucide-react';
import CEOSection from '../components/CEOSection';

const teamMembers = [
  { name: 'Hassan Saeed', role: 'Founder & CEO', avatar: 'HS', color: 'from-primary to-blue-600', bio: 'Visionary leader driving Mactis forward with a passion for tech and innovation.' },
  { name: 'Ali Raza', role: 'Chief Technology Officer', avatar: 'AR', color: 'from-purple-500 to-purple-700', bio: 'Full-stack architect with 8+ years building scalable enterprise software.' },
  { name: 'Sara Khan', role: 'Head of Business Development', avatar: 'SK', color: 'from-amber-500 to-amber-700', bio: 'Client relationships expert ensuring successful project delivery.' },
  { name: 'Usman Tariq', role: 'Lead Developer', avatar: 'UT', color: 'from-green-500 to-green-700', bio: 'Dedicated engineer specializing in React, Laravel, and modern cloud architecture.' },
];

const values = [
  { icon: Zap, title: 'Innovation', desc: 'We push boundaries, embrace new technologies, and lead with modern solutions.', color: 'text-amber-400' },
  { icon: Award, title: 'Quality', desc: 'Every custom system and IT service we deliver meets the highest standards.', color: 'text-primary' },
  { icon: Heart, title: 'Transparency', desc: 'We build long-term corporate relationships based on honesty and clear communication.', color: 'text-red-400' },
  { icon: Users, title: 'Empowerment', desc: 'We are proud Pakistanis empowering local businesses and startups with world-class engineering.', color: 'text-green-400' },
];

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Pakistan's Premier <br />
            <span className="text-gradient">IT Consulting Agency</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            Founded with a mission to drive digital transformation, Mactis delivers high-performance software systems and end-to-end consulting for modern organizations.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-300 group">
              <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                To build secure, scalable, and high-performance digital systems that help businesses solve complex problems and capture market opportunities.
              </p>
            </div>
            <div className="glass-card p-10 rounded-3xl border border-white/5 hover:border-purple-500/20 transition-all duration-300 group">
              <div className="p-4 rounded-2xl bg-purple-500/10 w-fit mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Eye className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                To become the leading software engineering partner in Pakistan, driving digital advancement and technological excellence for global standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">What Drives Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 text-center group">
                  <div className={`${val.color} mb-4 flex justify-center transition-transform group-hover:scale-110 duration-300`}>
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <CEOSection />

      {/* Team */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The People</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Meet Our Team</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">The engineering and business specialists dedicated to bringing your projects to life.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2 text-center group">
                <div className={`h-24 w-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-6 text-white font-black text-2xl shadow-2xl group-hover:scale-105 transition-transform`}>
                  {member.avatar}
                </div>
                <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-bold mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-blue-500/10 to-primary/20 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Build Your Digital Future Today</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">Discuss your enterprise product requirements or get in touch for custom engineering solutions.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/923001234567?text=${encodeURIComponent('Hello! I want to start a custom software project with Mactis.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn-outline border-white/20 text-white hover:bg-white hover:text-dark">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
