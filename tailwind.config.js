/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "hsl(206 94% 87% )",
        "light-gray": "hsl(229 24% 87%)",
        "cool-gray": "hsl(231 11% 63%)",
        "marine-blue": "hsl(213 96% 18%)",
        "purplish-blue": "hsl(243 100% 62%)",
        "strawberry-red": "hsl(354 84% 57%)",
        alabaster: "hsl(231 100% 99%)",
        magnolia: "hsl(217, 100%, 97%)",
      },
    },
  },
  plugins: [],
};
