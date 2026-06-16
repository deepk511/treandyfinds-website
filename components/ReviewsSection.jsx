import reviews from '@/data/reviews.json'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-4 h-4 ${s <= rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="bg-brand-cream py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">Reviews</span>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mt-1">What Our Customers Say</h2>
          <p className="text-brand-gray text-sm mt-2">Real reviews from happy customers across Tamil Nadu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-brand-border shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">{review.name}</p>
                    <p className="text-xs text-brand-gray">{review.city}, Tamil Nadu</p>
                  </div>
                </div>
                <span className="text-xs text-brand-gray whitespace-nowrap">{review.date}</span>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-sm text-brand-dark mt-3 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
