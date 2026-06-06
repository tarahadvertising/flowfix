import React from "react";
import { motion } from "framer-motion";
import { HiArrowUpRight, HiOutlineCheckCircle } from "react-icons/hi2";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { services } from "../data/services.js";
import { fadeUp, stagger, viewportOnce } from "../utils/motion.js";

export default function Services() {
  return (
    <section id="services" className="section-pad relative bg-white">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Premium engineering services"
          highlight="built for outcomes"
          description="Nine comprehensive capabilities, delivered by experienced engineers and disciplined project managers for residential, commercial and industrial projects."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.article
              key={s.id}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-navy-200/60 bg-white p-7 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold-600/10 text-gold ring-1 ring-gold/20">
                    <s.icon className="text-2xl" />
                  </span>
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-navy-400/70">
                    0{services.indexOf(s) + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-medium text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-500">
                  {s.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-navy-700/80"
                    >
                      <HiOutlineCheckCircle className="text-base text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-gold"
                >
                  Learn more
                  <HiArrowUpRight className="text-sm" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
