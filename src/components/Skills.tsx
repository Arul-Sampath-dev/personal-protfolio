import { motion } from "motion/react";
import { Code, Layers, Server, Database, Figma, Cpu } from "lucide-react";
import { skillCategories } from "../data/skills";

// Dynamic map of category icons
const iconMap: Record<string, any> = {
  Code: Code,
  Layers: Layers,
  Server: Server,
  Database: Database,
  Figma: Figma,
  Cpu: Cpu
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#050816]/30 border-t border-white/5 overflow-hidden">
      {/* Visual neon gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16 space-y-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            03 . WEAPONRY OF CHOICE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Skills &amp; Expertise
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mt-1">
            Categorized overview of computational tools and frameworks I harness to design and engineer intelligent apps.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div id="skills-categories-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((group, groupIdx) => {
            const IconComponent = iconMap[group.icon] || Code;
            return (
              <motion.div
                key={group.category}
                id={`skill-category-${group.category.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/20 hover:bg-white/8 shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col group"
              >
                {/* Header info */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/15 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-indigo-300" />
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-gray-200 group-hover:text-white transition-colors">
                    {group.category}
                  </h3>
                </div>

                {/* Sub Skill items */}
                <div className="space-y-2.5 flex-grow">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-2.5 w-full px-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 hover:bg-white/[0.06] transition-all duration-300 group/item hover:-translate-y-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]/50 group-hover/item:bg-cyan-400 group-hover/item:scale-125 transition-all duration-300" />
                      <span className="text-xs text-gray-300 font-medium group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
