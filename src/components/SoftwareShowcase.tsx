import React, { useState } from 'react';
import { 
  Building2, Eye, MessageSquareCode, Shirt, ShoppingCart, 
  ArrowRight, MessageCircle, CheckCircle2, TrendingUp, Layers, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: "Agro-Industrial & Rice Mill ERP",
    category: "Enterprise ERP",
    image: "/images/project_ricemill.jpg",
    metric: "10M+ Kg",
    metricLabel: "Stock Managed Annually",
    description: "End-to-end industrial resource planning platform with automated weighbridge IoT integration, grain moisture analytics, and real-time vendor ledgers.",
    icon: <Building2 className="h-5 w-5 text-blue-400" />,
    tags: ["PostgreSQL", "IoT Hardware Sync", "Microservices", "Automated Billing"],
    features: ["Automated Weighbridge IoT Sync", "Moisture & Crop Batch Loggers", "Multi-Branch Ledger Sync", "Automated Invoice & Tax Engine"],
    border: "border-blue-500/20 hover:border-blue-500/50",
    badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: 2,
    title: "Intelligent Traffic Vision & Analytics",
    category: "AI & Computer Vision",
    image: "/images/project_traffic.jpg",
    metric: "99.4%",
    metricLabel: "Automated Plate Accuracy",
    description: "High-throughput smart city traffic surveillance suite utilizing neural computer vision for automated license plate detection, lane violation auditing, and digital fine generation.",
    icon: <Eye className="h-5 w-5 text-purple-400" />,
    tags: ["Python OpenCV", "PyTorch", "FastAPI", "Edge Computing"],
    features: ["Automatic Number Plate Recognition (ANPR)", "Real-Time Lane & Speed Violation", "Automated Digital Evidence PDFs", "GIS Heatmap Telemetry"],
    border: "border-purple-500/20 hover:border-purple-500/50",
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: 3,
    title: "Cognitive E-Commerce AI Agent",
    category: "Generative AI",
    image: "/images/project_chatbot.jpg",
    metric: "4.2x",
    metricLabel: "Conversion Rate Uplift",
    description: "Autonomous multimodal customer intelligence agent that integrates with product catalogs, handles real-time stock inquiries, and resolves 85% of support tickets autonomously.",
    icon: <MessageSquareCode className="h-5 w-5 text-indigo-400" />,
    tags: ["LLM Agents", "Vector Embeddings", "Webhooks", "Live Cart Sync"],
    features: ["Context-Aware Multilingual NLP", "Catalog & Inventory Live Sync", "Automated Order Tracking", "Seamless Human Agent Hand-off"],
    border: "border-indigo-500/20 hover:border-indigo-500/50",
    badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
  },
  {
    id: 4,
    title: "Global Fashion & Luxury E-Commerce",
    category: "Digital Commerce",
    image: "/images/project_fashion.jpg",
    metric: "350ms",
    metricLabel: "Global Edge Latency",
    description: "High-performance headless digital commerce platform engineered for premier apparel brands, featuring high-fidelity lookbooks, currency localization, and sub-second checkout.",
    icon: <Shirt className="h-5 w-5 text-rose-400" />,
    tags: ["Next.js 15", "Tailwind CSS", "Stripe Global", "Edge CDN"],
    features: ["Immersive 4K Lookbook Galleries", "Multi-Currency & Global Tax Engine", "Dynamic Size & Fit Recommender", "Sub-second Headless Checkout"],
    border: "border-rose-500/20 hover:border-rose-500/50",
    badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/20"
  },
  {
    id: 5,
    title: "Hyperlocal On-Demand Delivery & Grocery",
    category: "Logistics Tech",
    image: "/images/project_grocery.jpg",
    metric: "18-Min",
    metricLabel: "Average Fulfillment Cycle",
    description: "Ultra-fast grocery order orchestration and rider dispatch system with real-time route optimization, automated stock depletion alerts, and omnichannel mobile apps.",
    icon: <ShoppingCart className="h-5 w-5 text-emerald-400" />,
    tags: ["React Native", "WebSockets", "Redis Cluster", "Google Maps API"],
    features: ["Live Rider GPS Route Tracking", "Automated Warehouse Wave Picking", "Dynamic Surge & Delivery Slots", "WhatsApp Order Confirmation Bot"],
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  }
];

const categories = ["All Solutions", "Enterprise ERP", "AI & Computer Vision", "Generative AI", "Digital Commerce", "Logistics Tech"];

const SoftwareShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Solutions");

  const filteredProducts = selectedCategory === "All Solutions"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-28 bg-slate-50 dark:bg-dark-lighter relative overflow-hidden border-b border-slate-200/80 dark:border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="h-3.5 w-3.5" />
            <span>Proven Engineering Case Studies & Products</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
            Mission-Critical Software & <br />
            <span className="text-gradient">Battle-Tested Enterprise Platforms</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            From automated industrial logistics to cognitive AI agents and high-throughput vision systems, explore our real-world production deployments built for global operational scale.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-primary/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className={`glass-card rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10 ${product.border} group`}
            >
              <div>
                {/* Project Image Container with Real World Photo */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-95 group-hover:brightness-100"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
                  
                  {/* Category Pill on top left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${product.badgeBg}`}>
                      {product.icon}
                      <span>{product.category}</span>
                    </span>
                  </div>

                  {/* Impact Metric Card on top right */}
                  <div className="absolute top-4 right-4 z-10 glass-card px-3.5 py-1.5 rounded-xl border border-white/20 backdrop-blur-md shadow-lg text-right">
                    <div className="flex items-center space-x-1.5 justify-end">
                      <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-white font-extrabold text-sm">{product.metric}</span>
                    </div>
                    <span className="text-[10px] text-slate-300 font-medium block">{product.metricLabel}</span>
                  </div>

                  {/* Title overlay in image header */}
                  <div className="absolute bottom-4 left-6 right-6 z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary-light transition-colors drop-shadow-md">
                      {product.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-8 bg-slate-50/70 dark:bg-white/[0.02] p-4 rounded-2xl border border-slate-200/60 dark:border-white/5">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Core Architecture Modules</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 flex items-center justify-between border-t border-slate-200/50 dark:border-white/5 mt-auto">
                <a
                  href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I would like to schedule an enterprise consultation and architecture demo for your "${product.title}" system.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs sm:text-sm py-2.5 px-5 rounded-xl inline-flex items-center space-x-2 group/btn"
                >
                  <MessageCircle size={16} />
                  <span>Request Live Architecture Demo</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/contact"
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center space-x-1 transition-colors"
                >
                  <span>Specs</span>
                  <ExternalLink size={12} />
                </Link>
              </div>
            </div>
          ))}

          {/* Bespoke Enterprise Solutions Card */}
          <div className="glass-card rounded-3xl border border-dashed border-primary/30 p-8 sm:p-10 flex flex-col justify-center items-center text-center bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
              <Layers className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Need a Custom Enterprise Architecture?
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md mb-8">
              Whether you are architecting a high-concurrency fintech platform, automated manufacturing line integration, or enterprise multi-tenant SaaS, our senior engineering leads can design and execute your exact technical roadmap.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link 
                to="/contact" 
                className="btn-primary w-full sm:w-auto py-3 px-7 text-sm font-bold"
              >
                Schedule Technical Discovery
              </Link>
              
              <a
                href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to discuss custom enterprise software engineering for our organization.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full sm:w-auto py-3 px-6 text-sm font-semibold border-slate-300 dark:border-white/20 text-slate-800 dark:text-white"
              >
                Direct WhatsApp Hotline
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SoftwareShowcase;
