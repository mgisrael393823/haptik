
import type { Config } from "tailwindcss";

const config: Config = {
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        first: {
          "0%": { transform: "translateY(0px) scale(1)" },
          "33%": { transform: "translateY(-10px) scale(1.03)" },
          "66%": { transform: "translateY(7px) scale(0.98)" },
          "100%": { transform: "translateY(0px) scale(1)" },
        },
        second: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(10px, 10px) scale(1.02)" },
          "66%": { transform: "translate(-7px, -7px) scale(0.98)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        third: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-10px, 10px) scale(1.02)" },
          "66%": { transform: "translate(7px, -7px) scale(0.98)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        fourth: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(10px, -10px) scale(1.02)" },
          "66%": { transform: "translate(-7px, 7px) scale(0.98)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        fifth: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-10px, -10px) scale(1.02)" },
          "66%": { transform: "translate(7px, 7px) scale(0.98)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        first: "first 10s infinite",
        second: "second 12s infinite",
        third: "third 8s infinite",
        fourth: "fourth 14s infinite", 
        fifth: "fifth 6s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
