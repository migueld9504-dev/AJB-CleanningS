import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'

// Custom plugin to copy non-module JS files to dist
function copyStaticJsPlugin() {
  return {
    name: 'copy-static-js',
    writeBundle(options) {
      const outDir = options.dir || 'dist'
      const jsOutDir = resolve(outDir, 'js')

      if (!existsSync(jsOutDir)) {
        mkdirSync(jsOutDir, { recursive: true })
      }

      const files = ['i18n.js', 'main.js', 'testimonials.js']
      files.forEach(file => {
        const src = resolve('js', file)
        const dest = resolve(jsOutDir, file)
        try {
          copyFileSync(src, dest)
          console.log(`Copied js/${file} to dist/js/${file}`)
        } catch (e) {
          console.warn(`Could not copy js/${file}:`, e.message)
        }
      })
    },
  }
}

export default defineConfig({
  root: '.',
  plugins: [copyStaticJsPlugin()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        commercial: resolve('commercial-cleaning-ny-nj.html'),
        healthcare: resolve('healthcare-cleaning-osha-certified.html'),
        postConstruction: resolve('post-construction-cleaning-ny-nj-ct-pa.html'),
        luxuryResidential: resolve('luxury-residential-cleaning-white-glove.html')
      }
    }
  },
  server: {
    port: 8000,
  },
})
