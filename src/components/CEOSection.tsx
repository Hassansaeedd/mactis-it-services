import React from 'react';

const CEOSection: React.FC = () => {
  return (
    <section className="py-20 bg-dark-lighter overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="relative group w-full lg:w-1/3">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-dark rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="/ceo.png" 
                alt="Hassan Saeed - Mactis CEO" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl animate-bounce-slow">
              <span className="text-4xl font-bold text-gradient">10+</span>
              <p className="text-slate-400 text-sm font-medium">Years of Innovation</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
              A Message From Our CEO
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Empowering Pakistan through <span className="text-gradient">high-end software engineering</span> and digital solutions.
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                At Mactis, we believe technology is the ultimate lever for business growth. Our mission is to build highly reliable, secure, and cutting-edge software infrastructure that empowers local and international businesses to scale in the digital era.
              </p>
              <p>
                Whether it is a custom mobile app for your startup, a clean web portal, or a complex AI-driven integration for your enterprise operations, our engineering team is dedicated to executing your vision with technical excellence.
              </p>
            </div>
            
            <div className="mt-10 flex items-center space-x-6">
              <div>
                <h4 className="text-xl font-bold text-white">Hassan Saeed</h4>
                <p className="text-primary font-medium">Founder & CEO, Mactis IT</p>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div className="italic text-slate-500 font-serif text-lg">
                "Engineering the future of enterprise software."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
