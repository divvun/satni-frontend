import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['macros'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  define: {
    // For Apollo Client compatibility
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['@apollo/client', 'graphql'],
  },
  // Support for legacy browsers if needed
  esbuild: {
    target: 'es2020',
  },
});
