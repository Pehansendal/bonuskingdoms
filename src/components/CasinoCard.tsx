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
    <Link 
      href={`/casinos/${casino.slug}`}
      className="block bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 
        shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
    >
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 
          group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative w-48 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg
          group-hover:scale-105 transition-transform duration-300 flex items-center justify-center
          -ml-3 sm:-ml-2">
          <div className="relative w-[90%] h-[90%]">
            <Image
              src={casino.logo}
              alt={`${casino.name} logo`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 120px, 192px"
            />
          </div>
        </div>

        <div className="flex-grow text-center sm:text-left relative">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 mb-4">
            <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {casino.name}
            </h2>
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
              <span className="text-yellow-500">★</span>
              <span className="font-semibold text-white">{casino.rating}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
            {casino.trustIndicators.map((indicator, index) => (
              <span 
                key={index}
                className={`text-sm px-3 py-1 rounded-full border ${
                  indicator.color === 'green' ? 'border-green-500/50 text-green-400 bg-green-500/10' :
                  indicator.color === 'blue' ? 'border-blue-500/50 text-blue-400 bg-blue-500/10' :
                  'border-purple-500/50 text-purple-400 bg-purple-500/10'
                }`}
              >
                {indicator.text}
              </span>
            ))}
          </div>

          <p className="text-gray-400 mb-8 line-clamp-2">
            {casino.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-auto pt-4 border-t border-gray-700/30">
            <div className="flex items-center gap-2 bg-blue-500/20 border-2 border-blue-500/30 
              px-6 py-3 rounded-xl text-blue-400">
              <span className="text-base font-medium">Welcome Bonus:</span>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {casino.bonus}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = `/casinos/${casino.slug}`
                }}
                className="px-5 py-2.5 rounded-lg bg-gray-800 text-white hover:bg-gray-700 
                  transition-colors duration-200 flex items-center gap-2 font-medium whitespace-nowrap"
              >
                <span>Read Review</span>
              </button>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 
                  text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200 
                  flex items-center gap-2 font-medium whitespace-nowrap"
              >
                <span>Go to Site</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
} 