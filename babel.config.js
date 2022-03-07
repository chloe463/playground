/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  presets: ["next/babel"],
  plugins: [
    "babel-plugin-macros",
    "babel-plugin-styled-components",
    ...(process.env.NODE_ENV === "production" ? [["react-remove-properties", { properties: ["data-cy"] }]] : []),
  ],
};