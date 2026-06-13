export interface Skill {
  name: string;
  level: number; // Percentage out of 100
}

export interface SkillCategory {
  category: string;
  icon: string; // Dynamic Lucide Icon name
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & LLM Eng (Learning)",
    icon: "Brain",
    skills: [
      { name: "LangChain", level: 90 },
      { name: "LangGraph", level: 85 },
      { name: "RAG Systems", level: 88 },
      { name: "Prompt Engineering", level: 92 },
      { name: "Vector Databases", level: 86 },
      { name: "AI Agent Development", level: 87 }
    ]
  },
  {
    category: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 90 }
    ]
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: [
      { name: "FastAPI", level: 92 },
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "REST APIs", level: 95 },
      { name: "JWT Authentication", level: 90 }
    ]
  },
  {
    category: "Frontend Development",
    icon: "Layers",
    skills: [
      { name: "React.js", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3 & Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 }
    ]
  },
  {
    category: "Databases & Cloud",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 88 },
      { name: "SQL", level: 90 },
      { name: "Firebase Authentication", level: 90 },
      { name: "Firebase Firestore", level: 90 }
    ]
  },
  {
    category: "Data Analysis & Visual",
    icon: "BarChart3",
    skills: [
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 88 },
      { name: "Matplotlib", level: 82 },
      { name: "Power BI", level: 85 }
    ]
  },
  {
    category: "UI/UX Design",
    icon: "Palette",
    skills: [
      { name: "Figma", level: 92 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 90 },
      { name: "User Research", level: 85 }
    ]
  },
  {
    category: "Mobile Development",
    icon: "Smartphone",
    skills: [
      { name: "Android Development", level: 85 },
      { name: "Java", level: 90 },
      { name: "XML", level: 85 }
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
      { name: "N8N Integration", level: 82 }
    ]
  }
];
