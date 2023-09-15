/// <reference types="vitest" />
import { defineConfig } from "vite";
import magicalSvg from "vite-plugin-magical-svg";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    include: ["**/.specs/**/*.+(spec).ts(x)?"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
    environment: "jsdom",
  },
  plugins: [
    magicalSvg({
      target: "react",
    }),
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      lib: path.resolve(__dirname, "./lib"),
      tests: path.resolve(__dirname, "./tests"),
      stories: path.resolve(__dirname, "./stories"),
      src: path.resolve(__dirname, "./lib/src"),
      components: path.resolve(__dirname, "./lib/src/components"),
      modules: path.resolve(__dirname, "./lib/src/modules"),
      helpers: path.resolve(__dirname, "./lib/src/helpers"),
      assets: path.resolve(__dirname, "./assets"),
    },
  },
});
