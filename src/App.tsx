/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="app-root-container" className="min-h-screen bg-[#050816] text-[#f3f4f6] font-sans antialiased relative selection:bg-purple-500/30 selection:text-white pb-safe">
      
      {/* Dynamic persistent background subtle ambient glow */}
      <div className="absolute top-[5%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-500/3 blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-500/2 blur-[140px] pointer-events-none" />
      <div className="absolute top-[75%] left-[10%] w-[55vw] h-[55vw] rounded-full bg-cyan-500/2 blur-[140px] pointer-events-none" />

      {/* Structured components flow */}
      <Navbar />
      
      <main id="app-viewport-sections" className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      
    </div>
  );
}
