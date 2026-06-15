import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import products from '@/data/products.json'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return {}
  return {
    title: `${product.name} — Treandyfinds India`,
    description: product.features.join('. '),
  }
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-6 md:py-10">
        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-brand-gray mb-5 hover:text-brand-orange transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Shop
        </Link>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div>
              <span className="text-xs font-semibold text-brand-green bg-green-50 px-2.5 py-0.5 rounded-full">
                {product.category}
              </span>
              <h1 className="text-xl md:text-2xl font-bold text-brand-dark mt-2 leading-snug">
                {product.name}
              </h1>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-brand-orange">₹{product.price}</span>
              <div className="flex flex-col">
                <span className="text-sm text-brand-gray line-through">₹{product.mrp}</span>
                <span className="text-xs font-bold text-brand-green">{discount}% OFF</span>
              </div>
            </div>

            {/* Features */}
            <div className="bg-brand-cream rounded-xl p-4">
              <h2 className="text-sm font-bold text-brand-dark mb-3 uppercase tracking-wide">Key Features</h2>
              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-dark">
                    <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-brand-green inline-block"></span>
              <span className="text-brand-green font-semibold">In Stock</span>
              <span className="text-brand-gray">— Ready to ship</span>
            </div>

            {/* Buy Now */}
            <Link
              href={`/checkout?slug=${product.slug}`}
              className="w-full text-center bg-brand-orange text-white text-base font-bold py-4 rounded-xl shadow-md active:scale-95 transition-transform"
            >
              Buy Now — ₹{product.price}
            </Link>

            {/* WhatsApp query */}
            <a
              href={`https://wa.me/919940103738?text=Hi! I'm interested in: ${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center border-2 border-[#25D366] text-[#25D366] font-semibold py-3.5 rounded-xl active:scale-95 transition-transform text-sm"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
