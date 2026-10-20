import React from 'react';
import { ProjectItem } from '../data/portfolio';
import { CloseIcon, GitHubIcon, ExternalLinkIcon, CodeIcon } from './Icons';
import { ArchitectureDiagram } from './ArchitectureDiagrams';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B1426] border border-[#00A8E1]/30 rounded-2xl shadow-2xl overflow-y-auto flex flex-col prime-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0B1426]/95 border-b border-[#00A8E1]/20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded bg-[#00A8E1]/15 text-[#48C7FF] border border-[#00A8E1]/30">
              {project.category}
            </span>
            <span className="text-xs text-[#A8B5C8] font-mono hidden sm:inline">
              Verified Case Study
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A8B5C8] hover:text-white hover:bg-[#101C30] transition-colors"
            aria-label="Close Case Study"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
              {project.name}
            </h2>
            <p className="text-base sm:text-lg text-[#48C7FF] font-medium mt-1">
              {project.headline}
            </p>
            <p className="text-sm text-[#A8B5C8] mt-2 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00A8E1] text-[#050B18] font-bold text-sm hover:bg-[#48C7FF] transition-all shadow-md shadow-[#00A8E1]/20"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#101C30] text-white font-medium text-sm border border-[#00A8E1]/40 hover:border-[#48C7FF] transition-all"
              >
                <ExternalLinkIcon className="w-4 h-4 text-[#48C7FF]" />
                <span>Live Deployment</span>
              </a>
            )}
          </div>

          {/* Problem & Objective Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#101C30]/70 border border-[#00A8E1]/20 rounded-xl p-5 space-y-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#48C7FF] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00A8E1]"></span>
                Problem Statement
              </div>
              <p className="text-sm text-[#F5F8FC]/90 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-[#101C30]/70 border border-[#00A8E1]/20 rounded-xl p-5 space-y-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#48C7FF] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#48C7FF]"></span>
                Core Objective
              </div>
              <p className="text-sm text-[#F5F8FC]/90 leading-relaxed">
                {project.objective}
              </p>
            </div>
          </div>

          {/* Siddh's Contribution */}
          <div className="bg-gradient-to-r from-[#101C30] to-[#0B1426] border-l-4 border-[#00A8E1] p-5 rounded-r-xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#48C7FF] mb-1">
              Siddh&apos;s Engineering Contribution
            </div>
            <p className="text-sm text-white font-medium leading-relaxed">
              {project.contribution}
            </p>
          </div>

          {/* Verified Technical Stack */}
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#A8B5C8] mb-3 flex items-center gap-2">
              <CodeIcon className="w-4 h-4 text-[#00A8E1]" />
              Verified Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#101C30] text-[#F5F8FC] border border-[#00A8E1]/25"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Implemented Features */}
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#A8B5C8] mb-3">
              Verified Implemented Features
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-[#A8B5C8] bg-[#101C30]/40 p-3 rounded-lg border border-white/5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A8E1] mt-2 shrink-0"></span>
                  <span className="text-[#F5F8FC]/90 leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#48C7FF]">
                Verified Technical Architecture
              </div>
              <span className="text-[11px] text-[#A8B5C8] font-mono">
                {project.architectureDetails.protocols}
              </span>
            </div>
            <p className="text-sm text-[#A8B5C8] leading-relaxed">
              {project.architectureSummary}
            </p>

            {/* Architecture Diagram */}
            <ArchitectureDiagram
              type={project.architectureDiagramType}
              architectureImage={project.architectureImage}
              comparisonImage={project.comparisonImage}
            />

            {/* Architecture Stack Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2">
              <div className="bg-[#101C30] p-3 rounded-lg border border-white/5">
                <span className="text-[#A8B5C8] block text-[10px] uppercase">Frontend</span>
                <span className="font-medium text-white">{project.architectureDetails.frontend}</span>
              </div>
              <div className="bg-[#101C30] p-3 rounded-lg border border-white/5">
                <span className="text-[#A8B5C8] block text-[10px] uppercase">Backend</span>
                <span className="font-medium text-white">{project.architectureDetails.backend}</span>
              </div>
              <div className="bg-[#101C30] p-3 rounded-lg border border-white/5">
                <span className="text-[#A8B5C8] block text-[10px] uppercase">Storage</span>
                <span className="font-medium text-white">{project.architectureDetails.dataStorage}</span>
              </div>
              <div className="bg-[#101C30] p-3 rounded-lg border border-white/5">
                <span className="text-[#A8B5C8] block text-[10px] uppercase">Engine</span>
                <span className="font-medium text-white">{project.architectureDetails.aiMl || 'Client Logic'}</span>
              </div>
            </div>
          </div>

          {/* Key Technical Decisions */}
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#A8B5C8] mb-3">
              Important Technical Decisions
            </div>
            <div className="space-y-2">
              {project.technicalDecisions.map((decision, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A8B5C8] bg-[#101C30]/50 p-3 rounded-lg">
                  <span className="text-[#00A8E1] font-mono font-bold">0{idx + 1}.</span>
                  <p className="text-[#F5F8FC]/85">{decision}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0B1426]/95 border-t border-[#00A8E1]/20 backdrop-blur-md">
          <span className="text-xs text-[#A8B5C8]">
            Siddh Dharod Portfolio • Verified Project
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#101C30] text-white text-xs font-medium hover:bg-[#152542] border border-[#00A8E1]/30 transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
