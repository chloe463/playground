// import type { CodegenConfig } from "@graphql-codegen/cli";
/** @type {import("@graphql-codegen/cli").CodegenConfig} */
const config = {
  overwrite: true,
  // schema: "schema.json",
  schema: "http://localhost:4000/graphql",
  documents: "src/**/!(*.d|*.generated).{ts,tsx,graphql}",
  generates: {
    "src/__generated__/types.ts": {
      plugins: ["typescript"],
    },
    "src/__generated__/graphqlOperationTypes.ts": {
      preset: "import-types",
      /** @type {import("@graphql-codegen/import-types-preset").ImportTypesConfig } */
      presetConfig: {
        typesPath: "./types",
      },
      plugins: [
        "typescript-operations",
        "typed-document-node",
      ],
      /** @type {import("@graphql-codegen/typescript-operations").TypeScriptDocumentsPluginConfig } */
      config: {
        // omitOperationSuffix: true,
      }
    },
    "src/__generated__/gql-masking/": {
      preset: "client-preset",
      /** @type {import("@graphql-codegen/client-preset").ClientPresetConfig } */
      presetConfig: {
        fragmentMasking: {
          unmaskFunctionName: "getFragmentData"
        },
      },
    },
  },
  hooks: {
    afterAllFileWrite: [
      "prettier --write"
    ]
  }
};

module.exports = config;
