module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
