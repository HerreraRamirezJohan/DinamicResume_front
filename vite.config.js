import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Components" : path.resolve(__dirname, './src/Components'),
      "@Pages" : path.resolve(__dirname, './src/Pages'),
      "@Templates" : path.resolve(__dirname, './src/Templates'),
      "@Logic" : path.resolve(__dirname, './src/Logic'),
      "@Hooks" : path.resolve(__dirname, './src/Hooks'),
    },
  },
})
