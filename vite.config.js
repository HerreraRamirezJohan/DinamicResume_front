import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import { fileURLToPath } from 'url';

// Obtener __dirname usando import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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
      "@Mooks" : path.resolve(__dirname, './src/Mooks'),
    },
  },
})
