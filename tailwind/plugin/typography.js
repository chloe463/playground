const plugin = require("tailwindcss/plugin");
const fontFamily = require("../config/fontFamily");

const heading = fontFamily.heading.join(", ");
const body = fontFamily.body.join(", ");
const defs = {
  catch1: ["72px", "96px", 700, heading],
  catch2: ["56px", "72px", 700, heading],
  catch3: ["40px", "56px", 700, heading],
  heading1: ["32px", "44px", 700, heading],
  heading2: ["24px", "36px", 700, heading],
  heading3: ["18px", "28px", 700, heading],
  subheading: ["16px", "24px", 600, heading],
  leading: ["15px", "32px", 700, heading],
  body1: ["15px", "28px", 400, body],
  body2: ["14px", "24px", 400, body],
  caption: ["12px", "16px", 400, body],
  button: ["14px", "16px", 400, body],
};

module.exports = plugin(({ addComponents }) => {
  addComponents(() => {
    classNames = Object.entries(defs).reduce((acc, entry) => {
      const [className, values] = entry;
      const [fontSize, lineHeight, fontWeight, fontFamily] = values;
      acc[`.${className}`] = {
        fontSize,
        lineHeight,
        fontWeight,
        fontFamily,
      };
      return acc;
    }, {});
    return classNames;
  });
});
