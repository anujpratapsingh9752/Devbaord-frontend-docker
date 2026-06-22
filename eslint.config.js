import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Specify which JavaScript target file types to evaluate
    files: ["**/*.{js,mjs,cjs}"], 
  },
  {
    languageOptions: { 
      globals: globals.browser // Configures environment globals 
    }
  },
  pluginJs.configs.recommended, // Applies standard ESLint code-quality rules
