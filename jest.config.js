module.exports = {
  verbose: true,
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },

  testMatch: [
    "**/tests/**/*.tsx",
    "**/tests/**/*.spec.tsx",
    "**/specs/**/*.spec.tsx",
  ],
  testPathIgnorePatterns: ["tests/setup.ts", "dist", "node_modules"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
