import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        search: resolve(__dirname, "search.html"),
        collections: resolve(__dirname, "collections.html"),
      },
    },
  },
  server: {
    proxy: {
      // 當我們 fetch '/api' 開頭的路徑時，Vite 會幫我們轉發給 Last.fm
      "/api": {
        target: "https://ws.audioscrobbler.com/2.0/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
