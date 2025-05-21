import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path, { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss({
          darkMode: 'class', // this sets dark mode by class without a config file
          content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
        })],
  resolve: {
     alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})

