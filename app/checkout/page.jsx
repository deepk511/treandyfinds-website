'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import products from '@/data/products.json'

function CheckoutForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const slug = searchParams.get('slug')
  const product = products.find((p) => p.slug === slug)

  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '', city: '', pincode: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!product) router.replace('/')
  }, [product, router])

  if (!product) return null

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit mobile number'
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.address.trim()) e.address = 'Delivery address is required'
    if (!form.city.trim()) e.city = 'City is required'
    if (!/^\d{6}$/.test(form.pincode)) e.pincode = 'Enter a valid 6-digit pincode'
    return e
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    // Razorpay integration goes here (Day 2)
    // For now, simulate success
    setTimeout(() => {
      router.push(`/order-success?product=${encodeURIComponent(product.name)}&amount=${product.price}`)
    }, 1000)
  }

  return (
    <>
      <Navbar />
      <main className="max-w-lg mx-auto px-4 py-8">
        {/* Back */}
        <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-1 text-sm text-brand-gray mb-5 hover:text-brand-orange transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Product
        </Link>

        <h1 className="text-2xl font-bold text-brand-dark mb-6">Checkout</h1>

        {/* Order summary */}
        <div className="bg-brand-cream rounded-xl p-4 flex items-center gap-3 mb-6 border border-brand-border">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-brand-dark leading-snug line-clamp-2">{product.name}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-base font-bold text-brand-orange">₹{product.price}</span>
              <span className="text-xs text-brand-gray line-through">₹{product.mrp}</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <h2 className="text-base font-bold text-brand-dark">Delivery Details</h2>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition ${errors.name ? 'border-red-500' : 'border-brand-border'}`}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-1">Mobile Number *</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition ${errors.phone ? 'border-red-500' : 'border-brand-border'}`}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition ${errors.email ? 'border-red-500' : 'border-brand-border'}`}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-1">Delivery Address *</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Door no., Street, Area, Landmark"
              rows={3}
              className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition resize-none ${errors.address ? 'border-red-500' : 'border-brand-border'}`}
            />
            {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
          </div>

          {/* City + Pincode */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-brand-dark mb-1">City *</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition ${errors.city ? 'border-red-500' : 'border-brand-border'}`}
              />
              {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-brand-dark mb-1">Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="6-digit pincode"
                maxLength={6}
                className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition ${errors.pincode ? 'border-red-500' : 'border-brand-border'}`}
              />
              {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode}</p>}
            </div>
          </div>

          {/* Pay button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-orange text-white font-bold text-base py-4 rounded-xl shadow-md active:scale-95 transition-transform disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {loading ? 'Processing...' : `Proceed to Pay — ₹${product.price}`}
          </button>

          <p className="text-center text-xs text-brand-gray">
            🔒 Secure checkout powered by Razorpay
          </p>
        </form>
      </main>
      <Footer />
    </>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutForm />
    </Suspense>
  )
}
