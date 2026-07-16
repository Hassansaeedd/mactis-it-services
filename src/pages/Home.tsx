import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Code, ShieldCheck, Cpu } from 'lucide-react';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* 1. Hero Section */}
      <section className="relative py-32 md:py-48 bg-dark overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold mb-8">
            <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
            <span>Empowering Digital Transformation</span>
          </span>
          
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            We Engineer Custom <br />
            <span className="text-gradient">Software & AI Solutions</span>
          </h1>
          
          <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Mactis is a premier technology consulting agency in Pakistan. We design, build, and scale high-performance web applications, cross-platform mobile apps, and intelligent AI models.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! Can I get more info on this?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center text-lg px-8 py-4 shadow-xl shadow-primary/20"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Free Consultation
            </a>
            <Link 
              to="/services" 
              className="btn-outline border-white/20 text-white hover:bg-white hover:text-dark inline-flex items-center text-lg px-8 py-4"
            >
              Our Expertise
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition Grid */}
      <section className="py-20 bg-dark-lighter border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-6">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Engineering</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Clean, maintainable, and type-safe code written with modern technologies (React, Next.js, Node.js, and Laravel).
              </p>
            </div>
            
            <div className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center">
              <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400 mb-6">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI & ML Automations</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Streamline workflows, automate manual work, and integrate generative AI agents to supercharge operations.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center">
              <div className="p-4 bg-green-500/10 rounded-2xl text-green-400 mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure & Scalable</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Optimized database systems, penetration-tested APIs, and secure cloud setups hosted on AWS & DigitalOcean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Section */}
      <ServicesSection />

      {/* 4. Stats Counters */}
      <StatsSection />



      {/* 6. Client Testimonials */}
      <TestimonialsSection />

      {/* 7. Conversion CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-primary/15 via-dark-lighter to-blue-500/10 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to Build Your Custom Software?</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Partner with Pakistan's leading software architects and developers. Tell us about your project requirements and get a detailed proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! Can I get more info on this?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center text-lg px-8 py-4"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start on WhatsApp
            </a>
            <Link 
              to="/contact" 
              className="btn-outline border-white/20 text-white hover:bg-white hover:text-dark text-lg px-8 py-4"
            >
              Submit Project Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
