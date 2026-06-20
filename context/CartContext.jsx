'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem('treandyfinds_cart')
      if (saved) setCart(JSON.parse(saved))
    } catch {}
  }, [])

  function saveCart(newCart) {
    setCart(newCart)
    localStorage.setItem('treandyfinds_cart', JSON.stringify(newCart))
  }

  function addToCart(product, qty = 1) {
    setCart(prev => {
      const existing = prev.find(i => i.slug === product.slug)
      const updated = existing
        ? prev.map(i => i.slug === product.slug ? { ...i, qty: i.qty + qty } : i)
        : [...prev, { slug: product.slug, name: product.name, price: product.price, mrp: product.mrp, image: product.image, qty }]
      localStorage.setItem('treandyfinds_cart', JSON.stringify(updated))
      return updated
    })

    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: product.name,
        content_ids: [product.slug],
        content_type: 'product',
        value: product.price * qty,
        currency: 'INR',
      })
    }
  }

  function updateQty(slug, qty) {
    setCart(prev => {
      const updated = qty <= 0
        ? prev.filter(i => i.slug !== slug)
        : prev.map(i => i.slug === slug ? { ...i, qty } : i)
      localStorage.setItem('treandyfinds_cart', JSON.stringify(updated))
      return updated
    })
  }

  function removeFromCart(slug) {
    setCart(prev => {
      const updated = prev.filter(i => i.slug !== slug)
      localStorage.setItem('treandyfinds_cart', JSON.stringify(updated))
      return updated
    })
  }

  function clearCart() {
    setCart([])
    localStorage.removeItem('treandyfinds_cart')
  }

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0)
  const totalAmount = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart, clearCart, totalItems, totalAmount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
