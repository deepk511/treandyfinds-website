'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major payment methods — UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, Wallets, and Cash on Delivery (COD). All online payments are secured by Razorpay.',
  },
  {
    q: 'Is Cash on Delivery (COD) available?',
    a: 'Yes! COD is available across India. You can place your order and pay cash when the product is delivered to your doorstep. No advance payment needed.',
  },
  {
    q: 'How many days will delivery take?',
    a: 'Orders are typically delivered within 5–7 business days. Delivery time may vary slightly depending on your location. Once your order is shipped, we will inform you on WhatsApp.',
  },
  {
    q: 'What is your return and refund policy?',
    a: 'We offer a 7-day easy return policy. If you are not satisfied with your product, contact us on WhatsApp within 7 days of delivery. We will arrange a return or refund without any hassle.',
  },
  {
    q: 'Are the products genuine and good quality?',
    a: 'Absolutely! All products are quality-checked before shipping. We carefully select every product to ensure it is useful, durable, and worth your money — all under ₹200.',
  },
  {
    q: 'How do I contact you for support?',
    a: 'You can email us at emmanecomconsultant@gmail.com. We typically respond within a few hours.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">FAQ</span>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mt-1">Frequently Asked Questions</h2>
        <p className="text-brand-gray text-sm mt-2">Everything you need to know before ordering</p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-brand-border rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-brand-cream transition-colors"
            >
              <span className="text-sm font-semibold text-brand-dark pr-4">{faq.q}</span>
              <svg
                className={`w-5 h-5 text-brand-orange flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open === i && (
              <div className="px-5 pb-4 bg-brand-cream">
                <p className="text-sm text-brand-gray leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
