import React from 'react';
import { PersonaType } from './OpeningProfileSelector';
import { getAssetUrl } from '../data/portfolio';

interface HeroProps {
  onNavigateResume: () => void;
  onSelectPersona: (persona: PersonaType) => void;
  currentPersona: PersonaType;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateResume,
  onSelectPersona,
  currentPersona,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-20 sm:pt-24 pb-0 overflow-hidden bg-[#050914]">
      {/* Prime Video Cinematic Ambient Background Lights */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft bokeh lights mimicking the reference screenshot */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00A8E1]/15 blur-[140px]"></div>
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-[#48C7FF]/10 blur-[130px]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-[#00A8E1]/12 blur-[120px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent opacity-90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          {/* Left Column: Headlines & Call to Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-left pb-6 sm:pb-10 lg:pb-12">
            {/* Spark Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#00A8E1]/15 text-[#48C7FF] border border-[#00A8E1]/30">
              <svg className="w-3.5 h-3.5 fill-[#00A8E1]" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2L12 17l-6.3 4.2 2.3-7.2-6-4.6h7.6z" />
              </svg>
              <span>WELCOME TO MY PORTFOLIO</span>
            </div>

            {/* Headline matching reference screenshot */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] font-heading">
                Choose Your Journey
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] font-heading bg-gradient-to-r from-[#00A8E1] via-[#48C7FF] to-white bg-clip-text text-transparent">
                Explore. Connect. Build.
              </h2>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#A8B5C8] leading-relaxed max-w-lg">
              Hey! I&apos;m <strong className="text-white font-semibold">Siddh Dharod</strong>, a third-year Computer Engineering student, passionate about building digital experiences, exploring AI/ML, Cloud Computing and System Design.
            </p>

            {/* CTA Buttons matching reference screenshot */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#00A8E1] text-[#050914] font-extrabold text-xs sm:text-sm hover:bg-[#48C7FF] transition-all shadow-lg shadow-[#00A8E1]/30 hover:scale-[1.02]"
              >
                <span>About Me</span>
                <span className="text-base font-bold leading-none">›</span>
              </button>

              <button
                onClick={onNavigateResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#081426] text-white font-semibold text-xs sm:text-sm border border-[#00A8E1]/30 hover:bg-[#101D32] hover:border-[#48C7FF] transition-all hover:scale-[1.02]"
              >
                <span>View Resume</span>
              </button>
            </div>

            {/* Scroll Indicator positioned cleanly beneath actions */}
            <div
              className="pt-3 hidden sm:inline-flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer group"
              onClick={() => scrollTo('projects')}
            >
              <div className="w-4 h-7 rounded-full border-2 border-[#A8B5C8]/50 flex items-start justify-center p-1 group-hover:border-[#00A8E1] transition-colors">
                <span className="w-1 h-1.5 rounded-full bg-[#00A8E1] animate-bounce"></span>
              </div>
              <span className="text-[10px] text-[#A8B5C8] font-mono tracking-wider uppercase group-hover:text-white transition-colors">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* Center Column: Siddh Realistic Grounded Hero Portrait (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-end relative self-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] flex justify-center items-end">
              {/* Soft atmospheric studio backlight halo behind head & shoulders */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full bg-gradient-to-t from-[#00A8E1]/25 via-[#48C7FF]/18 to-transparent blur-[70px] pointer-events-none -z-10"></div>

              {/* Realistic Grounded Portrait without artificial sticker drop-shadow */}
              <div
                className="relative w-full flex justify-center items-end"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                }}
              >
                <img
                  src={getAssetUrl('assets/siddh-hero.png')}
                  alt="Siddh Dharod - Computer Engineering & Full-Stack Developer"
                  className="w-full max-h-[380px] sm:max-h-[420px] lg:max-h-[460px] object-contain object-bottom filter contrast-[1.03] brightness-[1.0]"
                  loading="eager"
                />

                {/* Subtle base floor vignette so bottom suit dissolves completely into dark floor */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#050914] to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Persona Chooser Card (3 cols) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end pb-6 sm:pb-10 lg:pb-12">
            <div className="w-full max-w-xs bg-[#081426]/90 border border-[#00A8E1]/30 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md space-y-3.5">
              <div className="text-left space-y-0.5">
                <span className="text-xs font-bold text-white block leading-tight font-heading">
                  Not sure where to start?
                </span>
                <span className="text-[11px] text-[#A8B5C8] block leading-tight">
                  Choose what fits you best.
                </span>
              </div>

              {/* 4 Interactive Persona Tiles matching reference screenshot */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  {
                    id: 'about' as PersonaType,
                    label: 'About Me',
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7 7z" />
                      </svg>
                    ),
                  },
                  {
                    id: 'recruiter' as PersonaType,
                    label: 'Recruiter',
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    id: 'developer' as PersonaType,
                    label: 'Student',
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    ),
                  },
                  {
                    id: 'explorer' as PersonaType,
                    label: 'Just Browsing',
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ),
                  },
                ].map((item) => {
                  const isActive = currentPersona === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSelectPersona(item.id)}
                      className={`p-2 rounded-xl flex flex-col items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#00A8E1] text-[#050914] font-bold shadow-md shadow-[#00A8E1]/30'
                          : 'bg-[#101D32] text-[#A8B5C8] hover:text-white hover:bg-[#152542] border border-white/5'
                      }`}
                    >
                      <div className="mb-1">{item.icon}</div>
                      <span className="text-[9px] font-medium tracking-tight text-center leading-tight">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
