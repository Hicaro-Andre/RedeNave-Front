import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  preview: {
    port: 4173,
    // adiciona seu host do Cloudflare Tunnel
    allowedHosts: ["convertible-ribbon-tell-councils.trycloudflare.com"],
    // fallback SPA
    // faz todas as requisições caírem no index.html
    proxy: {},
  },
  server: {
    fs: {
      allow: ["."], // permite acesso ao filesystem do projeto
    },
  },
});
