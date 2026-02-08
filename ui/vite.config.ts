import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    outDir: '../extension/react',
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      formats: ['es'],
      fileName: () => 'sidebar.js',
      name: 'ProjectPsi'
    },
    rollupOptions: {
      external: [],
      output: {
        format: 'es',
        globals: {},
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'sidebar.css'
          return '[name][extname]'
        }
      }
    },
    sourcemap: false
  }
})
