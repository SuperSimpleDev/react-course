import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The value should be '/' + your repository name. For example:
  // if you named your repository "my-repo" the config should be
  // base: '/my-repo'
  base: '/chatbot-project'
})
