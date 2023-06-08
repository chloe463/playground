const colors = require("./tailwind/config/colors");
const fontSize = require("./tailwind/config/fontSize");
const fontFamily = require("./tailwind/config/fontFamily");
const elevation = require("./tailwind/plugin/elevation");
const typography = require("./tailwind/plugin/typography");

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in': 'cubic-bezier(0.3, 0.3, 0.3, 1)',
      },
      colors,
      fontSize,
    },
    fontFamily,
  },
  plugins: [
    elevation,
    typography,
  ],
}
