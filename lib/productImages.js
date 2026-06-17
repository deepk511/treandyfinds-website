import manifest from '@/data/imageManifest.json'

const EXTENSIONS = ['jpeg', 'jpg', 'png', 'webp']

// Look up a file by base name (no extension) in the build-time manifest.
// The manifest is regenerated before every build by scripts/generate-image-manifest.js,
// so when image files change the manifest changes too — which lets Next.js detect
// the change and re-render the page (build-time fs reads alone do not trigger this).
function findFile(filenameNoExt) {
  for (const ext of EXTENSIONS) {
    const name = `${filenameNoExt}.${ext}`
    if (manifest.includes(name)) return `/products/${name}`
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

  // Drop accidental duplicates (e.g. cover file identical path to a numbered file)
  const unique = [...new Set(images)]

  return unique.length > 0 ? unique : [fallbackImage]
}
