const plugin = require("tailwindcss/plugin");
const fontFamily = require("../config/fontFamily");

module.exports = plugin(({ addComponents }) => {
  const defs = {
    catch1: ["72px", "96px", 700, fontFamily.heading.join(", ")],
    catch2: ["56px", "72px", 700, fontFamily.heading.join(", ")],
    catch3: ["40px", "56px", 700, fontFamily.heading.join(", ")],
    heading1: ["32px", "44px", 700, fontFamily.heading.join(", ")],
    heading2: ["24px", "36px", 700, fontFamily.heading.join(", ")],
    heading3: ["18px", "28px", 700, fontFamily.heading.join(", ")],
    subheading: ["16px", "24px", 700, fontFamily.heading.join(", ")],
    leading: ["15px", "32px", 700, fontFamily.heading.join(", ")],
    body1: ["15px", "28px", 400, fontFamily.body.join(", ")],
    body2: ["14px", "24px", 400, fontFamily.body.join(", ")],
    caption: ["12px", "16px", 400, fontFamily.body.join(", ")],
    button: ["14px", "16px", 400, fontFamily.body.join(", ")],
  };
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
