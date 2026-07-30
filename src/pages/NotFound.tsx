import { Link } from "react-router-dom";
import ArrowIcon from "../components/ArrowIcon";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1400px] flex-col justify-center px-6 py-24 md:px-10">
      <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
        404 — Not found
      </p>
      <h1 className="mt-6 text-[13vw] leading-[0.95] font-bold tracking-tight text-ink sm:text-6xl md:text-7xl">
        Wrong turn.
      </h1>
      <Link
        to="/"
        className="group mt-8 flex w-fit items-center gap-2 font-mono text-[12px] tracking-[0.14em] text-ink-soft uppercase transition-colors hover:text-ink"
      >
        Back home
        <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </section>
  );
}
