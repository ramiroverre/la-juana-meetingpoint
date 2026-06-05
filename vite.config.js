import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/la-juana-meetingpoint/',
  server: { port: 3000 }
})
