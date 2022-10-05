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
        blob1: "blob1 10s infinite",
        blob2: "blob2 10s infinite",
        blob3: "blob3 10s infinite",
        blob4: "blob4 10s infinite",
      },
      keyframes: {
        blob1: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "25%": {
            transform: "translate(20px, 40px) scale(1.2)",
          },
          "50%": {
            transform: "translate(40px, -80px) scale(1.4)",
          },
          "75%": {
            transform: "translate(-80px, 40px) scale(1.2)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "25%": {
            transform: "translate(-20px, 20px) scale(1.4)",
          },
          "50%": {
            transform: "translate(80px, -20px) scale(1.6)",
          },
          "75%": {
            transform: "translate(-60px, 40px) scale(1.2)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        },
        blob3: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "25%": {
            transform: "translate(80px, 60px) scale(1.6)",
          },
          "50%": {
            transform: "translate(20px, 80px) scale(1.4)",
          },
          "75%": {
            transform: "translate(80px, 40px) scale(1.2)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        },
        blob4: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "25%": {
            transform: "translate(30px, 60px) scale(1.6)",
          },
          "50%": {
            transform: "translate(80px, 30px) scale(1.4)",
          },
          "75%": {
            transform: "translate(60px, 40px) scale(1.2)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        },
      },
    },
  },
  plugins: [],
}