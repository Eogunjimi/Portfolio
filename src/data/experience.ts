export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyHref?: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  
  {
    period: "03/2025 — 05/2025",
    role: "Frontend Engineer",
    company: "Wikipedia", 
    points: [
      "Contributed to Wikipedia’s open-source ecosystem by helping build an interactive banner designer for Wiki Ads, making it easier for contributors to create, preview, and customize campaign banners without writing code",
    ],
  },
  {
    period: "01/2025 — 03/2025",
    role: "Frontend Engineer",
    company: "Pedmonie",
    companyHref: "https://pedmonie.com",
    points: [
"Contributed to Pedmonie’s fintech product experience, building key parts of the user settings dashboard, payment dashboard, and public-facing landing page.",
"Worked closely with the team to turn financial workflows into clear, responsive interfaces that make account management and payments easier to navigate.",
"Developed reusable frontend components and consistent UI patterns to support a more cohesive product experience across the platform.",
"Focused on usability, accessibility, and responsive performance—making sure the experience stays dependable across devices and screen sizes."
    ],
  },
   
   
   
   
];

export const capabilities: string[][] = [
  ["React", "Tailwind CSS", "Redux", "Ethers.js", "SEO"],
  ["Next.js", "GSAP", "Node.js", "Sanity", "Git / TDD"],
  ["TypeScript", "Framer Motion", "Express", "REST APIs"],
  ["JavaScript", "Lenis", "Solidity", "Accessibility"],
];
