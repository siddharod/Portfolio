import React from 'react';
import { profile, educationList, experienceList, leadershipList, projectsList, certificatesList, achievementsList } from '../data/portfolio';
import { PrintIcon, DownloadIcon, ChevronLeftIcon } from './Icons';

interface ResumePageProps {
  onBack: () => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#050B18] text-[#111827] pt-24 pb-16 px-4 sm:px-6">
      {/* Top Action Toolbar (Hidden in Print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 no-print">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#101C30] hover:bg-[#152542] text-xs font-bold text-white border border-[#00A8E1]/30 transition-all"
        >
          <ChevronLeftIcon className="w-4 h-4 text-[#00A8E1]" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#101C30] hover:bg-[#152542] text-xs font-bold text-white border border-white/10 hover:border-[#48C7FF] transition-all"
          >
            <PrintIcon className="w-4 h-4 text-[#48C7FF]" />
            <span>Print / Save as PDF</span>
          </button>

          <a
            href={profile.resumePdf}
            download="Siddh_Dharod_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00A8E1] hover:bg-[#48C7FF] text-[#050B18] text-xs font-extrabold transition-all shadow-md shadow-[#00A8E1]/20"
          >
            <DownloadIcon className="w-4 h-4" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>

      {/* ATS-Friendly Document Sheet */}
      <div className="resume-container max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 sm:p-12 text-left text-[#1f2937] border border-gray-200 font-sans">
        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight uppercase">
                {profile.fullName}
              </h1>
              <p className="text-base font-semibold text-[#0070a0] mt-1">
                {profile.headline}
              </p>
            </div>
            <div className="text-xs text-gray-600 sm:text-right space-y-0.5 font-mono">
              <div>{profile.location}</div>
              <div>
                <a href={`mailto:${profile.email}`} className="text-[#0070a0] hover:underline font-medium">
                  {profile.email}
                </a>
              </div>
              <div>
                <a href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-800 font-medium">
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-3 pt-1">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-[#0070a0] hover:underline font-medium">
                  LinkedIn
                </a>
                <span>•</span>
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-[#0070a0] hover:underline font-medium">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#111827] border-b border-gray-300 pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Third-year Computer Engineering undergraduate at Shah & Anchor Kutchhi Engineering College (CGPA: 9.20/10) with demonstrated practical expertise in Full-Stack Development, Retrieval-Based NLP Systems, and Machine Learning. Winner of the HackNova 2025 National-Level Hackathon; experienced across multiple software engineering internships developing responsive user experiences, backend endpoints, and intelligent web applications.
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#111827] border-b border-gray-300 pb-1 mb-3">
            Education
          </h2>
          <div className="space-y-3 text-xs sm:text-sm">
            <div>
              <div className="flex justify-between items-baseline font-bold text-gray-900">
                <span>{educationList[0].institution}</span>
                <span className="text-gray-600 font-mono text-xs">{educationList[0].period}</span>
              </div>
              <div className="flex justify-between items-baseline text-gray-700">
                <span>{educationList[0].degree} — Mumbai University</span>
                <span className="font-semibold text-[#0070a0]">CGPA: 9.20 / 10.0</span>
              </div>
              <p className="text-[11px] text-gray-500 font-mono mt-0.5">
                Semester Scores: Sem 1: 8.98 | Sem 2: 8.82 | Sem 3: 9.54 | Sem 4: 9.55
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-semibold text-gray-800">
                <span>{educationList[1].institution}</span>
                <span className="text-gray-600 font-mono text-xs">{educationList[1].period}</span>
              </div>
              <div className="flex justify-between items-baseline text-gray-600 text-xs">
                <span>{educationList[1].degree}</span>
                <span>Thane, Maharashtra</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#111827] border-b border-gray-300 pb-1 mb-2">
            Technical Skills
          </h2>
          <div className="text-xs sm:text-sm space-y-1.5 text-gray-800">
            <div>
              <strong className="text-gray-900 font-semibold">Programming Languages: </strong>
              C, Python, Java, JavaScript, TypeScript
            </div>
            <div>
              <strong className="text-gray-900 font-semibold">Web & Full-Stack: </strong>
              React, Node.js, Express, Django, HTML5, CSS3, Tailwind CSS, Socket.io, REST APIs
            </div>
            <div>
              <strong className="text-gray-900 font-semibold">AI, ML & Geospatial: </strong>
              Scikit-Learn, TF-IDF Vectorization, Cosine Similarity, Pandas, NumPy, Streamlit, Folium / Leaflet GIS
            </div>
            <div>
              <strong className="text-gray-900 font-semibold">Databases & Tools: </strong>
              PostgreSQL / RDBMS, MongoDB, Git, GitHub, VS Code, Postman
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#111827] border-b border-gray-300 pb-1 mb-3">
            Work Experience
          </h2>
          <div className="space-y-4 text-xs sm:text-sm">
            {experienceList.map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline font-bold text-gray-900">
                  <span>{exp.company} — <span className="font-semibold text-gray-800">{exp.role}</span></span>
                  <span className="text-gray-600 font-mono text-xs">{exp.dates}</span>
                </div>
                <ul className="list-disc list-outside pl-4 mt-1 text-gray-700 space-y-1 text-xs">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#111827] border-b border-gray-300 pb-1 mb-3">
            Key Software & ML Projects
          </h2>
          <div className="space-y-3.5 text-xs sm:text-sm">
            {projectsList.map((proj, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline font-bold text-gray-900">
                  <span>
                    {proj.name} — <span className="font-normal italic text-gray-700">{proj.headline}</span>
                  </span>
                  <a href={proj.github} target="_blank" rel="noreferrer" className="text-[#0070a0] font-mono text-xs hover:underline">
                    GitHub Repo
                  </a>
                </div>
                <p className="text-xs text-gray-600 font-mono mt-0.5">
                  Tech Stack: {proj.techStack.join(', ')}
                </p>
                <p className="text-xs text-gray-700 mt-1">
                  {proj.objective} {proj.contribution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Campus Leadership & Activities */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#111827] border-b border-gray-300 pb-1 mb-3">
            Campus Leadership & Technical Activities
          </h2>
          <div className="space-y-3 text-xs sm:text-sm">
            {leadershipList.map((lead, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline font-bold text-gray-900">
                  <span>{lead.organization}</span>
                  <span className="font-semibold text-[#0070a0] text-xs">{lead.role}</span>
                </div>
                <p className="text-xs text-gray-700 mt-0.5">
                  {lead.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#111827] border-b border-gray-300 pb-1 mb-2">
            Achievements & Awards
          </h2>
          <ul className="list-disc list-outside pl-4 text-xs sm:text-sm text-gray-700 space-y-1">
            {achievementsList.map((ach, idx) => (
              <li key={idx}>
                <strong className="text-gray-900 font-semibold">{ach.title}: </strong>
                {ach.event} ({ach.venue}, {ach.year}) — {ach.description}
              </li>
            ))}
          </ul>
        </section>

        {/* Verified Certifications */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#111827] border-b border-gray-300 pb-1 mb-2">
            Verified Certifications
          </h2>
          <ul className="list-disc list-outside pl-4 text-xs text-gray-700 space-y-1">
            {certificatesList.slice(0, 7).map((cert, idx) => (
              <li key={idx}>
                <strong className="text-gray-900 font-semibold">{cert.title}</strong> — {cert.issuer} ({cert.date})
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
