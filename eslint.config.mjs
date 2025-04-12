import { base as configWantedly } from "eslint-config-wantedly";
import { react as configWantedlyTs } from "eslint-config-wantedly-typescript";
import pluginTailwind from "eslint-plugin-tailwindcss";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

export default [
  ...configWantedly,
  ...configWantedlyTs,
  ...pluginTailwind.configs["flat/recommended"],
  // ...compat.config({
  //   extends: ["next/core-web-vitals", "next/typescript"],
  // }),
  {
    ignores: [".next", "e2e", "next-env.d.ts"],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    plugins: {
      tailwindcss: pluginTailwind,
    },
    rules: {
      "tailwindcss/no-custom-classname": "off",
      "use-macros/styled-components": "off",
    },
  },
];
