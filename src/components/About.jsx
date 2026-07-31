import React from 'react';
import { Target, Users, ShieldAlert, Cpu, Sparkles, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function About() {
  const { profile } = PORTFOLIO_DATA;

  const drivers = [
    {
      icon: Target,
      title: "Problem Discovery",
      desc: "Uncovering operational friction and unaddressed user needs through personal observation and research."
    },
    {
      icon: Users,
      title: "Human-Centered Design",
      desc: "Creating intuitive user flows, clear navigation, and user-trusted interaction models."
    },
    {
      icon: ShieldAlert,
      title: "AI Safety & Ethics",
      desc: "Designing AI products for sensitive domains with explicit emergency guardrails and high user trust."
    },
    {
      icon: Cpu,
      title: "Data-Driven Strategy",
      desc: "Leveraging SQL, Excel, and Python to back product decisions with validated quantitative insights."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="badge-pill badge-blue">About Me</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Student-Athlete & Tech Innovator
        </h2>
        <p className="text-base text-gray-400">
          Combining academic rigor, athletic discipline, and tutoring leadership to craft meaningful software solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Narrative Story */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="glass-panel p-8 space-y-4 relative overflow-hidden border-white/10">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              My Journey
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              I am a Computer Information Systems student at Livingstone College maintaining a <strong className="text-white">4.0 GPA</strong>. I also compete as an <strong className="text-white">NCAA Division II tennis student-athlete</strong> and serve as an academic tutor.
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              Balancing academics, athletics, work, and personal projects has strengthened my discipline, leadership, communication, and time-management skills. I bring that same focus and resilience into every software product and analytical study I undertake.
            </p>

            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>4.0 GPA Honors</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>NCAA D-II Athlete</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Math & CIS Tutor</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Mastercard Challenge Finalist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Driver Grid */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {drivers.map((driver, index) => {
              const IconComp = driver.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 text-left hover:border-blue-500/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{driver.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {driver.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
