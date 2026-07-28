import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 pb-2 transition-all duration-300">
      <nav className="max-w-7xl mx-auto rounded-2xl glass border border-slate-200/60 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-primary/5 transition-all duration-300">
        <div className="px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo + Status Badge */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2.5 group">
                <div className="p-1.5 rounded-xl bg-primary/10 border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                  <img src="/logo2.png" alt="Mactis Logo" className="h-8 w-auto" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tight text-gradient flex items-center">
                    Mactis<span className="text-slate-900 dark:text-white font-medium text-lg ml-1">IT</span>
                  </span>
                </div>
              </Link>

              {/* Origin UI Live Status Ping */}
              <div className="hidden lg:flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] font-medium text-slate-600 dark:text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for New Projects</span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-1 bg-slate-100/80 dark:bg-white/5 p-1.5 rounded-full border border-slate-200/50 dark:border-white/10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                      isActive
                        ? 'text-white bg-primary shadow-md shadow-primary/20'
                        : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right side: Theme Toggle + CTA */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Origin UI Toggle Switch */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative flex items-center p-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-center space-x-1 text-xs font-semibold px-2 text-slate-600 dark:text-slate-300">
                  {theme === 'dark' ? (
                    <>
                      <Moon className="h-4 w-4 text-purple-400" />
                      <span className="text-[11px]">Dark</span>
                    </>
                  ) : (
                    <>
                      <Sun className="h-4 w-4 text-amber-500" />
                      <span className="text-[11px]">Light</span>
                    </>
                  )}
                </div>
              </button>

              <a
                href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! Can I get more info on this?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center text-xs md:text-sm py-2 px-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 group"
              >
                <MessageCircle className="mr-1.5 h-4 w-4" />
                Get Quote
                <Sparkles className="ml-1.5 h-3.5 w-3.5 opacity-70 group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Mobile: Theme Toggle + Hamburger */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
              >
                {theme === 'dark' ? <Moon className="h-4 w-4 text-purple-400" /> : <Sun className="h-4 w-4 text-amber-500" />}
              </button>

              <button
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200/50 dark:border-white/10 p-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent('Hello! Can I get more info on this?')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary w-full text-center flex items-center justify-center py-2.5 rounded-xl text-sm mt-2"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Get Free Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
