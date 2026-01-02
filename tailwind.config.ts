import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          900: "#0a0a0f",
          800: "#12121a",
          700: "#1a1a25",
          600: "#252532",
        },
        electric: {
          400: "#00f5d4",
          500: "#00d4b8",
          600: "#00b39c",
        },
        plasma: {
          400: "#9b5de5",
          500: "#7b2cbf",
          600: "#5a189a",
        },
        flame: {
          400: "#ff6b35",
          500: "#f72585",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 245, 212, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 245, 212, 0.6)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

