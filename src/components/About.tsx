import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, Calendar, Briefcase, ChevronRight } from "lucide-react";

export default function About() {
  const stats = [
    { label: "CGPA (B.Tech)", value: "8.59", desc: "Out of 10.0 scale", icon: GraduationCap, color: "text-indigo-400 border-indigo-500/10 bg-indigo-500/5" },
    { label: "Internships completed", value: "3", desc: "Full Stack, AI, Android", icon: Briefcase, color: "text-purple-400 border-purple-500/10 bg-purple-500/5" },
    { label: "Engineering Projects", value: "4+", desc: "AI GNN, web, JavaFX", icon: BookOpen, color: "text-cyan-400 border-cyan-500/10 bg-cyan-700/5" },
    { label: "Graduation", value: "2026", desc: "Information Technology", icon: Calendar, color: "text-pink-400 border-pink-500/10 bg-pink-500/5" }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#050816]/30 border-t border-white/5 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-purple-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16 space-y-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            01 . GET TO KNOW ME
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            About Me
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Bio text and statistics cards */}
          <div id="about-bio-stats" className="lg:col-span-7 space-y-8">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I am a B.Tech Information Technology graduate from University College of Engineering Tindivanam with a CGPA of 8.59. I am passionate about Artificial Intelligence, Software Engineering, Full Stack Development, and Product Design. 
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I enjoy constructing intelligent microservices, scalable databases, and user-centric web systems. My experience spans graph-based AI security papers, MERN web ecosystems, native Android mobile applications, and high-fidelity Figma prototypes.
            </p>

            {/* Structured Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`p-5 rounded-2xl border flex flex-col justify-between hover:bg-white/5 transition-all duration-300 group ${stat.color}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-semibold text-xs tracking-wider uppercase text-gray-400">
                        {stat.label}
                      </span>
                      <IconComponent className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="mt-4">
                      <div className="font-display font-bold text-3xl sm:text-4xl text-white group-hover:translate-x-1 transition-transform inline-block">
                        {stat.value}
                      </div>
                      <p className="text-gray-400 text-[10px] sm:text-xs">
                        {stat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Education Column representing scholastic records from resume */}
          <div id="about-education-journey" className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300">
              <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>Scholastic Record</span>
              </h3>

              {/* Education list matches credentials in resume page 1 */}
              <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                {/* University Degree */}
                <div id="education-item-college" className="relative pl-8">
                  <div className="absolute left-1.5 top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#050816]" />
                  <div className="space-y-1.5">
                    <span className="inline-block bg-indigo-500/10 text-indigo-300 text-[10px] font-mono px-2 py-0.5 rounded border border-indigo-500/20">
                      2022 – 2026
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base text-white">
                      B.Tech Information Technology
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      University College of Engineering Tindivanam (Anna University)
                    </p>
                    <div className="text-[10px] sm:text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>Current CGPA: 8.591 / 10.00</span>
                    </div>
                  </div>
                </div>

                {/* Higher Secondary HSC */}
                <div id="education-item-hsc" className="relative pl-8">
                  <div className="absolute left-1.5 top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#050816]" />
                  <div className="space-y-1.5">
                    <span className="inline-block bg-purple-500/10 text-purple-300 text-[10px] font-mono px-2 py-0.5 rounded border border-purple-500/20">
                      Completed 2022
                    </span>
                    <h4 className="font-display font-medium text-sm sm:text-base text-white">
                      Higher Secondary Certificate (HSC) – 84%
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Indo American Matric Higher Secondary School, Cheyyar
                    </p>
                  </div>
                </div>

                {/* Secondary School SSLV */}
                <div id="education-item-sslc" className="relative pl-8">
                  <div className="absolute left-1.5 top-1 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#050816]" />
                  <div className="space-y-1.5">
                    <span className="inline-block bg-cyan-500/10 text-cyan-300 text-[10px] font-mono px-2 py-0.5 rounded border border-cyan-500/20">
                      Completed 2020
                    </span>
                    <h4 className="font-display font-medium text-sm sm:text-base text-white">
                      Secondary School Leaving Certificate – 90.6%
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Indo American Matric Higher Secondary School, Cheyyar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft strengths panel */}
            <div id="about-strengths" className="p-5 rounded-2xl bg-[#0a0f26]/40 border border-white/5">
              <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest font-bold">
                Personal Pillars
              </span>
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div className="text-center p-2 rounded-lg bg-white/2 border border-white/5">
                  <span className="text-xs text-white font-medium">Adaptable</span>
                </div>
                <div className="text-center p-2 rounded-lg bg-white/2 border border-white/5">
                  <span className="text-xs text-white font-medium">Innovative</span>
                </div>
                <div className="text-center p-2 rounded-lg bg-white/2 border border-white/5">
                  <span className="text-xs text-white font-medium">Collaborative</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
