'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function QuantityBuyButton({ product }) {
  const [qty, setQty] = useState(1)
  const total = product.price * qty
  const outOfStock = product.stock <= 0

  if (outOfStock) {
    return (
      <button
        disabled
        className="w-full text-center bg-gray-200 text-gray-500 text-base font-bold py-4 rounded-xl cursor-not-allowed"
      >
        Out of Stock
      </button>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Quantity selector */}
      <div>
        <label className="block text-sm font-semibold text-brand-dark mb-2">Quantity</label>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-10 h-10 rounded-full border-2 border-brand-border flex items-center justify-center text-xl font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-colors"
          >
            −
          </button>
          <span className="text-xl font-bold text-brand-dark w-8 text-center">{qty}</span>
          <button
            onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
            className="w-10 h-10 rounded-full border-2 border-brand-border flex items-center justify-center text-xl font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-colors"
          >
            +
          </button>
        </div>
        {product.stock <= 10 && (
          <p className="text-xs text-brand-orange font-semibold mt-1.5">Only {product.stock} left in stock!</p>
        )}
      </div>

      {/* Buy Now */}
      <Link
        href={`/checkout?slug=${product.slug}&qty=${qty}`}
        className="w-full text-center bg-brand-orange text-white text-base font-bold py-4 rounded-xl shadow-md active:scale-95 transition-transform"
      >
        Buy Now — ₹{total}
      </Link>

    </div>
  )
}
