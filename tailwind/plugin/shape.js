const plugin = require("tailwindcss/plugin");

const shapes = {
  "r2": { borderRadius: "2px" },
  "r4": { borderRadius: "4px" },
  "r100": { borderRadius: "9999vmax" },
};

module.exports = plugin(({ addUtilities }) => {
  addUtilities(() => {
    const classNames = Object.entries(shapes).reduce((acc, entry) => {
      const [key, value] = entry;
      acc[`.shape-${key}`] = value;
      return acc;
    }, {});
    return classNames;
  });
});
