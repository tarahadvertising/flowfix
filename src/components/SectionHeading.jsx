import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../utils/motion.js";
import { cn } from "../utils/cn.js";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className = "",
  dark = false,
}) {
  const isCenter = align === "center";
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "max-w-3xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <motion.span variants={fadeUp} className="heading-eyebrow">
          {eyebrow}
        </motion.span>
      ) : null}
      <motion.h2
        variants={fadeUp}
        className={cn(
          "mt-6 font-display text-[2.5rem] font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[3.5rem]",
          dark ? "text-white" : "text-navy-900",
        )}
      >
        {title}{" "}
        {highlight ? (
          <span className="italic text-gold-gradient">{highlight}</span>
        ) : null}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mt-6 text-base leading-relaxed md:text-lg",
            dark ? "text-navy-300" : "text-navy-500",
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl",
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
