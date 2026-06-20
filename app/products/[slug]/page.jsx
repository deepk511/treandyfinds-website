import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuantityBuyButton from '@/components/QuantityBuyButton'
import ProductGallery from '@/components/ProductGallery'
import MetaPixelViewContent from '@/components/MetaPixelViewContent'
import { getProductImages } from '@/lib/productImages'
import products from '@/data/products.json'
import reviews from '@/data/reviews.json'

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

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-4 h-4 ${s <= rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
  const images = getProductImages(product.slug, product.image)

  return (
    <>
      <MetaPixelViewContent product={product} />
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
          {/* Image gallery */}
          <ProductGallery
            images={images}
            name={product.name}
            badge={product.badge}
          />

          {/* Details */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div>
              <span className="text-xs font-semibold text-brand-green bg-green-50 px-2.5 py-0.5 rounded-full">
                {product.category}
              </span>
              <h1 className="text-xl md:text-2xl font-bold text-brand-dark mt-2 leading-snug">
                {product.name}
              </h1>
              {/* Rating summary */}
              <div className="flex items-center gap-2 mt-2">
                <StarRating rating={Math.round(avgRating)} />
                <span className="text-sm font-semibold text-brand-dark">{avgRating}</span>
                <span className="text-xs text-brand-gray">({reviews.length} reviews)</span>
              </div>
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

            {/* Delivery + Return */}
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 text-brand-dark">
                <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>In Stock</strong> — Ready to ship</span>
              </div>
              <div className="flex items-center gap-2 text-brand-dark">
                <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                </svg>
                <span>Delivered in <strong>5–7 business days</strong></span>
              </div>
              <div className="flex items-center gap-2 text-brand-dark">
                <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
                <span><strong>7-day</strong> easy return policy</span>
              </div>
            </div>

            <QuantityBuyButton product={product} />
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-brand-dark">Customer Reviews</h2>
            <div className="flex items-center gap-2">
              <StarRating rating={5} />
              <span className="text-sm font-semibold text-brand-dark">{avgRating} / 5</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((review, i) => (
              <div key={i} className="bg-brand-cream rounded-xl p-4 border border-brand-border">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-bold text-brand-dark">{review.name}</p>
                    <p className="text-xs text-brand-gray">{review.city}, Tamil Nadu</p>
                  </div>
                  <span className="text-xs text-brand-gray">{review.date}</span>
                </div>
                <StarRating rating={review.rating} />
                <p className="text-sm text-brand-dark mt-2 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
