import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import path from "node:path";
import { globSync } from "tinyglobby";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },

  base: "/endo-web/",

  build: {
    rollupOptions: {
      input: globSync("**/index.html", {
        ignore: ["node_modules/**", "dist/**"],
        absolute: true,
      }),
    },
  },
});
