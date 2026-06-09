import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { certifications, Certification } from "../data/certifications";
import { Award, Calendar, Eye, ZoomIn, ZoomOut, X, Bookmark } from "lucide-react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = (cert: Certification) => {
    setSelectedCert(cert);
    setIsZoomed(false);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCert(null);
    setIsZoomed(false);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="certifications" className="relative py-24 bg-[#050816] border-t border-white/5 overflow-hidden">
      {/* Background neon radial glow */}
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16 space-y-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            06 . SKILL ACQUIRED VERIFICATIONS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Licenses &amp; Certifications
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mt-1">
            Browse through official badges validating my engineering specialties, issued by accredited platforms.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
        </div>

        {/* Certifications Grid Layout */}
        <div id="certifications-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              id={`certification-card-${cert.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              /* onClick={() => openModal(cert)} */
              className="group p-5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/5 hover:bg-white/5 shadow-lg transition-all duration-300 cursor-default flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 transition-transform">
                    <Bookmark className="w-4 h-4 text-cyan-300" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-medium text-sm sm:text-base text-white transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 font-display text-xs">
                    Issuer: {cert.issuer}
                  </p>
                </div>

                <p className="text-gray-400 text-xs line-clamp-2">
                  {cert.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-6 border-t border-white/5 text-[10px] font-mono text-gray-400 transition-colors">
                <span className="flex items-center gap-1.5">
                  <span>Verified License</span>
                </span>
                <span className="text-gray-500">Udemy / Edunet / HR</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* POPUP DETAIL MODAL WITH IMAGE ZOOM */}
      {/* 
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            id="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-[#050816]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              id="cert-modal"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-[#0c0f24] border border-white/10 rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <button
                id="cert-modal-close"
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Close credentials popup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                <div className="space-y-1.5 pr-8">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span>Official Verified License</span>
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    Issued by <span className="font-semibold text-gray-300">{selectedCert.issuer}</span> on {selectedCert.date}
                  </p>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4">
                  {selectedCert.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>Certificate copy</span>
                    <button
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                      {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                      <span>{isZoomed ? "Aspect Scale Out" : "Inspect Closer"}</span>
                    </button>
                  </div>

                  <div
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="relative rounded-xl border border-white/5 bg-white/2 overflow-hidden cursor-zoom-in group select-none"
                  >
                    <motion.div
                      animate={{ scale: isZoomed ? 1.6 : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="relative overflow-hidden flex items-center justify-center h-48 sm:h-64"
                    >
                      <img
                        src={selectedCert.imageUrl}
                        alt={`${selectedCert.title} certificate copy`}
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="font-mono text-xs text-white bg-black/60 px-3 py-1.5 rounded-full flex items-center gap-1">
                          {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                          <span>Toggle view level</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={closeModal}
                    className="w-full py-2.5 rounded-xl font-display text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow shadow-cyan-400/10 hover:-translate-y-0.5"
                  >
                    <span>Close Preview</span>
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      */
      }

    </section>
  );
}
