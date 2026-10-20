import React, { useState, useEffect } from 'react';
import { TerminalIcon } from './Icons';

interface NavbarProps {
  onOpenTerminal: () => void;
  onNavigateResume: () => void;
  currentView: 'portfolio' | 'resume';
  onNavigateHome: () => void;
  onOpenProfileSelector?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  onNavigateResume,
  currentView,
  onNavigateHome,
  onOpenProfileSelector,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'projects', 'experience', 'leadership', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (currentView === 'resume') {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        scrolled || currentView === 'resume'
          ? 'bg-[#050B18]/92 backdrop-blur-md border-b border-[#00A8E1]/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => {
              if (currentView === 'resume') onNavigateHome();
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Siddh Dharod Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00A8E1] to-[#0B1426] p-[1px] shadow-sm shadow-[#00A8E1]/30">
              <div className="w-full h-full bg-[#050B18] rounded-[7px] flex items-center justify-center">
                <span className="font-heading font-black text-sm tracking-wider text-white group-hover:text-[#48C7FF] transition-colors">
                  SD
                </span>
              </div>
            </div>
            <div className="text-left">
              <span className="font-heading font-bold text-sm tracking-tight text-white block leading-none">
                SIDDH DHAROD
              </span>
              <span className="text-[10px] tracking-widest text-[#48C7FF] uppercase font-mono block mt-0.5">
                ENGINEERING
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0B1426]/60 border border-[#00A8E1]/15 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'leadership', label: 'Leadership' },
              { id: 'skills', label: 'Skills' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  activeSection === link.id && currentView === 'portfolio'
                    ? 'bg-[#00A8E1] text-[#050B18] font-bold shadow-sm shadow-[#00A8E1]/30'
                    : 'text-[#A8B5C8] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Switch Profile Button */}
            {onOpenProfileSelector && (
              <button
                onClick={onOpenProfileSelector}
                className="px-2.5 py-1.5 rounded-lg bg-[#081426] border border-[#00A8E1]/30 text-[#48C7FF] hover:border-[#48C7FF] hover:bg-[#101D32] transition-all text-xs font-medium flex items-center gap-1.5"
                title="Switch Viewing Persona"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7 7z" />
                </svg>
                <span className="hidden xl:inline text-[11px]">Switch Profile</span>
              </button>
            )}

            {/* Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              className="p-1.5 rounded-lg bg-[#101C30] border border-[#00A8E1]/20 text-[#48C7FF] hover:bg-[#152542] hover:border-[#00A8E1]/50 transition-all text-xs font-mono flex items-center gap-1"
              title="Open Developer Terminal (or press ~)"
              aria-label="Developer Terminal"
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium hidden md:inline">CLI</span>
            </button>

            {/* Resume Page Toggle */}
            <button
              onClick={() => {
                if (currentView === 'resume') onNavigateHome();
                else onNavigateResume();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                currentView === 'resume'
                  ? 'bg-[#00A8E1] text-[#050B18] border-[#00A8E1]'
                  : 'bg-[#101C30] text-white border-[#00A8E1]/30 hover:border-[#48C7FF] hover:bg-[#152542]'
              }`}
            >
              {currentView === 'resume' ? 'Back' : 'Resume'}
            </button>

            {/* Let's Connect */}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#00A8E1] to-[#0082b3] text-[#050B18] text-xs font-extrabold hover:from-[#48C7FF] hover:to-[#00A8E1] transition-all shadow-md shadow-[#00A8E1]/25"
            >
              Let&apos;s Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-[#101C30] text-[#48C7FF] border border-[#00A8E1]/20"
              aria-label="Open CLI Terminal"
            >
              <TerminalIcon className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#101C30] text-white border border-[#00A8E1]/20"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0B1426]/98 border-b border-[#00A8E1]/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-fade-in">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'projects', label: 'Projects' },
            { id: 'experience', label: 'Experience' },
            { id: 'leadership', label: 'Leadership' },
            { id: 'skills', label: 'Skills' },
            { id: 'certifications', label: 'Certifications' },
            { id: 'contact', label: 'Contact' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left px-3 py-2 text-sm text-[#A8B5C8] hover:text-white hover:bg-white/5 rounded-lg"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentView === 'resume') onNavigateHome();
                else onNavigateResume();
              }}
              className="w-full text-center py-2.5 rounded-lg bg-[#101C30] text-white text-xs font-bold border border-[#00A8E1]/30"
            >
              {currentView === 'resume' ? 'Back to Portfolio' : 'HTML & PDF Resume'}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center py-2.5 rounded-lg bg-[#00A8E1] text-[#050B18] text-xs font-extrabold"
            >
              Let&apos;s Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
