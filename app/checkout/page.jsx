'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCart } from '@/context/CartContext'
import products from '@/data/products.json'

function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) { resolve(true); return }
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

function CheckoutForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { cart, totalAmount, clearCart } = useCart()

  const slug = searchParams.get('slug')
  const qty = Math.max(1, parseInt(searchParams.get('qty') || '1', 10))

  // Determine mode: single product (Buy Now) vs cart
  const isCartMode = !slug
  const product = slug ? products.find((p) => p.slug === slug) : null
  const total = isCartMode ? totalAmount : (product ? product.price * qty : 0)
  const orderDescription = isCartMode
    ? `${cart.length} item${cart.length !== 1 ? 's' : ''} from Treandyfinds India`
    : (product ? product.name : '')

  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '', city: '', pincode: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isCartMode && !product) router.replace('/')
    if (isCartMode && cart.length === 0) router.replace('/cart')
  }, [product, isCartMode, cart, router])

  if (!isCartMode && !product) return null
  if (isCartMode && cart.length === 0) return null

  function getOrderItems() {
    return isCartMode
      ? cart.map((item) => ({ name: item.name, price: item.price, qty: item.qty }))
      : [{ name: product.name, price: product.price, qty }]
  }

  function generateOrderId() {
    return 'TF' + Date.now().toString(36).toUpperCase()
  }

  async function sendOrderEmails(paymentMethod) {
    try {
      await fetch('/api/send-order-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: generateOrderId(),
          customerName: form.name,
          customerEmail: form.email,
          customerPhone: form.phone,
          address: form.address,
          city: form.city,
          pincode: form.pincode,
          items: getOrderItems(),
          total,
          paymentMethod,
        }),
      })
    } catch (err) {
      console.error('Order email failed to send:', err)
    }
  }

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

    try {
      const res = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total,
          productName: orderDescription,
          customerName: form.name,
          customerPhone: form.phone,
          customerEmail: form.email,
        }),
      })
      const data = await res.json()
      if (!data.orderId) throw new Error('Order creation failed')

      const loaded = await loadRazorpay()
      if (!loaded) throw new Error('Razorpay failed to load')

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: 'INR',
        name: 'Treandyfinds India',
        description: orderDescription,
        order_id: data.orderId,
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        notes: {
          address: `${form.address}, ${form.city} - ${form.pincode}`,
        },
        theme: { color: '#FF6B35' },
        handler: function () {
          sendOrderEmails('online')
          if (isCartMode) clearCart()
          router.push(
            `/order-success?product=${encodeURIComponent(orderDescription)}&amount=${total}`
          )
        },
        modal: {
          ondismiss: function () {
            setLoading(false)
          },
        },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (err) {
      console.error(err)
      alert('Payment failed to start. Please try again.')
      setLoading(false)
    }
  }

  function handleCOD() {
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    sendOrderEmails('cod')
    if (isCartMode) clearCart()
    router.push(`/order-success?product=${encodeURIComponent(orderDescription)}&amount=${total}&payment=cod`)
  }

  return (
    <>
      <Navbar />
      <main className="max-w-lg mx-auto px-4 py-8">
        {/* Back */}
        <Link
          href={isCartMode ? '/cart' : `/products/${product.slug}`}
          className="inline-flex items-center gap-1 text-sm text-brand-gray mb-5 hover:text-brand-orange transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {isCartMode ? 'Back to Cart' : 'Back to Product'}
        </Link>

        <h1 className="text-2xl font-bold text-brand-dark mb-6">Checkout</h1>

        {/* Order summary */}
        {isCartMode ? (
          <div className="bg-brand-cream rounded-xl p-4 mb-6 border border-brand-border">
            <p className="text-sm font-bold text-brand-dark mb-3">Order Summary ({cart.length} items)</p>
            <div className="space-y-2 mb-3">
              {cart.map((item) => (
                <div key={item.slug} className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <p className="text-xs text-brand-dark flex-1 line-clamp-1">{item.name}</p>
                  <p className="text-xs font-bold text-brand-orange whitespace-nowrap">₹{item.price} × {item.qty}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-brand-border pt-2 flex justify-between">
              <span className="text-sm font-bold text-brand-dark">Total</span>
              <span className="text-base font-bold text-brand-orange">₹{total}</span>
            </div>
          </div>
        ) : (
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
              {qty > 1 && (
                <p className="text-xs text-brand-gray mt-1">
                  Qty: {qty} × ₹{product.price} = <span className="font-bold text-brand-orange">₹{total}</span>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <h2 className="text-base font-bold text-brand-dark">Delivery Details</h2>

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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-orange text-white font-bold text-base py-4 rounded-xl shadow-md active:scale-95 transition-transform disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {loading ? 'Opening Payment...' : `Pay Online — ₹${total}`}
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={handleCOD}
            className="w-full bg-white border-2 border-brand-orange text-brand-orange font-bold text-base py-4 rounded-xl active:scale-95 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Cash on Delivery (COD)
          </button>

          <p className="text-center text-xs text-brand-gray">
            🔒 Online payments secured by Razorpay &nbsp;|&nbsp; COD available across India
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
