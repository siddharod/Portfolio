import React from 'react';

export type PersonaType = 'about' | 'recruiter' | 'developer' | 'explorer';

interface OpeningProfileSelectorProps {
  onSelectPersona: (persona: PersonaType) => void;
  currentPersona?: PersonaType;
}

export const OpeningProfileSelector: React.FC<OpeningProfileSelectorProps> = ({
  onSelectPersona,
  currentPersona = 'explorer',
}) => {
  const profiles: {
    id: PersonaType;
    title: string;
    subtitle: string;
    badge: string;
    bgGradient: string;
    avatarSvg: React.ReactNode;
  }[] = [
    {
      id: 'about',
      title: 'About Me',
      subtitle: 'Get to know the person behind the code.',
      badge: 'PERSONAL STORY',
      bgGradient: 'from-cyan-600 to-blue-800',
      avatarSvg: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7 7z" />
        </svg>
      ),
    },
    {
      id: 'recruiter',
      title: 'Recruiter',
      subtitle: 'Explore experience, skills, achievements, and resume.',
      badge: 'CAREER & CV',
      bgGradient: 'from-[#00A8E1] to-blue-900',
      avatarSvg: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'developer',
      title: 'Developer',
      subtitle: 'Explore projects, architecture, and technical decisions.',
      badge: 'CODE & SYSTEMS',
      bgGradient: 'from-blue-600 to-indigo-950',
      avatarSvg: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'explorer',
      title: 'Explorer',
      subtitle: 'Browse everything at your own pace.',
      badge: 'ALL CHANNELS',
      bgGradient: 'from-sky-500 to-teal-800',
      avatarSvg: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#050914] flex flex-col justify-between items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      {/* Prime Video Cinematic Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00A8E1]/10 blur-[180px]"></div>
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#48C7FF]/5 blur-[160px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050914_75%)]"></div>
      </div>

      {/* Top Header Monogram */}
      <div className="relative z-10 w-full max-w-6xl flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00A8E1] to-[#081426] p-[1.5px] shadow-lg shadow-[#00A8E1]/20">
            <div className="w-full h-full bg-[#050914] rounded-[9px] flex items-center justify-center">
              <span className="font-heading font-black text-sm tracking-wider text-white">
                SD
              </span>
            </div>
          </div>
          <div>
            <span className="font-heading font-bold text-sm tracking-tight text-white block leading-none">
              SIDDH DHAROD
            </span>
            <span className="text-[10px] tracking-widest text-[#48C7FF] uppercase font-mono block mt-0.5">
              ORIGINAL PORTFOLIO
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A8E1]/15 text-[#48C7FF] border border-[#00A8E1]/30 text-xs font-mono font-bold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A8E1] animate-ping"></span>
          PRIME EXPERIENCE
        </div>
      </div>

      {/* Centered Profile Selection Hero */}
      <div className="relative z-10 w-full max-w-5xl my-auto text-center space-y-12">
        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight">
            Who&apos;s exploring Siddh?
          </h1>
          <p className="text-base sm:text-lg text-[#A8B5C8] font-medium">
            Choose your experience.
          </p>
        </div>

        {/* 4 Large Prime Profile Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 max-w-4xl mx-auto">
          {profiles.map((p) => {
            const isSelected = currentPersona === p.id;
            return (
              <button
                key={p.id}
                onClick={() => onSelectPersona(p.id)}
                className="group flex flex-col items-center focus:outline-none transition-transform duration-300 hover:scale-105"
              >
                {/* Large Square Profile Tile */}
                <div
                  className={`w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-1 relative transition-all duration-300 shadow-2xl ${
                    isSelected
                      ? 'ring-4 ring-[#00A8E1] shadow-[#00A8E1]/30'
                      : 'hover:ring-4 hover:ring-[#48C7FF] hover:shadow-[#00A8E1]/40'
                  }`}
                >
                  <div
                    className={`w-full h-full rounded-[22px] bg-gradient-to-br ${p.bgGradient} flex flex-col items-center justify-center relative overflow-hidden group-hover:brightness-110 transition-all`}
                  >
                    {/* Inner Lighting Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10 pointer-events-none"></div>

                    {/* Icon Artwork */}
                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {p.avatarSvg}
                    </div>

                    {/* Badge */}
                    <div className="absolute bottom-2.5 px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold tracking-wider uppercase bg-black/50 text-[#48C7FF] backdrop-blur-sm border border-white/10">
                      {p.badge}
                    </div>
                  </div>
                </div>

                {/* Profile Title & Subtitle */}
                <div className="mt-4 text-center space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#48C7FF] transition-colors font-heading">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#A8B5C8] max-w-[170px] mx-auto leading-relaxed line-clamp-2">
                    {p.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Streaming Controls Button */}
        <div className="pt-4 flex items-center justify-center gap-4">
          <button
            onClick={() => onSelectPersona('explorer')}
            className="px-6 py-2.5 rounded-full border border-white/20 text-[#A8B5C8] hover:text-white hover:border-[#00A8E1] hover:bg-[#00A8E1]/10 text-xs sm:text-sm font-mono tracking-wide transition-all"
          >
            ENTER AS EXPLORER
          </button>
        </div>
      </div>

      {/* Footer Notes */}
      <div className="relative z-10 text-center text-xs text-[#A8B5C8]/70 font-mono">
        Amazon Prime Video-Inspired Developer Experience • Siddh Dharod
      </div>
    </div>
  );
};
