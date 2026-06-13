import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { experiences } from "../data/experience";
import { Calendar, Building2, Briefcase, Plus, Minus, ArrowRight, Users } from "lucide-react";

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
                        <div className="pt-6 border-t border-white/5 mt-6 space-y-6">
                          {exp.subSections && exp.subSections.length > 0 ? (
                            exp.subSections.map((sub, sIdx) => (
                              <div key={sIdx} className="space-y-4 border-b border-white/5 last:border-0 pb-6 last:pb-0">
                                <h4 className="font-display text-sm font-bold text-cyan-300">
                                  {sub.title}
                                </h4>
                                <ul className="space-y-2.5">
                                  {sub.responsibilities.map((resp, rIdx) => (
                                    <li key={rIdx} className="flex items-start text-xs sm:text-sm text-gray-300 leading-relaxed">
                                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 mt-1 mr-2.5 flex-shrink-0" />
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                                <div className="space-y-2">
                                  <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block">
                                    Tools / Technologies:
                                  </span>
                                  <div className="flex flex-wrap gap-2">
                                    {sub.skills.map((skill) => (
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
                            ))
                          ) : (
                            <>
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
                            </>
                          )}
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

        {/* Leadership & Responsibilities Block */}
        <div id="leadership-responsibilities-block" className="mt-20 pt-16 border-t border-white/5">
          <div className="flex flex-col items-start text-left mb-10 space-y-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 animate-pulse">
              02B . LEADERSHIP ROLES
            </span>
            <h3 className="font-display font-bold text-2xl text-white flex items-center gap-2">
              <Users className="w-5.5 h-5.5 text-cyan-400" />
              <span>Leadership & Responsibilities</span>
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg">
              Active contributions and community leading roles within the university ecosystem.
            </p>
          </div>

          <motion.div
            id="leadership-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 bg-gradient-to-br from-white/3 via-[#0e1430]/70 to-[#050816] group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="space-y-1">
                <h4 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  Student Placement Coordinator
                </h4>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Building2 className="w-4 h-4 text-gray-500" />
                  <span>University College of Engineering, Tindivanam</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/15 px-3 py-1 rounded-full self-start sm:self-center">
                <Calendar className="w-3.5 h-3.5" />
                <span>2024 – 2026</span>
              </div>
            </div>

            <ul className="space-y-3.5">
              <li className="flex items-start text-xs sm:text-sm text-gray-300 leading-relaxed">
                <ArrowRight className="w-4 h-4 text-indigo-400 mt-1 mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <span>Coordinated placement activities between students, faculty, and recruiters.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm text-gray-300 leading-relaxed">
                <ArrowRight className="w-4 h-4 text-indigo-400 mt-1 mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <span>Assisted in organizing recruitment drives and career development initiatives.</span>
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
