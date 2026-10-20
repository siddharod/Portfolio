import React from 'react';
import { achievementsList } from '../data/portfolio';
import { TrophyIcon, AwardIcon } from './Icons';

export const Achievements: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 relative bg-[#050914] border-t border-[#00A8E1]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-5 sm:mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="h-[2px] w-6 bg-[#00A8E1]"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#48C7FF] uppercase">
              HONORS & RECOGNITION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight">
            Competitive Hackathon Honors
          </h2>
        </div>

        {/* Featured Award Spotlight Banner */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00A8E1]/35 bg-gradient-to-r from-[#081426] via-[#0D1C34] to-[#081426] p-5 sm:p-7 shadow-2xl prime-glow text-left mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Trophy Icon Visual (3 cols) */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#00A8E1]/20 to-[#050B18] border border-[#00A8E1]/40 flex items-center justify-center prime-glow">
                <TrophyIcon className="w-14 h-14 sm:w-16 sm:h-16 text-[#48C7FF]" />
                <div className="absolute -bottom-2 px-3 py-0.5 rounded-full bg-[#00A8E1] text-[#050B18] font-bold text-[10px] font-mono uppercase tracking-wider">
                  NATIONAL
                </div>
              </div>
            </div>

            {/* Award Content (9 cols) */}
            <div className="lg:col-span-9 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-[#00A8E1]/15 text-[#48C7FF] border border-[#00A8E1]/30">
                  NATIONAL-LEVEL HACKATHON WINNER
                </span>
                <span className="text-xs text-[#A8B5C8] font-mono">
                  HackNova 2025 • 12-Hour Sprint
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Recognized for SwasthyaSetu (ArogyaMitra)
              </h3>

              <p className="text-sm sm:text-base text-[#F5F8FC]/90 leading-relaxed max-w-3xl">
                {achievementsList[0].description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#A8B5C8] font-mono border-t border-white/5">
                <div>
                  <span className="text-[#00A8E1] font-bold">Institution: </span>
                  Shivajirao S. Jondhale College of Engineering
                </div>
                <div>
                  <span className="text-[#00A8E1] font-bold">Domain: </span>
                  Healthcare AI & NLP Retrieval
                </div>
                <div>
                  <span className="text-[#00A8E1] font-bold">Year: </span>
                  2025
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Hackathon Milestone Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-[#0B1426] border border-[#00A8E1]/20 rounded-2xl p-6 hover:border-[#00A8E1]/40 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-[#00A8E1]/10 text-[#48C7FF]">
                <AwardIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading">
                  Internal College Hackathon Winner
                </h4>
                <p className="text-xs text-[#00A8E1] font-mono">
                  Shah & Anchor Kutchhi Engineering College (SAKEC)
                </p>
              </div>
            </div>
            <p className="text-xs text-[#A8B5C8] leading-relaxed">
              Awarded for developing Campus Connect, an integrated campus wayfinding and departmental circulars prototype designed to assist students and staff.
            </p>
          </div>

          <div className="bg-[#0B1426] border border-[#00A8E1]/20 rounded-2xl p-6 hover:border-[#00A8E1]/40 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-[#00A8E1]/10 text-[#48C7FF]">
                <AwardIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading">
                  SAKEC Codethon 2025
                </h4>
                <p className="text-xs text-[#00A8E1] font-mono">
                  Competitive Programming • March 15, 2025
                </p>
              </div>
            </div>
            <p className="text-xs text-[#A8B5C8] leading-relaxed">
              Competed in rigorous algorithmic problem solving and high-speed data structures challenges organized by the Computer Engineering department.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
