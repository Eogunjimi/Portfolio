import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WorkList from "../components/WorkList";
import ArrowIcon from "../components/ArrowIcon";
import { projects } from "../data/projects";

const principles = [
  {
    number: "01",
    title: "Accessible by default",
    body: "Semantics, focus states, and contrast aren't a pass at the end — they're the starting constraint. If it doesn't work with a keyboard, it doesn't ship.",
  },
  {
    number: "02",
    title: "Performance is a feature",
    body: "35% faster loads at Gen Financial didn't come from a plugin. Budgets, measured images, and shipping less JavaScript are design decisions.",
  },
  {
    number: "03",
    title: "Motion with restraint",
    body: "Fewer animations, each one exact. Motion should explain hierarchy and reward attention — never perform for its own sake.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-6 pt-28 pb-24 md:px-10 md:pt-40 md:pb-32">
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase"
        >
          01 — Frontend Engineer, Lagos
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 max-w-4xl text-[12vw] leading-[0.95] font-bold tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          I build interfaces that hold up under real use.
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col gap-10 border-t border-line/80 pt-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
          For the past two years, I’ve been building thoughtful frontend experiences across
          fintech, AI, SaaS, and open source—from Pedmonie’s dashboards and landing page 
          to interactive tools for Wikipedia. I’m currently working with freelance clients 
          and open to new opportunities.
          </p>

          <div className="flex shrink-0 items-center gap-4">
            <Link
              to="/work"
              className="group flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-[11px] tracking-[0.14em] text-cream uppercase transition-colors hover:bg-ink/85"
            >
              See the work
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-full border border-ink/60 px-6 py-3 font-mono text-[11px] tracking-[0.14em] text-ink uppercase transition-colors hover:bg-ink hover:text-cream"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
        <div className="mb-8 flex items-end justify-between">
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
            Index — Selected work
          </p>
          <Link
            to="/work"
            className="hidden font-mono text-[11px] tracking-[0.14em] text-ink-soft uppercase transition-colors hover:text-ink sm:flex sm:items-center sm:gap-1.5"
          >
            View all
            <ArrowIcon className="h-3 w-3" />
          </Link>
        </div>

        <WorkList projects={projects.slice(0, 5)} />

        <Link
          to="/work"
          className="mt-8 flex items-center gap-1.5 font-mono text-[11px] tracking-[0.14em] text-ink-soft uppercase transition-colors hover:text-ink sm:hidden"
        >
          View all work
          <ArrowIcon className="h-3 w-3" />
        </Link>
      </section>

      <section className="border-t border-line/80 bg-cream-dark/60">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
            02 — How I work
          </p>
          <h2 className="mt-6 max-w-2xl text-[8vw] leading-[1.05] font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Three things I refuse to compromise on.
          </h2>

          <div className="mt-16 grid gap-x-10 gap-y-14 border-t border-line/80 pt-12 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.number}>
                <span className="font-mono text-xs text-muted">{item.number}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
