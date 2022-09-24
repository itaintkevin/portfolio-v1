/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satisfy': ['Quicksand', 'sans-serif'],
      },
      animation: {
        blob: "blob 4s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "25%": {
            transform: "translate(20px, -20px) scale(0.8)",
          },
          "50%": {
            transform: "translate(20px, -20px) scale(1.2)",
          },
          "75%": {
            transform: "translate(20px, -20px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        },
      }
    },
  },
  plugins: [],
}