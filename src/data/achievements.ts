export interface Achievement {
  id: string;
  title: string;
  year: string;
  issuer: string;
  date: string;
  description: string;
  imagePlaceholder: string;
}

export const achievements: Achievement[] = [
  {
    id: "top-rank-holder",
    title: "Secured 'Top Rank Holder in Academics'",
    year: "2025",
    issuer: "University College of Engineering Tindivanam (Anna University)",
    date: "May 2025",
    description: "Honored with the Top Academic Rank Award in University College of Engineering Tindivanam for securing and maintaining a CGPA of 8.59 in B.Tech Information Technology across successive examination semesters.",
    imagePlaceholder: "https://picsum.photos/seed/rankaward/800/600"
  },
  {
    id: "hackathon-winner",
    title: "Secured 'First Place in Hackathon'",
    year: "2024",
    issuer: "University College of Engineering Tindivanam (Annual Symposium)",
    date: "October 2024",
    description: "Awarded Grand Winner for designing and coding an innovative software application responding to complex technical challenge requirements, utilizing responsive React web dashboards and high-fidelity wireframing flows.",
    imagePlaceholder: "https://picsum.photos/seed/hackaward/800/600"
  }
];
