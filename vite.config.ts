import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // pasta de build
  },
  preview: {
    port: 4173,
    allowedHosts: [
      'convertible-ribbon-tell-councils.trycloudflare.com'
    ],
  },
  base: '/', // garante que todas as rotas apontem para /
});
