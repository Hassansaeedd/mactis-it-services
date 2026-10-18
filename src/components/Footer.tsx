import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded bg-blue-900/30 border border-blue-700/30">
                <img src="/logo2.png" alt="Mactis Logo" className="h-7 w-auto" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Mactis <span className="text-blue-400">IT</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Enterprise technology consultancy and custom software engineering. Architecting resilient cloud platforms, industrial ERPs, and cognitive AI applications.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-slate-400">
              <Shield className="h-3.5 w-3.5 text-blue-400" />
              <span>Full IP Ownership & Confidentiality Protected</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Navigation</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home Overview</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Enterprise Practices</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Company Overview</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Schedule Consultation</Link></li>
            </ul>
          </div>

          {/* IT Practices */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Engineering Practices</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Enterprise Web & Cloud Systems</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Agro-Industrial ERP Platforms</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Computer Vision & Surveillance</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cognitive AI & Agent Pipelines</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">High-Scale Digital Commerce</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Consulting Offices</h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                <span>Gulberg III, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                <span>+92 315 4327855</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <span>info@mactis.co</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Legal Bar with real TOS & Privacy Policy */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Mactis IT Services. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Enterprise SLA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
