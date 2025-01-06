import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["node_modules/", "dist/"], },
  {files: ["src/**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  {
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions":"error",
      "prefer:const":"error",
      "no-console":"warn",
      "no-undef":"error",
      
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
];