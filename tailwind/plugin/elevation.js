const plugin = require("tailwindcss/plugin");

function calcElevation(level) {
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
  return `${shadow1}, ${shadow2(level)}`;
}

module.exports = plugin(({ addUtilities }) => {
  addUtilities(() => {
    const classNames = Array.from({ length: 40 })
      .map((_, i) => i)
      .reduce((acc, i) => {
        const boxShadow = calcElevation(i);
        acc[`.elevation${i}`] = { boxShadow };
        acc[`.hover\\:elevation${i}:hover`] = { boxShadow };
        acc[`.focus\\:elevation${i}:focus`] = { boxShadow };
        return acc;
      }, {});
    return classNames;
  });
});
