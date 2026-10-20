import React from 'react';
import { experienceList } from '../data/portfolio';
import { BriefcaseIcon, CheckIcon } from './Icons';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-8 sm:py-10 lg:py-12 relative bg-[#050914] border-t border-[#00A8E1]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-5 sm:mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="h-[2px] w-6 bg-[#00A8E1]"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#48C7FF] uppercase">
              PROFESSIONAL TRAJECTORY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight">
            Work Experience & Internships
          </h2>
          <p className="text-xs sm:text-sm text-[#A8B5C8] mt-1 max-w-xl">
            Verified internship contributions and technical training engagements across software organizations.
          </p>
        </div>

        {/* Experience Cards Grid / Timeline */}
        <div className="space-y-4 sm:space-y-5">
          {experienceList.map((exp, idx) => (
            <div
              key={idx}
              className="relative bg-[#081426] border border-[#00A8E1]/20 rounded-2xl p-4 sm:p-6 hover:border-[#00A8E1]/50 transition-all shadow-xl group text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#101C30] border border-[#00A8E1]/30 text-[#48C7FF]">
                    <BriefcaseIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[#00A8E1] font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#A8B5C8] bg-[#101C30] px-3 py-1 rounded-full border border-white/5">
                    {exp.dates}
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      exp.status === 'Ongoing'
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : 'bg-[#00A8E1]/15 text-[#48C7FF] border border-[#00A8E1]/30'
                    }`}
                  >
                    {exp.status === 'Ongoing' ? '● CURRENT' : 'COMPLETED'}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="pt-4 space-y-3">
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-sm text-[#A8B5C8]">
                      <CheckIcon className="w-4 h-4 text-[#00A8E1] mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack & Verified Note */}
                <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/5">
                  {exp.techStack && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-[#101C30] text-[#A8B5C8] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {exp.verifiedNote && (
                    <span className="text-[11px] text-[#48C7FF]/90 font-mono italic">
                      ✓ {exp.verifiedNote}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
