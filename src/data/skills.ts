export interface Skill {
  name: string;
  level: number; // Percentage out of 100 for visual bars
}

export interface SkillCategory {
  category: string;
  icon: string; // Will match with a Lucide Icon name dynamically
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 }
    ]
  },
  {
    category: "Frontend Dev",
    icon: "Layers",
    skills: [
      { name: "React", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 }
    ]
  },
  {
    category: "Backend Dev",
    icon: "Server",
    skills: [
      { name: "FastAPI", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 }
    ]
  },
  {
    category: "Databases & Cloud",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "SQL", level: 85 },
      { name: "Firebase (Auth / Firestore)", level: 90 }
    ]
  },
  {
    category: "UI/UX Design",
    icon: "Figma",
    skills: [
      { name: "Figma", level: 92 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 90 },
      { name: "User Research", level: 85 }
    ]
  },
  {
    category: "Tools & DevOps",
    icon: "Cpu",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Android Studio", level: 88 },
      { name: "Docker", level: 80 },
      { name: "Power BI", level: 82 }
    ]
  }
];
