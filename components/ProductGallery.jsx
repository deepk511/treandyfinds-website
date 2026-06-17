'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function ProductGallery({ images, name, badge }) {
  const gallery = images && images.length > 0 ? images : []
  const [active, setActive] = useState(0)

  return (
    <div className="w-full md:w-1/2">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
        <Image
          src={gallery[active]}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {gallery.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {gallery.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                i === active ? 'border-brand-orange' : 'border-brand-border'
              }`}
            >
              <Image src={img} alt={`${name} view ${i + 1}`} fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
