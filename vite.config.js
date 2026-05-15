import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        search: "search.html",
        collections: "collections.html",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://ws.audioscrobbler.com/2.0/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
