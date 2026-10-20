import React from 'react';
import { educationList } from '../data/portfolio';
import { GraduationCapIcon } from './Icons';

export const Education: React.FC = () => {
  const currentDegree = educationList[0];

  return (
    <section id="education" className="py-8 sm:py-10 lg:py-12 relative bg-[#050914] border-t border-[#00A8E1]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-5 sm:mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="h-[2px] w-6 bg-[#00A8E1]"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#48C7FF] uppercase">
              ACADEMIC FOUNDATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight">
            Education & Performance
          </h2>
        </div>

        {/* Primary Academic Card with Semester-wise Visualization */}
        <div className="bg-[#081426] border border-[#00A8E1]/25 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl prime-glow text-left space-y-5 sm:space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#101C30] border border-[#00A8E1]/30 text-[#48C7FF]">
                <GraduationCapIcon className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#48C7FF] uppercase tracking-wider block">
                  BACHELOR OF TECHNOLOGY (B.TECH)
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading mt-0.5">
                  {currentDegree.institution}
                </h3>
                <p className="text-sm text-[#A8B5C8] mt-1">
                  {currentDegree.degree} • {currentDegree.location}
                </p>
              </div>
            </div>

            <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-2xl px-5 py-3 text-right self-start md:self-auto">
              <span className="text-[10px] font-mono text-[#A8B5C8] uppercase block">Cumulative CGPA</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-heading block">
                9.20<span className="text-xs text-[#00A8E1] font-mono"> / 10.0</span>
              </span>
              <span className="text-[11px] text-[#48C7FF] font-mono">Third Year Status</span>
            </div>
          </div>

          {/* Semester-wise CGPA Breakdown Grid */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-wider text-[#A8B5C8] uppercase mb-4">
              Semester-Wise Academic Performance Record
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {currentDegree.breakdown?.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#101C30]/80 border border-[#00A8E1]/20 rounded-2xl p-4 hover:border-[#48C7FF] transition-all"
                >
                  <span className="text-[11px] font-mono text-[#A8B5C8] block mb-1">
                    {item.sem}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-white font-heading">
                      {item.cgpa}
                    </span>
                    <span className="text-[11px] font-mono text-[#48C7FF]">CGPA</span>
                  </div>
                  {/* Visual Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-[#050B18] mt-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00A8E1] to-[#48C7FF] rounded-full"
                      style={{ width: `${(parseFloat(item.cgpa) / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Schooling Timeline */}
          <div className="pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {educationList.slice(1).map((edu, idx) => (
              <div key={idx} className="bg-[#101C30]/40 border border-white/5 rounded-xl p-4">
                <span className="text-[10px] font-mono text-[#00A8E1] block uppercase">{edu.period}</span>
                <h5 className="text-sm font-bold text-white mt-0.5">{edu.institution}</h5>
                <p className="text-xs text-[#A8B5C8] mt-0.5">{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
