import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/IPSC-Insight-Coach/',
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
});
