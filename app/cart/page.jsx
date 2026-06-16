'use client'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const { cart, updateQty, removeFromCart, totalItems, totalAmount } = useCart()

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <main className="max-w-lg mx-auto px-4 py-16 text-center">
          <svg className="w-16 h-16 text-brand-gray mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h1 className="text-xl font-bold text-brand-dark mb-2">Your cart is empty</h1>
          <p className="text-brand-gray text-sm mb-6">Add products to your cart to checkout</p>
          <Link href="/" className="bg-brand-orange text-white font-bold px-8 py-3 rounded-xl">
            Shop Now
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-brand-dark mb-6">
          Your Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
        </h1>

        <div className="space-y-3 mb-6">
          {cart.map((item) => (
            <div key={item.slug} className="bg-white border border-brand-border rounded-xl p-4 flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-brand-dark line-clamp-2 leading-snug">{item.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-base font-bold text-brand-orange">₹{item.price}</span>
                  <span className="text-xs text-brand-gray line-through">₹{item.mrp}</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-2 border border-brand-border rounded-lg px-2 py-1">
                    <button onClick={() => updateQty(item.slug, item.qty - 1)} className="w-6 h-6 text-brand-dark font-bold text-lg leading-none">−</button>
                    <span className="text-sm font-bold text-brand-dark w-4 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.slug, item.qty + 1)} className="w-6 h-6 text-brand-dark font-bold text-lg leading-none">+</button>
                  </div>
                  <span className="text-sm font-bold text-brand-dark">= ₹{item.price * item.qty}</span>
                  <button onClick={() => removeFromCart(item.slug)} className="ml-auto text-xs text-red-400 hover:text-red-600">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="bg-brand-cream rounded-xl p-4 border border-brand-border mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-brand-gray">Subtotal ({totalItems} items)</span>
            <span className="text-sm font-semibold text-brand-dark">₹{totalAmount}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-brand-gray">Delivery</span>
            <span className="text-sm font-semibold text-brand-green">FREE</span>
          </div>
          <div className="border-t border-brand-border pt-2 mt-2 flex justify-between items-center">
            <span className="text-base font-bold text-brand-dark">Total</span>
            <span className="text-xl font-bold text-brand-orange">₹{totalAmount}</span>
          </div>
        </div>

        <Link
          href="/checkout"
          className="w-full block text-center bg-brand-orange text-white font-bold text-base py-4 rounded-xl shadow-md"
        >
          Proceed to Checkout — ₹{totalAmount}
        </Link>
        <Link href="/" className="w-full block text-center text-brand-orange font-semibold py-3 text-sm">
          Continue Shopping
        </Link>
      </main>
      <Footer />
    </>
  )
}
