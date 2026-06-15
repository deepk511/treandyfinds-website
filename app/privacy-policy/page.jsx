import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy — Treandyfinds India',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Privacy Policy</h1>
        <p className="text-sm text-brand-gray mb-8">Last updated: June 2025</p>

        <div className="space-y-8 text-sm text-brand-dark leading-relaxed">
          <section>
            <h2 className="text-base font-bold mb-2">1. Information We Collect</h2>
            <p>When you place an order on treandyfindsindia.com, we collect the following information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-gray">
              <li>Full name</li>
              <li>Mobile number and email address</li>
              <li>Delivery address (door no., street, city, pincode)</li>
              <li>Payment transaction details (processed securely by Razorpay)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold mb-2">2. How We Use Your Information</h2>
            <p className="text-brand-gray">We use your personal information solely to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-gray">
              <li>Process and fulfil your order</li>
              <li>Contact you on WhatsApp or phone for order confirmation and delivery updates</li>
              <li>Resolve any customer service queries</li>
              <li>Send order confirmation to your email address</li>
            </ul>
            <p className="mt-2 text-brand-gray">We do not use your data for marketing without your consent.</p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-2">3. Payment Security</h2>
            <p className="text-brand-gray">
              All payments are processed through <strong className="text-brand-dark">Razorpay</strong>, a PCI-DSS compliant payment gateway. We do not store your card details, UPI credentials, or banking information on our servers. All payment data is encrypted and handled directly by Razorpay.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-2">4. Data Sharing</h2>
            <p className="text-brand-gray">
              We do not sell, rent, or share your personal information with third parties, except:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-gray">
              <li>Razorpay (payment processing)</li>
              <li>Delivery partners (for shipping your order)</li>
              <li>When required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold mb-2">5. Data Retention</h2>
            <p className="text-brand-gray">
              We retain your order and personal information for a period of 2 years for accounting and customer support purposes. You may request deletion of your data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-2">6. Cookies</h2>
            <p className="text-brand-gray">
              This website uses minimal cookies required for the website to function properly (session and cart data). We do not use tracking or advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-2">7. Your Rights</h2>
            <p className="text-brand-gray">You have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-gray">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of incorrect data</li>
              <li>Request deletion of your personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold mb-2">8. Contact Us</h2>
            <p className="text-brand-gray">For any privacy-related queries, contact us at:</p>
            <div className="mt-3 bg-brand-cream rounded-xl p-4 space-y-1">
              <p><strong>Business Name:</strong> Treandyfinds India</p>
              <p><strong>Owner:</strong> Emmanuvel Sasikumar</p>
              <p><strong>Address:</strong> No 10A David Puram, Kilpauk, Chennai — 600 010</p>
              <p><strong>Email:</strong>{' '}
                <a href="mailto:emmanecomconsultant@gmail.com" className="text-brand-orange">
                  emmanecomconsultant@gmail.com
                </a>
              </p>
              <p><strong>WhatsApp:</strong>{' '}
                <a href="https://wa.me/919940103738" className="text-brand-orange">
                  +91 99401 03738
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
