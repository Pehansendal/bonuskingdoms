import { CasinoReview } from '@/types/casino'

export default function CasinoReviewTemplate({ review }: { review: CasinoReview }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-[#1a1f2d] rounded-xl p-8 mb-12 border border-gray-800">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {review.title} Review {new Date().getFullYear()}
        </h1>
        
        <p className="text-gray-400 mb-6">Last updated on {review.metadata.lastUpdated}</p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap gap-4 mb-6">
          {review.metadata.trustIndicators.map((indicator, index) => (
            <span 
              key={index} 
              className={`bg-${indicator.color}-500/10 text-${indicator.color}-400 px-4 py-2 rounded-full flex items-center`}
            >
              <span className="mr-2">✓</span> {indicator.text}
            </span>
          ))}
        </div>

        {/* Verdict */}
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Verdict</h2>
          <p className="text-gray-300">{review.verdict.text}</p>
        </div>
      </div>
    </div>
  )
} 