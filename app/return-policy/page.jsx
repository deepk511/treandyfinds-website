import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Return & Refund Policy — Treandyfinds India',
  description: 'Read our return and refund policy. We accept returns for damaged or defective products within 3 days of delivery.',
}

export default function ReturnPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-brand-dark mb-2">Return & Refund Policy</h1>
        <p className="text-sm text-brand-gray mb-8">Last updated: June 2025</p>

        <div className="space-y-5">

          <section className="bg-brand-cream rounded-2xl p-6 border border-brand-border">
            <h2 className="text-base font-bold text-brand-dark mb-3">When Can You Return?</h2>
            <p className="text-sm text-brand-gray leading-relaxed">
              We accept returns <strong className="text-brand-dark">only for damaged or defective products</strong>.
              If you received a product that arrived broken, defective, or significantly different from what was shown,
              you are eligible to request a return or refund.
            </p>
            <p className="text-sm text-brand-gray leading-relaxed mt-2">
              We do <strong className="text-brand-dark">not</strong> accept returns for change of mind,
              incorrect size selection, or other non-defect reasons.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-brand-border">
            <h2 className="text-base font-bold text-brand-dark mb-3">Unboxing Video — Mandatory</h2>
            <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-xl p-4 mb-3">
              <p className="text-sm font-semibold text-brand-orange">
                You MUST record a clear, uncut video while unboxing your order.
              </p>
            </div>
            <p className="text-sm text-brand-gray leading-relaxed">
              An unboxing video is required as proof for all return/refund requests. The video must:
            </p>
            <ul className="text-sm text-brand-gray mt-2 space-y-1 list-disc list-inside">
              <li>Start before the package is opened (sealed package visible)</li>
              <li>Show the full unboxing without cuts or edits</li>
              <li>Clearly show the damaged or defective condition</li>
              <li>Be recorded on the day of delivery</li>
            </ul>
            <p className="text-sm text-brand-gray mt-3">
              Without an unboxing video, we are unable to process return or refund requests.
            </p>
          </section>

          <section className="bg-brand-cream rounded-2xl p-6 border border-brand-border">
            <h2 className="text-base font-bold text-brand-dark mb-3">How to Raise a Return Request</h2>
            <ol className="text-sm text-brand-gray space-y-2 list-decimal list-inside">
              <li>Record your unboxing video on the day of delivery</li>
              <li>Email us within <strong className="text-brand-dark">3 days of receiving your order</strong></li>
              <li>Include your order details, phone number, and the unboxing video</li>
              <li>Send to: <a href="mailto:treandyfindsindia@gmail.com" className="text-brand-orange font-semibold">treandyfindsindia@gmail.com</a></li>
            </ol>
            <p className="text-sm text-brand-gray mt-3">
              <strong className="text-brand-dark">Deadline:</strong> Return requests must be submitted within
              3 days of delivery. Requests after this window will not be accepted.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-brand-border">
            <h2 className="text-base font-bold text-brand-dark mb-3">Refund Process</h2>
            <p className="text-sm text-brand-gray leading-relaxed">
              Once your return request is approved and verified:
            </p>
            <ul className="text-sm text-brand-gray mt-2 space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-green text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">1</span>
                <span>We will confirm your return request via email within 24–48 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-green text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">2</span>
                <span>Refunds are processed to your original payment method within <strong className="text-brand-dark">7 business days</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-green text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">3</span>
                <span>For COD orders, refunds are made via bank transfer (NEFT/UPI)</span>
              </li>
            </ul>
          </section>

          <section className="bg-brand-cream rounded-2xl p-6 border border-brand-border">
            <h2 className="text-base font-bold text-brand-dark mb-3">Contact Us</h2>
            <p className="text-sm text-brand-gray">
              Have a question about your return? Reach us at:
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
              <p className="text-brand-gray text-xs mt-2">Response time: within 24 hours on business days</p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
