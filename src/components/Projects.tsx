import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects, DetailedProject } from "../data/projects";
import { ExternalLink, Github, Sparkles, X, Shield, Terminal, Globe, Cpu, Trophy } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  // Lock scroll when modal is active
  const openModal = (project: DetailedProject) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="projects" className="relative py-24 bg-[#050816] border-t border-white/5 overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-[30%] right-[-15%] w-[500px] h-[500px] rounded-full bg-indigo-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] rounded-full bg-cyan-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16 space-y-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            04 . SHOWCASE PORTFOLIO
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mt-1">
            Explore products combining academic AI research, production Web stacks, and Object Oriented conventions.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
        </div>

        {/* Dynamic Bento Layout */}
        <div className="space-y-12">
          
          {/* FEATURED PROJECT (Project 1) */}
          {projects.filter(p => p.featured).map((project) => (
            <motion.div
              key={project.id}
              id="featured-project-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-r from-indigo-500/20 via-purple-500/30 to-cyan-500/20 hover:from-indigo-500/40 hover:via-purple-500/50 hover:to-cyan-500/40 transition-all duration-500 shadow-2xl shadow-indigo-500/5"
            >
              <div className="relative rounded-[23px] bg-[#0c0f24]/90 p-8 sm:p-10 lg:grid lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual left stats badge for GNN models */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:border-r lg:border-white/5 lg:pr-8 mb-6 lg:mb-0">
                  <div className="flex items-center space-x-2 text-cyan-400 bg-cyan-950/20 border border-cyan-500/20 px-3.5 py-1.5 rounded-full w-fit">
                    <Shield className="w-4 h-4" />
                    <span className="font-mono text-[11px] font-bold tracking-wider uppercase">Final Year Academic Project</span>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs text-indigo-400">Featured Innovation</span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    Solidity vulnerability tracing reimagined by compounding semantic code parsing with Structure-Aware Transformer GNN graph connections.
                  </p>

                  {/* Highlight Accuracy Metrics */}
                  {project.accuracy && (
                    <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/15 flex items-center space-x-3.5 w-fit shadow-inner">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="font-mono text-[10px] uppercase text-indigo-300 tracking-wider">Classification Score</p>
                        <p className="font-display font-bold text-base text-white">{project.accuracy}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right content details summary */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                  
                  <div className="space-y-4">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech badging */}
                    <div className="flex flex-wrap gap-2.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-500/20 px-3 py-1 rounded-full shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons controls row */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {/* Commented out for Version 2:
                    <button
                      id="view-details-featured"
                      onClick={() => openModal(project)}
                      className="px-6 py-3 rounded-xl font-display text-xs font-bold text-white bg-indigo-500 hover:bg-indigo-600 transition-all flex items-center space-x-2 shadow-lg shadow-indigo-500/10 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Terminal className="w-4 h-4" />
                      <span>View Full Case Study</span>
                    </button>
                    */}
                    {project.githubLinks ? (
                      project.githubLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl font-display text-xs font-bold text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center space-x-2 hover:-translate-y-0.5 active:translate-y-0"
                        >
                          <Github className="w-4 h-4" />
                          <span>{link.label}</span>
                        </a>
                      ))
                    ) : (
                      project.githubLink && (
                        <a
                          id="github-link-featured"
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl font-display text-xs font-bold text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center space-x-2 hover:-translate-y-0.5 active:translate-y-0"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      )
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

          {/* STANDARD PROJECTS LIST */}
          <div id="standard-projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-[#0c102b]/40 shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                
                {/* Decorative spotlight node */}
                <div className="absolute top-0 right-0 w-[80px] h-[80px] rounded-full bg-indigo-500/5 blur-[35px] pointer-events-none group-hover:bg-indigo-500/10 transition-colors" />

                <div className="space-y-4">
                  
                  {/* Category Indicators */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold tracking-widest uppercase bg-cyan-950/20 px-2.5 py-1 rounded border border-cyan-500/15">
                      {project.status ? project.status : (project.techStack[0] || "Software")}
                    </span>
                    <Terminal className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badging */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono font-medium text-gray-400 bg-white/2 px-2 py-0.5 rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[9px] font-mono text-gray-500 px-2 py-0.5">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Trigger controls */}
                <div className="flex items-center justify-end pt-6 mt-6 border-t border-white/5">
                  {/* Commented out for Version 2:
                  <button
                    id={`view-details-${project.id}`}
                    onClick={() => openModal(project)}
                    className="text-xs font-display font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
                  >
                    <span>View Case Study</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                  */}

                  {project.githubLink && (
                    <a
                      id={`github-link-${project.id}`}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white p-1"
                      aria-label="GitHub link"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* FULLSCREEN STUDY MODAL OVERLAY */}
      {/* 
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="fullscreen-modal-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-[#050816]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              id="fullscreen-modal-content"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-5xl h-[85vh] bg-[#0c0f24] border border-white/10 rounded-3xl overflow-hidden flex flex-col"
            >
              
              <button
                id="modal-close-btn"
                onClick={closeModal}
                className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white focus:outline-none transition-all duration-200"
                aria-label="Close Case Study Details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 overflow-y-auto p-8 sm:p-10 md:p-12 space-y-8 select-text">
                
                <div className="space-y-4 pr-10">
                  <div className="flex items-center space-x-2 text-indigo-400 font-mono text-xs uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span>Project Case Study</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 font-display text-sm sm:text-base italic">
                    &ldquo;{selectedProject.tagline}&rdquo;
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3.5 pt-2">
                    {selectedProject.accuracy && (
                      <div className="bg-yellow-500/10 text-yellow-300 text-xs font-mono px-3 py-1 rounded border border-yellow-500/25 flex items-center space-x-1.5 shadow-sm">
                        <Trophy className="w-3.5 h-3.5" />
                        <span>{selectedProject.accuracy}</span>
                      </div>
                    )}
                    {selectedProject.status && (
                      <span className="bg-purple-500/10 text-purple-300 text-xs font-mono px-3 py-1 rounded border border-purple-500/25">
                        {selectedProject.status}
                      </span>
                    )}
                    {selectedProject.githubLinks ? (
                      selectedProject.githubLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-white text-xs font-mono px-3 py-1 rounded border border-indigo-500/20 flex items-center space-x-1.5 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>{link.label}</span>
                        </a>
                      ))
                    ) : (
                      selectedProject.githubLink && (
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-mono px-3 py-1 rounded border border-white/5 flex items-center space-x-1.5 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub Source</span>
                        </a>
                      )
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-white/5 pt-8">
                  
                  <div className="lg:col-span-8 space-y-8">
                    
                    <div className="space-y-3">
                      <h4 className="font-display font-bold text-sm sm:text-base text-white border-l-2 border-indigo-500 pl-3">
                        Project Overview
                      </h4>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {selectedProject.details.overview}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-display font-bold text-sm sm:text-base text-white border-l-2 border-cyan-500 pl-3">
                        The Problem Statement
                      </h4>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {selectedProject.details.problemStatement}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-display font-bold text-sm sm:text-base text-white border-l-2 border-purple-500 pl-3">
                        Technical Architecture
                      </h4>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {selectedProject.details.architecture}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-display font-bold text-sm sm:text-base text-white border-l-2 border-indigo-500 pl-3">
                        Methodology &amp; Implementation Phases
                      </h4>
                      <ol className="space-y-3 pl-1.5">
                        {selectedProject.details.methodology.map((meth, i) => (
                          <li key={i} className="text-xs sm:text-sm text-gray-300 leading-relaxed flex items-start">
                            <span className="font-mono text-cyan-400 font-bold mr-3">{i+1}.</span>
                            <span>{meth}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-display font-bold text-sm sm:text-base text-white border-l-2 border-cyan-500 pl-3">
                        Outcomes &amp; Metric Successes
                      </h4>
                      <ul className="space-y-3 pl-1.5">
                        {selectedProject.details.results.map((res, i) => (
                          <li key={i} className="text-xs sm:text-sm text-gray-300 leading-relaxed flex items-start">
                            <span className="text-green-400 mr-3 flex-shrink-0">✓</span>
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  <div className="lg:col-span-4 space-y-6">
                    
                    <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-3">
                      <p className="font-display text-xs font-bold text-white uppercase tracking-wider">
                        Technologies Leveraged
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono text-gray-400 bg-[#050816] px-2.5 py-1 rounded border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex items-center justify-between">
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.githubLinks ? (
                      selectedProject.githubLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-xl font-display text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 hover:border-indigo-400/30 transition-all shadow-md hover:-translate-y-0.5 flex items-center space-x-1.5"
                        >
                          <Github className="w-4 h-4" />
                          <span>{link.label}</span>
                        </a>
                      ))
                    ) : (
                      selectedProject.githubLink && (
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 rounded-xl font-display text-xs font-bold text-white bg-indigo-500 hover:bg-indigo-600 flex items-center space-x-2 transition-all shadow-md hover:-translate-y-0.5"
                        >
                          <Github className="w-4 h-4" />
                          <span>Review In GitHub</span>
                        </a>
                      )
                    )}
                  </div>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2.5 rounded-xl font-display text-xs font-bold text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
                  >
                    Close Study
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
