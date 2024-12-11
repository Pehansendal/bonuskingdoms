import { CasinoReview } from '@/types/casino'

export default function CasinoReviewTemplate({ review }: { review: CasinoReview }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Quick Summary Box */}
      <div className="bg-[#1a1f2d] rounded-xl p-8 mb-12 border border-gray-800">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {review.title} Review {new Date().getFullYear()}
        </h1>
        
        <p className="text-gray-400 mb-6">Last updated on {review.metadata.lastUpdated}</p>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap gap-4 mb-6">
          {review.metadata.trustIndicators.map((indicator: string, index: number) => (
            <span key={index} className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full flex items-center">
              <span className="mr-2">✓</span> {indicator}
            </span>
          ))}
        </div>

        <p className="text-xl text-gray-300">{review.content}</p>
      </div>

      {/* Key Facts Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Key Facts</h2>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-300">
              <span className="w-32 text-gray-500">Founded:</span>
              2018
            </li>
            <li className="flex items-center text-gray-300">
              <span className="w-32 text-gray-500">License:</span>
              {review.metadata.trustIndicators[0]}
            </li>
            <li className="flex items-center text-gray-300">
              <span className="w-32 text-gray-500">Games:</span>
              Slots, Table Games, Live Casino
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Pros & Cons */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-500/10 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Pros</h3>
            <ul className="space-y-2">
              {review.metadata.pros.map((pro: string, index: number) => (
                <li key={index} className="text-gray-300">{pro}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-500/10 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-red-400 mb-4">Cons</h3>
            <ul className="space-y-2">
              {review.metadata.cons.map((con: string, index: number) => (
                <li key={index} className="text-gray-300">{con}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {review.metadata.faq.map((item, index) => (
              <details key={index} className="group bg-[#1a1f2d] rounded-xl border border-gray-800">
                <summary className="flex items-center justify-between p-6 cursor-pointer text-xl font-bold text-gray-300">
                  {item.question}
                </summary>
                <div className="px-6 pb-6 text-gray-300">{item.answer}</div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 