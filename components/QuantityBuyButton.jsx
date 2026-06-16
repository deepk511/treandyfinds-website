'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function QuantityBuyButton({ product }) {
  const [qty, setQty] = useState(1)
  const total = product.price * qty

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
            onClick={() => setQty((q) => q + 1)}
            className="w-10 h-10 rounded-full border-2 border-brand-border flex items-center justify-center text-xl font-bold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-colors"
          >
            +
          </button>
          {qty > 1 && (
            <span className="text-sm text-brand-gray ml-2">
              ₹{product.price} × {qty} = <span className="font-bold text-brand-orange">₹{total}</span>
            </span>
          )}
        </div>
      </div>

      {/* Buy Now */}
      <Link
        href={`/checkout?slug=${product.slug}&qty=${qty}`}
        className="w-full text-center bg-brand-orange text-white text-base font-bold py-4 rounded-xl shadow-md active:scale-95 transition-transform"
      >
        Buy Now — ₹{total}
      </Link>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/919940103738?text=Hi! I want to order ${qty} x ${encodeURIComponent(product.name)} (₹${total} total)`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center border-2 border-[#25D366] text-[#25D366] font-semibold py-3.5 rounded-xl active:scale-95 transition-transform text-sm"
      >
        Ask on WhatsApp
      </a>
    </div>
  )
}
