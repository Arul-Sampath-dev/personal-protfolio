import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for glass background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor intersection observer for active link highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when element is near top-center
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050816]/70 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            id="brand-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <span className="font-display font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              AR
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1 bg-white/2 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  id={`nav-link-${item.href.slice(1)}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 focus:outline-none ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Social Icons & Contact CTAs */}
          <div id="nav-socials" className="hidden lg:flex items-center space-x-4">
            <a
              id="social-github-nav"
              href="https://github.com/Arul-Sampath-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile link"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="social-linkedin-nav"
              href="https://www.linkedin.com/in/arulsampath/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile link"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="social-email-nav"
              href="mailto:arulsampathcyr@gmail.com"
              aria-label="Send direct email"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              id="navbar-contact-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-4 py-1.5 rounded-full font-display text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-md hover:shadow-indigo-500/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center lg:hidden space-x-3">
            <a
              id="mobile-email-direct"
              href="mailto:arulsampathcyr@gmail.com"
              aria-label="Email directly"
              className="text-gray-400 hover:text-white p-1"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-1"
              aria-label="Toggle navigation drawer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-45 bg-[#050816]/95 border-b border-white/5 backdrop-blur-xl lg:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              <nav id="mobile-nav-list" className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.href}
                      id={`mobile-nav-link-${item.href.slice(1)}`}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`text-sm font-semibold tracking-wide py-1 border-b border-white/5 flex items-center justify-between transition-colors ${
                        isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {isActive && <div className="w-2 h-2 rounded-full bg-cyan-400" />}
                    </a>
                  );
                })}
              </nav>

              <div id="mobile-nav-socials" className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-6">
                  <a
                    id="mobile-github"
                    href="https://github.com/Arul-Sampath-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white flex items-center gap-2 text-sm"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    id="mobile-linkedin"
                    href="https://www.linkedin.com/in/arulsampath/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white flex items-center gap-2 text-sm"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
                <a
                  id="mobile-contact-cta"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="px-6 py-2 rounded-full font-display text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
                >
                  Message Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
