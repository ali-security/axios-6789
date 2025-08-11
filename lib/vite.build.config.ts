import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
    },
  },
  build: {
    lib: {
      name: "@axios/axios",
      fileName: "index",
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs", "umd"],
    },
  },
});
