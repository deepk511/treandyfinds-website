import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl font-bold text-brand-orange">Treandyfinds</span>
              <span className="text-xs font-semibold text-brand-green bg-white/10 px-1.5 py-0.5 rounded">India</span>
            </div>
            <p className="text-sm text-white/60">Trendy finds for your family</p>
          </div>

          <a
            href="mailto:treandyfindsindia@gmail.com"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold px-5 py-2.5 rounded-full w-fit"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* Policy links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 text-sm">
          <Link href="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link>
          <Link href="/return-policy" className="text-white/60 hover:text-white transition-colors">Return & Refund</Link>
          <Link href="/shipping-policy" className="text-white/60 hover:text-white transition-colors">Shipping Policy</Link>
          <a href="mailto:treandyfindsindia@gmail.com" className="text-white/60 hover:text-white transition-colors">Contact Us</a>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm text-white/40">
          <p>
            © 2025 Treandyfinds India. All rights reserved. |{' '}
            Developed by{' '}
            <a
              href="https://d2growagency.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange transition-colors"
            >
              D2Grow Agency
            </a>
          </p>
          <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
