import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";
import useScrollPosition from "../hooks/useScrollPosition.js";

export default function ScrollToTop() {
  const visible = useScrollPosition(600);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-dark-900 transition-transform"
        >
          <HiArrowUp className="text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
