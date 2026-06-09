import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { achievements, Achievement } from "../data/achievements";
import { Award, Clock, Building2, Eye, ZoomIn, ZoomOut, X } from "lucide-react";

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = (ach: Achievement) => {
    setSelectedAchievement(ach);
    setIsZoomed(false);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedAchievement(null);
    setIsZoomed(false);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="achievements" className="relative py-24 bg-[#050816]/30 border-t border-white/5 overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-[30%] left-[-15%] w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16 space-y-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            05 . MILESTONES ACQUIRED
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Honors &amp; Achievements
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mt-1">
            Scholastic and structural hackathon credentials demonstrating competitive design capabilities.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div id="achievements-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.id}
              id={`achievement-card-${ach.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              /* onClick={() => openModal(ach)} */
              className="group p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/10 hover:bg-white/5 transition-all duration-300 cursor-default flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 transition-transform">
                    <Award className="w-5 h-5 text-purple-300" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded">
                    Year: {ach.year}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-white transition-colors">
                  {ach.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5 text-xs text-gray-500 font-mono transition-colors">
                <span className="flex items-center gap-1">
                  <span>Authorized Credential</span>
                </span>
                <span className="text-[10px] text-gray-500">{ach.issuer.slice(0, 30)}...</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* POPUP DETAIL MODAL WITH IMAGE ZOOM */}
      {/* 
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            id="achievement-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-[#050816]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              id="achievement-modal"
              initial={{ scale: 0.95, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 12 }}
              className="relative w-full max-w-2xl bg-[#0c0f24] border border-white/10 rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <button
                id="achievement-close"
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                <div className="space-y-2 pr-8">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Honor Decoration</span>
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    {selectedAchievement.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-4 text-xs font-mono">
                  <div className="space-y-1">
                    <p className="text-gray-500 uppercase">Issuing Body</p>
                    <p className="text-gray-300 font-sans font-medium flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      <span>{selectedAchievement.issuer}</span>
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500 uppercase">Date of Honor</p>
                    <p className="text-gray-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      <span>{selectedAchievement.date}</span>
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {selectedAchievement.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>Certificate Visual Representation</span>
                    <button
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                    >
                      {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                      <span>{isZoomed ? "Zoom Out" : "Zoom In"}</span>
                    </button>
                  </div>

                  <div
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="relative rounded-xl border border-white/5 bg-white/2 overflow-hidden cursor-zoom-in group select-none"
                  >
                    <motion.div
                      animate={{ scale: isZoomed ? 1.5 : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="relative overflow-hidden flex items-center justify-center h-48 sm:h-64"
                    >
                      <img
                        src={selectedAchievement.imagePlaceholder}
                        alt={`${selectedAchievement.title} visual credential placeholder`}
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="font-mono text-xs text-white bg-black/60 px-3 py-1.5 rounded-full flex items-center gap-1">
                          {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                          <span>Toggle Zoom scale</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  <p className="text-[10px] font-mono text-gray-500 text-center">
                    Note: Credential validation generated dynamically for audit references.
                  </p>
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
