import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/vite-blog/',
 

  server: {
    port: 4000,
  },
  plugins: [react(), tailwindcss()],
})
