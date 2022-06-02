import { fileURLToPath, URL } from 'url';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [{ src: './assets/**/*', dest: 'public/' }],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
