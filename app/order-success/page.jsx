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
          We will contact you on <strong>WhatsApp within 24 hours</strong> to confirm your order and delivery details.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/919940103738?text=Hi! I just placed an order on Treandyfinds India. Please confirm my order."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.571a.75.75 0 0 0 .921.921l5.696-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.717 9.717 0 0 1-4.97-1.364l-.356-.212-3.683.961.981-3.595-.232-.371A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Chat on WhatsApp
          </a>
          <Link
            href="/"
            className="w-full text-center border-2 border-brand-orange text-brand-orange font-bold py-3.5 rounded-xl"
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
