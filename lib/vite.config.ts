/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
    },
  },
  test: {
    name: "axios",
    globals: true,
    include: ["../tests/**/*.test.ts"],
    coverage: {
      provider: "v8",
    },
  },
});
