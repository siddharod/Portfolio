import React, { useState } from 'react';
import { ProjectItem, getAssetUrl } from '../data/portfolio';

interface DashboardMiddleProps {
  onSelectProject?: (project: ProjectItem) => void;
  onOpenTerminalModal?: () => void;
}

export const DashboardMiddle: React.FC<DashboardMiddleProps> = ({
  onSelectProject: _onSelectProject,
  onOpenTerminalModal,
}) => {
  // Embedded terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<
    { command: string; output: string | React.ReactNode }[]
  >([]);

  const handleCommand = (cmdToRun?: string) => {
    const rawCmd = (cmdToRun !== undefined ? cmdToRun : terminalInput).trim().toLowerCase();
    if (!rawCmd) return;

    let response: React.ReactNode = '';

    switch (rawCmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs">
            <p className="text-[#48C7FF]">Available commands:</p>
            <p><span className="text-[#00A8E1] font-bold">about</span> - Background, education &amp; career direction</p>
            <p><span className="text-[#00A8E1] font-bold">projects</span> - 5 verified engineering builds</p>
            <p><span className="text-[#00A8E1] font-bold">skills</span> - Core languages, frameworks &amp; stacks</p>
            <p><span className="text-[#00A8E1] font-bold">education</span> - SAKEC, B.Tech Computer Engineering (9.20 CGPA)</p>
            <p><span className="text-[#00A8E1] font-bold">contact</span> - Email, phone, LinkedIn &amp; GitHub links</p>
            <p><span className="text-[#00A8E1] font-bold">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;
      case 'about':
        response = (
          <p className="text-xs text-[#A8B5C8]">
            Siddh Dharod • Third-Year Computer Engineering at Shah &amp; Anchor Kutchhi Engineering College (SAKEC), Mumbai University. 9.20/10 CGPA. Passionate about Full-Stack, Machine Learning, and Cloud Systems.
          </p>
        );
        break;
      case 'projects':
        response = (
          <div className="space-y-1 text-xs text-[#A8B5C8]">
            <p className="text-[#48C7FF] font-semibold">Verified Systems:</p>
            <p>1. <strong className="text-white">AccessIQ</strong> — ML Geospatial Accessibility Assessment</p>
            <p>2. <strong className="text-white">MochiChat</strong> — Real-time WebSockets Communication</p>
            <p>3. <strong className="text-white">Campus Connect</strong> — Student Community &amp; Nav Platform</p>
            <p>4. <strong className="text-white">AUSPIFY</strong> — Apex Expense &amp; Budget Tracker</p>
            <p>5. <strong className="text-white">SwasthyaSetu</strong> — AI Healthcare NLP Assistant (Hackathon Winner)</p>
          </div>
        );
        break;
      case 'skills':
        response = (
          <p className="text-xs text-[#A8B5C8]">
            <strong className="text-white">Languages:</strong> C, Python, Java • <strong className="text-white">Web:</strong> React, Node.js, Express, Django, HTML, CSS, JavaScript • <strong className="text-white">Databases:</strong> MongoDB, MySQL • <strong className="text-white">AI/ML:</strong> Scikit-Learn, NLP, TF-IDF.
          </p>
        );
        break;
      case 'education':
        response = (
          <p className="text-xs text-[#A8B5C8]">
            Shah &amp; Anchor Kutchhi Engineering College • B.Tech Computer Engineering (3rd Year) • Overall CGPA: 9.20 / 10 (Sem 1: 8.98, Sem 2: 8.82, Sem 3: 9.54, Sem 4: 9.55).
          </p>
        );
        break;
      case 'contact':
        response = (
          <div className="space-y-0.5 text-xs text-[#A8B5C8]">
            <p>Email: <a href="mailto:siddhdharod@gmail.com" className="text-[#00A8E1] underline">siddhdharod@gmail.com</a></p>
            <p>Phone: <a href="tel:+918879062991" className="text-[#00A8E1]">+91 8879062991</a></p>
            <p>GitHub: <a href="https://github.com/siddharod" target="_blank" rel="noreferrer" className="text-[#00A8E1] underline">github.com/siddharod</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/siddh-dharod-8a8aa9385" target="_blank" rel="noreferrer" className="text-[#00A8E1] underline">linkedin.com/in/siddh-dharod-8a8aa9385</a></p>
          </div>
        );
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        response = (
          <p className="text-xs text-rose-400">
            command not found: {rawCmd}. Type &apos;help&apos; for list of commands.
          </p>
        );
    }

    setTerminalHistory((prev) => [...prev, { command: rawCmd, output: response }]);
    setTerminalInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  const techCategories = [
    {
      title: 'Languages',
      icon: (
        <svg className="w-3.5 h-3.5 text-[#00A8E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ['C', 'Python', 'Java'],
    },
    {
      title: 'AI/ML',
      icon: (
        <svg className="w-3.5 h-3.5 text-[#48C7FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      skills: ['Machine Learning', 'Data Analysis'],
    },
    {
      title: 'Frontend',
      icon: (
        <svg className="w-3.5 h-3.5 text-[#00A8E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Tools',
      icon: (
        <svg className="w-3.5 h-3.5 text-[#48C7FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ['VS Code', 'GitHub', 'Postman'],
    },
    {
      title: 'Backend',
      icon: (
        <svg className="w-3.5 h-3.5 text-[#00A8E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: ['Node.js', 'Express', 'Django'],
    },
    {
      title: 'Interests',
      icon: (
        <svg className="w-3.5 h-3.5 text-[#48C7FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      skills: ['System Design', 'Cloud Computing'],
    },
    {
      title: 'Databases',
      icon: (
        <svg className="w-3.5 h-3.5 text-[#00A8E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: ['MongoDB', 'MySQL'],
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-8 bg-[#050914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Column 1: My Tech Stack (4 cols) */}
          <div className="lg:col-span-4 bg-[#081426]/90 border border-[#00A8E1]/25 rounded-2xl p-5 shadow-xl backdrop-blur-sm flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg bg-[#00A8E1]/15 flex items-center justify-center text-[#00A8E1]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white font-heading tracking-tight">
                  My Tech Stack
                </h3>
              </div>

              {/* Categorized Skills Grid */}
              <div className="space-y-3">
                {techCategories.map((cat) => (
                  <div
                    key={cat.title}
                    className="p-2.5 rounded-xl bg-[#0B182E]/80 border border-white/5 hover:border-[#00A8E1]/30 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      {cat.icon}
                      <span className="text-[11px] font-mono font-semibold text-[#A8B5C8]">
                        {cat.title}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#101F38] text-white border border-[#00A8E1]/20 hover:border-[#48C7FF]/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#A8B5C8] font-mono flex items-center justify-between">
              <span>Verified proficiencies</span>
              <span className="text-[#00A8E1]">No fabricated claims</span>
            </div>
          </div>

          {/* Column 2: Developer Terminal (4 cols) */}
          <div className="lg:col-span-4 bg-[#081426]/90 border border-[#00A8E1]/25 rounded-2xl p-5 shadow-xl backdrop-blur-sm flex flex-col justify-between font-mono">
            <div>
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#48C7FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-bold text-white tracking-wide">Developer Terminal</span>
                </div>
                {/* Window buttons */}
                <div className="flex items-center gap-1.5 text-xs text-[#A8B5C8]">
                  <span className="cursor-pointer hover:text-white" onClick={() => setTerminalHistory([])}>_</span>
                  <span className="cursor-pointer hover:text-white" onClick={onOpenTerminalModal}>[ ]</span>
                  <span className="cursor-pointer hover:text-white" onClick={() => setTerminalHistory([])}>×</span>
                </div>
              </div>

              {/* Initial Terminal Content */}
              <div className="space-y-2 text-xs leading-relaxed text-left max-h-[300px] overflow-y-auto pr-1 no-scrollbar">
                <div className="text-[#48C7FF] font-semibold">
                  siddh@portfolio:~$
                </div>

                <div className="text-[#A8B5C8] space-y-1">
                  <p className="text-white/80">Available commands:</p>
                  <div className="grid grid-cols-1 gap-0.5">
                    {[
                      { cmd: 'help', desc: 'Show all commands' },
                      { cmd: 'about', desc: 'About me' },
                      { cmd: 'projects', desc: 'View my projects' },
                      { cmd: 'skills', desc: 'My technical skills' },
                      { cmd: 'education', desc: 'Academic details' },
                      { cmd: 'contact', desc: 'Get in touch' },
                    ].map((item) => (
                      <button
                        key={item.cmd}
                        onClick={() => handleCommand(item.cmd)}
                        className="text-left hover:bg-white/5 rounded px-1 -mx-1 transition-colors flex items-center justify-between text-xs"
                      >
                        <span className="text-[#00A8E1]">&gt; {item.cmd}</span>
                        <span className="text-[#A8B5C8]/80 text-[11px]">- {item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* History Log */}
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="pt-2 border-t border-white/5 space-y-1">
                    <div className="text-[#48C7FF]">
                      siddh@portfolio:~$ <span className="text-white">{item.command}</span>
                    </div>
                    <div className="pl-2">{item.output}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Input Bar */}
            <div className="mt-4 pt-3 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-xs bg-[#050914] px-2.5 py-1.5 rounded-lg border border-[#00A8E1]/30">
                <span className="text-[#48C7FF] whitespace-nowrap">siddh@portfolio:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type help, about, skills..."
                  className="bg-transparent border-none outline-none text-white text-xs w-full font-mono placeholder-[#A8B5C8]/40"
                />
                <button
                  onClick={() => handleCommand()}
                  className="text-[10px] uppercase font-bold text-[#00A8E1] hover:text-[#48C7FF] px-1"
                >
                  RUN
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: Turning Ideas into Impact Poster (4 cols) */}
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-[#00A8E1]/25 shadow-xl group min-h-[380px] flex flex-col justify-between p-6">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0">
              <img
                src={getAssetUrl('assets/impact_banner.png')}
                alt="Turning Ideas into Impact background"
                className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E1]/20 via-transparent to-transparent"></div>
            </div>

            {/* Top Text Content */}
            <div className="relative z-10 text-left space-y-3 pt-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight leading-snug drop-shadow-md">
                Turning<br />
                Ideas into<br />
                Impact.
              </h2>
            </div>

            {/* Center Play Button */}
            <div className="relative z-10 flex items-center justify-start py-6">
              <button
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-12 h-12 rounded-full bg-[#00A8E1] text-[#050914] flex items-center justify-center hover:bg-[#48C7FF] hover:scale-110 transition-all shadow-xl shadow-[#00A8E1]/40"
                aria-label="Explore Projects Showcase"
              >
                <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* Bottom Quote matching screenshot */}
            <div className="relative z-10 text-left pt-3 border-t border-white/10">
              <p className="text-xs text-white/90 italic font-serif">
                &ldquo;Code. Create. Make a difference.&rdquo;
              </p>
              <p className="text-[11px] text-[#48C7FF] font-mono mt-0.5">
                — Siddh Dharod
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
