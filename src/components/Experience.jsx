import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="badge-pill badge-emerald">Leadership & Mentorship</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Professional Experience
        </h2>
        <p className="text-base text-gray-400">
          Applied leadership, academic coaching, and technical mentorship roles at Livingstone College.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="glass-card p-6 sm:p-8 border-white/10 hover:border-blue-500/40 text-left transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  {index === 0 ? (
                    <Briefcase className="w-6 h-6 text-blue-400" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-emerald-400" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-sm font-semibold text-blue-400">{exp.organization}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  {exp.period}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 py-4 leading-relaxed">
              {exp.description}
            </p>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Key Responsibilities & Impact:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300 leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
