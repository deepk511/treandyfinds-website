const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '100% Genuine Products',
    desc: 'Every product is quality-checked before shipping. What you see is what you get.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Delivery',
    desc: 'Get your order delivered to your doorstep within 5–7 business days across India.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Best Value Guaranteed',
    desc: 'Trendy, useful products for your family at honest, affordable prices.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure Payments',
    desc: 'Pay safely via UPI, Credit/Debit Card, Net Banking, or Cash on Delivery.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
      </svg>
    ),
    title: '7-Day Easy Returns',
    desc: 'Not satisfied? Return within 7 days. No questions asked. Your trust is our priority.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: '24/7 Customer Support',
    desc: 'Have a question? Email us anytime. We reply within a few hours.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">Why Us</span>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mt-1">Why Choose Treandyfinds?</h2>
        <p className="text-brand-gray text-sm mt-2">500+ happy customers across Tamil Nadu trust us</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {reasons.map((r, i) => (
          <div key={i} className="bg-brand-cream rounded-2xl p-5 flex flex-col items-start gap-3 border border-brand-border">
            <div className="text-brand-orange">{r.icon}</div>
            <div>
              <h3 className="text-sm font-bold text-brand-dark leading-snug">{r.title}</h3>
              <p className="text-xs text-brand-gray mt-1 leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
