import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCheckCircle,
  HiArrowUpRight,
  HiOutlineRocketLaunch,
  HiOutlineEye,
  HiOutlineSparkles,
} from "react-icons/hi2";
import Container from "../components/Container.jsx";
import { aboutTimeline, coreValues } from "../data/about.js";
import { fadeUp, stagger, slideInLeft, viewportOnce } from "../utils/motion.js";

const valueIcons = {
  Mission: HiOutlineRocketLaunch,
  Vision: HiOutlineEye,
  Values: HiOutlineSparkles,
};

export default function About() {
  return (
    <section id="about" className="section-pad relative bg-navy-900">
      <Container className="relative">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* image side — spans 5 cols */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="./about.webp"
                  alt="Flow fix MEP team on site"
                  loading="lazy"
                  className="h-[480px] w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          {/* content side — spans 7 cols */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-7"
          >
            <motion.span variants={fadeUp} className="heading-eyebrow">
              About Flow fix
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-white md:text-5xl"
            >
              Your trusted MEP contractor in{" "}
              <span className="italic text-gold-gradient">
                Dubai &amp; the UAE
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-navy-300 md:text-lg"
            >
              Flow fix technical &amp; MEP works LLC is a Dubai Municipality
              approved contractor delivering complete mechanical, electrical,
              plumbing, fire fighting and extra low current systems for
              residential, commercial and industrial buildings.
            </motion.p>
            {/* mission / vision / values */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {coreValues.map((v) => {
                const Icon = valueIcons[v.title] || HiOutlineCheckCircle;
                return (
                  <div
                    key={v.title}
                    className="rounded-2xl border border-navy-700/40 bg-navy-800/40 p-5 transition-all hover:border-gold/30"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <Icon className="text-lg" />
                    </span>
                    <div className="mt-4 font-display text-base font-semibold text-white">
                      {v.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-navy-400">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 flex justify-center lg:mt-20"
        >
          <a href="#services" className="btn-primary group inline-flex">
            <span>Explore Our Services</span>
            <HiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
