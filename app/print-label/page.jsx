'use client'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function LabelContent() {
  const params = useSearchParams()

  const orderId = params.get('orderId') || '—'
  const name = params.get('name') || ''
  const phone = params.get('phone') || ''
  const address = params.get('address') || ''
  const city = params.get('city') || ''
  const pincode = params.get('pincode') || ''
  const total = params.get('total') || '0'
  const paymentMethod = params.get('paymentMethod') || 'online'
  let items = []
  try {
    items = JSON.parse(params.get('items') || '[]')
  } catch {}

  const isCOD = paymentMethod === 'cod'
  const today = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })

  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0">
      {/* Print button - hidden when printing */}
      <div className="max-w-xl mx-auto px-4 mb-4 print:hidden">
        <button
          onClick={() => window.print()}
          className="w-full bg-brand-orange text-white font-bold py-3 rounded-xl shadow-md active:scale-95 transition-transform"
        >
          🖨️ Print Shipping Label
        </button>
      </div>

      {/* Label */}
      <div className="max-w-xl mx-auto bg-white border-2 border-black p-6 print:border-2 print:max-w-full print:mx-0">
        {/* Brand header */}
        <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-3">
          <div>
            <p className="text-xl font-bold text-brand-dark">Treandyfinds India</p>
            <p className="text-xs text-brand-gray">treandyfindsindia.com</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold text-brand-gray">ORDER ID</p>
            <p className="text-sm font-bold text-brand-dark">{orderId}</p>
            <p className="text-xs text-brand-gray">{today}</p>
          </div>
        </div>

        {/* Payment mode badge */}
        <div className="mb-4">
          {isCOD ? (
            <span className="inline-block bg-black text-white text-sm font-bold px-3 py-1 rounded">
              COD — COLLECT ₹{total}
            </span>
          ) : (
            <span className="inline-block bg-brand-green text-white text-sm font-bold px-3 py-1 rounded">
              PREPAID — ₹{total}
            </span>
          )}
        </div>

        {/* From / To */}
        <div className="grid grid-cols-1 gap-3 mb-4">
          <div className="border border-black p-3 rounded">
            <p className="text-xs font-bold text-brand-gray uppercase mb-1">From (Return Address)</p>
            <p className="text-sm font-semibold text-brand-dark">Treandyfinds India</p>
            <p className="text-sm text-brand-dark">No 10A, David Puram, Kilpauk</p>
            <p className="text-sm text-brand-dark">Chennai — 600 010, Tamil Nadu</p>
            <p className="text-sm text-brand-dark">Phone: +91 99401 03738</p>
            <p className="text-sm text-brand-dark mt-1">Speed Post A/C No: TN/SP-ADV/161/CCN/2025-26</p>
          </div>

          <div className="border-2 border-black p-3 rounded">
            <p className="text-xs font-bold text-brand-gray uppercase mb-1">Ship To</p>
            <p className="text-base font-bold text-brand-dark">{name}</p>
            <p className="text-sm text-brand-dark">{address}</p>
            <p className="text-sm text-brand-dark">{city} — {pincode}</p>
            <p className="text-sm font-semibold text-brand-dark mt-1">Phone: {phone}</p>
          </div>
        </div>

        {/* Items */}
        <div className="border-t-2 border-black pt-3">
          <p className="text-xs font-bold text-brand-gray uppercase mb-2">Order Contents</p>
          <table className="w-full text-sm">
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="py-1 text-brand-dark">{item.name}{item.qty > 1 ? ` × ${item.qty}` : ''}</td>
                  <td className="py-1 text-right font-semibold text-brand-dark">₹{item.price * item.qty}</td>
                </tr>
              ))}
              <tr>
                <td className="py-2 font-bold text-brand-dark">Total</td>
                <td className="py-2 text-right font-bold text-brand-dark">₹{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default function PrintLabelPage() {
  return (
    <Suspense>
      <LabelContent />
    </Suspense>
  )
}
