/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slow-move": {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(20px)" },
          "50%": { transform: "translateY(20px)" },
          "75%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "33%": { transform: "translateX(-100%)" },
          "66%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "slow-move": "slow-move 3s ease-in-out infinite",
        "slow-move2": "slow-move 4s ease-in-out infinite",
        slide: "slide 12s infinite",
      },
    },
  },
  plugins: [],
};
