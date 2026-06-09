import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer-container" className="relative py-12 bg-[#030612] border-t border-white/5 select-none">
      
      {/* Decorative center glowing point */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left copyright notice */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-xs sm:text-sm text-gray-400 font-semibold">
            &copy; 2026 Arul Sampath
          </p>
        </div>

        {/* Center links row */}
        <div className="flex items-center space-x-6">
          <a
            id="footer-github"
            href="https://github.com/Arul-Sampath-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="GitHub profile link"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            id="footer-linkedin"
            href="https://www.linkedin.com/in/arulsampath/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="LinkedIn profile link"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            id="footer-email"
            href="mailto:arulsampathcyr@gmail.com"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Send direct email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top selector */}
        <button
          onClick={scrollToTop}
          className="group flex items-center space-x-1.5 text-xs text-gray-400 hover:text-white bg-white/5 border border-white/5 hover:border-white/10 px-3.5 py-1.5 rounded-full transition-all"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
