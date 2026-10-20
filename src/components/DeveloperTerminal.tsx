import React, { useState, useEffect, useRef } from 'react';
import { profile, projectsList, skillGroups, educationList } from '../data/portfolio';
import { CloseIcon, TerminalIcon } from './Icons';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  cmd: string;
  output: React.ReactNode;
}

export const DeveloperTerminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      cmd: 'welcome',
      output: (
        <div className="space-y-1 text-xs text-[#A8B5C8]">
          <p className="text-[#48C7FF] font-bold">Siddh Dharod Developer CLI [Version 1.0.0]</p>
          <p>Type <span className="text-[#00A8E1] font-bold">help</span> to list available commands. Press <span className="text-white">Esc</span> or type <span className="text-white">exit</span> to close.</p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-white font-bold">Available Commands:</p>
            <p><span className="text-[#00A8E1] font-mono">about</span> - Brief summary of Siddh Dharod</p>
            <p><span className="text-[#00A8E1] font-mono">projects</span> - List of 5 verified engineering projects</p>
            <p><span className="text-[#00A8E1] font-mono">skills</span> - Breakdown of programming languages & tools</p>
            <p><span className="text-[#00A8E1] font-mono">education</span> - University, CGPA, and semester scores</p>
            <p><span className="text-[#00A8E1] font-mono">contact</span> - Verified email, phone, and profile links</p>
            <p><span className="text-[#00A8E1] font-mono">clear</span> - Clear command terminal history</p>
            <p><span className="text-[#00A8E1] font-mono">exit</span> - Close terminal window</p>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-1 text-xs text-[#A8B5C8]">
            <p className="text-white font-bold">{profile.fullName} — {profile.headline}</p>
            <p>{profile.aboutText}</p>
            <p className="text-[#48C7FF]">CGPA: {profile.cgpa} • College: {profile.college}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-white font-bold">Verified Projects ({projectsList.length}):</p>
            {projectsList.map((p, idx) => (
              <div key={idx} className="border-l-2 border-[#00A8E1] pl-2">
                <span className="text-[#48C7FF] font-bold">{p.name}</span> — {p.headline}
                <p className="text-[11px] text-[#A8B5C8]">Stack: {p.techStack.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-white font-bold">Technical Skills Breakdown:</p>
            {skillGroups.map((g, idx) => (
              <div key={idx}>
                <span className="text-[#00A8E1] font-semibold">{g.category}:</span>{' '}
                <span className="text-[#A8B5C8]">{g.skills.map((s) => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-1 text-xs text-[#A8B5C8]">
            <p className="text-white font-bold">{educationList[0].institution}</p>
            <p>{educationList[0].degree} — {educationList[0].score}</p>
            <p className="text-[#48C7FF]">Semesters: S1: 8.98 | S2: 8.82 | S3: 9.54 | S4: 9.55</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-[#A8B5C8]">
            <p className="text-white font-bold">Direct Channels:</p>
            <p>Email: <a href={`mailto:${profile.email}`} className="text-[#48C7FF] underline">{profile.email}</a></p>
            <p>Phone: <span className="text-white">{profile.phone}</span></p>
            <p>LinkedIn: <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-[#48C7FF] underline">{profile.linkedin}</a></p>
            <p>GitHub: <a href={profile.github} target="_blank" rel="noreferrer" className="text-[#48C7FF] underline">{profile.github}</a></p>
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInput('');
        return;

      default:
        output = (
          <p className="text-xs text-rose-400">
            command not found: {trimmed}. Type <span className="text-white font-bold">help</span> for valid commands.
          </p>
        );
        break;
    }

    setLogs((prev) => [...prev, { cmd: trimmed, output }]);
    setInput('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#050B18] border border-[#00A8E1]/35 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[480px] prime-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0B1426] border-b border-[#00A8E1]/20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="text-xs font-mono font-bold text-white ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#00A8E1]" />
              siddh@portfolio:~
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#A8B5C8] hover:text-white"
            aria-label="Close terminal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Terminal Logs View */}
        <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-3 text-left">
          {logs.map((log, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#A8B5C8]">
                <span className="text-[#00A8E1]">➜</span>
                <span className="text-[#48C7FF]">~</span>
                <span className="text-white font-bold">{log.cmd}</span>
              </div>
              <div className="pl-4 text-[#F5F8FC]/90">{log.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-[#0B1426] border-t border-[#00A8E1]/20">
          <span className="text-[#00A8E1] font-mono text-sm">➜</span>
          <span className="text-[#48C7FF] font-mono text-xs">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (try 'help')..."
            className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder-[#A8B5C8]/40"
          />
        </form>
      </div>
    </div>
  );
};
