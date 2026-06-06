import React from "react";
import { motion } from "framer-motion";
import Container from "../components/Container.jsx";
import Counter from "../components/Counter.jsx";
import { stats } from "../data/stats.js";
import { fadeUp, stagger, viewportOnce } from "../utils/motion.js";

export default function Trust() {
  return (
    <section className="relative -mt-2 bg-white py-16 md:py-20">
      <Container>
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 rounded-3xl border border-navy-200/60 bg-navy-50/50 p-6 md:grid-cols-4 md:p-8"
        >
          {stats.map((s) => (
            <motion.div
              key={s.id}
              variants={fadeUp}
              className="group relative flex items-center gap-4 rounded-2xl border border-transparent p-4 transition-all hover:border-gold/30 hover:bg-gold/[0.03]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-navy-900">
                <s.icon className="text-2xl" />
              </span>
              <div>
                <div className="font-display text-3xl font-medium tracking-tight text-navy-900 md:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-navy-500">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
