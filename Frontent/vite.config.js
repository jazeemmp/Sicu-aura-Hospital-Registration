import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://backend-1xc8hq1w3-jazeemmps-projects.vercel.app',  // Your backend URL
        changeOrigin: true,  // Makes sure the host header is changed to the target URL
        secure: false,  // Set to true if you're using HTTPS, false if not
      }
    }
  }
})
