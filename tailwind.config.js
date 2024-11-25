/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'host': ["'Host Grotesk'", "sans-serif"],
      },
      colors: {
        'footerBG': '#111827',
      },
    },
  },
  plugins: [],
}