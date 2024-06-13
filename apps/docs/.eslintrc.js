/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@viniciusvinnatest/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
