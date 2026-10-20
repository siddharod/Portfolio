import React from 'react';
import { leadershipList } from '../data/portfolio';
import { GraduationCapIcon, CheckIcon } from './Icons';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-8 sm:py-10 lg:py-12 relative bg-[#050914] border-t border-[#00A8E1]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-5 sm:mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="h-[2px] w-6 bg-[#00A8E1]"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#48C7FF] uppercase">
              STUDENT COMMUNITY IMPACT
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight">
            Campus Leadership & Technical Involvement
          </h2>
          <p className="text-xs sm:text-sm text-[#A8B5C8] mt-1 max-w-xl">
            Active roles leading technical chapters, coding initiatives, and digital infrastructure at SAKEC.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left">
          {leadershipList.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#081426] border border-[#00A8E1]/20 rounded-2xl p-4 sm:p-6 hover:border-[#00A8E1]/50 transition-all shadow-xl group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#48C7FF] block mb-1">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading">
                      {item.organization}
                    </h3>
                    <p className="text-sm font-semibold text-[#00A8E1] mt-0.5">
                      {item.role}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#101C30] border border-[#00A8E1]/25 text-[#48C7FF]">
                    <GraduationCapIcon className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-sm text-[#F5F8FC]/90 leading-relaxed">
                  {item.summary}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A8B5C8] block">
                    Core Involvements:
                  </span>
                  <ul className="space-y-2">
                    {item.contributions.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-[#A8B5C8]">
                        <CheckIcon className="w-3.5 h-3.5 text-[#00A8E1] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#A8B5C8] font-mono">
                <span>Shah & Anchor Kutchhi Engineering College</span>
                <span className="text-[#00A8E1]">Active Post</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
