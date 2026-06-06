import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCog6Tooth,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineBolt,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { fadeUp, stagger, viewportOnce } from "../utils/motion.js";

const highlights = [
  {
    icon: HiOutlineCog6Tooth,
    title: "Advanced Engineering",
    description:
      "Cutting-edge engineering solutions powered by latest technologies and industry best practices",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Safety First",
    description:
      "Uncompromising commitment to safety standards and regulatory compliance",
  },
  {
    icon: HiOutlineChartBar,
    title: "Data-Driven Results",
    description:
      "Analytics-powered insights for continuous improvement and optimization",
  },
  {
    icon: HiOutlineUsers,
    title: "Expert Team",
    description: "Seasoned professionals with decades of industrial experience",
  },
  {
    icon: HiOutlineBolt,
    title: "Rapid Deployment",
    description: "Quick implementation with minimal disruption to operations",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Global Standards",
    description: "International quality standards and best-in-class processes",
  },
];

export default function Highlights() {
  return (
    <section className="section-pad relative overflow-hidden bg-navy-50">
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-gold/5 blur-[140px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Key Differentiators"
          title="Why Flow fix"
          highlight="Stands Above"
          description="Our unique approach combines technical excellence with operational intelligence to deliver exceptional results."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-navy-200/60 bg-white p-6 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold-600/10 text-gold ring-1 ring-gold/20">
                  <highlight.icon className="text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-medium text-navy-900">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
