/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ needed for theme toggle
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};