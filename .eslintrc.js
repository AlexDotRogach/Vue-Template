module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript/recommended",
    "plugin:markdown/recommended",
    "plugin:vue/vue3-essential",
    "./.eslintrc-auto-import.json",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
