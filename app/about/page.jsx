import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us — Treandyfinds India',
  description: 'Learn about Treandyfinds India — your trusted source for trendy finds, delivering across India from Chennai.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-brand-dark mb-2">About Us</h1>
        <p className="text-brand-orange font-semibold mb-8">Trendy Finds for Every Indian Family</p>

        <section className="bg-brand-cream rounded-2xl p-6 mb-6 border border-brand-border">
          <h2 className="text-lg font-bold text-brand-dark mb-3">Who We Are</h2>
          <p className="text-sm text-brand-gray leading-relaxed">
            Treandyfinds India is a Chennai-based e-commerce store dedicated to bringing you high-quality,
            trending products at prices that make sense. From baby care essentials to home organisation,
            beauty tools, and kitchen helpers — every product on our platform is carefully selected to
            deliver real value without breaking your budget.
          </p>
          <p className="text-sm text-brand-gray leading-relaxed mt-3">
            We believe great products shouldn&apos;t cost a fortune. That&apos;s why we keep our prices honest
            and affordable — making it easy for every family across India to access the things they
            need and love.
          </p>
        </section>

        <section className="bg-white rounded-2xl p-6 mb-6 border border-brand-border">
          <h2 className="text-lg font-bold text-brand-dark mb-4">Business Details</h2>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="text-brand-orange font-bold w-32 flex-shrink-0">Legal Name</span>
              <span className="text-brand-dark">Treandyfinds India</span>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-orange font-bold w-32 flex-shrink-0">Owner</span>
              <span className="text-brand-dark">Emmanuvel Sasikumar</span>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-orange font-bold w-32 flex-shrink-0">Address</span>
              <span className="text-brand-dark">No 10A, David Puram, Kilpauk, Chennai — 600 010, Tamil Nadu, India</span>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-orange font-bold w-32 flex-shrink-0">Phone</span>
              <a href="tel:+919940103738" className="text-brand-dark hover:text-brand-orange transition-colors">+91 99401 03738</a>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-orange font-bold w-32 flex-shrink-0">Email</span>
              <a href="mailto:treandyfindsindia@gmail.com" className="text-brand-dark hover:text-brand-orange transition-colors break-all">treandyfindsindia@gmail.com</a>
            </div>
          </div>
        </section>

        <section className="bg-brand-cream rounded-2xl p-6 mb-6 border border-brand-border">
          <h2 className="text-lg font-bold text-brand-dark mb-4">Store Hours & Support</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-brand-gray">Monday – Saturday</span>
              <span className="font-semibold text-brand-dark">9:00 AM – 8:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-gray">Sunday</span>
              <span className="font-semibold text-brand-dark">10:00 AM – 6:00 PM</span>
            </div>
          </div>
          <p className="text-xs text-brand-gray mt-3">
            You can reach us anytime via email at{' '}
            <a href="mailto:treandyfindsindia@gmail.com" className="text-brand-orange">treandyfindsindia@gmail.com</a>{' '}
            and we&apos;ll respond within 24 hours.
          </p>
        </section>

        <section className="bg-white rounded-2xl p-6 border border-brand-border">
          <h2 className="text-lg font-bold text-brand-dark mb-3">Pan-India Delivery</h2>
          <p className="text-sm text-brand-gray leading-relaxed">
            We deliver to all states and union territories across India. Most orders are dispatched
            within 24 hours of confirmation and reach you within 5–7 business days. Remote areas
            may take 7–10 business days. All deliveries include free shipping — no hidden charges.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="bg-brand-cream rounded-xl p-3">
              <p className="text-xl font-bold text-brand-orange">15+</p>
              <p className="text-xs text-brand-gray mt-0.5">Products</p>
            </div>
            <div className="bg-brand-cream rounded-xl p-3">
              <p className="text-xl font-bold text-brand-orange">All India</p>
              <p className="text-xs text-brand-gray mt-0.5">Delivery</p>
            </div>
            <div className="bg-brand-cream rounded-xl p-3">
              <p className="text-xl font-bold text-brand-orange">100%</p>
              <p className="text-xs text-brand-gray mt-0.5">Genuine</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
