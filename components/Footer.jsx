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
            <p className="text-sm text-white/60">Trendy finds for your family — under ₹200</p>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919940103738"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-full w-fit"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.571a.75.75 0 0 0 .921.921l5.696-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.717 9.717 0 0 1-4.97-1.364l-.356-.212-3.683.961.981-3.595-.232-.371A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Chat with Us
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-white/50">
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
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <a href="mailto:emmanecomconsultant@gmail.com" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
