import React, { useState } from 'react';
import { Mail, MapPin, Send, Download, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon as Linkedin } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Contact() {
  const { profile } = PORTFOLIO_DATA;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
          <div className="glass-panel p-8 space-y-6 border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>

            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/40 hover:bg-white/10 transition-all text-decoration-none group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Direct Email</div>
                <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  {profile.email}
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/40 hover:bg-white/10 transition-all text-decoration-none group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">LinkedIn Profile</div>
                <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  linkedin.com/in/aidagarba
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Location</div>
                <div className="text-sm font-bold text-white">
                  {profile.location}
                </div>
              </div>
            </div>

            {/* Resume Request CTA */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={`mailto:${profile.email}?subject=Resume%20Request%20-%20Aida%20Garba`}
                className="btn-secondary w-full justify-center text-xs py-3"
              >
                <Download className="w-4 h-4" />
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
