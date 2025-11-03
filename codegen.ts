import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8000/graphql/",
  documents: [
    "src/**/*.{ts,tsx}",
    "!src/operations/queries/getInterfaceLanguage.tsx",
    "!src/operations/queries/getLangsDicts.tsx",
    "!src/operations/queries/getSearchListClickedItem.tsx",
    "!src/operations/queries/getSearchMode.tsx",
  ],
  ignoreNoDocuments: true,
  generates: {
    "./src/graphql/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
