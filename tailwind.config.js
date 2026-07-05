/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        card: "#FFFFFF",
        border: "#E2E8F0",
        dark: "#0F172A",
        muted: "#64748B",
        brand: "#2563EB",
        "brand-dark": "#1D4ED8",
        "brand-light": "#DBEAFE",
        accent: "#38BDF8",
        success: "#34D399",
      },
    },
  },
  plugins: [],
};