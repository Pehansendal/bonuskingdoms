'use client'

import Image from 'next/image'
import Link from 'next/link'

interface CasinoCardProps {
  casino: {
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
  }
}

export default function CasinoCard({ casino }: CasinoCardProps) {
  return (
    <Link href={`/casinos/${casino.slug}`}>
      <div className="w-full bg-gray-900 rounded-lg shadow-lg p-6 mb-4 hover:shadow-xl transition-shadow">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Logo */}
          <div className="w-full md:w-1/4">
            <div className="relative h-40 w-full">
              <Image
                src={casino.logo}
                alt={`${casino.name} logo`}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Info */}
          <div className="w-full md:w-3/4 space-y-4">
            <h2 className="text-2xl font-bold text-white">{casino.name}</h2>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-2">
              {casino.trustIndicators.map((indicator, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-white text-sm
                    ${indicator.color === 'green' ? 'bg-green-600' : ''}
                    ${indicator.color === 'blue' ? 'bg-blue-600' : ''}
                    ${indicator.color === 'purple' ? 'bg-purple-600' : ''}
                  `}
                >
                  {indicator.text}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-300">{casino.description}</p>

            {/* Bonus & Rating */}
            <div className="flex justify-between items-center">
              <div className="text-green-400 font-bold">
                {casino.bonus}
              </div>
              <div className="text-yellow-400">
                Rating: {casino.rating}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
} 