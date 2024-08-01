/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redHat: "'Red Hat Text', sans-serif",
      },
      colors: {
        redHsl: "hsl(14, 86%, 42%)",
        greenHsl: "hsl(159, 69%, 38%)",
      },
    },
  },
  plugins: [],
};
