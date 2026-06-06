import React from "react";
import { cn } from "../utils/cn.js";

export default function Logo({ className = "", compact = false }) {
  return (
    <a
      href="#home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <img
        src="/flowfix.svg"
        alt="Flow fix"
        className={cn(
          "h-9 w-auto transition-transform group-hover:scale-105",
          compact && "h-8",
        )}
      />
    </a>
  );
}
