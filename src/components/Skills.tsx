import React from 'react';
import { skillGroups } from '../data/portfolio';
import { CodeIcon, CpuIcon } from './Icons';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-8 sm:py-10 lg:py-12 relative bg-[#050914] border-t border-[#00A8E1]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-5 sm:mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="h-[2px] w-6 bg-[#00A8E1]"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#48C7FF] uppercase">
              TECHNICAL COMPETENCIES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight">
            Languages, Frameworks & Systems
          </h2>
          <p className="text-xs sm:text-sm text-[#A8B5C8] mt-1 max-w-xl">
            Verified technologies applied in academic builds, hackathon solutions, internships, and certifications.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left">
          {skillGroups.map((group, gIdx) => (
            <div
              key={gIdx}
              className="bg-[#081426] border border-[#00A8E1]/20 rounded-2xl p-4 sm:p-6 hover:border-[#00A8E1]/45 transition-all shadow-xl group space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#101C30] text-[#00A8E1]">
                    {gIdx % 2 === 0 ? <CodeIcon className="w-4 h-4" /> : <CpuIcon className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                      {group.category}
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#48C7FF] bg-[#00A8E1]/10 px-2.5 py-0.5 rounded border border-[#00A8E1]/20">
                  {group.skills.length} VERIFIED
                </span>
              </div>

              <p className="text-xs text-[#A8B5C8]">
                {group.description}
              </p>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="relative group/chip px-3 py-1.5 rounded-xl bg-[#101C30] border border-[#00A8E1]/20 hover:border-[#48C7FF] hover:bg-[#152542] transition-all cursor-default"
                  >
                    <span className="text-xs font-mono font-medium text-white block">
                      {skill.name}
                    </span>
                    {/* Tooltip on Hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/chip:block z-30 w-48 p-2 rounded-lg bg-[#050B18] border border-[#00A8E1]/40 text-[10px] text-[#A8B5C8] shadow-xl pointer-events-none">
                      <span className="text-[#48C7FF] font-bold block mb-0.5">Evidence:</span>
                      {skill.verifiedContext}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
