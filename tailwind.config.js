/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { fontFamily: "Roboto Slab", fontFamily: " serif" },
  },
  plugins: [require("daisyui")],
};
