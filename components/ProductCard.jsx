import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <div className="bg-white rounded-xl border border-brand-border shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col">
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="relative block aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-2 left-2 bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {product.badge}
          </span>
        )}
        {/* Discount */}
        <span className="absolute top-2 right-2 bg-brand-green text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          {discount}% OFF
        </span>
      </Link>

      {/* Info */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm font-semibold text-brand-dark leading-snug line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Price row */}
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-brand-orange">₹{product.price}</span>
          <span className="text-xs text-brand-gray line-through">₹{product.mrp}</span>
        </div>

        {/* View Details button */}
        <Link
          href={`/products/${product.slug}`}
          className="mt-auto w-full text-center bg-brand-orange text-white text-sm font-semibold py-2.5 rounded-lg active:scale-95 transition-transform"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
