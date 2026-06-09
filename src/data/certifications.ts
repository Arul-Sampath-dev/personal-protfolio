export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl: string;
  imageUrl: string;
}

export const certifications: Certification[] = [
  {
    id: "java-hackerrank",
    title: "Java Certification",
    issuer: "HackerRank",
    date: "Sep 2024",
    description: "Successfully validated advanced core Java competencies including object-oriented designs, exception handling, collections, multi-threading, and general software engineering data structures.",
    credentialUrl: "https://www.hackerrank.com/certificates/verify",
    imageUrl: "https://picsum.photos/seed/cert-java/800/600"
  },
  {
    id: "android-acmegrade",
    title: "Android Application Development",
    issuer: "Acmegrade",
    date: "Mar – Apr 2024",
    description: "Intensive 2-month Android development training demonstrating mastery over Native Java application architectures, activities lifecycle controls, XML layouts, local room/SQLite caches, and remote API bindings.",
    credentialUrl: "https://acmegrade.com/verification",
    imageUrl: "https://picsum.photos/seed/cert-android/800/600"
  },
  {
    id: "mongodb-udemy",
    title: "MongoDB Certification",
    issuer: "Udemy",
    date: "Sep 2024",
    description: "Complete database training validation focusing on aggregation frameworks, data modeling schemas, indexing strategies for search query optimizations, and secure Express backend controllers setups.",
    credentialUrl: "https://www.udemy.com/certificate/verify",
    imageUrl: "https://picsum.photos/seed/cert-mongodb/800/600"
  },
  {
    id: "mern-edunet",
    title: "MERN Stack Application Development",
    issuer: "Edunet Foundation",
    date: "Apr 2025",
    description: "Advanced full-stack developer certification specializing in developing scalable, responsive single page applications using React, Express controllers, Node backends, and MongoDB clusters.",
    credentialUrl: "https://verify.edunetfoundation.org",
    imageUrl: "https://picsum.photos/seed/cert-mern/800/600"
  },
  {
    id: "figma-udemy",
    title: "Figma for Mobile and Web Applications",
    issuer: "Udemy",
    date: "Apr 2025",
    description: "UI/UX credentials covering robust wireframing mechanics, components state variations (auto-layout v5, variables), interactive transition prototyping, and precise human usability audits.",
    credentialUrl: "https://www.udemy.com/certificate/verify",
    imageUrl: "https://picsum.photos/seed/cert-figma/800/600"
  },
  {
    id: "python-libraries",
    title: "Python Libraries (NumPy, Pandas, Matplotlib)",
    issuer: "Udemy",
    date: "May 2025",
    description: "Specialized credentials in engineering data dashboards. Covers Pandas dataframes sanitizations, multi-dimensional NumPy array vectors, and scientific visualizations with Matplotlib diagrams.",
    credentialUrl: "https://www.udemy.com/certificate/verify",
    imageUrl: "https://picsum.photos/seed/cert-python/800/600"
  }
];
