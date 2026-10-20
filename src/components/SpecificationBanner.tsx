import React from 'react';

export const SpecificationBanner: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 bg-[#040812] border-t border-[#00A8E1]/20 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs font-sans">
          {/* Col 1: Final Prompt & Key Requirements (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-black text-white font-heading tracking-wide uppercase">
                FINAL PROMPT TO BUILD THIS PORTFOLIO
              </h3>
              <p className="text-[#A8B5C8] mt-1.5 leading-relaxed text-[11px]">
                Build a complete, production-ready, Prime Video-inspired portfolio website for Siddh Dharod with an interactive, cinematic, and premium UI/UX. The design must feel like a modern streaming platform while clearly showcasing my projects, experience, skills, certifications, achievements, and resume. Focus on visual storytelling, smooth animations, and an exceptional user experience.
              </p>
            </div>

            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider block font-mono">
                KEY REQUIREMENTS
              </span>
              <ol className="list-decimal list-inside space-y-1 text-[#A8B5C8] text-[11px] leading-relaxed">
                <li>Interactive landing page with user selector (About Me / Recruiter / Student / etc.)</li>
                <li>Prime-style UI with dark theme, cinematic visuals, and clean navigation</li>
                <li>All sections: Home, About, Projects, Experience, Skills, Certifications, Resume, Contact</li>
                <li>Featured project showcase with detailed case studies and architecture diagrams</li>
                <li>Functional GitHub links, live demos (if available), and real project descriptions</li>
                <li>Recruiter recruiter-friendly: HTML page + downloadable PDF</li>
                <li>Interactive developer terminal with commands (help, about, projects, skills, etc.)</li>
                <li>Real internship and leadership roles (Elevance Labs, Elevate Labs, AUSPIFY, SAKEC Alumni Cell, CSI Cell)</li>
                <li>Verified achievements (National-Level Hackathon Winner) and certifications (from provided files)</li>
                <li>Optimized for performance, accessibility, SEO, and mobile responsiveness</li>
                <li>Clean code, reusable components, and modern stack (React, TypeScript, Vite, Tailwind, Framer Motion)</li>
              </ol>
            </div>
          </div>

          {/* Col 2: My Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              MY DETAILS
            </h3>

            <div className="space-y-3 text-[11px] text-[#A8B5C8]">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#00A8E1] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7 7z" />
                </svg>
                <div>
                  <span className="text-white block font-medium">Name</span>
                  <span>Siddh Dharod</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#00A8E1] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <div>
                  <span className="text-white block font-medium">Role</span>
                  <span>Aspiring Full-Stack Developer</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#00A8E1] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
                <div>
                  <span className="text-white block font-medium">Education</span>
                  <span>B.Tech Computer Engineering<br />SAKEC, Mumbai University (Third Year)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#00A8E1] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <div>
                  <span className="text-white block font-medium">Location</span>
                  <span>Thane, Maharashtra, India</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#00A8E1] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="text-white block font-medium">Email</span>
                  <a href="mailto:siddhdharod@gmail.com" className="text-[#00A8E1] hover:underline">siddhdharod@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#00A8E1] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <span className="text-white block font-medium">Phone</span>
                  <a href="tel:+918879062991" className="text-[#00A8E1] hover:underline">+91 8879062991</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#00A8E1] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.75a1.65 1.65 0 1 0 .01 3.3 1.65 1.65 0 0 0-.01-3.3z"/>
                </svg>
                <div>
                  <span className="text-white block font-medium">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/siddh-dharod-8a8aa9385" target="_blank" rel="noreferrer" className="text-[#00A8E1] hover:underline">linkedin.com/in/siddh-dharod-8a8aa9385</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#00A8E1] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <div>
                  <span className="text-white block font-medium">GitHub</span>
                  <a href="https://github.com/siddharod" target="_blank" rel="noreferrer" className="text-[#00A8E1] hover:underline">github.com/siddharod</a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Important Notes (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              IMPORTANT NOTES
            </h3>

            <ul className="space-y-1.5 text-[11px] text-[#A8B5C8] list-disc list-inside">
              <li>Use my uploaded photos (formal portrait as main hero).</li>
              <li>Base all content on my resume, certificates, and project repositories.</li>
              <li>Do not invent achievements, skills, or experience.</li>
              <li>Ensure all links and buttons work correctly.</li>
              <li>Create a real downloadable PDF resume.</li>
              <li>Make the website fast, responsive, and accessible.</li>
              <li>Use a custom favicon, SEO metadata, and proper page structure.</li>
              <li>Maintain a consistent Prime Video inspired theme across all pages.</li>
              <li>Prioritize UI/UX quality — make it visually stunning, clean, and easy to navigate.</li>
              <li>Test the entire site before completion.</li>
            </ul>

            <div className="p-3.5 rounded-xl bg-[#081426] border border-[#00A8E1]/30 text-[11px] text-[#48C7FF] leading-relaxed">
              <strong className="text-white block font-mono mb-1">GOAL</strong>
              A portfolio that makes a recruiter immediately think — &ldquo;This student is talented, professional, and ready to contribute.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
