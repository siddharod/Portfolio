import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { OpeningProfileSelector, PersonaType } from './components/OpeningProfileSelector';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { DashboardMiddle } from './components/DashboardMiddle';
import { JourneyBanner } from './components/JourneyBanner';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Leadership } from './components/Leadership';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { SpecificationBanner } from './components/SpecificationBanner';
import { ProjectModal } from './components/ProjectModal';
import { DeveloperTerminal } from './components/DeveloperTerminal';
import { ResumePage } from './components/ResumePage';
import { ProjectItem } from './data/portfolio';

export const App: React.FC = () => {
  // Screen mode: 'profiles' (Screen 1) | 'home' (Screen 2) | 'resume' (Screen 3 - ATS view)
  const [viewMode, setViewMode] = useState<'profiles' | 'home' | 'resume'>(() => {
    if (window.location.pathname.includes('/resume') || window.location.hash === '#resume') {
      return 'resume';
    }
    const saved = sessionStorage.getItem('siddh_persona');
    return saved ? 'home' : 'profiles';
  });

  const [currentPersona, setCurrentPersona] = useState<PersonaType>(() => {
    return (sessionStorage.getItem('siddh_persona') as PersonaType) || 'explorer';
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // URL routing for resume
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname.includes('/resume') || window.location.hash === '#resume') {
        setViewMode('resume');
      } else {
        const saved = sessionStorage.getItem('siddh_persona');
        setViewMode(saved ? 'home' : 'profiles');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard shortcut: `~` opens the developer terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
        if (tag !== 'input' && tag !== 'textarea') {
          e.preventDefault();
          setTerminalOpen((prev) => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Active section scroll detection for Sidebar
  useEffect(() => {
    if (viewMode !== 'home') return;

    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'experience', 'leadership', 'skills', 'certifications', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  const handleSelectPersona = (persona: PersonaType) => {
    setCurrentPersona(persona);
    sessionStorage.setItem('siddh_persona', persona);
    setViewMode('home');

    // Contextual scroll based on selected persona
    setTimeout(() => {
      if (persona === 'recruiter') {
        const el = document.getElementById('experience');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (persona === 'developer') {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (persona === 'about') {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 200);
  };

  const handleNavigateResume = () => {
    setViewMode('resume');
    window.history.pushState({}, '', '#resume');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setViewMode('home');
    window.history.pushState({}, '', import.meta.env.BASE_URL);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwitchProfile = () => {
    setViewMode('profiles');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'resume') {
      handleNavigateResume();
      return;
    }
    if (viewMode !== 'home') {
      setViewMode('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // SCREEN 1: Profile Selection Screen
  if (viewMode === 'profiles') {
    return (
      <OpeningProfileSelector
        onSelectPersona={handleSelectPersona}
        currentPersona={currentPersona}
      />
    );
  }

  // SCREEN 3: Recruiter-Ready ATS Resume View
  if (viewMode === 'resume') {
    return (
      <div className="min-h-screen bg-[#050914] text-[#F5F8FC]">
        <Navbar
          onOpenTerminal={() => setTerminalOpen(true)}
          onNavigateResume={handleNavigateResume}
          currentView="resume"
          onNavigateHome={handleNavigateHome}
          onOpenProfileSelector={handleSwitchProfile}
        />
        <ResumePage onBack={handleNavigateHome} />
      </div>
    );
  }

  // SCREEN 2: Main Prime Video-Inspired Streaming Homepage
  return (
    <div className="min-h-screen bg-[#050914] text-[#F5F8FC] selection:bg-[#00A8E1] selection:text-[#050914]">
      {/* Top Navigation */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onNavigateResume={handleNavigateResume}
        currentView="portfolio"
        onNavigateHome={handleNavigateHome}
        onOpenProfileSelector={handleSwitchProfile}
      />

      {/* Left Vertical Dock Navigation */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Streaming Platform Experience */}
      <main className="xl:pl-24 transition-all duration-300">
        {/* Featured Hero Section */}
        <Hero
          onNavigateResume={handleNavigateResume}
          onSelectPersona={handleSelectPersona}
          currentPersona={currentPersona}
        />

        {/* 5-Card Featured Projects Row */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3-Column Mid Dashboard: Tech Stack | Terminal | Impact */}
        <DashboardMiddle
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenTerminalModal={() => setTerminalOpen(true)}
        />

        {/* Latest from My Journey: 4-Card Banner */}
        <JourneyBanner />

        {/* Streaming Rails: Complete Content Discovery */}
        <About />
        <Experience />
        <Leadership />
        <Achievements />
        <Skills />
        <Certifications />
        <Education />
        <Contact />

        {/* Specification & Prompt Details Card matching reference */}
        <SpecificationBanner />
      </main>

      {/* Immersive Case Study & Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Developer CLI Modal Terminal */}
      <DeveloperTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
};

export default App;
