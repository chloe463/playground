module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
