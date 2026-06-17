// Scans public/products and writes a manifest of every image filename.
// Runs automatically before each build (see package.json "build" script) so the
// product gallery always reflects the actual image files in the repo — without
// relying on build-time fs reads that Next.js/Vercel can't cache-bust.
const fs = require('fs')
const path = require('path')

const PRODUCTS_DIR = path.join(process.cwd(), 'public', 'products')
const OUT_FILE = path.join(process.cwd(), 'data', 'imageManifest.json')
const VALID = /\.(jpe?g|png|webp)$/i

function generate() {
  let files = []
  try {
    files = fs.readdirSync(PRODUCTS_DIR).filter((f) => VALID.test(f))
  } catch (e) {
    console.warn('[image-manifest] could not read', PRODUCTS_DIR, e.message)
  }

  files.sort()
  fs.writeFileSync(OUT_FILE, JSON.stringify(files, null, 2) + '\n')
  console.log(`[image-manifest] wrote ${files.length} files to data/imageManifest.json`)
}

generate()
