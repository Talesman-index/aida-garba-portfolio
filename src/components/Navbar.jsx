import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, Sparkles, FileText } from 'lucide-react';
import { LinkedinIcon as Linkedin } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-panel px-4 py-3 sm:px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'shadow-2xl border-white/10' : 'bg-opacity-40'}`}>
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 text-white text-decoration-none group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              AG
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight block text-white group-hover:text-blue-400 transition-colors">
                Aïda Garba
              </span>
              <span className="text-xs text-gray-400 font-medium hidden sm:block">
                AI PM & Data Analytics
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all hover:scale-105"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="btn-primary py-2 px-4 text-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 glass-panel p-4 flex flex-col gap-2 animate-modal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-200 hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:underline flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn Profile
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary text-xs py-1.5 px-3"
              >
                Connect
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
