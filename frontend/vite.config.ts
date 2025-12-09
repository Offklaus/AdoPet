import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 👈 porta personalizada
    open: true, // 👈 abre automaticamente no navegador
  },
  preview: {
    port: 3000, // 👈 mesma porta no modo de build
  },
})
