import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Reference assets downloaded from the live theme.
    "scratch/**",
  ]),
  {
    // The clone reproduces the theme's exact DOM, which positions bare <img>
    // elements via CSS. next/image would alter that structure, so allow <img>.
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
