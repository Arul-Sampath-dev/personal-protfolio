export interface ExperienceSubSection {
  title: string;
  responsibilities: string[];
  skills: string[];
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
  subSections?: ExperienceSubSection[];
  color: string; // Tailwind gradient/accent color
}

export const experiences: Internship[] = [
  {
    id: "vrnexgen",
    company: "VRNeXGen Technologies",
    role: "Junior Software Developer Intern",
    duration: "January 2026 – Present",
    responsibilities: [
      "Designed and developed scalable backend APIs using FastAPI with a clean layered architecture (API, Service, Repository, and Database layers).",
      "Created highly responsive workflows and complete role-based User Experiences for VRX-Learn LMS with Figma."
    ],
    skills: ["FastAPI", "Python", "PostgreSQL", "Figma", "JWT", "REST APIs", "UI/UX Design"],
    subSections: [
      {
        title: "Software Development (FastAPI Backend)",
        responsibilities: [
          "Designed and developed scalable backend APIs using FastAPI with a clean layered architecture (API, Service, Repository, and Database layers).",
          "Implemented JWT-based authentication with HTTP-only cookies and secure password hashing to enhance application security.",
          "Developed RESTful APIs for authentication and core application functionalities.",
          "Integrated PostgreSQL using psycopg2 and optimized database interactions through connection pooling and efficient query execution, improving application performance.",
          "Participated in debugging, testing, API documentation, and feature deployment to ensure application reliability and maintainability."
        ],
        skills: ["FastAPI", "Python", "PostgreSQL", "psycopg2", "JWT", "REST APIs", "Git"]
      },
      {
        title: "UI/UX Design (VRX-Learn LMS)",
        responsibilities: [
          "Designed complete user experiences for the VRX-Learn Learning Management System (LMS) using Figma.",
          "Created role-based dashboards and workflows for Admin, Instructor, and Learner user groups.",
          "Developed wireframes, user flows, low-fidelity and high-fidelity prototypes to validate design concepts.",
          "Designed responsive interfaces optimized for desktop and mobile experiences.",
          "Applied accessibility (WCAG) and usability principles to improve navigation, readability, and user engagement.",
          "Collaborated with stakeholders and developers to transform business requirements into intuitive user experiences.",
          "Produced reusable design components and design system guidelines to maintain consistency across the platform."
        ],
        skills: ["Figma", "Wireframing", "Prototyping", "User Flows", "Design Systems", "Responsive Design", "Accessibility (WCAG)", "UI/UX Research"]
      }
    ],
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
