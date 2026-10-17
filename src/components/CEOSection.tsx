import React from 'react';
import { Award, ShieldCheck, Globe2 } from 'lucide-react';

const CEOSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 dark:bg-dark-lighter overflow-hidden relative border-b border-slate-800 dark:border-white/5">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[130px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">
          
          {/* Executive Portrait Frame */}
          <div className="relative group w-full lg:w-5/12 max-w-md mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700" />
            <div className="relative bg-slate-950 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/10">
              <img 
                src="/ceo.png" 
                alt="Hassan Saeed - Founder & CEO, Mactis" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center space-x-2 text-white font-bold text-lg">
                  <span>Hassan Saeed</span>
                </div>
                <div className="text-primary-light text-xs font-semibold">Founder & Chief Executive Officer</div>
              </div>
            </div>

            {/* Credibility Floating Metric Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl border border-white/20 shadow-2xl bg-slate-900/90 backdrop-blur-xl">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-primary/20 text-primary-light">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-2xl font-black text-white">10+ Years</span>
                  <p className="text-slate-400 text-xs font-medium">Enterprise Engineering Track Record</p>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Address Content */}
          <div className="lg:w-7/12 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold uppercase tracking-wider">
              <Globe2 className="h-3.5 w-3.5" />
              <span>Executive Leadership Address</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Engineering Mission-Critical Digital Infrastructure for <span className="text-gradient">Global Market Leaders</span>.
            </h2>

            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                At Mactis, our foundational principle is that software architecture is the ultimate catalyst for enterprise valuation and market resilience. We do not build throwaway prototypes — we architect robust, fault-tolerant platforms and autonomous AI systems designed to operate smoothly at planetary scale.
              </p>
              <p>
                Whether orchestrating mission-critical agro-industrial ERPs, deploying edge computer vision surveillance for smart cities, or engineering ultra-fast global digital commerce ecosystems, our senior engineering teams deliver with uncompromising technical integrity, transparent governance, and world-class SLAs.
              </p>
            </div>

            {/* Core Leadership Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Architectural Rigor & Zero-Trust</h4>
                  <p className="text-xs text-slate-400">Strict code hygiene, audited microservices, and end-to-end data encryption.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Global Delivery & Dedicated Pods</h4>
                  <p className="text-xs text-slate-400">Direct access to principal architects and senior full-stack development leads.</p>
                </div>
              </div>
            </div>

            {/* Signature Block */}
            <div className="pt-6 flex items-center space-x-6">
              <div>
                <h4 className="text-xl font-bold text-white">Hassan Saeed</h4>
                <p className="text-primary-light text-sm font-semibold">Founder & CEO, Mactis Global IT</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="italic text-slate-400 font-serif text-sm sm:text-base">
                "Where engineering excellence meets measurable business impact."
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CEOSection;
