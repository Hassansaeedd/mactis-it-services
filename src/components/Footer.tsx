import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-lg bg-blue-900/30 border border-blue-700/30">
                <img src="/logo2.png" alt="Mactis Logo" className="h-7 w-auto" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Mactis <span className="text-blue-400">IT Services</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Software engineering and technology consulting. Designing, developing, and scaling custom web applications, mobile apps, enterprise ERPs, and cloud systems.
            </p>
            <div className="pt-1 text-xs text-slate-400">
              <span>Client Code & IP Ownership Guaranteed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Navigation</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* IT Practices */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Services</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Web & SaaS Applications</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Mobile App Engineering</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Enterprise ERP Systems</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AI & Workflow Automation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cloud Infrastructure & DevOps</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Contact</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="text-slate-400">
                <span className="text-slate-200 font-medium block">Office Location:</span>
                Gulberg III, Lahore, Pakistan
              </li>
              <li className="text-slate-400">
                <span className="text-slate-200 font-medium block">Phone / WhatsApp:</span>
                +92 315 4327855
              </li>
              <li className="text-slate-400">
                <span className="text-slate-200 font-medium block">Email:</span>
                info@mactis.co
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Legal Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Mactis IT Services. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
