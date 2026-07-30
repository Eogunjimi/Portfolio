export interface Project {
  index: string;
  slug: string;
  name: string;
  year: string;
  role: string;
  stack: string[];
  description: string;
  image: string;
  accent: string;
  live?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    index: "01",
    slug: "vantar",
    name: "Vantar",
    year: "2026",
    role: "Frontend Engineer",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    description:
      "An investment dashboard used by 200+ people daily — portfolio management, stock tracking, and real-time position updates, built for clarity under pressure.",
    image: "/images/project-vantar.jpg",
    accent: "#3b5bfd",
    live: "https://vantar.com",
    github: "https://github.com",
  },
  {
    index: "02",
    slug: "clona",
    name: "Clona",
    year: "2026",
    role: "Lead Frontend Engineer",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    description:
      "A copy trading platform built on HyperLiquid. I architected the UI with React, Next.js, TypeScript, and Tailwind CSS, building real-time trading interfaces and portfolio tracking for DeFi users.",
    image: "/images/project-clona.jpg",
    accent: "#7c5cff",
    live: "https://clona.xyz",
    github: "https://github.com",
  },
  {
    index: "03",
    slug: "hypurscope",
    name: "HypurScope",
    year: "2025",
    role: "Frontend Engineer",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    description:
      "An on-chain analytics tool surfacing wallet activity and market data through dense, readable dashboards built for speed and accuracy.",
    image: "/images/project-hypurscope.jpg",
    accent: "#17b6a7",
    live: "https://hypurscope.xyz",
    github: "https://github.com",
  },
  {
    index: "04",
    slug: "streamscapex",
    name: "StreamScapeX",
    year: "2025",
    role: "Frontend Engineer",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    description:
      "A cinematic streaming platform concept with a focus on discovery — bold hero moments, responsive poster grids, and smooth transitions.",
    image: "/images/project-streamscapex.jpg",
    accent: "#e5484d",
    live: "https://streamscapex.com",
    github: "https://github.com",
  },
  {
    index: "05",
    slug: "furnisphere",
    name: "Furnisphere",
    year: "2025",
    role: "Frontend Engineer",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    description:
      "A minimalist furniture storefront balancing product photography with fast, accessible browsing and checkout flows.",
    image: "/images/project-furnisphere.jpg",
    accent: "#b08968",
    live: "https://furnisphere.com",
    github: "https://github.com",
  },
  {
    index: "06",
    slug: "transparent-governance-foundation",
    name: "Transparent Governance Foundation",
    year: "2024",
    role: "Frontend Engineer",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    description:
      "A civic-tech marketing site for a governance non-profit, built to communicate trust and transparency at a glance.",
    image: "",
    accent: "#2f6f4e",
    live: "https://tgf.org",
    github: "https://github.com",
  },
  {
    index: "07",
    slug: "metasecure-web3",
    name: "MetaSecure Web3.0",
    year: "2024",
    role: "Frontend Engineer",
    stack: ["React", "JavaScript", "Solidity"],
    description:
      "A Web3 security product landing page pairing smart-contract literacy with a confident, futuristic visual identity.",
    image: "/images/project-metasecure.jpg",
    accent: "#2563eb",
    live: "https://metasecure.xyz",
    github: "https://github.com",
  },
  {
    index: "08",
    slug: "harvestgrove",
    name: "HarvestGrove",
    year: "2024",
    role: "Figma to code",
    stack: ["React", "JavaScript", "TailwindCSS", "GSAP", "Framer Motion", "Cloudinary"],
    description:
      "Transforming a Figma design into a vibrant HarvestGrove landing page, I utilized React, Framer Motion, and GSAP for dynamic animations. With Tailwind CSS and Cloudinary, the result is a visually stunning and responsive digital showcase that harmonizes artistry and technology.",
    image: "/images/project-harvestgrove.jpg",
    accent: "#3f8f3f",
    live: "https://harvestgrove.vercel.app",
    github: "https://github.com",
  },
  {
    index: "09",
    slug: "cartizn-photographer-portfolio",
    name: "Cartizn — Photographer Portfolio",
    year: "2023",
    role: "Frontend Engineer",
    stack: ["React", "React Router", "GSAP"],
    description:
      "A full-bleed, image-first portfolio for a photographer, using GSAP to choreograph transitions between galleries.",
    image: "/images/project-cartizn.jpg",
    accent: "#111111",
    live: "https://cartizn.vercel.app",
    github: "https://github.com",
  },
  {
    index: "10",
    slug: "airbnb-clone",
    name: "AirBnb Clone",
    year: "2023",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "TailwindCSS"],
    description:
      "A pixel-level clone of Airbnb's core booking flow — search, listing detail, and reservation — built to sharpen componentisation skills.",
    image: "",
    accent: "#ff385c",
    live: "https://airbnb-clone.vercel.app",
    github: "https://github.com",
  },
  {
    index: "11",
    slug: "the-code-chronicles",
    name: "The Code Chronicles",
    year: "2023",
    role: "Frontend Engineer",
    stack: ["TypeScript", "Next.js", "Sanity"],
    description:
      "A developer blog powered by Sanity CMS, focused on fast content authoring and an unobtrusive, readable article layout.",
    image: "",
    accent: "#d9a441",
    live: "https://thecodechronicles.vercel.app",
    github: "https://github.com",
  },
  {
    index: "12",
    slug: "africash",
    name: "Africash",
    year: "2022",
    role: "Frontend Engineer",
    stack: ["React", "TailwindCSS", "Framer Motion"],
    description:
      "A fintech marketing site introducing a cross-border payments product, with Framer Motion micro-interactions guiding the story.",
    image: "",
    accent: "#f2b134",
    live: "https://africash.vercel.app",
    github: "https://github.com",
  },
];

export function getProjectBySlug(slug?: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug?: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return projects[0];
  return projects[(idx + 1) % projects.length];
}
