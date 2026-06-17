import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Shipping Policy — Treandyfinds India',
  description: 'Shipping policy for Treandyfinds India. Free delivery across India. Orders dispatched within 24 hours, delivered in 5-7 business days.',
}

export default function ShippingPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-brand-dark mb-2">Shipping Policy</h1>
        <p className="text-sm text-brand-gray mb-8">Last updated: June 2025</p>

        {/* Free Delivery Banner */}
        <div className="bg-brand-green text-white rounded-2xl p-5 mb-6 text-center">
          <p className="text-2xl font-bold mb-1">FREE Shipping</p>
          <p className="text-sm opacity-90">On all orders across India — no minimum order value</p>
        </div>

        <div className="space-y-5">

          <section className="bg-brand-cream rounded-2xl p-6 border border-brand-border">
            <h2 className="text-base font-bold text-brand-dark mb-4">Order Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Order Confirmed</p>
                  <p className="text-xs text-brand-gray mt-0.5">You receive an order confirmation by email immediately after placing your order</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Dispatched within 24 Hours</p>
                  <p className="text-xs text-brand-gray mt-0.5">Your order is packed and handed over to our delivery partner within 24 hours of order confirmation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Delivered in 5–7 Business Days</p>
                  <p className="text-xs text-brand-gray mt-0.5">Most orders across India arrive within 5–7 business days from dispatch</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-brand-border">
            <h2 className="text-base font-bold text-brand-dark mb-3">Delivery Timelines by Location</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-brand-border">
                <span className="text-sm text-brand-dark">Metro cities (Chennai, Mumbai, Delhi, Bengaluru, etc.)</span>
                <span className="text-sm font-bold text-brand-green whitespace-nowrap ml-3">3–5 days</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-brand-border">
                <span className="text-sm text-brand-dark">Tier 2 & Tier 3 cities</span>
                <span className="text-sm font-bold text-brand-orange whitespace-nowrap ml-3">5–7 days</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-brand-dark">Remote / rural areas</span>
                <span className="text-sm font-bold text-brand-dark whitespace-nowrap ml-3">7–10 days</span>
              </div>
            </div>
            <p className="text-xs text-brand-gray mt-3">
              Business days exclude Sundays and public holidays.
            </p>
          </section>

          <section className="bg-brand-cream rounded-2xl p-6 border border-brand-border">
            <h2 className="text-base font-bold text-brand-dark mb-3">Important Notes</h2>
            <ul className="text-sm text-brand-gray space-y-2 list-disc list-inside leading-relaxed">
              <li>All orders are shipped from Chennai, Tamil Nadu</li>
              <li>Delivery times may be longer during festive seasons (Diwali, Christmas, etc.) due to high courier volume</li>
              <li>Ensure your delivery address and pincode are correct before placing your order</li>
              <li>You will receive a tracking link via email once your order is dispatched</li>
              <li>For COD orders, please keep exact change ready at the time of delivery</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-brand-border">
            <h2 className="text-base font-bold text-brand-dark mb-3">Need Help with Your Order?</h2>
            <p className="text-sm text-brand-gray">
              If your order is delayed beyond the estimated delivery time, please contact us:
            </p>
            <div className="mt-3 space-y-1 text-sm">
              <p>
                <span className="font-semibold text-brand-dark">Email: </span>
                <a href="mailto:treandyfindsindia@gmail.com" className="text-brand-orange">treandyfindsindia@gmail.com</a>
              </p>
              <p>
                <span className="font-semibold text-brand-dark">Phone: </span>
                <a href="tel:+919940103738" className="text-brand-orange">+91 99401 03738</a>
              </p>
              <p className="text-brand-gray text-xs mt-2">We respond within 24 hours on business days (Mon–Sat)</p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
