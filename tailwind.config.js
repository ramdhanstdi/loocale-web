/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#B6D6EE",
          200: "#95B7D4",
          500: "#3C6F93",
          800: "#0f3c56",
          900: "#00283e",
        },
        secondary: {
          500: "#F1614B",
          800: "#C2493C",
        },
        grayscale: {
          50: "#EDEFF1",
          100: "#D2D9DE",
          400: "#7E93A1",
          500: "#678190",
        },
        error: {
          600: "#DC2A2D",
        },
      },
    },
  },
  plugins: [],
};
