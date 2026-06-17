import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Treandyfinds India — Trendy Finds Under ₹200',
  description: 'Premium baby care, home essentials & trendy finds — all under ₹200. Fast delivery across India. Shop now at Treandyfinds India.',
  keywords: 'baby products, home essentials, trendy finds, under 200, Chennai, India',
  openGraph: {
    title: 'Treandyfinds India — Trendy Finds Under ₹200',
    description: 'Premium baby care, home essentials & trendy finds — all under ₹200.',
    siteName: 'Treandyfinds India',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter bg-white text-brand-dark antialiased">
        <CartProvider>{children}</CartProvider>
        <a
          href="tel:+919940103738"
          aria-label="Call us"
          className="fixed bottom-5 right-5 z-50 w-12 h-12 bg-brand-green rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </body>
      <GoogleAnalytics gaId="G-5NZB42EVF3" />
    </html>
  )
}
