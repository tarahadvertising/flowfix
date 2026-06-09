import React from "react";

export default function AnimatedBackground({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./banner.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/92 via-navy-900/80 to-navy-900/95" />
      </div>

      <div className="absolute inset-0 bg-hero-radial" />
      <div className="noise" />
    </div>
  );
}
