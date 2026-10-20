import React, { useState } from 'react';
import { certificatesList, CertificateItem } from '../data/portfolio';
import { AwardIcon, ExternalLinkIcon, CloseIcon } from './Icons';

export const Certifications: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const displayedCerts = showAll
    ? certificatesList
    : certificatesList.filter((c) => c.topPriority);

  return (
    <section id="certifications" className="py-8 sm:py-10 lg:py-12 relative bg-[#050914] border-t border-[#00A8E1]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-left">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-[2px] w-6 bg-[#00A8E1]"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-[#48C7FF] uppercase">
                CREDENTIAL RECORD
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight">
              Verified Certifications & Honors
            </h2>
            <p className="text-xs sm:text-sm text-[#A8B5C8] mt-1 max-w-xl">
              Authentic industry certifications from IIT Bombay, IBM, Cisco, Palo Alto Networks, and Elevance Skills.
            </p>
          </div>

          {/* Toggle All Button */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-3.5 py-1.5 rounded-xl bg-[#081426] hover:bg-[#101D32] text-xs font-bold text-white border border-[#00A8E1]/30 transition-all self-start sm:self-auto"
          >
            {showAll ? 'Show Featured Only' : `Show All (${certificatesList.length})`}
          </button>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 text-left">
          {displayedCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#081426] border border-[#00A8E1]/20 rounded-2xl p-4 sm:p-5 hover:border-[#00A8E1]/50 transition-all shadow-xl group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#101C30] text-[#48C7FF] border border-[#00A8E1]/20">
                    {cert.badge || 'Verified'}
                  </span>
                  <span className="text-[11px] font-mono text-[#A8B5C8]">
                    {cert.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#48C7FF] transition-colors font-heading leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-[#00A8E1] mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs text-[#A8B5C8] leading-relaxed line-clamp-3">
                  {cert.relevance}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Verified File
                </span>

                {cert.file && (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#48C7FF] hover:text-white transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#0B1426] border border-[#00A8E1]/30 rounded-2xl shadow-2xl p-6 overflow-y-auto space-y-4 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white font-heading">{selectedCert.title}</h3>
                <p className="text-xs text-[#00A8E1]">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg text-[#A8B5C8] hover:text-white hover:bg-[#101C30]"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <p className="text-xs text-[#A8B5C8]">
              {selectedCert.relevance}
            </p>

            {/* Document display / Link */}
            {selectedCert.file?.endsWith('.png') || selectedCert.file?.endsWith('.jpg') ? (
              <div className="rounded-xl overflow-hidden border border-[#00A8E1]/20 bg-[#050B18]">
                <img
                  src={selectedCert.file}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[500px] object-contain mx-auto"
                />
              </div>
            ) : (
              <div className="bg-[#101C30] border border-[#00A8E1]/20 rounded-xl p-8 text-center space-y-4">
                <AwardIcon className="w-12 h-12 text-[#48C7FF] mx-auto" />
                <div>
                  <p className="text-sm font-semibold text-white">Verified Certificate Document (PDF)</p>
                  <p className="text-xs text-[#A8B5C8] mt-1">Open in new tab to inspect complete official seal and metadata.</p>
                </div>
                <a
                  href={selectedCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A8E1] text-[#050B18] font-bold text-xs hover:bg-[#48C7FF] transition-all"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  <span>Open Official Document</span>
                </a>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-lg bg-[#101C30] text-xs font-semibold text-white hover:bg-[#152542]"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
