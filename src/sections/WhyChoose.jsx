import React from "react";
import { motion } from "framer-motion";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { features } from "../data/features.js";
import { fadeUp, stagger, viewportOnce } from "../utils/motion.js";

export default function WhyChoose() {
  return (
    <section id="why" className="section-pad relative overflow-hidden bg-white">
      <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-gold/5 blur-[140px]" />
      <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-gold/5 blur-[140px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Choose Flow fix"
          title="Built different,"
          highlight="engineered to outperform"
          description="An uncompromising operating model that combines elite people, mature processes and modern technology — designed to compound results over time."
        />
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 space-y-6"
        >
          {features.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={f.id}
                variants={fadeUp}
                className={`group grid items-center gap-6 rounded-3xl border border-navy-200/60 bg-navy-50/50 p-6 transition-all hover:border-gold/30 md:grid-cols-12 md:gap-10 md:p-8 ${
                  reverse ? "[direction:rtl]" : ""
                }`}
              >
                {/* number / icon */}
                <div className="flex items-center gap-5 md:col-span-3 [direction:ltr]">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient text-navy-900">
                    <f.icon className="text-3xl" />
                  </span>
                  <span className="font-display text-5xl font-medium text-transparent [-webkit-text-stroke:1px_rgba(245,158,11,0.5)] md:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* content */}
                <div className="md:col-span-6 [direction:ltr]">
                  <h3 className="font-display text-2xl font-medium text-navy-900 transition-colors group-hover:text-gold md:text-3xl">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-navy-500">
                    {f.description}
                  </p>
                </div>
                {/* metric */}
                <div className="md:col-span-3 [direction:ltr]">
                  <div className="rounded-2xl border border-navy-200/60 bg-white p-4 text-center md:text-right">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-navy-400">
                      Result
                    </div>
                    <div className="mt-1 font-display text-lg font-medium text-gold-gradient">
                      {f.metric}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
