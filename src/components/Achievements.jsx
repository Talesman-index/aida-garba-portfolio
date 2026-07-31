import React from 'react';
import { Award, Activity, Trophy, Star, BookOpen, Zap, ShieldCheck, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = PORTFOLIO_DATA;

  const iconMap = {
    Award: Award,
    Activity: Activity,
    Trophy: Trophy,
    Star: Star,
    BookOpen: BookOpen,
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    GraduationCap: GraduationCap
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="badge-pill badge-amber">Honors & Accolades</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Achievements & Recognition
        </h2>
        <p className="text-base text-gray-400">
          Academic excellence, athletic honors, and national competition awards.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((ach, index) => {
          const IconComp = iconMap[ach.icon] || Award;
          const isGold = index === 0 || index === 2;

          return (
            <div
              key={index}
              className={`glass-card p-6 text-left transition-all duration-200 group ${
                isGold
                  ? 'border-amber-500/30 hover:border-amber-500/60 bg-amber-500/5'
                  : 'border-white/10 hover:border-blue-500/40'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                isGold
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
              }`}>
                <IconComp className="w-6 h-6" />
              </div>

              <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {ach.title}
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed">
                {ach.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
