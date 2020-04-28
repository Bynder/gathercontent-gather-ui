module.exports = {
  verbose: true,
  testMatch: ['**/tests/**/*.js?(x)', '**/tests/**/*.spec.js', '**/specs/**/*.spec.js'],
  testPathIgnorePatterns: ['tests/setup.js', 'dist'],
  moduleNameMapper: {
    "^dnd-core$": "dnd-core/dist/cjs",
    "^react-dnd$": "react-dnd/dist/cjs",
    "^react-dnd-html5-backend$": "react-dnd-html5-backend/dist/cjs",
    "^react-dnd-touch-backend$": "react-dnd-touch-backend/dist/cjs",
    "^react-dnd-test-backend$": "react-dnd-test-backend/dist/cjs",
    "^react-dnd-test-utils$": "react-dnd-test-utils/dist/cjs"
  }
};
