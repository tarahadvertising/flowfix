import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3, HiXMark, HiArrowUpRight } from "react-icons/hi2";
import Logo from "../components/Logo.jsx";
import { navLinks } from "../data/site.js";
import useScrollPosition from "../hooks/useScrollPosition.js";
import { cn } from "../utils/cn.js";

export default function Header() {
  const scrolled = useScrollPosition(40);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2.5" : "py-5",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-[min(96%,1280px)] items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 md:px-7",
          scrolled
            ? "glass-strong border border-navy-600/20"
            : "border border-transparent",
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium text-navy-300 transition-colors hover:text-white"
            >
              <span>{link.label}</span>
              <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-gradient transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden sm:inline-flex">
            <span>Get a Quote</span>
            <HiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy-600/30 bg-navy-800/50 text-white transition-colors hover:border-gold/40 hover:text-gold lg:hidden"
          >
            {open ? (
              <HiXMark className="text-2xl" />
            ) : (
              <HiBars3 className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
          >
            <div className="mx-auto mt-3 w-[min(96%,1280px)] rounded-2xl glass-strong p-4 border border-navy-600/20">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-gold/5 hover:text-gold"
                    >
                      {link.label}
                      <HiArrowUpRight className="text-sm opacity-60" />
                    </a>
                  </li>
                ))}
                <li className="mt-3">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full"
                  >
                    Get a Quote
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
