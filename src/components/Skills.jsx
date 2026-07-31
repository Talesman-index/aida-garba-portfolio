import React, { useState } from 'react';
import { Sparkles, BarChart3, Wrench, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('pm');
  const { skillsCategorized } = PORTFOLIO_DATA;

  const tabs = [
    { id: 'pm', label: 'Product Management', icon: Sparkles, color: 'blue' },
    { id: 'analytics', label: 'Data Analytics', icon: BarChart3, color: 'emerald' },
    { id: 'tools', label: 'Tools & Stack', icon: Wrench, color: 'amber' }
  ];

  const getSkillsForTab = () => {
    switch (activeTab) {
      case 'pm':
        return skillsCategorized.productManagement;
      case 'analytics':
        return skillsCategorized.dataAnalytics;
      case 'tools':
        return skillsCategorized.tools;
      default:
        return [];
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span className="badge-pill badge-emerald">Technical Capabilities</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Skills & Toolkit
        </h2>
        <p className="text-base text-gray-400">
          A blend of product management methodologies, analytical frameworks, and development software.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 glass-panel">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <IconComp className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid Display */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {getSkillsForTab().map((skill, index) => (
            <div
              key={index}
              className="glass-card p-4 flex items-center gap-3 border-white/10 hover:border-blue-500/40 text-left transition-all duration-150 group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
