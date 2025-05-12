import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Development settings (ignored in production)
  server: {
    host: 'localhost',
    port: 5174,
    strictPort: true
  },
  // Production settings for Render
  preview: {
    port: 3000,  // Must match Render's expected port
    strictPort: true,
  },
  build: {
    outDir: 'dist',  // Explicit output directory
  },
  base: '/',  // Ensures correct asset paths
})