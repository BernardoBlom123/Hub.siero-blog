import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Project page: o site fica servido em /Hub.siero-blog/, então os assets
  // precisam desse prefixo.
  base: "/Hub.siero-blog/",
  build: {
    // O GitHub Pages serve de `docs/` na branch main, que é a origem com menos
    // passos para ligar em Settings.
    outDir: "docs",
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: { quietDeps: true, silenceDeprecations: ["import", "legacy-js-api"] },
    },
  },
});
