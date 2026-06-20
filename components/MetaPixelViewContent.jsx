'use client'
import { useEffect } from 'react'

export default function MetaPixelViewContent({ product }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: product.name,
        content_ids: [product.slug],
        content_type: 'product',
        value: product.price,
        currency: 'INR',
      })
    }
  }, [product.slug, product.name, product.price])

  return null
}