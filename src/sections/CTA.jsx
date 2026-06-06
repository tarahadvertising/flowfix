import React from "react";
import { motion } from "framer-motion";
import { HiArrowUpRight, HiOutlineEnvelope } from "react-icons/hi2";
import Container from "../components/Container.jsx";
import { fadeUp, stagger, viewportOnce } from "../utils/motion.js";

export default function CTA() {
  return (
    <section className="relative bg-navy-900 py-20 md:py-28">
      <Container>
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800 p-10 md:p-16"
        >
          {/* glow blobs */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gold-600/8 blur-[140px]" />
          <div className="noise" />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <motion.div variants={fadeUp} className="lg:col-span-8">
              <span className="heading-eyebrow">Get Started</span>
              <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-white md:text-5xl lg:text-[3.25rem]">
                Ready To Start Your{" "}
                <span className="text-gold-gradient">MEP Project</span>?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-300 md:text-lg">
                Talk to a Flow fix MEP engineer about your building project,
                maintenance needs or emergency repair. We respond within one
                business day with a competitive quote.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 lg:col-span-4 lg:items-end"
            >
              <a
                href="#contact"
                className="btn-primary group w-full justify-center lg:w-auto"
              >
                <span>Get a Quote</span>
                <HiArrowUpRight className="text-base transition-transform group" />
              </a>
              <a
                href="#contact"
                className="btn-ghost w-full justify-center lg:w-auto"
              >
                <HiOutlineEnvelope className="text-lg text-gold" />
                <span>Contact Us</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
