import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo2.png" alt="Mactis Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tight text-gradient">Mactis IT</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-300 hover:text-primary transition-colors font-medium">Home</Link>
            <Link to="/services" className="text-slate-300 hover:text-primary transition-colors font-medium">Services</Link>
            <Link to="/about" className="text-slate-300 hover:text-primary transition-colors font-medium">About</Link>
            <Link to="/contact" className="text-slate-300 hover:text-primary transition-colors font-medium">Contact</Link>
          </div>

          {/* Get a Free Quote Call to Action */}
          <div className="hidden md:flex items-center">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! Can I get more info on this?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center text-sm py-2.5 px-5 rounded-full"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Get Free Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/10 animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-primary transition-colors font-medium">Home</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-primary transition-colors font-medium">Services</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-primary transition-colors font-medium">About</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-primary transition-colors font-medium">Contact</Link>
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! Can I get more info on this?')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary text-center flex items-center justify-center py-2.5 rounded-xl"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
