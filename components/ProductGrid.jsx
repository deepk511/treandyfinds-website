import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  return (
    <section id="products" className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
          Our Products
        </h2>
        <p className="text-brand-gray text-sm mt-1">Everything under ₹200 — quality you can trust</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
