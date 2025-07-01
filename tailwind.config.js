/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#565360",
        labelColor: "#908E9B",
        disabledColor: "#E1DFE9",
        primaryColor: "#A4D8E1",
        secondaryColor: "#B2E0D4",
      },
    },
  },
  plugins: [],
};
