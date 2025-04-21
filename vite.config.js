import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 4000,
    },
    plugins: [react(), tailwindcss()],
    base: mode === 'production' ? '/vite-blog/' : '/',
  };
});
