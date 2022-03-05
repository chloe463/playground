/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

const colors = require("./tailwind/config/colors");
const fontSize = require("./tailwind/config/fontSize");
const fontFamily = require("./tailwind/config/fontFamily");
const elevation = require("./tailwind/plugin/elevation");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        elevation4: "0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)",
      },
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
  ],
}
