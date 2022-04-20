module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-postcss",
  ],
  staticDirs: ["../public"],
};
