import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * O GitHub Pages deste repositório está ligado com origem `main` na RAIZ. Para
 * a página compilada ser o que o Pages serve (e não o README renderizado pelo
 * Jekyll), o build sai na raiz e o `.nojekyll` desliga o Jekyll.
 *
 * Por isso `root: "demo"`: a entrada é `demo/index.html`, e a raiz do
 * repositório recebe só o resultado (`index.html` + `assets/`). `emptyOutDir`
 * fica FALSO de propósito — true apagaria o repositório inteiro.
 */
export default defineConfig({
  plugins: [react()],
  root: "demo",
  // Project page: servida em /Hub.siero-blog/, então os assets levam o prefixo.
  base: "/Hub.siero-blog/",
  build: {
    outDir: "..",
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: { quietDeps: true, silenceDeprecations: ["import", "legacy-js-api"] },
    },
  },
});
