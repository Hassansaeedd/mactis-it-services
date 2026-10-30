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
    title: "Rice Mill & Factory Management System",
    category: "Business Software",
    image: "/images/project_ricemill.jpg",
    metric: "10M+ Kg",
    metricLabel: "Stock Managed Annually",
    description: "Complete business software that automatically records truck scale weights, tracks grain inventory, manages moisture cuts, and handles customer invoicing.",
    tags: ["PostgreSQL", "Truck Scale Sync", "Automated Billing", "Inventory Alerts"],
    features: ["Automatic Truck Scale Weight Sync", "Moisture & Crop Batch Tracking", "Multi-Branch Ledger & Accounts", "Instant Invoicing & Billing"],
    architectureOverview: "Connects directly to electronic weighbridge scales so truck weights record automatically without manual typing errors. Updates inventory and customer accounts immediately, even during internet outages.",
    deploymentSpecs: "Runs smoothly on-premise at the factory and syncs with cloud servers whenever internet is available.",
  },
  {
    id: 2,
    title: "Smart Camera & Vehicle Recognition System",
    category: "AI & Smart Vision",
    image: "/images/project_traffic.jpg",
    metric: "99.4%",
    metricLabel: "Plate Detection Accuracy",
    description: "Automated camera software that reads vehicle license plates, tracks road traffic, and generates automated violation records in real time.",
    tags: ["Python OpenCV", "PyTorch", "Fast Processing", "Camera Feeds"],
    features: ["Instant Number Plate Reading (ANPR)", "Lane & Speed Violation Alerts", "Automated PDF Evidence Reports", "Traffic Flow Heatmaps & Analytics"],
    architectureOverview: "Connects to traffic cameras to read vehicle plates in a fraction of a second. Automatically generates watermarked image reports and saves records securely.",
    deploymentSpecs: "Fast, lightweight camera setup processing video frames in real time with 99.4% accuracy.",
  },
  {
    id: 3,
    title: "AI Customer Support & Sales Assistant",
    category: "Smart AI",
    image: "/images/project_chatbot.jpg",
    metric: "4.2x",
    metricLabel: "Faster Inquiries Handled",
    description: "Smart AI chat assistant that answers customer questions 24/7, checks store stock in real time, and helps complete orders without delay.",
    tags: ["AI Chatbot", "WhatsApp Sync", "Store Catalog", "Instant Replies"],
    features: ["24/7 Fast Customer Answering", "Live Store Inventory & Price Lookup", "Automated Order Tracking", "Easy Hand-off to Human Team"],
    architectureOverview: "Answers customer inquiries accurately using your product catalog and live database. Transfers complex questions to your human team seamlessly.",
    deploymentSpecs: "Instant response time across WhatsApp and your website with 99.9% uptime.",
  },
  {
    id: 4,
    title: "Fashion & Luxury Online Store",
    category: "Online Stores",
    image: "/images/project_fashion.jpg",
    metric: "350ms",
    metricLabel: "Instant Page Speed",
    description: "Fast, elegant e-commerce website designed for high-end clothing brands, with crystal-clear photo galleries, easy mobile checkout, and multi-currency payments.",
    tags: ["Next.js", "Mobile Checkout", "Global Payments", "Photo Galleries"],
    features: ["High-Quality Photo & Video Galleries", "Worldwide Currencies & Payment Gateways", "Interactive Size & Fit Guide", "Fast One-Click Checkout"],
    architectureOverview: "Engineered for lightning-fast browsing on smartphones. Shoppers can view large collections and checkout in seconds with zero lag.",
    deploymentSpecs: "Global fast cloud hosting with 99.99% uptime during peak shopping seasons.",
  },
  {
    id: 5,
    title: "Grocery & Delivery Mobile App System",
    category: "Mobile Apps",
    image: "/images/project_grocery.jpg",
    metric: "18 Min",
    metricLabel: "Average Order Delivery",
    description: "Complete mobile delivery platform with an app for customers to order, an app for riders to deliver with live GPS, and a store dashboard to pack items.",
    tags: ["React Native", "Live GPS", "Rider App", "Store Packing"],
    features: ["Live GPS Driver Tracking", "Real-Time Stock Updates", "Warehouse & Store Packing App", "Delivery Fees & Route Calculation"],
    architectureOverview: "Keeps customers, packing staff, and delivery riders coordinated with live map updates and instant notifications as orders move from shelf to doorstep.",
    deploymentSpecs: "High-capacity server infrastructure ready for thousands of simultaneous shoppers.",
  },
];

const categories = ["All Projects", "Business Software", "AI & Smart Vision", "Smart AI", "Online Stores", "Mobile Apps"];

const SoftwareShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === "All Projects"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            Proven Real-World Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Projects We Have Built & Deployed
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            From factory inventory systems to smart camera software and high-speed online stores, explore the software we built for our clients.
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
                      ? 'bg-slate-900 text-white dark:bg-sky-600 dark:text-white shadow-sm'
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
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                key={product.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-sky-400 dark:hover:border-sky-500 transition-all duration-300 shadow-sm hover:shadow-xl group"
              >
                <div>
                  {/* Real-World Image */}
                  <div className="relative overflow-hidden">
                    <ImageWithSkeleton
                      src={product.image}
                      alt={product.title}
                      aspectRatio="aspect-[16/9]"
                      className="w-full bg-slate-900 group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-block px-3 py-1 rounded-md bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-md border border-slate-800">
                        {product.category}
                      </span>
                    </div>

                    {/* Impact Metric */}
                    <div className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-md bg-slate-900/90 text-white text-right backdrop-blur-md border border-slate-800">
                      <div className="text-xs font-bold text-sky-400">
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

                    {/* Key Features List */}
                    <div className="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-lg border border-slate-200/70 dark:border-slate-800/80 mb-2">
                      <p className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                        Key Features Included
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-start text-xs text-slate-600 dark:text-slate-400">
                            <svg className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Inspect Details button */}
                <div className="px-6 py-4 bg-slate-50/70 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 inline-flex items-center group-hover:underline"
                  >
                    <span>View Project Details</span>
                    <span className="ml-1 font-bold">→</span>
                  </button>

                  <a
                    href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I am interested in building something like the ${product.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Custom Project Box */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-sm"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              Custom Requirements
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2.5">
              Have a Unique Idea for Your Business?
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md mb-6">
              Whether you need factory management software, a mobile app, or a high-converting website, our team creates custom solutions designed specifically for your workflows.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link 
                to="/contact" 
                className="btn-primary text-xs py-2.5 px-6 font-semibold"
              >
                Send Us Your Requirements
              </Link>
              
              <a
                href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! I would like to discuss a custom software project for our business.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2.5 px-6 font-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Interactive Project Details Modal */}
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
                  {activeModalProduct.category} • Project Overview
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1 tracking-tight">
                  {activeModalProduct.title}
                </h3>
              </div>

              {/* Verified Metrics Display */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block">Performance Result</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {activeModalProduct.metric} — {activeModalProduct.metricLabel}
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Successfully Deployed
                </span>
              </div>

              {/* Project Details */}
              <div className="space-y-5 mb-6 text-sm text-slate-600 dark:text-slate-300">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-xs uppercase tracking-wider">
                    How This System Works
                  </h4>
                  <p className="leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-4 rounded-xl border border-slate-200/70 dark:border-slate-800/80 font-normal text-xs sm:text-sm">
                    {activeModalProduct.architectureOverview}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-xs uppercase tracking-wider">
                    Hosting & Reliability
                  </h4>
                  <p className="leading-relaxed text-xs sm:text-sm">
                    {activeModalProduct.deploymentSpecs}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2.5 text-xs uppercase tracking-wider">
                    Technologies Used
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
                  href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I reviewed the ${activeModalProduct.title} on Mactis and would like to build a similar solution for my business.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto text-xs py-3 px-5 font-semibold text-center"
                >
                  Discuss a Similar Project
                </a>
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="btn-outline w-full sm:w-auto text-xs py-3 px-5"
                >
                  Close Details
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
