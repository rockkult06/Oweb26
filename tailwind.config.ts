import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // OW Design System - City Night Mode
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "#0A192F", // Background-1
          secondary: "#112240", // Background-2
          tertiary: "#233554", // Background-3
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#64FFDA", // Optimizasyon/Verim
          foreground: "#0A192F",
        },
        secondary: {
          DEFAULT: "#57CBFF", // Teknoloji/Güven
          foreground: "#0A192F",
        },
        destructive: {
          DEFAULT: "#FF6B6B", // Alarm/Critical
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#FFD166", // Uyarı
          foreground: "#0A192F",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Data Viz Presets
        "traffic-flow": {
          start: "#4ECDC4",
          end: "#FF6B6B",
        },
        "density": {
          start: "#1A936F",
          mid: "#FFE156",
          end: "#D7263D",
        },
        "cost": {
          start: "#118AB2",
          mid: "#06D6A0",
          end: "#EF476F",
        },
        "timeline": {
          start: "#7209B7",
          mid: "#3A86FF",
          end: "#FB5607",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Roboto Mono", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
