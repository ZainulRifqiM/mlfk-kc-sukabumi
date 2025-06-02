/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#565360",
        labelColor: "#908E9B",
        disabledColor: "#E1DFE9",
        primaryColor: "#2B3078",
        secondaryColor: "#009F3C",
      },
    },
  },
  plugins: [],
};
