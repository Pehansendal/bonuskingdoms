'use client'

import CasinoCard from './CasinoCard'

interface FeaturedCasinosProps {
  casinos: Array<{
    name: string
    description: string
    rating: string
    bonus: string
    logo: string
    trustIndicators: Array<{
      text: string
      color: string
    }>
    slug: string
  }>
}

export default function FeaturedCasinos({ casinos }: FeaturedCasinosProps) {
  return (
    <section className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Featured Casinos
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Discover our handpicked selection of top-rated online casinos, offering the best bonuses and gaming experiences.
        </p>
      </div>

      <div className="space-y-6">
        {casinos.map((casino) => (
          <CasinoCard key={casino.name} casino={casino} />
        ))}
      </div>
    </section>
  )
} 