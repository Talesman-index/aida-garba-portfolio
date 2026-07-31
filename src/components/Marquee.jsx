import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Marquee() {
  const skills = PORTFOLIO_DATA.marqueeSkills;
  // Duplicate array for continuous marquee loop
  const doubleSkills = [...skills, ...skills];

  return (
    <div className="w-full bg-slate-900/60 border-y border-white/10 py-4 overflow-hidden relative backdrop-blur-md">
      {/* Subtle Side Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080B11] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080B11] to-transparent z-10 pointer-events-none"></div>

      <div className="marquee-track flex gap-8 items-center">
        {doubleSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-gray-200 uppercase tracking-wider">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
