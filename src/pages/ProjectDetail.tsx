import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getNextProject, getProjectBySlug, projects } from "../data/projects";
import ArrowIcon from "../components/ArrowIcon";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const next = getNextProject(slug);

  useEffect(() => {
    if (project) document.title = `${project.name} — Ayodeji Atanda`;
  }, [project]);

  if (!project) return <Navigate to="/work" replace />;

  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-14 md:px-10 md:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase"
        >
          {project.index} / {projects.length}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-[13vw] leading-[0.95] font-bold tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {project.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid gap-8 border-y border-line/80 py-6 sm:grid-cols-2 md:grid-cols-4 md:items-start"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">Year</p>
            <p className="mt-2 font-mono text-sm tracking-wide text-ink">{project.year}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">Role</p>
            <p className="mt-2 font-mono text-sm tracking-wide text-ink uppercase">{project.role}</p>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">Stack</p>
            <p className="mt-2 font-mono text-sm tracking-wide text-ink uppercase">
              {project.stack.join(" · ")}
            </p>
          </div>
          <div className="flex gap-6 md:justify-end">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-sm tracking-wide text-ink uppercase transition-colors hover:text-accent"
              >
                Live <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-sm tracking-wide text-ink uppercase transition-colors hover:text-accent"
              >
                GitHub <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[1400px] px-6 md:px-10"
      >
        <div className="aspect-16/10 w-full overflow-hidden bg-cream-dark sm:aspect-21/9">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{ backgroundColor: project.accent + "22" }}
            >
              <span className="font-mono text-sm tracking-[0.2em] text-ink-soft uppercase">
                {project.name}
              </span>
            </div>
          )}
        </div>
      </motion.section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
            About the project
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-ink md:text-xl">
            {project.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] border-t border-line/80 px-6 py-16 md:px-10 md:py-20">
        <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
          Next project
        </p>
        <Link
          to={`/work/${next.slug}`}
          className="group mt-6 flex items-center gap-4 text-[8vw] leading-[1] font-bold tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
            {next.name}
          </span>
          <ArrowIcon className="h-[6vw] w-[6vw] shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-8 sm:w-8 md:h-10 md:w-10" />
        </Link>
      </section>
    </div>
  );
}
