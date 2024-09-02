import { resolve } from 'path'
import { defineConfig } from 'vite'

import injectHTML from 'vite-plugin-html-inject'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  base: '/makeup/',
  build: {
    outDir: '../makeup',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        main: resolve(__dirname, 'pages/main.html')
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  plugins: [
    injectHTML()
  ],
  css: {
    postcss: {
      plugins: []
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '~': fileURLToPath(new URL('.', import.meta.url))
    }
  }
})
