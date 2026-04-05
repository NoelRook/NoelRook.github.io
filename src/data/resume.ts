export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  impact: string;
};

export const profile = {
  name: "Jing Kang",
  role: "CS Student. Frontend Builder. Occasional bug hunter.",
  tagline: "I build technical interfaces that stay usable under pressure.",
  intro:
    "I like solving messy technical problems and turning them into clean React/TypeScript interfaces, especially when the UI needs to visualize complex data, controls, or system state.",
  email: "leejingkang6@gmail.com",
  github: "https://github.com/NoelRook",
  linkedin: "https://www.linkedin.com/in/leejingkang/"
};

export const aboutParagraphs: string[] = [
  "I enjoy breaking systems just enough to understand them, then rebuilding them properly. That mindset shows up when I am debugging UI issues, cleaning up state flow, or wiring together something that needs to feel precise and reliable.",
  "That mindset drives my approach to full-stack development, where I bridge the gap between robust backend logic and precise, functional interfaces. I am particularly interested in developing end-to-end technical tools, from architecting cloud-integrated data layers to designing the visualization tools that make them accessible. For me, clarity and performance always outweigh decoration. My background in design and computer science helps me ensure that every part of the stack—from the database to the final user interaction—is both logical and dependable. Furthermore, my time on exchange in Korea has made me a versatile collaborator, capable of staying grounded and productive even when navigating unfamiliar tech stacks or working environments.",
  "I also spent time on exchange in Korea and China, which taught me how to adapt quickly, collaborate across different working styles, and stay calm when everything feels unfamiliar."
];

export const interests: string[] = [
  "React UI",
  "Technical Visualization",
  "Systems Debugging",
  "Hack&Roll",
  "CTF Challenges"
];

export const projects: ProjectItem[] = [
  {
    title: "Receipt OCR Expense Tracker",
    description:
      "Scans receipt images and auto-parses key fields into structured transactions with a UI focused on fast review and low-friction interaction.",
    stack: ["Android Studio", "Firebase", "OCR API", "Java"],
    github: "https://github.com/NoelRook/SplitMate"
  },
  {
    title: "Transaction Reconciliation Service",
    description:
      "Backend-heavy service for validating, reconciling, and auditing transaction records, useful practice for systems that need reliable data flow and clear status handling.",
    stack: ["Java", "SQL", "REST", "Docker"],
    github: "https://github.com/NoelRook"
  },
  {
    title: "Clicker-Chaos Chrome Extension",
    description:
      "Built a Chrome extension for a hackathon to explore extension development, event handling, and lightweight UI interactions.",
    stack: ["JavaScript", "Chrome APIs", "Local Storage"],
    github: "https://github.com/NoelRook"
  },
  {
    title: "crop-predictor",
    description:
      "Visual dashboard for interpreting data from IoT devices, with emphasis on readable charts, state clarity, and technical decision support.",
    stack: ["TypeScript", "Flask", "Python", "Machine Learning"],
    github: "https://github.com/NoelRook/crop-predictor"
  },
  {
    title: "BearWithIt",
    description:
      "Study companion built as a practical helper for focus sessions, combining computer vision and AI-backed features into a simple product flow.",
    stack: ["AWS Bedrock", "Transcribe", "OpenCV"],
    github: "https://github.com/NoelRook/BearWithIt"
  },
  {
    title: "Realtime Team Dashboard",
    description:
      "Realtime ops dashboard with role-based workflows and live updates, the kind of interface work that maps well to technical control panels and instrumentation views.",
    stack: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/NoelRook"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "State Management"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Java", "Python", "REST APIs"]
  },
  {
    title: "Systems / Databases",
    items: ["PostgreSQL", "SQL", "Data Modeling", "Debugging", "Performance Tuning", "Instrumentation UIs"]
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "GitHub Actions", "Linux", "Figma", "Chrome APIs"]
  }
];

export const timeline: TimelineItem[] = [
  {
    title: "Software Engineer Intern",
    subtitle: "Hayysoft",
    period: "2024",
    impact: "Built internal tooling that automated repetitive work and improved reliability for everyday operations, giving me more practice with UI consistency and backend coordination."
  },
  {
    title: "Engineering Intern",
    subtitle: "Temasek Polytechnic Advanced Manufacturing Centre",
    period: "2023",
    impact: "Worked on digital workflows and process improvements with a strong focus on practical implementation and clear interface behavior."
  },
  {
    title: "What the Hack 2024",
    subtitle: "BearWithIt",
    period: "2024",
    impact: "Won Best-automation award for BearWithIt project."
  },
  {
    title: "Student Exchange",
    subtitle: "Korea, China",
    period: "Academic Exchange",
    impact: "Gained global exposure, stronger communication adaptability, and confidence working in unfamiliar environments."
  }
];

export const nowExploring: string[] = [
  "Going deeper into systems-level debugging",
  "Building cleaner technical dashboards and control-panel style UIs",
  "Wargaming on OverTheWire"
];
