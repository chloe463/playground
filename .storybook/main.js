module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: true
  }
};