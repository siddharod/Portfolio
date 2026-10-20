import React, { useState } from 'react';
import { profile } from '../data/portfolio';
import { MailIcon, PhoneIcon, LinkedInIcon, GitHubIcon, DownloadIcon, CheckIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    // Direct mailto client launch
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formName}`);
    const body = encodeURIComponent(`Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="py-8 sm:py-10 lg:py-12 relative bg-[#050914] border-t border-[#00A8E1]/15">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00A8E1]/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start text-left">
          {/* Left Column: Direct Outreach & Verified Channels (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#00A8E1]"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-[#48C7FF] uppercase">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight leading-tight">
              Have an Idea Worth Building?
            </h2>

            <p className="text-base text-[#A8B5C8] leading-relaxed max-w-xl">
              I&apos;m always interested in connecting with people who enjoy building useful technology, exploring new ideas, and solving real-world problems.
            </p>

            {/* Quick Contact Links Grid */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0B1426] border border-[#00A8E1]/20 hover:border-[#48C7FF] hover:bg-[#101C30] transition-all group"
              >
                <div className="p-3 rounded-xl bg-[#101C30] text-[#00A8E1] group-hover:text-white group-hover:bg-[#00A8E1] transition-colors">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#A8B5C8] block">EMAIL ME</span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#48C7FF] transition-colors">
                    {profile.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0B1426] border border-[#00A8E1]/20 hover:border-[#48C7FF] hover:bg-[#101C30] transition-all group"
              >
                <div className="p-3 rounded-xl bg-[#101C30] text-[#00A8E1] group-hover:text-white group-hover:bg-[#00A8E1] transition-colors">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#A8B5C8] block">PHONE</span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#48C7FF] transition-colors">
                    {profile.phone}
                  </span>
                </div>
              </a>
            </div>

            {/* Social & Resume Actions */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#101C30] border border-[#00A8E1]/25 text-white hover:border-[#48C7FF] text-xs font-bold transition-all"
              >
                <LinkedInIcon className="w-4 h-4 text-[#00A8E1]" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#101C30] border border-[#00A8E1]/25 text-white hover:border-[#48C7FF] text-xs font-bold transition-all"
              >
                <GitHubIcon className="w-4 h-4 text-[#00A8E1]" />
                <span>GitHub Repositories</span>
              </a>

              <a
                href={profile.resumePdf}
                download="Siddh_Dharod_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00A8E1] text-[#050B18] font-bold text-xs hover:bg-[#48C7FF] transition-all shadow-md shadow-[#00A8E1]/20"
              >
                <DownloadIcon className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Direct Message Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-[#081426] border border-[#00A8E1]/25 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 sm:space-y-5">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#A8B5C8] mt-0.5">
                  Triggers your email client directly with pre-composed inquiry details.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A8B5C8] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#101C30] border border-[#00A8E1]/20 text-white placeholder-[#A8B5C8]/40 text-sm focus:outline-none focus:border-[#48C7FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A8B5C8] mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#101C30] border border-[#00A8E1]/20 text-white placeholder-[#A8B5C8]/40 text-sm focus:outline-none focus:border-[#48C7FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A8B5C8] mb-1">
                    Message / Opportunity
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Hi Siddh, we would like to discuss a software engineering opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#101C30] border border-[#00A8E1]/20 text-white placeholder-[#A8B5C8]/40 text-sm focus:outline-none focus:border-[#48C7FF] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00A8E1] to-[#0089b8] hover:from-[#48C7FF] hover:to-[#00A8E1] text-[#050B18] font-extrabold text-sm transition-all shadow-lg shadow-[#00A8E1]/25 flex items-center justify-center gap-2"
                >
                  <MailIcon className="w-4 h-4" />
                  <span>Send Message to Siddh</span>
                </button>

                {sentNotice && (
                  <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                    <CheckIcon className="w-4 h-4" />
                    <span>Inquiry email triggered in your default mail application!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="mt-8 sm:mt-10 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A8B5C8] font-mono">
          <div>
            © {new Date().getFullYear()} Siddh Dharod. Built with Prime Video-inspired UI/UX.
          </div>
          <div className="flex items-center gap-4">
            <span>Shah & Anchor Kutchhi Engineering College</span>
            <span className="text-[#00A8E1]">Thane, MH</span>
          </div>
        </div>
      </div>
    </section>
  );
};
