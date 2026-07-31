import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedinIcon as Linkedin } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        {/* Left Info */}
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
              AG
            </div>
            <span className="font-bold text-white text-base">Aïda Garba</span>
          </div>
          <p className="text-xs text-gray-400">
            AI Product Management & Data Analytics • Livingstone College ({profile.gpa} GPA)
          </p>
        </div>

        {/* Center Quick Links */}
        <div className="flex items-center gap-6 text-xs text-gray-400 font-medium">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right Scroll Top */}
        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-gray-500">
        © {new Date().getFullYear()} Aïda Garba. Built with React, Vite & Tailwind/Vanilla CSS. All rights reserved.
      </div>
    </footer>
  );
}
