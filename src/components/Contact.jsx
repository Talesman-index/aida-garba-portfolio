import React, { useState } from 'react';
import { Mail, MapPin, Send, Download, CheckCircle2, Copy, Check, ExternalLink, Sparkles, Clock } from 'lucide-react';
import { LinkedinIcon as Linkedin } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Contact() {
  const { profile } = PORTFOLIO_DATA;
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="badge-pill badge-blue">Let's Connect</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Get In Touch
        </h2>
        <p className="text-base text-gray-400">
          I am actively seeking opportunities in AI Product Management, Product Management, Data Analytics, and Business Analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Contact Cards */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="glass-panel p-8 space-y-6 border-white/10 relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute -top-16 -left-16 w-36 h-36 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-xl font-extrabold text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
                Direct Contact
              </h3>
              <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Available for roles
              </span>
            </div>

            {/* Email item */}
            <div className="relative group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08] transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 text-decoration-none flex-grow min-w-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 group-hover:border-blue-400/60 transition-all duration-300">
                    <Mail className="w-6 h-6 text-blue-400 group-hover:rotate-6 transition-transform" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">Email</div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                      {profile.email}
                    </div>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard(profile.email)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/40 text-gray-400 hover:text-blue-300 transition-all flex items-center gap-1.5 text-xs font-semibold flex-shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn item */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/50 hover:bg-white/[0.08] transition-all duration-300 shadow-lg text-decoration-none group"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/20 border border-sky-500/30 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 group-hover:border-sky-400/60 transition-all duration-300">
                  <Linkedin className="w-6 h-6 text-sky-400 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">LinkedIn</div>
                  <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors truncate">
                    linkedin.com/in/aidagarba
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-sky-500/20 border border-white/10 group-hover:border-sky-500/40 text-gray-400 group-hover:text-sky-300 transition-all flex-shrink-0">
                <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
            </a>

            {/* Location item */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 text-emerald-400 group-hover:animate-bounce transition-transform" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">Location</div>
                <div className="text-sm font-bold text-white">
                  {profile.location}
                </div>
              </div>
            </div>

            {/* Response Time Indicator */}
            <div className="flex items-center justify-between pt-1 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                Typically responds within 24 hours
              </span>
            </div>

            {/* Resume Request CTA */}
            <div className="pt-2 border-t border-white/10">
              <a
                href={`mailto:${profile.email}?subject=Resume%20Request%20-%20Aida%20Garba`}
                className="btn-secondary w-full justify-center text-xs py-3.5 rounded-xl shadow-md hover:border-blue-500/40 transition-all flex items-center gap-2 group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Request Official Resume PDF
              </a>
            </div>

          </div>
        </div>

        {/* Right Contact Form Mockup */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 text-left border-white/10 relative">
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-gray-400 mb-6">
              Have a product inquiry or data project opportunity? Drop a message below.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-modal">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Message Sent!</h4>
                <p className="text-xs text-emerald-200">
                  Thank you for reaching out, Aïda will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="s.jenkins@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Message</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product team or project..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-xs py-3">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
