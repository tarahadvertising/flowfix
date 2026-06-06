import React from "react";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { industries } from "../data/industries.js";
import { fadeUp, stagger, viewportOnce } from "../utils/motion.js";

export default function Industries() {
  return (
    <section id="industries" className="section-pad relative bg-navy-900">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Deep expertise across"
          highlight="critical industries"
          description="From residential towers to warehouses, our engineers bring sector-specific playbooks, certifications and field experience to every engagement."
          dark
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((ind) => (
            <motion.a
              key={ind.id}
              href="#contact"
              variants={fadeUp}
              className="group relative block overflow-hidden rounded-3xl border border-navy-600/30 bg-navy-800/50"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/55 to-navy-900/10" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient text-navy-900">
                      <ind.icon className="text-xl" />
                    </span>
                    <span className="inline-flex h-10 w-10 translate-x-1 items-center justify-center rounded-full border border-navy-600/30 bg-navy-900/70 text-white opacity-0">
                      <HiArrowUpRight className="text-base" />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium text-white">
                    {ind.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-navy-300 opacity-0">
                    {ind.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent" />
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
