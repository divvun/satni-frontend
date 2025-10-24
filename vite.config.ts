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
    // Transform Lingui message files from CommonJS to ES modules
    {
      name: 'transform-lingui-messages',
      transform(code, id) {
        // Only process message.js files from locales
        if (id.includes('/locales/') && id.endsWith('/messages.js')) {
          // Convert module.exports to export default (handle with or without space)
          const transformed = code.replace(
            /module\.exports\s*=/,
            'export default ',
          );
          return {
            code: transformed,
            map: null,
          };
        }
      },
    },
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
