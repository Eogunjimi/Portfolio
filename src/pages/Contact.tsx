import { motion } from "framer-motion";
import ArrowIcon from "../components/ArrowIcon";

const socials = [
  { label: "GitHub", href: "https://github.com/Eogunjimi" },
   { label: "LinkedIn", href: "https://ng.linkedin.com/in/emmanuel-ogunjimi-414601132" },
  { label: "X — @JIMI_DEVV", href: "https://x.com/jimi_devv" },
];

export default function Contact() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-24 md:px-10 md:pt-24">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase"
      >
        Contact — Usually replies within a day
      </motion.p>

      <motion.a
        href="mailto:eogunjimi82@gmail.com"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.05 }}
        className="group mt-10 flex flex-wrap items-center gap-4 text-[9vw] leading-[1] font-bold tracking-tight text-ink break-all sm:text-6xl md:text-7xl lg:text-8xl"
      >
        <span>eogunjimi82@gmail.com</span>
        <ArrowIcon className="h-[7vw] w-[7vw] shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-10 sm:w-10 md:h-14 md:w-14" />
      </motion.a>

      <motion.a
        href="/folusho-jimi-CV.pdf"
        download
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-14 inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.14em] text-ink-soft uppercase transition-colors hover:text-ink md:mt-20"
      >
        Download CV
        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
          <path
            d="M12 4v13m0 0l-5-5m5 5l5-5M5 20h14"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>

      <div className="mt-16 flex flex-col gap-6 border-t border-line/80 pt-8 sm:flex-row sm:items-center sm:justify-between md:mt-24">
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] tracking-[0.14em] text-ink uppercase transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
        <span className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
          6.5244° N, 3.3792° E
        </span>
      </div>
    </section>
  );
}
