import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 1337,
  },
  resolve: {
    alias: [
      {find:'Pages', replacement: path.resolve('./src/pages')},
      {find:'Views', replacement: path.resolve('./src/views')},
    ]
  },
  build: {
    target: 'es2021',
    // example's function names will be lost if minified
    // 5kb diff when gzipped anyway
    minify: false,
  },
})
