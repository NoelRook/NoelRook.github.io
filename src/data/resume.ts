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
  role: "CS Student. Builder. Occasional bug hunter.",
  tagline: "I build things that do not break (most of the time).",
  intro:
    "I like solving messy technical problems, from CTF-style debugging sessions to full-stack apps and Web3 experiments.",
  email: "leejingkang6@gmail.com",
  github: "https://github.com/NoelRook",
  linkedin: "https://www.linkedin.com/in/leejingkang/"
};

export const aboutParagraphs: string[] = [
  "I enjoy breaking systems just enough to understand them, then rebuilding them properly. That mindset follows me everywhere: side projects, hackathons, and late-night debugging spirals.",
  "I am especially interested in Web3 experimentation, practical product engineering, and technical problem-solving that feels like puzzle mode. If there is a weird edge case, I usually want to chase it.",
  "I also spent time on exchange in Korea, which taught me how to adapt quickly, collaborate across different working styles, and stay calm when everything feels unfamiliar."
];

export const interests: string[] = [
  "Web3",
  "Hack&Roll",
  "CTF Challenges",
  "Systems Debugging",
  "Product UX"
];

export const projects: ProjectItem[] = [
  {
    title: "Receipt OCR Expense Tracker",
    description:
      "Scans receipt images and auto-parses key fields into structured transactions, reducing manual logging time.",
    stack: ["React", "Node.js", "OCR API", "PostgreSQL"],
    github: "https://github.com/NoelRook"
  },
  {
    title: "Transaction Reconciliation Service",
    description:
      "Backend-heavy service for validating, reconciling, and auditing transaction records across asynchronous pipelines.",
    stack: ["Java", "SQL", "REST", "Docker"],
    github: "https://github.com/NoelRook"
  },
  {
    title: "Productivity Chrome Extension",
    description:
      "Browser extension with focus timers, smart blocking rules, and usage insights designed for deep work sessions.",
    stack: ["JavaScript", "Chrome APIs", "Local Storage"],
    github: "https://github.com/NoelRook"
  },
  {
    title: "Web3 Wallet Activity Explorer",
    description:
      "Visual dashboard for exploring wallet transaction histories, balances, and token movements in a cleaner UI.",
    stack: ["TypeScript", "Web3", "Next.js"],
    github: "https://github.com/NoelRook"
  },
  {
    title: "Realtime Team Dashboard",
    description:
      "Project ops dashboard with realtime updates and role-based workflows for teams that move fast.",
    stack: ["React", "Node.js", "Socket.IO", "PostgreSQL"],
    github: "https://github.com/NoelRook"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Java", "Python", "REST APIs"]
  },
  {
    title: "Systems / Databases",
    items: ["PostgreSQL", "SQL", "Data Modeling", "Debugging", "Performance Tuning"]
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "GitHub Actions", "Linux", "Figma"]
  }
];

export const timeline: TimelineItem[] = [
  {
    title: "Software Engineer Intern",
    subtitle: "Hayysoft",
    period: "2024",
    impact: "Built internal tooling that automated repetitive work and improved reliability for everyday operations."
  },
  {
    title: "Engineering Intern",
    subtitle: "Temasek Polytechnic Advanced Manufacturing Centre",
    period: "2023",
    impact: "Worked on digital workflows and process improvements with a strong focus on practical implementation."
  },
  {
    title: "Hackathon Projects",
    subtitle: "Hack&Roll and team builds",
    period: "Ongoing",
    impact: "Rapid prototyping under pressure, tight collaboration, and shipping usable demos fast."
  },
  {
    title: "Student Exchange",
    subtitle: "Korea",
    period: "Academic Exchange",
    impact: "Gained global exposure, stronger communication adaptability, and confidence in unfamiliar environments."
  }
];

export const nowExploring: string[] = [
  "Building a cleaner Chrome extension architecture",
  "Going deeper into systems-level debugging",
  "Experimenting with practical Web3 tooling"
];
