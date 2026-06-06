/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary accent: Amber Gold (industry energy, safety, innovation)
        gold: {
          DEFAULT: "#F59E0B",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
        },
        // Navy blue system (trust, authority, engineering)
        navy: {
          DEFAULT: "#0F172A",
          900: "#0B1120",
          800: "#162032",
          700: "#1E293B",
          600: "#334155",
          500: "#475569",
          400: "#64748B",
          300: "#94A3B8",
          200: "#CBD5E1",
          100: "#E2E8F0",
          50: "#F1F5F9",
        },
        // Content neutrals
        slate: {
          DEFAULT: "#334155",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)",
        "navy-gradient": "linear-gradient(135deg, #162032 0%, #0B1120 100%)",
        metallic:
          "linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0.04) 50%, rgba(11,17,32,0.02) 100%)",
        "hero-radial":
          "radial-gradient(ellipse at top right, rgba(245,158,11,0.12), transparent 58%), radial-gradient(ellipse at bottom left, rgba(245,158,11,0.06), transparent 58%)",
        "grid-pattern":
          "linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        glow: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        glow: "glow 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [],
};
