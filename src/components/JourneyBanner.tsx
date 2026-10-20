import React from 'react';

export const JourneyBanner: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const cards = [
    {
      id: 'achievements',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/20">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
      ),
      title: 'National-Level Hackathon Winner',
      subtitle: 'Shivajirao Jondhale College of Engineering',
      target: 'achievements',
      glow: 'hover:border-amber-500/50',
    },
    {
      id: 'certifications',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-[#00A8E1]/15 border border-[#00A8E1]/30 flex items-center justify-center text-[#48C7FF] shadow-lg shadow-[#00A8E1]/20">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
      ),
      title: 'Featured Certifications',
      subtitle: '6+ Verified Credentials',
      target: 'certifications',
      glow: 'hover:border-[#00A8E1]/50',
    },
    {
      id: 'experience',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-[#48C7FF]/15 border border-[#48C7FF]/30 flex items-center justify-center text-[#48C7FF] shadow-lg shadow-[#48C7FF]/20">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      ),
      title: 'Internships',
      subtitle: '3 Months Experience',
      target: 'experience',
      glow: 'hover:border-[#48C7FF]/50',
    },
    {
      id: 'leadership',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/20">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      ),
      title: 'Campus Leadership',
      subtitle: 'SAKEC Alumni Cell | CSI Cell',
      target: 'leadership',
      glow: 'hover:border-blue-400/50',
    },
  ];

  return (
    <section className="py-5 sm:py-6 lg:py-7 bg-[#050914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <svg className="w-4 h-4 text-[#00A8E1]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2L12 17l-6.3 4.2 2.3-7.2-6-4.6h7.6z" />
            </svg>
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                Latest from My Journey
              </h3>
              <p className="text-[11px] text-[#A8B5C8]">
                Achievements, certifications and more.
              </p>
            </div>
          </div>

          <button
            onClick={() => scrollTo('achievements')}
            className="text-xs text-[#00A8E1] hover:text-[#48C7FF] font-medium flex items-center gap-1 group transition-colors"
          >
            <span>View All</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c) => (
            <button
              key={c.id}
              onClick={() => scrollTo(c.target)}
              className={`p-4 rounded-2xl bg-[#081426] border border-[#00A8E1]/20 hover:bg-[#0E1F38] transition-all text-left group flex items-center gap-3.5 shadow-lg ${c.glow}`}
            >
              {c.icon}
              <div className="overflow-hidden">
                <span className="text-xs font-bold text-white block group-hover:text-[#48C7FF] transition-colors truncate">
                  {c.title}
                </span>
                <span className="text-[11px] text-[#A8B5C8] font-mono block truncate mt-0.5">
                  {c.subtitle}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
