import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/spotify-data': {
        target: 'https://portfolio-oq4z.onrender.com',
        changeOrigin: true,             
      },
    },
  },
})
