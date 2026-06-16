'use client'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function OrderSuccessContent() {
  const searchParams = useSearchParams()
  const productName = searchParams.get('product') || 'Your Product'
  const amount = searchParams.get('amount') || '0'

  return (
    <>
      <Navbar />
      <main className="max-w-md mx-auto px-4 py-16 text-center">
        {/* Checkmark */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-brand-dark mb-2">Thank You!</h1>
        <p className="text-brand-green font-semibold text-lg mb-6">Your order has been placed</p>

        {/* Order summary */}
        <div className="bg-brand-cream rounded-xl p-5 text-left mb-6 border border-brand-border">
          <h2 className="text-sm font-bold text-brand-gray uppercase tracking-wide mb-3">Order Summary</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-brand-dark font-medium">{decodeURIComponent(productName)}</span>
          </div>
          <div className="flex justify-between items-center border-t border-brand-border pt-2 mt-2">
            <span className="text-sm font-bold text-brand-dark">Amount Paid</span>
            <span className="text-lg font-bold text-brand-orange">₹{amount}</span>
          </div>
        </div>

        {/* Message */}
        <p className="text-brand-dark text-sm leading-relaxed mb-8 bg-blue-50 border border-blue-100 rounded-xl p-4">
          We will contact you via <strong>email or phone within 24 hours</strong> to confirm your order and delivery details.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="w-full text-center bg-brand-orange text-white font-bold py-3.5 rounded-xl"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function OrderSuccessPage() {
  return (
    <Suspense>
      <OrderSuccessContent />
    </Suspense>
  )
}
