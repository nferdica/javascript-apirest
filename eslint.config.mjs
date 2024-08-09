import globals, { es2025, node } from "globals";
import pluginJs from "@eslint/js";

export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
];

module.exports = {
  env: {
    es2025: true,
    node: true
  },
  extends: [
    'airbnb-base'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  rule: {
    "no-unused-vars": "error",
    "no-undef": "error",
    "class-methods-use-this": "off"
  }
}
