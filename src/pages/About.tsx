import { motion } from "framer-motion";
import { capabilities, experience } from "../data/experience";
import ArrowIcon from "../components/ArrowIcon";

export default function About() {
  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-14 md:px-10 md:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase"
        >
          About
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 max-w-3xl text-[9vw] leading-[1.05] font-bold tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          I'm Ayodeji, a frontend engineer who treats the browser as a craft.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid gap-10 md:grid-cols-[220px_1fr] md:gap-16"
        >
          <div className="max-w-[220px]">
            <div className="aspect-4/5 w-full overflow-hidden bg-cream-dark grayscale">
              <img
                src="/images/profile.jpg"
                alt="Ayodeji Atanda"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
              Ayodeji Atanda — Lagos, NG
            </p>
          </div>

          <div className="max-w-2xl space-y-6 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              For the last four years I've built interfaces for fintech dashboards,
              DeFi trading platforms, and AI products, the kind of work where a
              dropped frame or a missed focus state is a real cost, not a nitpick.
              Right now I'm at Gen Financial, and open to new opportunities.
            </p>
            <p>
              I care about the measurable side of frontend: the 35% faster loads,
              the 25+ components a team actually reuses, the 200+ people using a
              dashboard daily without thinking about it. Good interface work should
              disappear into the task.
            </p>
            <p>
              Away from the keyboard I'm usually in water or in headphones.
              Swimming resets my body, music resets my head. Both taught me the
              same thing: rhythm matters more than force.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-20 pb-10 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
          Experience
        </p>

        <div className="mt-8 border-t border-line/80">
          {experience.map((item) => (
            <div
              key={item.period + item.company}
              className="grid gap-4 border-b border-line/80 py-9 md:grid-cols-[160px_220px_1fr] md:gap-8"
            >
              <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
                {item.period}
              </p>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-ink md:text-xl">
                  {item.role}
                </h3>
                <a
                  href={item.companyHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] tracking-widest text-ink-soft uppercase transition-colors hover:text-ink"
                >
                  {item.company}
                  <ArrowIcon className="h-3 w-3" />
                </a>
              </div>
              <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-ink-soft md:text-base">
                {item.points.map((point, i) => (
                  <p key={i}>{point}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-20 pb-24 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
          Capabilities
        </p>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line/80 pt-10 sm:grid-cols-4">
          {capabilities.map((column, i) => (
            <div key={i} className="space-y-4">
              {column.map((skill) => (
                <p
                  key={skill}
                  className="font-mono text-[11px] tracking-widest text-ink-soft uppercase"
                >
                  {skill}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
