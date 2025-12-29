import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // certifique-se de que é 'dist'
  },
  preview: {
    port: 4173, // ou a porta que você está usando
    allowedHosts: [
      'metaphrastical-finn-monetarily.ngrok-free.dev'
    ]
  }
})
