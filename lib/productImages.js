import fs from 'fs'
import path from 'path'

const EXTENSIONS = ['jpeg', 'jpg', 'png', 'webp']
const PRODUCTS_DIR = path.join(process.cwd(), 'public', 'products')

function findFile(filenameNoExt) {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(PRODUCTS_DIR, `${filenameNoExt}.${ext}`))) {
      return `/products/${filenameNoExt}.${ext}`
    }
  }
  return null
}

// Auto-detects gallery images for a product by filename convention:
// slug.jpeg (cover), slug-2.jpeg, slug-3.jpeg, ... (additional, sequential, no gaps)
export function getProductImages(slug, fallbackImage) {
  const images = []

  const cover = findFile(slug)
  if (cover) images.push(cover)

  let i = 2
  while (true) {
    const next = findFile(`${slug}-${i}`)
    if (!next) break
    images.push(next)
    i++
  }

  return images.length > 0 ? images : [fallbackImage]
}
