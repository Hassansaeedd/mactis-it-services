import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithSkeleton } from './SkeletonLoader';

interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
  features: string[];
  architectureOverview: string;
  deploymentSpecs: string;
}

const products: Product[] = [
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
    architectureOverview: "Serial COM-port listeners sync truck gross/tare weights directly to transactional PostgreSQL tables. Real-time background workers compute moisture deductions and update supplier balances with sub-second ACID guarantees.",
    deploymentSpecs: "On-Premise Edge Gateway + Azure Cloud Sync • 99.9% Offline-Tolerant Availability",
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
    architectureOverview: "RTSP camera feeds stream into TensorRT-accelerated edge inference pods. Detected vehicle vectors trigger automated ANPR OCR pipelines, saving watermarked forensic snapshots to encrypted S3-compatible storage.",
    deploymentSpecs: "Docker Containerized Edge GPU Pods • <120ms Frame Inference Latency",
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
    architectureOverview: "Hybrid semantic search combining pgvector with live warehouse inventory APIs. Contextual guardrails prevent hallucinations, ensuring 100% price and stock accuracy before response generation.",
    deploymentSpecs: "Serverless Edge Workers + Webhook Dispatcher • 250ms Token Streaming",
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
    architectureOverview: "Edge-cached Next.js 15 SSR storefront backed by headless REST/GraphQL microservices. Cart state persists across devices via distributed Redis caches with optimistic client-side updates.",
    deploymentSpecs: "Vercel Global Edge Network + AWS RDS Multi-AZ • 99.99% Checkout Uptime",
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
    architectureOverview: "Bi-directional WebSocket server coordinating location broadcasts between customer apps, warehouse pickers, and dispatch drivers with dead-reckoning geospatial interpolation.",
    deploymentSpecs: "Kubernetes Autoscaled Node.js Cluster + Redis Geo Cluster • High-Concurrency SLA",
  },
];

const categories = ["All Products", "Enterprise ERP", "AI & Computer Vision", "Generative AI", "Digital Commerce", "Mobile & Logistics"];

const SoftwareShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === "All Products"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            Selected Production Deployments
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Production Software Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            From automated agro-industrial ERPs to edge computer vision and e-commerce platforms, inspect our live systems and architecture specs.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all relative ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Smooth Framer Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                key={product.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-lg group"
              >
                <div>
                  {/* Real-World Image */}
                  <div className="relative overflow-hidden">
                    <ImageWithSkeleton
                      src={product.image}
                      alt={product.title}
                      aspectRatio="aspect-[16/9]"
                      className="w-full bg-slate-900 group-hover:scale-[1.02] transition-transform duration-500"
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
                        Key Capabilities
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

                {/* Card Footer with Inspect Architecture button */}
                <div className="px-6 py-4 bg-slate-50/70 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center group-hover:underline"
                  >
                    <span>Inspect Architecture & Specs</span>
                    <span className="ml-1 font-bold">→</span>
                  </button>

                  <a
                    href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I am inquiring about the ${product.title} architecture.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    Consult on this
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

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

      {/* Interactive Project Architecture Inspection Modal */}
      <AnimatePresence>
        {activeModalProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProduct(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-5 pr-8">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {activeModalProduct.category} • Production Specification
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1 tracking-tight">
                  {activeModalProduct.title}
                </h3>
              </div>

              {/* Verified Metrics Badge */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block">Verified Production Metric</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {activeModalProduct.metric} — {activeModalProduct.metricLabel}
                  </span>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Live in Production
                </span>
              </div>

              {/* Architecture Blueprint Details */}
              <div className="space-y-5 mb-6 text-sm text-slate-600 dark:text-slate-300">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-xs uppercase tracking-wider">
                    System Architecture & Data Flow
                  </h4>
                  <p className="leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-4 rounded-xl border border-slate-200/70 dark:border-slate-800/80 font-normal text-xs sm:text-sm">
                    {activeModalProduct.architectureOverview}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-xs uppercase tracking-wider">
                    Infrastructure & Reliability Specs
                  </h4>
                  <p className="leading-relaxed text-xs sm:text-sm">
                    {activeModalProduct.deploymentSpecs}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2.5 text-xs uppercase tracking-wider">
                    Integrated Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProduct.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-normal rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I reviewed the architecture for ${activeModalProduct.title} on Mactis and would like to consult on a similar solution.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto text-xs py-3 px-5 font-semibold"
                >
                  Discuss Similar Implementation
                </a>
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="btn-outline w-full sm:w-auto text-xs py-3 px-5"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SoftwareShowcase;
