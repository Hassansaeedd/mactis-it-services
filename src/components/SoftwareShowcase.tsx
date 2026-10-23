import React, { useState } from 'react';
import { 
  Building2, Eye, MessageSquareCode, Shirt, ShoppingCart, 
  ArrowRight, MessageCircle, TrendingUp, Layers, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithSkeleton } from './SkeletonLoader';

const products = [
  {
    id: 1,
    title: "Agro-Industrial & Rice Mill ERP",
    category: "Enterprise ERP",
    image: "/images/project_ricemill.jpg",
    metric: "10M+ Kg",
    metricLabel: "Stock Managed Annually",
    description: "End-to-end industrial resource planning platform with automated weighbridge IoT integration, grain moisture analytics, and real-time vendor ledgers.",
    icon: <Building2 className="h-4 w-4 text-blue-700 dark:text-blue-400" />,
    tags: ["PostgreSQL", "IoT Hardware Sync", "Microservices", "Automated Billing"],
    features: ["Automated Weighbridge IoT Sync", "Moisture & Crop Batch Loggers", "Multi-Branch Ledger Sync", "Automated Invoice & Tax Engine"],
  },
  {
    id: 2,
    title: "Intelligent Traffic Vision & Analytics",
    category: "AI & Computer Vision",
    image: "/images/project_traffic.jpg",
    metric: "99.4%",
    metricLabel: "Automated Plate Accuracy",
    description: "High-throughput smart city traffic surveillance suite utilizing neural computer vision for automated license plate detection, lane violation auditing, and digital fine generation.",
    icon: <Eye className="h-4 w-4 text-blue-700 dark:text-blue-400" />,
    tags: ["Python OpenCV", "PyTorch", "FastAPI", "Edge Computing"],
    features: ["Automatic Number Plate Recognition (ANPR)", "Real-Time Lane & Speed Violation", "Automated Digital Evidence PDFs", "GIS Heatmap Telemetry"],
  },
  {
    id: 3,
    title: "Cognitive E-Commerce AI Agent",
    category: "Generative AI",
    image: "/images/project_chatbot.jpg",
    metric: "4.2x",
    metricLabel: "Conversion Rate Uplift",
    description: "Autonomous multimodal customer intelligence agent that integrates with product catalogs, handles real-time stock inquiries, and resolves 85% of support tickets autonomously.",
    icon: <MessageSquareCode className="h-4 w-4 text-blue-700 dark:text-blue-400" />,
    tags: ["LLM Agents", "Vector Embeddings", "Webhooks", "Live Cart Sync"],
    features: ["Context-Aware Multilingual NLP", "Catalog & Inventory Live Sync", "Automated Order Tracking", "Seamless Human Agent Hand-off"],
  },
  {
    id: 4,
    title: "Global Fashion & Luxury E-Commerce",
    category: "Digital Commerce",
    image: "/images/project_fashion.jpg",
    metric: "350ms",
    metricLabel: "Global Edge Latency",
    description: "High-performance headless digital commerce platform engineered for premier apparel brands, featuring high-fidelity lookbooks, currency localization, and sub-second checkout.",
    icon: <Shirt className="h-4 w-4 text-blue-700 dark:text-blue-400" />,
    tags: ["Next.js 15", "Tailwind CSS", "Stripe Global", "Edge CDN"],
    features: ["Immersive 4K Lookbook Galleries", "Multi-Currency & Global Tax Engine", "Dynamic Size & Fit Recommender", "Sub-second Headless Checkout"],
  },
  {
    id: 5,
    title: "Hyperlocal On-Demand Delivery & Grocery",
    category: "Logistics Tech",
    image: "/images/project_grocery.jpg",
    metric: "18-Min",
    metricLabel: "Average Fulfillment Cycle",
    description: "Ultra-fast grocery order orchestration and rider dispatch system with real-time route optimization, automated stock depletion alerts, and omnichannel mobile apps.",
    icon: <ShoppingCart className="h-4 w-4 text-blue-700 dark:text-blue-400" />,
    tags: ["React Native", "WebSockets", "Redis Cluster", "Google Maps API"],
    features: ["Live Rider GPS Route Tracking", "Automated Warehouse Wave Picking", "Dynamic Surge & Delivery Slots", "WhatsApp Order Confirmation Bot"],
  }
];

const categories = ["All Solutions", "Enterprise ERP", "AI & Computer Vision", "Generative AI", "Digital Commerce", "Logistics Tech"];

const SoftwareShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Solutions");

  const filteredProducts = selectedCategory === "All Solutions"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-2">
            <Layers className="h-4 w-4" />
            <span>Case Studies & Production Deployments</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Mission-Critical Software Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            From automated agro-industrial logistics to edge computer vision and cognitive AI pipelines, examine our production solutions built for enterprise scale.
          </p>

          {/* Clean Enterprise Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white dark:bg-blue-700 dark:text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (Solid clean cards, no liquid glass, crisp borders) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Real-World Image with Skeleton Loader */}
                <div className="relative">
                  <ImageWithSkeleton
                    src={product.image}
                    alt={product.title}
                    aspectRatio="aspect-[16/9]"
                    className="w-full bg-slate-900"
                  />
                  
                  {/* Category Badge on Top-Left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-slate-900/90 text-white text-[11px] font-medium border border-slate-800">
                      {product.icon}
                      <span>{product.category}</span>
                    </span>
                  </div>

                  {/* Impact Metric Pill on Top-Right */}
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded bg-slate-900/90 text-white text-right border border-slate-800">
                    <div className="flex items-center space-x-1 justify-end text-xs font-bold text-blue-400">
                      <TrendingUp className="h-3 w-3" />
                      <span>{product.metric}</span>
                    </div>
                    <span className="text-[10px] text-slate-300 block">{product.metricLabel}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {product.title}
                  </h3>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {/* Architecture Modules (Clean typographic list, no checkmark overload) */}
                  <div className="bg-slate-50 dark:bg-slate-950/60 p-4 rounded border border-slate-200/70 dark:border-slate-800/80 mb-2">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                      Core Functional Modules
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-start text-xs text-slate-700 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between mt-auto">
                <a
                  href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I would like to schedule an enterprise consultation regarding your "${product.title}" system.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2 px-4 space-x-1.5"
                >
                  <MessageCircle size={14} />
                  <span>Request Live Architecture Demo</span>
                  <ArrowRight size={13} className="ml-1" />
                </a>

                <Link
                  to="/contact"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center space-x-1"
                >
                  <span>Inquire</span>
                  <ExternalLink size={12} />
                </Link>
              </div>
            </div>
          ))}

          {/* Bespoke Enterprise Solutions Card */}
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-6 sm:p-8 flex flex-col justify-center items-center text-center">
            <div className="p-3 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 mb-4">
              <Layers className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Require a Custom Enterprise Specification?
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md mb-6">
              Whether architecting a distributed agro logistics system, computer vision models, or multi-tenant cloud platforms, our principal engineering leads provide full architectural roadmaps.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link 
                to="/contact" 
                className="btn-primary text-xs py-2.5 px-5"
              >
                Schedule Technical Discovery
              </Link>
              
              <a
                href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to discuss custom enterprise software engineering for our organization.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2.5 px-5"
              >
                WhatsApp Direct Hotline
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SoftwareShowcase;
