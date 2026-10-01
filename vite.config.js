import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync, existsSync, readdirSync } from 'fs'
import { resolve } from 'path'

// Paginas que NO se publican: gallery-manager es una herramienta interna (noindex) y
// el archivo de verificacion de Search Console ya se sirve tal cual desde public/.
const EXCLUDE = new Set(['gallery-manager.html', 'google79c9e6f00b6af792.html'])

function htmlInputs() {
  const inputs = {}
  const add = (dir, file) => {
    if (!file.endsWith('.html') || EXCLUDE.has(file)) return
    const rel = dir ? `${dir}/${file}` : file
    const name = rel.replace(/\.html$/, '').replace(/[^a-zA-Z0-9]+/g, '_')
    inputs[name] = resolve(rel)
  }
  readdirSync('.', { withFileTypes: true }).forEach(e => { if (e.isFile()) add('', e.name) })
  if (existsSync('es')) readdirSync('es').forEach(f => add('es', f))
  return inputs
}

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
      // Entradas descubiertas solas: con las paginas por ciudad son mas de 50 archivos
      // y una lista a mano se desincroniza en cuanto alguien agrega una ciudad.
      input: htmlInputs()
    }
  },
  server: {
    port: 8000,
  },
})
