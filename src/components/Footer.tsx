import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 dark:bg-dark-lighter border-t border-slate-800 dark:border-white/5 pt-16 pb-12 text-slate-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-xl bg-primary/10 border border-primary/20">
                <img src="/logo2.png" alt="Mactis Logo" className="h-8 w-auto" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Mactis<span className="text-primary-light">IT</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Global enterprise software engineering and technology consulting. Architecting resilient web platforms, mission-critical industrial ERPs, and autonomous AI systems.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-slate-400">
              <Globe className="h-4 w-4 text-primary" />
              <span>Global Delivery Pods • ISO 27001 Aligned</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-primary-light transition-colors">Home Overview</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Enterprise Practices</Link></li>
              <li><Link to="/about" className="hover:text-primary-light transition-colors">About & Leadership</Link></li>
              <li><Link to="/contact" className="hover:text-primary-light transition-colors">Technical Discovery</Link></li>
            </ul>
          </div>

          {/* IT Practices */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">Engineering Practices</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Cloud & Microservices</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Enterprise Agro ERPs</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Computer Vision & ANPR</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Cognitive AI Chatbots</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Headless Digital Commerce</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">Global Headquarters</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Gulberg III, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>+92 315 4327855</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                <span>info@mactis.co</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800/80 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Mactis IT Services. All enterprise rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Enterprise SLA Policy</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Data Privacy & Security</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Governance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
