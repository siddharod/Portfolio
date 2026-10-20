import React from 'react';
import { profile, highlights } from '../data/portfolio';
import { GraduationCapIcon, AwardIcon, BriefcaseIcon } from './Icons';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-8 sm:py-10 lg:py-12 relative bg-[#050914] border-t border-[#00A8E1]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="h-[2px] w-6 bg-[#00A8E1]"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#48C7FF] uppercase">
              ABOUT THE BUILDER
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
            Engineering Systems, Solving Real-World Needs.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Human Story & Overview (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            <div className="bg-[#081426] border border-[#00A8E1]/20 rounded-2xl p-5 sm:p-6 space-y-3.5 shadow-xl">
              <p className="text-base sm:text-lg text-[#F5F8FC]/90 leading-relaxed font-normal">
                {profile.aboutText}
              </p>

              <div className="pt-4 border-t border-white/5 space-y-3">
                <h4 className="text-xs font-mono font-semibold tracking-wider uppercase text-[#48C7FF]">
                  Current Academic & Technical Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#A8B5C8]">
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00A8E1] mt-1.5 shrink-0"></span>
                    <span><strong className="text-white">Degree:</strong> B.Tech in Computer Engineering (Third Year)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00A8E1] mt-1.5 shrink-0"></span>
                    <span><strong className="text-white">College:</strong> SAKEC, Mumbai University</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00A8E1] mt-1.5 shrink-0"></span>
                    <span><strong className="text-white">Leadership:</strong> Technical Head, CSI Cell</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00A8E1] mt-1.5 shrink-0"></span>
                    <span><strong className="text-white">Specialization:</strong> Full-Stack, AI / ML & System Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Factual Highlights Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#101C30]/80 border border-[#00A8E1]/15 rounded-xl p-3.5 hover:border-[#00A8E1]/40 transition-colors"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#48C7FF] block mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-white block font-heading">
                    {item.value}
                  </span>
                  <span className="text-[11px] text-[#A8B5C8] block mt-1 leading-snug">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Developer Profile Card (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00A8E1]/30 bg-[#081426] shadow-2xl group transition-all duration-300 hover:border-[#00A8E1]/60">
              {/* Subtle ambient rim glow behind card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00A8E1]/20 via-[#48C7FF]/15 to-transparent blur-2xl opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none"></div>

              {/* Portrait Image with Prime Video Cinematic Overlay */}
              <div className="relative aspect-[4/4] overflow-hidden bg-[#050914]">
                <img
                  src={profile.campusPhoto}
                  alt="Siddh Dharod - Computer Engineering & Full-Stack Developer"
                  className="w-full h-full object-cover object-[center_18%] filter contrast-[1.03] brightness-[0.98] group-hover:scale-[1.03] transition-transform duration-700"
                  loading="eager"
                />

                {/* Top Floating Status Badges */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-[#050914]/85 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[11px] font-mono shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold">Open to SDE Roles</span>
                </div>

                <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-[#00A8E1]/20 backdrop-blur-md border border-[#00A8E1]/40 text-[#48C7FF] text-[10px] font-mono font-bold tracking-wider uppercase">
                  BUILDER
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081426] via-[#081426]/40 to-transparent"></div>

                {/* Bottom Identity Overlay */}
                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <h3 className="text-xl font-black text-white font-heading tracking-tight drop-shadow-md">
                    Siddh Dharod
                  </h3>
                  <p className="text-xs text-[#48C7FF] font-medium font-mono drop-shadow mt-0.5">
                    Computer Engineering • SAKEC Mumbai
                  </p>
                </div>
              </div>

              {/* Card Meta Body */}
              <div className="p-4 sm:p-5 bg-[#081426] space-y-3 relative z-10">
                <p className="text-xs text-[#A8B5C8] leading-relaxed">
                  Third-year engineer architecting full-stack web applications, exploring machine learning pipelines, and directing technical initiatives at SAKEC CSI chapter.
                </p>

                {/* Tech Specialties Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/5">
                  {['React & Node.js', 'Python & ML', 'System Design', 'Cloud & DevOps'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#101F38] text-[10px] font-mono text-white border border-[#00A8E1]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Factual Credential Badges (3-column compact grid) */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-[#081426] border border-[#00A8E1]/20 rounded-xl p-2.5 sm:p-3 flex flex-col justify-center text-left hover:border-[#00A8E1]/50 transition-colors">
                <div className="flex items-center gap-1.5 mb-1 text-[#48C7FF]">
                  <AwardIcon className="w-3.5 h-3.5 text-[#00A8E1]" />
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider truncate">HackNova</span>
                </div>
                <span className="text-xs font-bold text-white block truncate leading-tight">National Winner</span>
                <span className="text-[9px] text-[#A8B5C8] font-mono block truncate mt-0.5">12-Hour Sprint</span>
              </div>

              <div className="bg-[#081426] border border-[#00A8E1]/20 rounded-xl p-2.5 sm:p-3 flex flex-col justify-center text-left hover:border-[#00A8E1]/50 transition-colors">
                <div className="flex items-center gap-1.5 mb-1 text-[#48C7FF]">
                  <BriefcaseIcon className="w-3.5 h-3.5 text-[#00A8E1]" />
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider truncate">AUSPIFY</span>
                </div>
                <span className="text-xs font-bold text-white block truncate leading-tight">SDE Intern</span>
                <span className="text-[9px] text-emerald-400 font-mono block truncate mt-0.5">● Active Role</span>
              </div>

              <div className="bg-[#081426] border border-[#00A8E1]/20 rounded-xl p-2.5 sm:p-3 flex flex-col justify-center text-left hover:border-[#00A8E1]/50 transition-colors">
                <div className="flex items-center gap-1.5 mb-1 text-[#48C7FF]">
                  <GraduationCapIcon className="w-3.5 h-3.5 text-[#00A8E1]" />
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider truncate">CSI SAKEC</span>
                </div>
                <span className="text-xs font-bold text-white block truncate leading-tight">Technical Head</span>
                <span className="text-[9px] text-[#A8B5C8] font-mono block truncate mt-0.5">Chapter Lead</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



