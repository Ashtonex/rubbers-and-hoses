import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: "#06080C",
          900: "#0D1118",
          850: "#131924",
          800: "#1A2230",
          750: "#232D3F",
          700: "#2D394E",
          650: "#384760",
          600: "#445573",
          500: "#5D7196",
          400: "#8395B5",
          300: "#B0BFD6",
          200: "#D3DDEB",
          100: "#E9EFF7",
          50: "#F8FAFD",
        },
        safety: {
          orange: "#D97706", // warm rich ember gold instead of harsh neon orange
          orangeHover: "#B45309",
          orangeLight: "#FEF3C7",
          amber: "#F59E0B",
          yellow: "#FBBF24",
          green: "#10B981",
        },
        ember: {
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        }
      },
      maxWidth: {
        canvas: "1720px",
      },
      screens: {
        "3xl": "1720px",
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        display: [
          "Plus Jakarta Sans",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        industrial: "0 2px 8px 0 rgba(0, 0, 0, 0.45)",
        "industrial-lg": "0 12px 32px -4px rgba(0, 0, 0, 0.65), 0 4px 12px -2px rgba(0, 0, 0, 0.5)",
        "industrial-glow": "0 0 25px -2px rgba(217, 119, 6, 0.35)",
        "ember-glow": "0 0 30px -4px rgba(245, 158, 11, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
