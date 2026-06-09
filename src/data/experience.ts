export interface Internship {
  id: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
  color: string; // Tailwind gradient/accent color
}

export const experiences: Internship[] = [
  {
    id: "vrnexgen",
    company: "VRneXGen",
    role: "Junior Software Developer Intern",
    duration: "January 2026 – Present",
    responsibilities: [
      "Contributed to the UI/UX design of VRX-Learn, a Learning Management System (LMS).",
      "Designed highly responsive dashboards and administrative interfaces.",
      "Created intuitive course management workflows and user journey flows.",
      "Developed interactive prototypes and comprehensive wireframes using Figma.",
      "Focused heavily on web accessibility (a11y), usability, and cohesive multi-role user experiences."
    ],
    skills: ["UI/UX Design", "Figma", "Wireframing", "React", "Usability"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "systemtron",
    company: "Systemtron",
    role: "Web Developer Intern",
    duration: "July 2025 – August 2025",
    responsibilities: [
      "Worked on dynamic web development projects with full-stack implementation.",
      "Assisted in frontend performance optimization and backend routing integration.",
      "Created responsive web pages adhering to modern styling standards.",
      "Collaborated with developers to debug existing features and implement enhancements."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "acmegrade",
    company: "Acmegrade",
    role: "Android Application Developer Intern",
    duration: "March 2024 – April 2024",
    responsibilities: [
      "Developed native Android applications using Java and XML within Android Studio.",
      "Implemented standard user interfaces, interactive application logics, and material design rules.",
      "Worked on local database storage integration and event listeners.",
      "Tested and debugged layouts on multiple virtual and physical device sizes."
    ],
    skills: ["Java", "XML", "Android Studio", "Material Design", "APIs"],
    color: "from-cyan-500 to-blue-500"
  }
];
