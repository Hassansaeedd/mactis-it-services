import React from 'react';
import { 
  Building2, Eye, MessageSquareCode, Shirt, ShoppingCart, 
  ArrowRight, MessageCircle, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';
const products = [
  {
    id: 1,
    title: "Rice Mill ERP Software",
    category: "Enterprise ERP",
    description: "End-to-end management system for billing, scale bridge logs, and crop stock tracking designed for rice mills.",
    icon: <Building2 className="h-6 w-6 text-blue-400" />,
    features: ["Scale Bridge Integration", "Crop Purchase Loggers", "Customer Ledgers", "Auto Invoice Billing"],
    color: "border-blue-500/20 hover:border-blue-500/40"
  },
  {
    id: 2,
    title: "Traffic Challan Analytics & Vision",
    category: "AI & Computer Vision",
    description: "Smart traffic monitoring system that detects violations and analyzes challan data using computer vision.",
    icon: <Eye className="h-6 w-6 text-purple-400" />,
    features: ["Plate Recognition", "Violation Verification", "Data Visualization", "PDF Report Generation"],
    color: "border-purple-500/20 hover:border-purple-500/40"
  },
  {
    id: 3,
    title: "AI E-Commerce Chatbot Agent",
    category: "Generative AI",
    description: "Intelligent customer service assistant trained on your products to automate support and drive conversions.",
    icon: <MessageSquareCode className="h-6 w-6 text-indigo-400" />,
    features: ["Context-Aware Support", "Shopify & custom APIs sync", "Lead Capture Form", "24/7 Auto responses"],
    color: "border-indigo-500/20 hover:border-indigo-500/40"
  },
  {
    id: 4,
    title: "Fashion & Clothing E-Commerce",
    category: "Retail Tech",
    description: "Premium, responsive e-commerce stores custom-built for clothing brands looking to expand sales globally.",
    icon: <Shirt className="h-6 w-6 text-rose-400" />,
    features: ["High-End Visual Lookbooks", "Secure checkout integration", "Size recommendations", "Fast page loads"],
    color: "border-rose-500/20 hover:border-rose-500/40"
  },
  {
    id: 5,
    title: "Grocery E-Commerce Platform",
    category: "On-Demand Delivery",
    description: "Fast web & mobile store interface designed for local grocery retailers and delivery operations.",
    icon: <ShoppingCart className="h-6 w-6 text-green-400" />,
    features: ["Live Stock Alerts", "WhatsApp checkout sync", "Slot-Based Deliveries", "Admin order manager"],
    color: "border-green-500/20 hover:border-green-500/40"
  }
];

const SoftwareShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-dark-lighter relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-4">
            Our Software Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured Software & <br />
            <span className="text-gradient">Ready-to-Deploy Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Accelerate your business development with our fully customizable enterprise platforms, AI frameworks, and e-commerce models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`glass p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between ${product.color}`}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">
                    {product.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I want to request a demo/consultation for your "${product.title}" software.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary text-sm font-bold mt-auto group hover:underline"
              >
                <MessageCircle size={16} className="mr-2" />
                Request Live Demo
                <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}

          {/* Contact Card for custom setups */}
          <div className="glass p-8 rounded-3xl border border-dashed border-white/10 flex flex-col justify-between text-center items-center bg-white/[0.01]">
            <div className="my-auto space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Need a Custom Software Solution?</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                Have specific database or flow requirements? Our development team can engineer tailored platforms to fit your processes.
              </p>
              <Link 
                to="/contact" 
                className="btn-outline border-white/20 text-white hover:bg-white hover:text-dark py-3 px-8 rounded-xl inline-block font-semibold text-sm"
              >
                Discuss Your Idea
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareShowcase;
