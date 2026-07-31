import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import reactPackageJson from "react/package.json" with { type: "json" };

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    settings: {
      react: {
        version: reactPackageJson.version,
      },
    },
  },
  globalIgnores([".next/**", "out/**", "coverage/**", "node_modules/**"]),
]);

export default eslintConfig;
