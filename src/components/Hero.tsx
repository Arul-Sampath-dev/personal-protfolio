import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles, Terminal } from "lucide-react";
// @ts-ignore
import profileImg from "../profile.jpeg";

const roles = [
  "Software Developer",
  "FastAPI Developer",
  "Full-Stack Developer",
  "Backend Engineer",
  "AI Engineer",
  "UI / UX Designer"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [profilePath, setProfilePath] = useState(profileImg);
  const [useFallback, setUseFallback] = useState(false);

  const handleImageError = () => {
    setUseFallback(true);
  };

  // Auto-switch job roles with custom delayed timers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050816]"
    >
      {/* Background visual decorations matching Linear / Vercel style */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />
      
      {/* Interactive geometric mesh grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left side: Bio text */}
        <div id="hero-left-content" className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          <div id="hero-name-header" className="space-y-2">
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 font-mono text-sm uppercase tracking-widest"
            >
              Hi, I am
            </motion.h4>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none"
            >
              Arul Sampath
            </motion.h1>

            <div className="h-10 sm:h-14 flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[currentRoleIndex]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="font-display font-bold text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 tracking-tight"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            id="hero-tagline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed font-sans"
          >
            Building scalable backend systems, AI-powered applications, and modern web experiences with FastAPI, React, and PostgreSQL. Passionate about AI Engineering, LLM applications, and creating intelligent software solutions.
          </motion.p>

          {/* Socials Link Row */}
          <motion.div
            id="hero-social-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-5"
          >
            <a
              id="hero-social-github"
              href="https://github.com/Arul-Sampath-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Page"
              className="group p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-indigo-500/30 text-gray-400 hover:text-white transition-all duration-300"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              id="hero-social-linkedin"
              href="https://www.linkedin.com/in/arulsampath/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Page"
              className="group p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-purple-500/30 text-gray-400 hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              id="hero-social-mail"
              href="mailto:arulsampathcyr@gmail.com"
              aria-label="Email Address"
              className="group p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-cyan-500/30 text-gray-400 hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="flex items-center space-x-1 sm:space-x-2 text-xs font-mono text-cyan-400 bg-cyan-900/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
              <Terminal className="w-3.5 h-3.5 animate-pulse" />
              <span>CGPA: 8.59</span>
            </div>
          </motion.div>

          {/* Action Call buttons */}
          <motion.div
            id="hero-action-buttons-container"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
          >
            <button
              id="hero-projects-cta"
              onClick={() => handleScrollTo("#projects")}
              className="group flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-display text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:opacity-90 shadow-lg shadow-indigo-500/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              id="hero-resume-cta"
              href="/Arul_Resume.pdf"
              download="Arul_Resume.pdf"
              className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-display text-xs sm:text-sm font-semibold text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 active:scale-98 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <button
              id="hero-contact-cta"
              onClick={() => handleScrollTo("#contact")}
              className="flex items-center justify-center px-6 py-3.5 rounded-xl font-display text-xs sm:text-sm font-semibold text-gray-400 hover:text-gray-200 hover:underline transition-all"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right side: Futuristic AI representation / Profile image */}
        <div id="hero-right-visual" className="lg:col-span-5 flex justify-center items-center relative py-8">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center"
          >
            {/* Spinning decorative background gradient rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 animate-[spin_12s_linear_infinite] opacity-20 blur-xl" />
            
            <div className="absolute inset-4 rounded-full border border-dashed border-indigo-500/15 animate-[spin_24s_linear_infinite]" />
            <div className="absolute inset-10 rounded-full border border-double border-cyan-500/10 animate-[spin_16s_linear_infinite_reverse]" />

            {/* Floating visual nodes mapping to AI graph sensor motif */}
            <div className="absolute top-[10%] right-[12%] w-3 h-3 rounded-full bg-indigo-400 animate-ping" />
            <div className="absolute top-[10%] right-[12%] w-3 h-3 rounded-full bg-indigo-500 border border-white/20 shadow-lg shadow-indigo-500/50" />
            
            <div className="absolute bottom-[25%] left-[5%] w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <div className="absolute bottom-[25%] left-[5%] w-2.5 h-2.5 rounded-full bg-cyan-500 border border-white/20" />

            <div className="absolute top-[75%] right-[8%] w-3.5 h-3.5 rounded-full bg-purple-500 animate-pulse border border-white/20" />

            {/* Main Interactive Glass Avatar container */}
            <div className="relative w-[82%] h-[82%] rounded-full p-2.5 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md group overflow-hidden">
              <div className="relative w-full h-full rounded-full bg-[#0a0f26] border border-white/5 overflow-hidden flex items-center justify-center">
                
                {/* Simulated digital scanning visual overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-transparent z-10" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[bounce_4s_infinite] opacity-50 z-20" />
                
                {!useFallback ? (
                  <img
                    src={profilePath}
                    alt="Arul Sampath"
                    onError={handleImageError}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500 select-none z-0"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  /* SVG glowing high-concept geometric profile mask */
                  <svg
                    viewBox="0 0 200 200"
                    className="w-[75%] h-[75%] text-indigo-400 opacity-80 group-hover:scale-105 group-hover:text-cyan-400 transition-all duration-500"
                    fill="none"
                  >
                    {/* Glowing core network dots */}
                    <circle cx="100" cy="55" r="18" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" className="animate-[spin_20s_linear_infinite]" />
                    <circle cx="100" cy="55" r="6" fill="currentColor" />
                    
                    {/* Neural connections */}
                    <path d="M100 73 L100 115" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M100 85 L60 110" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M100 85 L140 110" stroke="currentColor" strokeWidth="1.5" />
                    
                    <circle cx="60" cy="110" r="4" fill="currentColor" />
                    <circle cx="140" cy="110" r="4" fill="currentColor" />
                    
                    {/* Main stylized structural shoulder grid representation */}
                    <path
                      d="M50 160 C50 135, 70 120, 100 120 C130 120, 150 135, 150 160"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M35 175 C35 145, 60 130, 100 130 C140 130, 165 145, 165 175"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                    />
                  </svg>
                )}

                {/* Subtext info panel inside avatar */}
                <div className="absolute bottom-6 left-0 right-0 text-center z-20">
                  <span className="font-mono text-[10px] sm:text-xs text-cyan-300 tracking-[0.25em] uppercase font-bold bg-[#050816]/70 px-4 py-1 rounded-full border border-white/5">
                    ARUL S
                  </span>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
