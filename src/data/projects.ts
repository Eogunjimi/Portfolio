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
    slug: "supportflow",
    name: "SupportFlow",
    year: "2026",
    role: "Frontend Engineer",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    description:
      " ",
    image: "/images/dev.jpg",
    accent: "#3b5bfd",
    live: "",
    github: "https://github.com/Eogunjimi/SupportFlow",
  },
  {
    index: "02",
    slug: "luxe aesthetic spa salon",
    name: "Luxe Aesthetic Spa Salon",
    year: "2026",
    role: "Frontend Engineer",
    stack: ["React.js", "TypeScript", "TailwindCSS"],
    description:
      "A refined spa salon website built for effortless self-care. I developed it with React, TypeScript, and Tailwind CSS, pairing graceful visuals with service discovery, booking, and mobile-friendly interactions.",
    image: "/images/samp2.png",
    accent: "#7c5cff",
    live: "https://eogunjimi-luxe-aesthetic-spa-salon-three.vercel.app/",
    github: "https://github.com/Eogunjimi/Eogunjimi-Luxe-Aesthetic-Spa-Salon",
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
