import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-dark-lighter border-t border-slate-200 dark:border-white/5 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img src="/logo2.png" alt="Mactis Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold tracking-tight text-gradient">Mactis IT</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Mactis is a premium software development and IT consulting agency in Pakistan. We deliver high-performance web applications, cross-platform mobile apps, and custom AI/ML integrations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-200 dark:bg-dark-card rounded-full text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                FB
              </a>
              <a href="#" className="p-2 bg-slate-200 dark:bg-dark-card rounded-full text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                LN
              </a>
              <a href="#" className="p-2 bg-slate-200 dark:bg-dark-card rounded-full text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                IG
              </a>
              <a href="#" className="p-2 bg-slate-200 dark:bg-dark-card rounded-full text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                GH
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-primary transition-colors">Contact Our Team</Link></li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">IT Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">App Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">AI & ML Solutions</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span>Gulberg III, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>0315-4327855</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@mactis.co</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Mactis IT. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
