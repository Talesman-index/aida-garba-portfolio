import React from 'react';
import { Sparkles, BarChart3, ArrowRight, Download, Award, Activity, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon as Linkedin } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  const { profile, focusAreas } = PORTFOLIO_DATA;

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge-pill badge-amber">
              <Award className="w-3.5 h-3.5" />
              {profile.gpa} GPA Scholar
            </span>
            <span className="badge-pill badge-blue">
              <Activity className="w-3.5 h-3.5" />
              {profile.athletics}
            </span>
            <span className="badge-pill badge-emerald">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Academic Tutor
            </span>
          </div>

          {/* Title & Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">Aïda Garba</span>.
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-gray-300 max-w-2xl leading-relaxed">
            {profile.tagline}
          </p>

          <p className="text-base text-gray-400 max-w-2xl">
            Computer Information Systems student at {profile.school}. I bring the discipline, teamwork, and resilience of an NCAA Division II tennis athlete into crafting practical AI products and analyzing high-impact business data.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" className="btn-primary">
              View My Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profile.email}?subject=Resume%20Request%20-%20Aida%20Garba`}
              className="btn-secondary"
            >
              <Download className="w-4 h-4" />
              Request Resume
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary p-3"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
            <div>
              <div className="text-2xl font-extrabold text-white">{profile.gpa}</div>
              <div className="text-xs text-gray-400">Cumulative GPA</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-blue-400">6+</div>
              <div className="text-xs text-gray-400">Case Study Projects</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-emerald-400">NCAA</div>
              <div className="text-xs text-gray-400">D-II Tennis Player</div>
            </div>
          </div>
        </div>

        {/* Right Hero Card Column (Gitos Webflow Inspired Card) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md">
            <div className="glass-card p-6 sm:p-8 relative overflow-hidden group shadow-2xl border-white/10">
              
              {/* Decorative Background Glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all duration-500"></div>

              {/* Profile Card Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-emerald-500 p-0.5 flex-shrink-0 shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/aida-hero.jpg"
                    alt={profile.name}
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                  <p className="text-xs text-blue-400 font-semibold">{profile.major}</p>
                  <p className="text-xs text-gray-400">{profile.school}</p>
                </div>
              </div>

              {/* Dual Focus Cards Showcase */}
              <div className="space-y-4 pt-6">
                {focusAreas.map((area) => (
                  <div
                    key={area.id}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        {area.id === 'ai-pm' ? (
                          <Sparkles className="w-4 h-4 text-blue-400" />
                        ) : (
                          <BarChart3 className="w-4 h-4 text-emerald-400" />
                        )}
                        <h4 className="text-sm font-bold text-white">{area.title}</h4>
                      </div>
                      <span className={`text-[10px] ${area.id === 'ai-pm' ? 'text-blue-400 bg-blue-500/10' : 'text-emerald-400 bg-emerald-500/10'} px-2 py-0.5 rounded-full font-semibold`}>
                        Focus
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Quote / Tagline */}
              <div className="mt-6 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                <p className="text-xs text-blue-200 font-medium italic">
                  "Turning real problems into practical digital products."
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
