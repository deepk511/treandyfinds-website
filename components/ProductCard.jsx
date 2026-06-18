'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)
  const { addToCart } = useCart()
  const outOfStock = product.stock <= 0

  return (
    <div className="bg-white rounded-xl border border-brand-border shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col">
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="relative block aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={`object-cover hover:scale-105 transition-transform duration-300 ${outOfStock ? 'opacity-50' : ''}`}
        />
        {product.badge && !outOfStock && (
          <span className="absolute top-2 left-2 bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {product.badge}
          </span>
        )}
        {outOfStock ? (
          <span className="absolute top-2 right-2 bg-brand-dark text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            OUT OF STOCK
          </span>
        ) : (
          <span className="absolute top-2 right-2 bg-brand-green text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {discount}% OFF
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm font-semibold text-brand-dark leading-snug line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-brand-orange">₹{product.price}</span>
          <span className="text-xs text-brand-gray line-through">₹{product.mrp}</span>
        </div>

        <div className="mt-auto flex flex-col gap-1.5">
          {outOfStock ? (
            <button
              disabled
              className="w-full text-center bg-gray-200 text-gray-500 text-sm font-semibold py-2 rounded-lg cursor-not-allowed"
            >
              Out of Stock
            </button>
          ) : (
            <>
              <button
                onClick={() => addToCart(product)}
                className="w-full text-center border-2 border-brand-orange text-brand-orange text-sm font-semibold py-2 rounded-lg active:scale-95 transition-transform"
              >
                Add to Cart
              </button>
              <Link
                href={`/products/${product.slug}`}
                className="w-full text-center bg-brand-orange text-white text-sm font-semibold py-2 rounded-lg active:scale-95 transition-transform"
              >
                Buy Now
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
