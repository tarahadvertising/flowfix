import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiArrowUpRight,
  HiXMark,
  HiOutlineMapPin,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects, projectCategories } from "../data/projects.js";
import { fadeUp, stagger, viewportOnce } from "../utils/motion.js";

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);
  return (
    <section id="projects" className="section-pad relative bg-white">
      <Container>
        <SectionHeading
          eyebrow="Project Showcase"
          title="Selected work"
          highlight="that moves the needle"
          description="A snapshot of recent Flow fix engagements — measurable engineering wins delivered with discipline, safety and craft."
        />

        {/* filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                active === cat
                  ? "border-transparent bg-gold-gradient text-navy-900"
                  : "border-navy-200/60 bg-navy-50/50 text-navy-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* grid */}
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.button
                key={p.id}
                layout
                variants={fadeUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelected(p)}
                className="group relative overflow-hidden rounded-3xl border border-navy-200/60 bg-white text-left transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/20 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-gold/30 bg-navy-900/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur">
                    {p.category}
                  </span>
                  <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-navy-900/70 text-white opacity-0">
                    <HiArrowUpRight className="text-base" />
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-navy-500">
                    <span className="inline-flex items-center gap-1">
                      <HiOutlineMapPin className="text-sm text-gold" />
                      {p.location}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-navy-300" />
                    <span className="inline-flex items-center gap-1">
                      <HiOutlineCalendar className="text-sm text-gold" />
                      {p.year}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-medium text-navy-900">
                    {p.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.impact.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-navy-200/60 bg-navy-50/50 px-2.5 py-1 text-[11px] font-medium text-navy-600"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl glass-strong gold-border"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-600/30 bg-navy-800/70 text-white transition"
                aria-label="Close"
              >
                <HiXMark className="text-xl" />
              </button>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
              </div>
              <div className="p-7 md:p-9">
                <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {selected.category}
                </span>
                <h3 className="mt-4 font-display text-2xl font-medium text-white md:text-3xl">
                  {selected.title}
                </h3>
                <div className="mt-2 flex items-center gap-4 text-sm text-navy-300">
                  <span className="inline-flex items-center gap-1.5">
                    <HiOutlineMapPin className="text-gold" />{" "}
                    {selected.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <HiOutlineCalendar className="text-gold" /> {selected.year}
                  </span>
                </div>
                <p className="mt-5 text-base leading-relaxed text-navy-300">
                  {selected.summary}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {selected.impact.map((m) => (
                    <div
                      key={m}
                      className="flex items-center gap-2 rounded-xl border border-navy-600/30 bg-navy-800/40 p-3 text-sm text-white"
                    >
                      <HiOutlineCheckCircle className="text-gold" />
                      {m}
                    </div>
                  ))}
                </div>
                <div className="mt-7">
                  <a href="#contact" className="btn-primary">
                    Discuss a similar project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
