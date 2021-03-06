const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities }) => {
  addUtilities(() => {
    const shadow1 = `0 0 1px rgba(0, 0, 0, 0.02)`;
    const shadow2 = (i) => {
      if (i === 0) {
        return `0 0 1px rgba(0, 0, 0, 0.1)`;
      } else if (i < 8) {
        return `0 ${i * 0.5}px ${i * 1.5}px rgba(0, 0, 0, 0.1)`;
      } else if (i < 16) {
        return `0 ${i * 0.5}px ${i * 0.5 + 8}px rgba(0, 0, 0, 0.1)`;
      }
      return `0 ${i * 0.5}px ${i}px rgba(0, 0, 0, 0.1)`;
    };
    const result = Array.from({ length: 40 })
      .map((_, i) => i)
      .reduce((acc, i) => {
        acc[`.elevation${i}`] = { boxShadow: `${shadow1}, ${shadow2(i)}` };
        return acc;
      }, {});
    return result;
  });
});
