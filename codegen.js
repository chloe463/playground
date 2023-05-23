// import type { CodegenConfig } from "@graphql-codegen/cli";
/** @type {import("@graphql-codegen/cli").CodegenConfig} */
const config = {
  overwrite: true,
  schema: "schema.json",
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
    },
  },
  hooks: {
    afterAllFileWrite: [
      "prettier --write"
    ]
  }
};

module.exports = config;
