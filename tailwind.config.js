/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

const plugin = require("tailwindcss/plugin");

const colors = require("./tailwind/colors");
const fontSize = require("./tailwind/fontSize");
const fontFamily = require("./tailwind/fontFamily");

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
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      addUtilities(() => {
        const shadow1 = `0 0 1px rgba(0, 0, 0, 0.02)`;
        const shadow2 = (i) => {
          if (i === 0) {
            return `0 0 1px rgba(0, 0, 0, 0.1)`;
          } else if (i < 8) {
            return `0 ${i*0.5}px ${i*1.5}px rgba(0, 0, 0, 0.1)`;
          } else if (i < 16) {
            return `0 ${i*0.5}px ${(i*0.5)+8}px rgba(0, 0, 0, 0.1)`;
          } 
          return `0 ${i*0.5}px ${i}px rgba(0, 0, 0, 0.1)`;
        };
        const result = Array.from({ length: 40 }).map((_, i) => i).reduce((acc, i) => {
          acc[`.elevation${i}`] = { boxShadow: `${shadow1}, ${shadow2(i)}` };
          return acc;
        }, {});
        return result;
      });
    }),
  ]
}
