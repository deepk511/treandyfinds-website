export default function HeroBanner() {
  return (
    <section className="bg-brand-cream px-4 py-10 md:py-16 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Badge */}
        <span className="inline-block bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
          Free Delivery Across India
        </span>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight mb-3">
          Trendy Finds for{' '}
          <span className="text-brand-orange">Your Family</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-brand-gray mb-6 max-w-md mx-auto">
          Premium baby &amp; home products — all under{' '}
          <span className="font-bold text-brand-green">₹200</span>
        </p>

        {/* CTA */}
        <a
          href="#products"
          className="inline-block bg-brand-orange text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-md active:scale-95 transition-transform"
        >
          Shop Now →
        </a>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-brand-gray">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>100% Safe Products</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-6a1 1 0 00-.293-.707l-3-3A1 1 0 0016 4H3z"/>
            </svg>
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
