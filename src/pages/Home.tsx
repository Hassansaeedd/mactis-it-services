import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import SoftwareShowcase from '../components/SoftwareShowcase';
import TestimonialsSection from '../components/TestimonialsSection';
import { TechEcosystemMarquee } from '../components/TechEcosystemMarquee';
import { Architecture3DVisualizer } from '../components/Architecture3DVisualizer';
import { GlobalNetwork3D } from '../components/GlobalNetwork3D';
import { Tilt3DCard } from '../components/Tilt3DCard';
import { ImageWithSkeleton } from '../components/SkeletonLoader';

interface Industry {
  id: string;
  title: string;
  image: string;
  description: string;
  link: string;
}

const industries: Industry[] = [
  {
    id: 'agro',
    title: 'Agro-Industry & Manufacturing',
    image: '/images/project_ricemill.jpg',
    description: 'Weighbridge IoT automation, multi-site mill operations, automated batching, and real-time grain inventory tracking.',
    link: '/services',
  },
  {
    id: 'retail',
    title: 'Retail & Digital Commerce',
    image: '/images/project_fashion.jpg',
    description: 'High-conversion e-commerce storefronts, synchronized branch stock, and unified online checkout architectures.',
    link: '/services',
  },
  {
    id: 'logistics',
    title: 'Supply Chain & Logistics',
    image: '/images/project_traffic.jpg',
    description: 'Real-time vehicle tracking, route dispatch coordination, warehouse loading, and delivery status verification.',
    link: '/services',
  },
  {
    id: 'finance',
    title: 'Corporate & Financial Systems',
    image: '/images/hero_dashboard.jpg',
    description: 'Double-entry ledgers, automated billing pipelines, taxation reports, and executive business analytics.',
    link: '/services',
  },
];

const Home: React.FC = () => {
  return (
    <div className="relative bg-white dark:bg-dark">
      {/* 1. Systems Limited Style Cinematic Video Hero */}
      <section className="relative min-h-[720px] lg:min-h-[820px] flex flex-col justify-between overflow-hidden border-b border-slate-800 bg-slate-950">
        {/* Looping Enterprise Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-45 sm:opacity-50"
        >
          <source src="/images/hero_video.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Multi-Gradient Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/40 pointer-events-none" />

        {/* Hero Foreground Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl pt-32 pb-20 sm:pt-40 sm:pb-24 flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-4">
              Enterprise Software & AI Solutions
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Engineering Digital Excellence <br />
              through <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-sky-200">Modern Technology</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl font-normal leading-relaxed mb-8">
              Strategy, custom software engineering, and high-availability cloud platforms built for the next era of enterprise growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to consult with Mactis about enterprise software development.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-3.5 px-8 text-sm font-bold shadow-2xl w-full sm:w-auto text-center"
              >
                <span>Schedule Consultation</span>
                <span className="ml-2 font-bold">→</span>
              </a>

              <a
                href="#services"
                className="py-3.5 px-8 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white rounded-md backdrop-blur-md transition-all duration-200 w-full sm:w-auto text-center"
              >
                Explore Solutions
              </a>
            </div>
          </motion.div>
        </div>

        {/* Integrated Executive Stats Ribbon */}
        <div className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-md py-6">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">12+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">20+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Production Deliveries</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">99.9%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Server Reliability</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">3+ Years</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Engineering Track Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Technology Alliances & Platform Ecosystem Marquee */}
      <TechEcosystemMarquee />

      {/* 3. Core Services Section (Clean, Decent Cards) */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* 4. Industries We Transform (Systems Limited Signature Section) */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-2">
              Sector Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Industries We Transform
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              Purpose-built software platforms engineered for the operational realities of modern industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {industries.map((ind) => (
              <Tilt3DCard
                key={ind.id}
                maxTilt={6}
                scale={1.02}
                glare={true}
                className="h-full"
              >
                <div className="group h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-sky-400 dark:hover:border-sky-500 transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div>
                    <div className="relative overflow-hidden aspect-[16/10] bg-slate-900">
                      <ImageWithSkeleton
                        src={ind.image}
                        alt={ind.title}
                        aspectRatio="aspect-[16/10]"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                        {ind.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {ind.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-3.5 bg-slate-50/70 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      to={ind.link}
                      className="inline-flex items-center text-xs font-bold text-sky-600 dark:text-sky-400 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors"
                    >
                      <span>Explore Sector Solutions</span>
                      <span className="ml-1 transition-transform group-hover:translate-x-1 font-bold">→</span>
                    </Link>
                  </div>
                </div>
              </Tilt3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Proven Real-World Work Showcase */}
      <SoftwareShowcase />

      {/* 6. Interactive 3D System Architecture Visualizer */}
      <Architecture3DVisualizer />

      {/* 7. Client Trust & Testimonials */}
      <TestimonialsSection />

      {/* 8. Interactive 3D Global Cloud Infrastructure & Edge Network */}
      <section className="py-20 md:py-28 bg-[#0B1120] border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <GlobalNetwork3D />
        </div>
      </section>

      {/* 9. Systems Limited Style Closing Call to Action */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-200 block mb-3">
            Partner with Mactis
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Let’s build what’s next, together.
          </h2>
          <p className="text-sky-100 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed font-normal">
            Discuss your technical roadmap, platform architecture, and timeline directly with our engineering leadership.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to consult with Mactis regarding our software project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-8 font-bold bg-white text-sky-700 hover:bg-sky-50 rounded-lg shadow-xl transition-all duration-200 inline-flex items-center justify-center w-full sm:w-auto"
            >
              <span>Connect on WhatsApp</span>
              <span className="ml-2 font-bold">→</span>
            </a>
            <Link 
              to="/contact" 
              className="py-3.5 px-8 text-white font-semibold border-2 border-white/60 hover:bg-white/15 rounded-lg backdrop-blur-sm transition-all duration-200 w-full sm:w-auto text-center"
            >
              Send Project Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
