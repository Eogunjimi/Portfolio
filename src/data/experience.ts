export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyHref?: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: "10/2025 — Present",
    role: "Frontend Engineer",
    company: "Gen Financial",
    companyHref: "https://genfinancial.com",
    points: [
      "Contributing to the Vantar investment dashboard (200+ users) and Wyrr merchant app: portfolio management, stock tracking, and merchant operations with a 30% performance uplift in the V2 upgrade.",
      "Built responsive marketing sites for 3 products (Vantar, Gen Financial, Wyrr), improving page load by 35% and SEO visibility.",
      "Created 25+ reusable React components aligned with the design system, cutting feature development time by 40%.",
    ],
  },
  {
    period: "11/2025 — 07/2026",
    role: "Lead Frontend Engineer",
    company: "Clona",
    companyHref: "https://clona.xyz",
    points: [
      "Led frontend development for a copy trading platform built on HyperLiquid, architecting the UI with React, Next.js, TypeScript, and Tailwind CSS.",
      "Built real-time trading interfaces and portfolio tracking features for DeFi users.",
    ],
  },
  {
    period: "04/2025 — 08/2025",
    role: "Frontend Engineer",
    company: "Afren.ai",
    companyHref: "https://afren.ai",
    points: [
      "Integrated AI-driven matchmaking features and built secure authentication with protected routing.",
      "Developed responsive interfaces for the landing page, blog, and core platform, driving engagement and brand consistency.",
    ],
  },
  {
    period: "09/2023 — 07/2025",
    role: "Software Engineering Instructor",
    company: "GoMyCode",
    companyHref: "https://gomycode.com",
    points: [
      "Built coding exercises in React, TypeScript, Node.js, and REST APIs, boosting student performance by 30%.",
      "Led workshops on responsive design (CSS Grid, Flexbox, Tailwind CSS), driving 50% improvement in frontend competency.",
      "Integrated Git, TDD, and Agile practices into the curriculum, producing job-ready graduates.",
    ],
  },
  {
    period: "04/2022 — 04/2023",
    role: "Frontend Developer",
    company: "Sabiroad Logistics International",
    companyHref: "https://sabiroad.com",
    points: [
      "Built an internal admin portal with a team of three: payment fixes, user role management, and system config, improving ops efficiency by 20%.",
      "Integrated APIs with backend engineers, reducing data retrieval time by 30%.",
      "Partnered with UI/UX designers to cut bounce rate by 25% and lift user satisfaction by 15%.",
    ],
  },
];

export const capabilities: string[][] = [
  ["React", "Tailwind CSS", "Redux", "Ethers.js", "SEO"],
  ["Next.js", "GSAP", "Node.js", "Sanity", "Git / TDD"],
  ["TypeScript", "Framer Motion", "Express", "REST APIs"],
  ["JavaScript", "Lenis", "Solidity", "Accessibility"],
];
