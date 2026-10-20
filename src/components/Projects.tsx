import React, { useState } from 'react';
import { projectsList, ProjectItem } from '../data/portfolio';
import { GitHubIcon } from './Icons';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Intelligent Systems',
    'Full-Stack Applications',
    'Real-World Problem Solving',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsList
    : projectsList.filter((p) => p.category === selectedCategory || p.tags.includes(selectedCategory));

  return (
    <section id="projects" className="py-6 sm:py-8 lg:py-10 relative bg-[#050914]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header matching Screenshot */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg className="w-4 h-4 text-[#00A8E1]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2L12 17l-6.3 4.2 2.3-7.2-6-4.6h7.6z" />
            </svg>
            <div className="text-left">
              <h2 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight flex items-center gap-2">
                Featured Projects
              </h2>
              <p className="text-xs text-[#A8B5C8] font-sans">
                Real solutions. Practical impact.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('discovery-rail');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs text-[#00A8E1] hover:text-[#48C7FF] font-medium flex items-center gap-1 group transition-colors"
          >
            <span>View All Projects</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>

        {/* 5-Column Grid of Project Cards matching reference screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projectsList.map((project, index) => {
            const isFeatured = index === 0; // AccessIQ highlighted with glowing border
            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden bg-[#081426] border transition-all duration-300 flex flex-col justify-between shadow-xl ${
                  isFeatured
                    ? 'border-[#00A8E1] shadow-[#00A8E1]/20 ring-1 ring-[#00A8E1]/40 hover:shadow-[#00A8E1]/30 hover:scale-[1.02]'
                    : 'border-[#00A8E1]/20 hover:border-[#00A8E1]/60 hover:-translate-y-1'
                }`}
              >
                {/* Thumbnail Image with Prime Vignette */}
                <div
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-[#050914]"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={`${project.name} preview thumbnail`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081426] via-transparent to-transparent opacity-90"></div>

                  {/* Featured Badge on primary project */}
                  {isFeatured && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-[#00A8E1] text-[#050914] shadow-md">
                      PRIMARY BUILD
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-3.5 space-y-2.5 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-base font-bold text-white group-hover:text-[#48C7FF] transition-colors font-heading cursor-pointer leading-tight"
                    >
                      {project.name}
                    </h3>
                    <p className="text-[11px] text-[#A8B5C8] line-clamp-1 font-medium mt-0.5 leading-snug">
                      {project.headline}
                    </p>
                  </div>

                  {/* Tag Chips matching screenshot */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-[#101D32] text-[#48C7FF] border border-[#00A8E1]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links: View Details > and GitHub */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-[#00A8E1] hover:text-[#48C7FF] font-semibold text-[11px] flex items-center gap-1 group/btn transition-colors"
                    >
                      <span>View Details</span>
                      <span className="group-hover/btn:translate-x-0.5 transition-transform font-bold text-xs">›</span>
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#A8B5C8] hover:text-white transition-colors"
                      title="View GitHub Repository"
                      aria-label={`${project.name} GitHub Repository`}
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                      <span className="font-mono text-[10px]">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discovery Filter & Case Studies Section */}
        <div id="discovery-rail" className="pt-5 sm:pt-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                Explore All Architectural Breakdowns
              </h3>
              <p className="text-xs text-[#A8B5C8]">
                Interactive architecture flows, technologies, and technical decisions.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#00A8E1] text-[#050914] font-bold shadow-md shadow-[#00A8E1]/20'
                      : 'bg-[#101D32] text-[#A8B5C8] hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards for Filtered Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="p-5 rounded-2xl bg-[#081426] border border-[#00A8E1]/20 hover:border-[#00A8E1]/60 transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#00A8E1] uppercase font-bold tracking-wider">
                      {proj.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#A8B5C8]">
                      Case Study
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#48C7FF] transition-colors font-heading">
                    {proj.name}
                  </h4>
                  <p className="text-xs text-[#A8B5C8] line-clamp-2 leading-relaxed">
                    {proj.problem}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs mt-3">
                  <span className="text-[#48C7FF] font-medium text-[11px] group-hover:underline flex items-center gap-1">
                    Open Architecture Diagram
                    <span>›</span>
                  </span>
                  <span className="text-[10px] text-[#A8B5C8] font-mono">
                    {proj.techStack.length} Technologies
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
