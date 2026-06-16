'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-brand-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="text-xl font-bold text-brand-orange tracking-tight leading-none">
            Treandyfinds
          </span>
          <span className="text-xs font-semibold text-brand-green bg-brand-cream px-1.5 py-0.5 rounded">
            India
          </span>
        </Link>

        {/* Desktop tagline */}
        <p className="hidden md:block text-sm text-brand-gray">
          Trendy finds under <span className="font-bold text-brand-orange">₹200</span>
        </p>


        {/* Cart icon */}
        <Link href="/cart" className="relative p-2 text-brand-dark hover:text-brand-orange transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-brand-orange text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-brand-dark"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-brand-border px-4 py-4 space-y-3">
          <p className="text-sm text-brand-gray">
            Trendy finds under <span className="font-bold text-brand-orange">₹200</span>
          </p>
        </div>
      )}
    </nav>
  )
}
