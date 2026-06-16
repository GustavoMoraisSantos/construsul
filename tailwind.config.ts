import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#E11414",
          hover: "#C11010",
          dark: "#9E0C0C",
        },
        gold: {
          DEFAULT: "#F7C52B",
          hover: "#FFD84A",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          soft: "#3F3F46",
        },
        cloud: "#F5F6F8",
        muted: "#6B7280",
        line: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
