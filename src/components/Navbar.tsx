import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 glass border-b border-slate-200/50 dark:border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo2.png" alt="Mactis Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tight text-gradient">Mactis IT</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">Home</Link>
            <Link to="/services" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">Services</Link>
            <Link to="/about" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">About</Link>
            <Link to="/contact" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">Contact</Link>
          </div>

          {/* Right side: Theme Toggle + CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle Switch */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative flex items-center w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {/* Thumb */}
              <span
                className={`absolute left-1 flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-primary shadow-md transition-transform duration-300 ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}`}
              >
                {theme === 'dark' ? (
                  <Moon className="h-3 w-3 text-white" />
                ) : (
                  <Sun className="h-3 w-3 text-amber-500" />
                )}
              </span>
            </button>

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

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative flex items-center w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 focus:outline-none"
            >
              <span
                className={`absolute left-1 flex items-center justify-center w-4 h-4 rounded-full bg-white dark:bg-primary shadow-md transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
              >
                {theme === 'dark' ? (
                  <Moon className="h-2.5 w-2.5 text-white" />
                ) : (
                  <Sun className="h-2.5 w-2.5 text-amber-500" />
                )}
              </span>
            </button>

            <button
              className="p-2 text-slate-600 dark:text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-slate-200/50 dark:border-white/10 animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors font-medium">Home</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors font-medium">Services</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors font-medium">About</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors font-medium">Contact</Link>
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
