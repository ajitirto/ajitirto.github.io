// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default { // Pastikan export default
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Pastikan ini mencakup file App.jsx/js Anda
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};