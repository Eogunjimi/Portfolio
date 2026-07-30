import { Link } from "react-router-dom";
import ArrowIcon from "./ArrowIcon";

const social = [
  { label: "Email", href: "mailto:eogunjimi82@gmail.com" },
  { label: "GitHub", href: "https://github.com/Eogunjimi" },
  { label: "LinkedIn", href: "https://ng.linkedin.com/in/emmanuel-ogunjimi-414601132" },
  { label: "X — @JIMI_DEVV", href: "https://x.com/jimi_devv" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-10 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.18em] text-cream/50 uppercase">
          Next — Get in touch
        </p>

        <Link
          to="/contact"
          className="group mt-6 flex items-center gap-4 sm:gap-6 md:mt-8"
        >
          <span className="font-sans text-[15vw] leading-[0.85] font-bold tracking-tight uppercase sm:text-[10vw] md:text-[8.5vw] lg:text-[7.5rem]">
            Let's Build
          </span>
          <ArrowIcon className="h-[9vw] w-[9vw] shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 sm:h-[6vw] sm:w-[6vw] md:h-[5.5vw] md:w-[5.5vw] lg:h-16 lg:w-16" />
        </Link>

        <div className="mt-20 md:mt-28">
          <p className="font-mono text-[11px] tracking-[0.18em] text-cream/40 uppercase">
            Spotify — Silence, for now
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-6 border-t border-cream/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] tracking-[0.14em] text-cream/80 uppercase transition-colors hover:text-cream"
              >
                {s.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-[11px] tracking-[0.14em] text-cream/40 uppercase">
            <span>6.5244° N, 3.3792° E</span>
            <span>© 2026 — Designed with intent.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
