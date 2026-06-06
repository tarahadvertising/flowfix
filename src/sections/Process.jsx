import React from "react";
import { motion } from "framer-motion";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { processSteps } from "../data/process.js";
import { fadeUp, stagger, viewportOnce } from "../utils/motion.js";

export default function Process() {
  return (
    <section
      id="process"
      className="section-pad relative overflow-hidden bg-navy-50"
    >
      <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-gold/5 blur-[140px]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Our Process"
          title="A disciplined,"
          highlight="four-step delivery model"
          description="From discovery to delivery, every engagement runs on a transparent operating cadence engineered for clarity, control and compounding value."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-16"
        >
          {/* connector line */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.id}
                variants={fadeUp}
                className="group relative rounded-2xl border border-navy-200/60 bg-white p-6 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-medium text-transparent [-webkit-text-stroke:1px_rgba(245,158,11,0.5)]">
                    {step.id}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold-600/10 text-gold ring-1 ring-gold/20">
                    <step.icon className="text-xl" />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium text-navy-900 transition-colors group-hover:text-gold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-500">
                  {step.description}
                </p>

                {/* dot on connector line */}
                {i !== processSteps.length - 1 && (
                  <span
                    className="absolute -right-2 top-9 hidden h-3 w-3 rounded-full bg-gold-gradient lg:block"
                    aria-hidden
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
