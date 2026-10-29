import React, { useState } from 'react';
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
    tags: ["PostgreSQL", "IoT Hardware Sync", "Microservices", "Automated Billing"],
    features: ["Automated Weighbridge IoT Sync", "Moisture & Crop Batch Loggers", "Multi-Branch Ledger Sync", "Automated Invoice & Tax Engine"],
  },
  {
    id: 2,
    title: "Intelligent Traffic Vision & Analytics",
    category: "AI & Computer Vision",
    image: "/images/project_traffic.jpg",
    metric: "99.4%",
    metricLabel: "Plate Detection Accuracy",
    description: "High-throughput smart city traffic surveillance suite utilizing neural computer vision for automated license plate detection, lane violation auditing, and digital evidence generation.",
    tags: ["Python OpenCV", "PyTorch", "FastAPI", "Edge Computing"],
    features: ["Automatic Number Plate Recognition (ANPR)", "Real-Time Lane & Speed Violation", "Automated Digital Evidence PDFs", "GIS Heatmap Telemetry"],
  },
  {
    id: 3,
    title: "Cognitive E-Commerce Assistant",
    category: "Generative AI",
    image: "/images/project_chatbot.jpg",
    metric: "4.2x",
    metricLabel: "Conversion Rate Uplift",
    description: "Autonomous customer intelligence agent that integrates with product catalogs, handles real-time stock inquiries, and resolves 85% of support tickets autonomously.",
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
    tags: ["Next.js 15", "Tailwind CSS", "Stripe Global", "Edge CDN"],
    features: ["Immersive 4K Lookbook Galleries", "Multi-Currency & Global Tax Engine", "Dynamic Size & Fit Recommender", "Sub-second Headless Checkout"],
  },
  {
    id: 5,
    title: "Hyperlocal On-Demand Grocery Delivery",
    category: "Mobile & Logistics",
    image: "/images/project_grocery.jpg",
    metric: "18 Min",
    metricLabel: "Average Fulfillment SLA",
    description: "Full-stack mobile ordering ecosystem for on-demand supermarket delivery, featuring live driver telemetry, automated inventory depletion, and warehouse wave picking.",
    tags: ["React Native", "Flutter", "Redis PubSub", "WebSockets"],
    features: ["Real-Time Driver GPS Tracking", "Automated Stock Depletion Engine", "Warehouse Picker Mobile App", "Dynamic Surge & Delivery Pricing"],
  },
];

const categories = ["All Products", "Enterprise ERP", "AI & Computer Vision", "Generative AI", "Digital Commerce", "Mobile & Logistics"];

const SoftwareShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const filteredProducts = selectedCategory === "All Products"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            Selected Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Production Software Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            From automated agro-industrial ERPs to edge computer vision and e-commerce platforms, explore our live production systems.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white dark:bg-blue-700 dark:text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Real-World Image */}
                <div className="relative">
                  <ImageWithSkeleton
                    src={product.image}
                    alt={product.title}
                    aspectRatio="aspect-[16/9]"
                    className="w-full bg-slate-900"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block px-3 py-1 rounded-md bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-md border border-slate-800">
                      {product.category}
                    </span>
                  </div>

                  {/* Impact Metric Pill */}
                  <div className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-md bg-slate-900/90 text-white text-right backdrop-blur-md border border-slate-800">
                    <div className="text-xs font-bold text-blue-400">
                      {product.metric}
                    </div>
                    <span className="text-[10px] text-slate-300 block">{product.metricLabel}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
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

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {/* Modules List */}
                  <div className="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-lg border border-slate-200/70 dark:border-slate-800/80 mb-2">
                    <p className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                      Key Highlights
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-start text-xs text-slate-600 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mr-2 mt-1.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-slate-50/70 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I would like to schedule a consultation regarding your "${product.title}" system.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center"
                >
                  <span>Request System Walkthrough</span>
                  <span className="ml-1 font-bold">→</span>
                </a>

                <Link
                  to="/contact"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  Inquire
                </Link>
              </div>
            </div>
          ))}

          {/* Custom Project Box */}
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 flex flex-col justify-center items-center text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
              Custom Development
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2.5">
              Have a Custom Software Project in Mind?
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md mb-6">
              Whether you need a custom industrial ERP, mobile application, or cloud-hosted SaaS platform, our senior developers build solutions tailored to your operational requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link 
                to="/contact" 
                className="btn-primary text-xs py-2.5 px-6 font-semibold"
              >
                Request a Proposal
              </Link>
              
              <a
                href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to discuss custom software development for our organization.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2.5 px-6 font-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SoftwareShowcase;
