import { Inter } from 'next/font/google'
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
      </body>
    </html>
  )
}
