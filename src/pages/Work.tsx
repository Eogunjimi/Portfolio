import { motion } from "framer-motion";
import WorkList from "../components/WorkList";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-24 md:px-10 md:pt-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase"
      >
        Index — {projects.length} projects, 2022–2026
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-6 text-[13vw] leading-[0.95] font-bold tracking-tight text-ink sm:text-6xl md:text-7xl"
      >
        All work.
      </motion.h1>

      <div className="mt-16">
        <WorkList projects={projects} />
      </div>
    </section>
  );
}
