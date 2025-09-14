import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 這行是關鍵！請換成你的儲-存庫名稱
  base: '/nantou-hockey-website/',
})
