import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFF200", // kuning khas dashboard kamu
        background: {
          light: "#F9FAFB",
          dark: "#0D0D0D",
        },
    card: {
          light: "#FFFFFF",
          dark: "#1A1A1A",
        },
        text: {
          light: "#111827",
          dark: "#E5E7EB",
        },
        border: {
          light: "#E5E7EB",
          dark: "#374151",
        },
        success: "#10B981",
        danger: "#EF4444",
        warning: "#F59E0B",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
