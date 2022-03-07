module.exports = {
  roots: ["<rootDir>/src"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/", "<rootDir>/src/__tests__/utils/"],
  testEnvironment: "jsdom",
  transform: {
    // "^.+\\.stories\\.tsx?$": "@storybook/addon-storyshots/injectFileName",
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      {
        presets: ["next/babel"],
        plugins: [
          "babel-plugin-macros",
          "babel-plugin-styled-components",
          // ["@welldone-software/babel-plugin-react-add-test-id", { attrName: "data-testid" }],
        ],
      },
    ],
  },

  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "<rootDir>/src/setupTests.ts"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
};
