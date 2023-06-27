module.exports = {
  verbose: true,
  testMatch: [
    "**/tests/**/*.ts?(x)",
    "**/tests/**/*.spec.tsx",
    "**/specs/**/*.spec.tx",
  ],
  testPathIgnorePatterns: ["tests/setup.js", "dist"],
};
