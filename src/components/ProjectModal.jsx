import React, { useEffect } from 'react';
import { X, CheckCircle2, Wrench, Trophy, Sparkles, ArrowRight, Code, ShieldAlert, Users, Target } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-modal">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel p-6 sm:p-8 border-white/20 shadow-2xl rounded-2xl text-left bg-slate-900/95 my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 space-y-3 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`badge-pill ${project.categoryId === 'ai-pm' ? 'badge-blue' : 'badge-emerald'}`}>
              {project.category}
            </span>
            <span className="badge-pill badge-amber">
              {project.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>

          <p className="text-sm text-gray-300">
            {project.shortDescription}
          </p>
        </div>

        {/* 10-Point Blueprint Body */}
        <div className="py-6 space-y-8 text-sm">
          
          {/* 1. Overview & 2. Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="font-bold text-blue-400 flex items-center gap-2">
                <Target className="w-4 h-4" /> 1. Overview
              </h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="font-bold text-amber-400 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> 2. Problem
              </h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
          </div>

          {/* 3. Target Users & 4. My Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="font-bold text-emerald-400 flex items-center gap-2">
                <Users className="w-4 h-4" /> 3. Target Users
              </h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                {caseStudy.users}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="font-bold text-indigo-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 4. My Role
              </h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                {caseStudy.myRole}
              </p>
            </div>
          </div>

          {/* 5. Process & Methodology */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base">5. Process & Methodology</h4>
            <div className="space-y-2">
              {caseStudy.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-gray-300 text-xs">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Solution */}
          <div className="p-5 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-2">
            <h4 className="font-bold text-blue-300 text-base">6. Solution & Core Features</h4>
            <p className="text-gray-200 text-xs leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>

          {/* 7. Tools & Tech */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base flex items-center gap-2">
              <Wrench className="w-4 h-4 text-emerald-400" /> 7. Tools & Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.toolsUsed.map((tool, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-xs font-semibold text-gray-200">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* 8. Results & Impact */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" /> 8. Results & Impact
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {caseStudy.results.map((res, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-1" />
                  <p className="text-xs text-emerald-200 font-medium">{res}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 9. What I Learned */}
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 space-y-2">
            <h4 className="font-bold text-purple-300 text-base">9. Key Takeaways & Lessons</h4>
            <p className="text-purple-200 text-xs italic leading-relaxed">
              "{caseStudy.whatILearned}"
            </p>
          </div>

          {/* 10. Visuals Note / Blueprint Mockup */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              <Code className="w-4 h-4 text-blue-400" /> 10. Visuals & Artifact Blueprint
            </div>
            <p className="text-xs text-gray-400 italic">
              {caseStudy.visualsNote}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary py-2 px-6 text-xs"
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
}
