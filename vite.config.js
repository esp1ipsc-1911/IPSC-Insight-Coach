import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: 'public',
  publicDir: 'assets',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '/src': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000
  }
})
