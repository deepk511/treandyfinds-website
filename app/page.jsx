import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import ProductGrid from '@/components/ProductGrid'
import Footer from '@/components/Footer'
import products from '@/data/products.json'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <ProductGrid products={products} />
      </main>
      <Footer />
    </>
  )
}
