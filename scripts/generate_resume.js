import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

function generateResumePDF() {
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const destPath = path.join(publicDir, "Arul_Resume.pdf");
  console.log(`Generating resume PDF at: ${destPath}`);

  // Create a new A4 document
  // A4 size: 595.28 x 841.89 points
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 40, bottom: 40, left: 40, right: 40 },
    bufferPages: true
  });

  const writeStream = fs.createWriteStream(destPath);
  doc.pipe(writeStream);

  // Theme Colors
  const primaryColor = "#0F172A"; // Dark slate for primary text
  const accentColor = "#4F46E5";  // Indigo for headers
  const textColor = "#334155";    // Muted slate for body text
  const lightBg = "#F8FAFC";      // Very light background for sidebar highlight
  const dividerColor = "#E2E8F0";  // Light grey for lines

  // -------------------------------------------------------------
  // HEADER SECTION (Spans across full width)
  // -------------------------------------------------------------
  doc.fillColor(primaryColor);
  doc.font("Helvetica-Bold").fontSize(26).text("ARUL SAMPATH", 40, 40);
  
  doc.fillColor(accentColor);
  doc.font("Helvetica-Bold").fontSize(11).text(
    "PYTHON DEVELOPER  |  FASTAPI SPECIALIST  |  AI & BACKEND ENGINEER",
    40,
    72,
    { characterSpacing: 1 }
  );

  // Small contact block under title
  doc.fillColor(textColor);
  doc.font("Helvetica").fontSize(8.5).text(
    "Email: arulsampathcyr@gmail.com   |   Phone: +91 9488421832   |   Location: Chennai, India",
    40,
    88
  );
  doc.text(
    "GitHub: github.com/Arul-Sampath-dev   |   LinkedIn: linkedin.com/in/arul-sampath-cyr",
    40,
    100
  );

  // Line Divider under Header
  doc.strokeColor(dividerColor).lineWidth(1).moveTo(40, 115).lineTo(555, 115).stroke();

  // -------------------------------------------------------------
  // TWO COLUMN LAYOUT (Starts at y = 130)
  // Left Column: Width 165 (from x=40 to x=205)
  // Right Column: Width 330 (from x=225 to x=555)
  // -------------------------------------------------------------
  const leftColX = 40;
  const leftColWidth = 165;
  const rightColX = 225;
  const rightColWidth = 330;
  let leftY = 130;
  let rightY = 130;

  // --- LEFT COLUMN CONTENT ---

  // Professional Summary
  doc.fillColor(accentColor).font("Helvetica-Bold").fontSize(10.5).text("PROFILE SUMMARY", leftColX, leftY);
  leftY += 15;
  doc.fillColor(textColor).font("Helvetica").fontSize(8.2).text(
    "Ambitious Python Developer & AI Engineer focused on building scalable backends, microservices, and AI-powered workflow solutions. Highly skilled in FastAPI, PostgreSQL, LangChain, and structured AI agent development.",
    leftColX,
    leftY,
    { width: leftColWidth, align: "justify", lineGap: 2.5 }
  );
  leftY += 75;

  // Education Block
  doc.fillColor(accentColor).font("Helvetica-Bold").fontSize(10.5).text("EDUCATION", leftColX, leftY);
  leftY += 15;
  doc.fillColor(primaryColor).font("Helvetica-Bold").fontSize(8.5).text("B.Tech Information Tech", leftColX, leftY);
  leftY += 12;
  doc.fillColor(textColor).font("Helvetica-Oblique").fontSize(8).text("University College of Engineering, Tindivanam", leftColX, leftY, { width: leftColWidth });
  leftY += 24;
  doc.fillColor(textColor).font("Helvetica").fontSize(8).text("CGPA: 8.59 / 10.0", leftColX, leftY);
  leftY += 12;
  doc.font("Helvetica-Bold").text("Duration: 2022 - 2026", leftColX, leftY);
  leftY += 25;

  // Technical Skills Block
  doc.fillColor(accentColor).font("Helvetica-Bold").fontSize(10.5).text("TECHNICAL SKILLS", leftColX, leftY);
  leftY += 15;

  const skillGroups = [
    { name: "Languages", items: "Python, Java, JavaScript, SQL, HTML5/CSS3" },
    { name: "Backend", items: "FastAPI, Node.js, Express.js, REST APIs, JWT Auth" },
    { name: "Frontend", items: "React.js, Tailwind CSS, Framer Motion" },
    { name: "AI & LLMs", items: "LangChain, LangGraph, RAG, AI Agents, Vector DBs" },
    { name: "Databases & Cloud", items: "PostgreSQL, MongoDB, Firebase Auth & Firestore" },
    { name: "Data & Analytics", items: "NumPy, Pandas, Matplotlib, Power BI" },
    { name: "UI/UX Design", items: "Figma, Wireframing, Prototyping" },
    { name: "Tools", items: "Git & GitHub, VS Code, Android Studio, Docker, N8N" }
  ];

  skillGroups.forEach(group => {
    doc.fillColor(primaryColor).font("Helvetica-Bold").fontSize(8).text(group.name, leftColX, leftY);
    leftY += 10;
    doc.fillColor(textColor).font("Helvetica").fontSize(7.5).text(group.items, leftColX, leftY, { width: leftColWidth, lineGap: 1.5 });
    leftY += doc.heightOfString(group.items, { width: leftColWidth, fontSize: 7.5 }) + 6;
  });


  // --- RIGHT COLUMN CONTENT ---

  // Work Experience Header
  doc.fillColor(accentColor).font("Helvetica-Bold").fontSize(11).text("PROFESSIONAL EXPERIENCE", rightColX, rightY);
  rightY += 15;

  // VRNeXGen Job Title
  doc.fillColor(primaryColor).font("Helvetica-Bold").fontSize(9.5).text("Junior Software Developer Intern", rightColX, rightY);
  doc.fillColor(textColor).font("Helvetica-Bold").fontSize(8.5).text("VRNeXGen Technologies  |  Jan 2026 – Present", rightColX, rightY + 12);
  rightY += 27;

  // Section 1: Software Development (FastAPI Backend)
  doc.fillColor(accentColor).font("Helvetica-Bold").fontSize(8.5).text("Software Development (FastAPI Backend)", rightColX, rightY);
  rightY += 12;

  const backendBullets = [
    "Designed and developed scalable backend APIs using FastAPI with a clean layered architecture (API, Service, Repository, and Database layers).",
    "Implemented JWT-based authentication with HTTP-only cookies and secure password hashing to enhance application security.",
    "Developed RESTful APIs for authentication and core application functionalities.",
    "Integrated PostgreSQL using psycopg2 and optimized database interactions through connection pooling and efficient query execution, improving application performance.",
    "Participated in debugging, testing, API documentation, and feature deployment to ensure application reliability."
  ];

  backendBullets.forEach(bullet => {
    doc.fillColor(primaryColor).font("Helvetica-Bold").fontSize(8).text("•", rightColX, rightY);
    doc.fillColor(textColor).font("Helvetica").fontSize(8).text(bullet, rightColX + 8, rightY, { width: rightColWidth - 8, lineGap: 2 });
    rightY += doc.heightOfString(bullet, { width: rightColWidth - 8, fontSize: 8, lineGap: 2 }) + 3;
  });

  rightY += 5;

  // Section 2: UI/UX Design (VRX-Learn LMS)
  doc.fillColor(accentColor).font("Helvetica-Bold").fontSize(8.5).text("UI/UX Design (VRX-Learn LMS)", rightColX, rightY);
  rightY += 12;

  const uiuxBullets = [
    "Designed complete user experiences for the VRX-Learn LMS using Figma.",
    "Created role-based dashboards and workflows for Admin, Instructor, and Learner user groups.",
    "Developed wireframes, user flows, low-fidelity and high-fidelity prototypes to validate design concepts.",
    "Applied accessibility (WCAG) and usability principles to improve navigation and user engagement.",
    "Produced reusable design components and design system guidelines to maintain consistency."
  ];

  uiuxBullets.forEach(bullet => {
    doc.fillColor(primaryColor).font("Helvetica-Bold").fontSize(8).text("•", rightColX, rightY);
    doc.fillColor(textColor).font("Helvetica").fontSize(8).text(bullet, rightColX + 8, rightY, { width: rightColWidth - 8, lineGap: 2 });
    rightY += doc.heightOfString(bullet, { width: rightColWidth - 8, fontSize: 8, lineGap: 2 }) + 3;
  });

  rightY += 12;

  // Core Projects Header
  doc.fillColor(accentColor).font("Helvetica-Bold").fontSize(11).text("KEY PORTFOLIO PROJECTS", rightColX, rightY);
  rightY += 15;

  // Project 1
  doc.fillColor(primaryColor).font("Helvetica-Bold").fontSize(9).text("Smart Contract Security Sensing via Graph Neural Networks", rightColX, rightY);
  rightY += 11;
  doc.fillColor(textColor).font("Helvetica-Oblique").fontSize(8).text("Fine-tuned GraphCodeBERT & PyTorch GNN  |  Accuracy: 97.96%", rightColX, rightY);
  rightY += 11;
  const project1Details = "Designed a structural security validation pipeline converting Solidity Smart Contracts to abstract syntax control-dependency graphs. Achieved robust zero-day vulnerability scanning metrics, outperforming traditional heuristic-based static code analyzers by 14%.";
  doc.fillColor(textColor).font("Helvetica").fontSize(8).text(project1Details, rightColX, rightY, { width: rightColWidth, lineGap: 1.5 });
  rightY += doc.heightOfString(project1Details, { width: rightColWidth, fontSize: 8, lineGap: 1.5 }) + 8;

  // Project 2
  doc.fillColor(primaryColor).font("Helvetica-Bold").fontSize(9).text("AI Agent Builder SaaS Plateau", rightColX, rightY);
  rightY += 11;
  doc.fillColor(textColor).font("Helvetica-Oblique").fontSize(8).text("FastAPI, LangChain, React Canvas, PostgreSQL", rightColX, rightY);
  rightY += 11;
  const project2Details = "Engineered stateful multi-agent orchestrator workflows allowing developers to assemble, wire, and run bespoke generative AI agents. Integrates asynchronous response routing feeds, stateful session memory databases, and secure workspaces.";
  doc.fillColor(textColor).font("Helvetica").fontSize(8).text(project2Details, rightColX, rightY, { width: rightColWidth, lineGap: 1.5 });
  rightY += doc.heightOfString(project2Details, { width: rightColWidth, fontSize: 8, lineGap: 1.5 }) + 12;


  // Leadership Header
  doc.fillColor(accentColor).font("Helvetica-Bold").fontSize(11).text("LEADERSHIP & RESPONSIBILITIES", rightColX, rightY);
  rightY += 15;

  // College Role
  doc.fillColor(primaryColor).font("Helvetica-Bold").fontSize(9).text("Student Placement Coordinator", rightColX, rightY);
  doc.fillColor(textColor).font("Helvetica-Bold").fontSize(8.5).text("University College of Engineering, Tindivanam  |  2024 – 2026", rightColX, rightY + 11);
  rightY += 24;

  const leadBullets = [
    "Coordinated end-to-end recruiter engagement pipelines for student drives.",
    "Facilitated career orientation seminars, mock technical interviews, and resume consulting blocks, elevating candidate confidence levels."
  ];

  leadBullets.forEach(bullet => {
    doc.fillColor(primaryColor).font("Helvetica-Bold").fontSize(8).text("•", rightColX, rightY);
    doc.fillColor(textColor).font("Helvetica").fontSize(8).text(bullet, rightColX + 8, rightY, { width: rightColWidth - 8, lineGap: 1.5 });
    rightY += doc.heightOfString(bullet, { width: rightColWidth - 8, fontSize: 8, lineGap: 1.5 }) + 3;
  });

  // End and Close PDF properly
  doc.end();

  writeStream.on("finish", () => {
    console.log("Resume PDF compiled successfully without any errors!");
  });
}

generateResumePDF();
