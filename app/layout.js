import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import MetaPixelPageView from '@/components/MetaPixelPageView'

const META_PIXEL_ID = '836296505989807'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Treandyfinds India — Trendy Finds for Every Home',
  description: 'Premium baby care, home essentials & trendy finds — quality you can trust. Fast delivery across India. Shop now at Treandyfinds India.',
  keywords: 'baby products, home essentials, trendy finds, Chennai, India',
  openGraph: {
    title: 'Treandyfinds India — Trendy Finds for Every Home',
    description: 'Premium baby care, home essentials & trendy finds — quality you can trust.',
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
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <Suspense>
          <MetaPixelPageView />
        </Suspense>
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
