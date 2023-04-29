/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        highlight: "#2aa272",
      },
      borderColor: {
        primary: "#2aa272",
      },
      textColor: {
        primary: "#2aa272",
      },
    },
  },
  plugins: [],
};
