// @ts-ignore
import graphAst from "../assets/smart-contract-ast.svg";
// @ts-ignore
import graphMetrics from "../assets/smart-contract-metrics.svg";
// @ts-ignore
import agentBoard from "../assets/agent-builder-board.svg";
// @ts-ignore
import agentMemory from "../assets/agent-builder-memory.svg";
// @ts-ignore
import dotzEventGrid from "../assets/dotz-event-grid.svg";
// @ts-ignore
import dotzAdminSales from "../assets/dotz-admin-sales.svg";
// @ts-ignore
import bankingDashboard from "../assets/banking-dashboard.svg";
// @ts-ignore
import bankingTransfer from "../assets/banking-transfer.svg";

export interface DetailedProject {
  id: string;
  title: string;
  description: string;
  tagline: string;
  featured: boolean;
  accuracy?: string; // e.g. "97.96% Classification Accuracy"
  techStack: string[];
  status?: string; // e.g. "In Development"
  githubLink?: string;
  githubLinks?: { label: string; url: string }[];
  details: {
    overview: string;
    problemStatement: string;
    architecture: string;
    methodology: string[];
    results: string[];
    screenshots: { label: string; url: string }[];
  };
}

export const projects: DetailedProject[] = [
  {
    id: "smart-contract-security",
    title: "Smart Contract Vulnerability Detection using Graph-Based Contract Sensing",
    tagline: "Fine-tuned GraphCodeBERT & Structure-Aware GNN achieving 97.96% detection rate.",
    description: "Designed and implemented an advanced graph-based security analysis system converting Solidity smart contracts into semantic graphs. Trained GraphCodeBERT embeddings and a Structure-Aware Transformer Graph Neural Network to discover logical vulnerabilities ahead of deployment.",
    featured: true,
    accuracy: "97.96% Classification Accuracy",
    techStack: ["Python", "GraphCodeBERT", "Transformers", "GNN", "Pytorch", "Solidity"],
    githubLink: "https://github.com/Arul-Sampath-dev/frontend-consense-fyp",
    githubLinks: [
      { label: "Frontend Repo", url: "https://github.com/Arul-Sampath-dev/frontend-consense-fyp" },
      { label: "Backend Repo", url: "https://github.com/Arul-Sampath-dev/backend-consense-fyp" }
    ],
    details: {
      overview: "Smart Contract Vulnerability Detection using Graph-Based Contract Sensing is a state-of-the-art security mechanism for decentralized finance. By representing smart contract code as structural control-flow and data-flow graphs instead of plain text, the system captures complex logical relationships and cross-contract interactions that traditional scanners miss.",
      problemStatement: "Solidity smart contracts are immutable once deployed on-chain; any vulnerability can lead to permanent financial catastrophic losses. Classical static analyzers (e.g., Slither, Mythril) heavily rely on predefined heuristics, rendering them ineffective against sophisticated, novel reentrancy or denial-of-service attack vectors.",
      architecture: "The architecture processes Solidity source files via a multi-pass custom regex compiler and Abstract Syntax Tree (AST) parser to build structural control graphs. Node embeddings are fetched from an MLM pre-trained GraphCodeBERT, which are then fed into a hybrid Graph Neural Network coupled with a Self-Attention Transformer layer for dual semantic-structural classification.",
      methodology: [
        "Phase 1: Solidity code ingestion and parsing into Control Flow Graphs (CFGs) and Data Dependency Graphs (DDGs) using custom regex contract sensing.",
        "Phase 2: Extract semantic feature vectors for each node using fine-tuned pre-trained GraphCodeBERT with Masked Language Modeling (MLM).",
        "Phase 3: Train a custom Structure-Aware GNN with message-passing layers to synthesize syntactic nodes with graph edge relationships.",
        "Phase 4: Run GNN feature vectors through dense projection and Softmax decision layers to classify security vulnerabilities with high confidence."
      ],
      results: [
        "Achieved a stellar classification accuracy of 97.96% on decentralized smart contract datasets.",
        "Successfully identified reentrancy, integer overflow, and access control vulnerability classes with minimal false positives.",
        "Exceeded standard static analyzer performance benchmarks by over 14% on complex logical execution graphs."
      ],
      screenshots: [
        { label: "Semantic AST Representation", url: graphAst },
        { label: "Model Training Metrics", url: graphMetrics }
      ]
    }
  },
  {
    id: "ai-agent-builder",
    title: "AI Agent Builder SaaS",
    tagline: "Deploy dynamic agentic workflows with LangChain, FastAPI, and Next-gen routers.",
    description: "A comprehensive SaaS platform that allows developers and businesses to drag, configure, and boot custom AI agents. Supports multi-LLM routing, secure workspace API key management, stateful conversation flow graphs, and production webhooks.",
    featured: false,
    status: "In Development",
    techStack: ["FastAPI", "LangChain", "PostgreSQL", "React", "Gemini API", "Tailwind CSS"],
    githubLink: "https://github.com/Arul-Sampath-dev/ai-agent-builder",
    details: {
      overview: "The AI Agent Builder is a server-side orchestrated playground enabling instant deployment of collaborative intelligent agents. Clients can customize systemic prompts, provide knowledge bases for prompt grounding, and configure dynamic response routers.",
      problemStatement: "Building stateful LLM pipelines requires substantial boilerplate code, custom memory store architectures, and complex integration patterns across differing model parameters.",
      architecture: "Orchestrated using standard FastAPI routes serving an interactive draggable React canvas backend. Sessions are securely persisted in a PostgreSQL schema with fully separated developer API keys, calling LangChain under-the-hood for structured outputs.",
      methodology: [
        "Design standard database schema tracking active agent weights, system instructions, and linked API credentials.",
        "Formulate LangChain agent routers executing Tool-Calling algorithms to dynamically pull data from live API integrations.",
        "Incorporate asynchronous FastAPI endpoints to steam tokens with standard server-sent events (SSE) for low latency responses."
      ],
      results: [
        "In Development: Successfully mapped robust multi-agent orchestration flows using LangGraph and LangChain.",
        "Integrated multi-model interfaces allowing side-by-side comparison between Gemini Flash and OpenAI models.",
        "Achieved fluid state transitions on the React web canvas prototype."
      ],
      screenshots: [
        { label: "Agent Config Board", url: agentBoard },
        { label: "Execution Memory Visual", url: agentMemory }
      ]
    }
  },
  {
    id: "dotzv12-symposium",
    title: "Dotzv12 Symposium Platform",
    tagline: "Comprehensive MERN platform for rapid university symposium registrations and checkouts.",
    description: "An intuitive web application built to host a national-level university symposium. Handles secure event registrations, dynamic entry slip generation, automated email transactional notifications, and real-time cash payment confirmation.",
    featured: false,
    status: "MERN Stack",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Cashfree SDK", "Brevo API"],
    githubLink: "https://github.com/naresh-webdev/dotz-12/",
    details: {
      overview: "Dotzv12 serves as a centralized web portal designed for paper presentations, workshops, and technical events registration. Optimized to support thousands of concurrent student visits, it integrates Cashfree as the premium checkout merchant.",
      problemStatement: "University fests frequently experience server crashes or missing registration logs when using Google Forms, compounded by manual check validations for payments.",
      architecture: "Engineered on the classic MERN stack. React forms process client inputs, validating secure registration sessions via Node-Express servers which dispatch immediate webhook orders to the Cashfree gateway and Brevo mail server.",
      methodology: [
        "Formulate solid MongoDB transaction models to prevent overbooking on limited workshops.",
        "Deploy modular payment verifiers with asynchronous backend webhooks confirming Cashfree checkout status securely.",
        "Integrate Brevo Transactional Mailer to automate fully customized registration invoice slips containing generated entry QR codes."
      ],
      results: [
        "Successfully registered 200+ participants within a single week with zero server latency or data loss.",
        "Automated 100% of payment reconciliation, eliminating manual verification overhead entirely.",
        "Retained high satisfaction rates amongst administrators managing dashboards in real-time."
      ],
      screenshots: [
        { label: "Event Grid UI", url: dotzEventGrid },
        { label: "Admin Sales Analytics", url: dotzAdminSales }
      ]
    }
  },
  {
    id: "oop-banking-system",
    title: "Banking System",
    tagline: "Object-oriented desktop banking application utilizing MVC conventions in JavaFX.",
    description: "Developed a secure banking terminal supporting administrative and customer operations including credentials checking, deposit pathways, loan calculators, and history logs, maintaining robust structural separation of models.",
    featured: false,
    status: "Java OOP",
    techStack: ["Java", "JavaFX", "MVC Architecture", "OOP Architecture", "CSS Styling"],
    githubLink: "https://github.com/Arul-Sampath-dev/java-banking-system",
    details: {
      overview: "The Banking System application utilizes JavaFX's state-of-the-art layout engine to offer a complete local client terminal. Standardizing operations using strict MVC separation, it guarantees secure data transfer and component reusability.",
      problemStatement: "Desktop banking systems require granular component modularity to prevent race conditions during balance deposits/withdrawals, coupled with intuitive dashboards for daily tasks.",
      architecture: "Separated into a robust MVC framework: the View layer handles styling with modular FXML/CSS components, a robust Controller layer coordinates interface interactions, and the back-end Model layer handles accounts, double-entry ledgers, and persistence constraints.",
      methodology: [
        "Implement Object-Oriented patterns (Inheritance, Polymorphism) to represent Savings, Current, and Credit account definitions.",
        "Format solid thread synchronization blocks during balance updates to satisfy financial audit safety guidelines.",
        "Build layout components using custom styled controls incorporating responsive hovering states and responsive window bindings."
      ],
      results: [
        "Constructed a reliable offline desktop client carrying comprehensive audit histories.",
        "Maintained structured, type-safe Java codebases satisfying modern enterprise programming paradigms.",
        "Designed clean custom desktop user interfaces with elegant custom dark sheets."
      ],
      screenshots: [
        { label: "Main Dashboard Scene", url: bankingDashboard },
        { label: "Transfer Transaction Module", url: bankingTransfer }
      ]
    }
  }
];
