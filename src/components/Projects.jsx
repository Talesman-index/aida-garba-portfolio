import React, { useState } from 'react';
import { Sparkles, BarChart3, ArrowUpRight, FolderGit2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const { projects } = PORTFOLIO_DATA;

  const filteredProjects = projects.filter((p) => {
    if (filter === 'ai-pm') return p.categoryId === 'ai-pm';
    if (filter === 'data-analytics') return p.categoryId === 'data-analytics';
    return true;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span className="badge-pill badge-blue">Portfolio Highlights</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Featured Case Studies
        </h2>
        <p className="text-base text-gray-400">
          Explore real-world AI Product Management builds and Data Analytics case studies. Click any card to inspect the complete 10-point project breakdown.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 glass-panel">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            All Projects ({projects.length})
          </button>

          <button
            onClick={() => setFilter('ai-pm')}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
              filter === 'ai-pm'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Product Management
          </button>

          <button
            onClick={() => setFilter('data-analytics')}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
              filter === 'data-analytics'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            Data Analytics
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="glass-card p-6 flex flex-col justify-between cursor-pointer group hover:border-blue-500/50 transition-all duration-200 text-left"
          >
            <div>
              {/* Category & Badge Header */}
              <div className="flex items-center justify-between mb-4">
                <span className={`badge-pill ${project.categoryId === 'ai-pm' ? 'badge-blue' : 'badge-emerald'}`}>
                  {project.category}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {project.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-blue-400 flex-shrink-0" />
              </h3>

              {/* Short Description */}
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Impact Metric Highlight */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 mb-6">
                <div className="text-[11px] font-semibold text-blue-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  {project.impactMetric}
                </div>
              </div>
            </div>

            {/* Tags Footer */}
            <div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-[10px] font-semibold text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
