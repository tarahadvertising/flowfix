import React from "react";
import { motion } from "framer-motion";
import {
  HiArrowUpRight,
  HiPlayCircle,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineCog6Tooth,
  HiOutlineSparkles,
} from "react-icons/hi2";
import Container from "../components/Container.jsx";
import AnimatedBackground from "../components/AnimatedBackground.jsx";
import { fadeUp, stagger } from "../utils/motion.js";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-900 pt-32 pb-20 md:pt-36"
    >
      <AnimatedBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: copy */}
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.h1
              variants={fadeUp}
              className="mt-7 font-display text-[2.9rem] font-medium leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[4.5rem]"
            >
              MEP Solutions{" "}
              <span className="italic text-gold-gradient">Engineered</span> for
              Every Building
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-relaxed text-navy-300 md:text-lg"
            >
              Flow fix technical &amp; MEP works LLC delivers complete
              mechanical, electrical and plumbing solutions for residential,
              commercial and industrial projects across Dubai and the UAE — from
              design and installation to annual maintenance.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href="#services" className="btn-primary group">
                <span>Explore Services</span>
                <HiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#projects" className="btn-ghost group">
                <HiPlayCircle className="text-xl text-gold" />
                <span>View Our Work</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative lg:col-span-5"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]"></div>
  );
}

function FloatingChip({
  icon: Icon,
  title,
  sub,
  className = "",
  delay = 0,
  gold = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.6 + delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`${className} animate-float-slow`}
    >
      <div className="flex items-center gap-3 rounded-2xl glass-strong gold-border px-3.5 py-2.5">
        <span
          className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${
            gold ? "bg-gold-gradient text-navy-900" : "bg-navy-700 text-gold"
          }`}
        >
          <Icon className="text-lg" />
        </span>
        <div className="pr-1">
          <div className="text-sm font-semibold text-white leading-tight">
            {title}
          </div>
          <div className="text-[11px] text-navy-400 leading-tight">{sub}</div>
        </div>
      </div>
    </motion.div>
  );
}
