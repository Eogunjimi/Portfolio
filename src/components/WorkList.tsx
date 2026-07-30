import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import type { Project } from "../data/projects";
import ArrowIcon from "./ArrowIcon";

interface WorkListProps {
  projects: Project[];
}

export default function WorkList({ projects }: WorkListProps) {
  const [active, setActive] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.4 });

  function handleMouseMove(e: React.MouseEvent) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  return (
    <div ref={containerRef} className="relative border-t border-line/80">
      {projects.map((project) => (
        <Link
          key={project.slug}
          to={`/work/${project.slug}`}
          onMouseEnter={() => setActive(project)}
          onMouseLeave={() => setActive((cur) => (cur?.slug === project.slug ? null : cur))}
          onMouseMove={handleMouseMove}
          className="group relative flex items-center justify-between gap-4 border-b border-line/80 py-7 transition-colors duration-300 md:py-9"
        >
          <div className="flex items-baseline gap-5 md:gap-10">
            <span className="font-mono text-[11px] text-muted md:text-xs">{project.index}</span>
            <h3 className="text-[8vw] leading-[1] font-medium tracking-tight text-ink transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              {project.name}
            </h3>
          </div>

          <div className="flex shrink-0 items-center gap-3 md:gap-6">
            <span className="hidden font-mono text-[11px] tracking-widest text-muted uppercase sm:inline md:text-xs">
              {project.year} — {project.stack.join(" · ")}
            </span>
            <ArrowIcon className="h-4 w-4 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:h-5 md:w-5" />
          </div>
        </Link>
      ))}

      <AnimatePresence>
        {active && active.image && (
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-40 hidden overflow-hidden rounded-lg shadow-2xl shadow-black/30 md:block"
            style={{
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-115%",
            }}
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            exit={{ opacity: 0, scale: 0.85, rotate: -3 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={active.image}
              alt={active.name}
              className="h-[190px] w-[280px] object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
