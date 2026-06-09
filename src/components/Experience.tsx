import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { experiences } from "../data/experience";
import { Calendar, Building2, Briefcase, Plus, Minus, ArrowRight } from "lucide-react";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="relative py-24 bg-[#050816] border-t border-white/5 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16 space-y-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            02 . PROFESSIONAL BACKGROUND
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Work Experience
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mt-1">
            My chronological intern growth path. Click on any block to expand full achievements and technical skills integration.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
        </div>

        {/* Vertical Timeline Structure */}
        <div id="experience-vertical-timeline" className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} id={`experience-card-${exp.id}`} className="relative pl-6 sm:pl-10">
                
                {/* Visual Node Pin */}
                <button
                  type="button"
                  aria-label={`Toggle description details for ${exp.company}`}
                  onClick={() => toggleExpand(exp.id)}
                  className={`absolute -left-3.5 top-1 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all duration-300 focus:outline-none ${
                    isExpanded 
                      ? "bg-[#050816] text-cyan-400 border-cyan-400 scale-110 shadow-lg shadow-cyan-400/20" 
                      : "bg-white/5 text-gray-400 border-white/10 hover:border-indigo-400"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </button>

                {/* Card Container */}
                <motion.div
                  layout="position"
                  className={`p-6 sm:p-8 rounded-2xl bg-white/5 border transition-all duration-300 cursor-pointer ${
                    isExpanded 
                      ? "border-cyan-500/20 shadow-xl shadow-cyan-500/5 bg-gradient-to-br from-white/5 via-[#0e1430]/70 to-[#0a0f26]/90" 
                      : "border-white/5 hover:border-white/10 hover:bg-white/7"
                  }`}
                  onClick={() => toggleExpand(exp.id)}
                >
                  {/* Top Row Context */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-4 h-4 text-cyan-400" />
                        <h3 className="font-display font-bold text-lg text-white">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm font-semibold">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-mono text-gray-400 bg-white/5 border border-white/5 px-3 py-1 rounded-full self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Summary Preview */}
                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
                    {exp.responsibilities[0]}
                  </p>

                  {/* Accordion Expansion containing complete items */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`responsibilities-${exp.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-white/5 mt-6 space-y-4">
                          <p className="font-display text-xs font-bold text-gray-400 uppercase tracking-widest">
                            Key Core Responsibilities
                          </p>
                          <ul className="space-y-3">
                            {exp.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start text-xs sm:text-sm text-gray-300 leading-relaxed">
                                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 mt-1 mr-2.5 flex-shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Skill Tags */}
                          <div className="pt-4">
                            <p className="font-display text-xs font-bold text-gray-400 uppercase tracking-widest mb-2.5">
                              Skills Forged
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="text-[10px] font-mono font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/15 px-3 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Dynamic interactive Footer action */}
                  <div className="flex items-center justify-between pt-4 mt-6 border-t border-white/5">
                    <span className="text-[11px] font-mono text-indigo-400 hover:text-indigo-300 transition-colors flex items-center space-x-1">
                      <span>{isExpanded ? "Collapse achievements" : "Read achievements"}</span>
                    </span>
                    <div className="text-gray-400 hover:text-white p-1">
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
