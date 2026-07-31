import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    settings: {
      react: {
        version: "19.2.8",
      },
    },
  },
  globalIgnores([".next/**", "out/**", "coverage/**", "node_modules/**"]),
]);

export default eslintConfig;
