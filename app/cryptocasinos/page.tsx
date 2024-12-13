import Link from 'next/link'
import Image from 'next/image'
import { getCasinoData } from '../../lib/utils/getCasinoData'
import path from 'path'
import fs from 'fs'

interface Casino {
  name: string
  slug: string
  logo?: string
  rating?: string
  verdict?: {
    text: string
    rating: string
  }
  trustIndicators?: Array<{
    text: string
    color: string
  }>
}

async function getAllCasinos(): Promise<Casino[]> {
  const reviewsDir = path.join(process.cwd(), 'public', 'data', 'reviews')
  const files = fs.readdirSync(reviewsDir)
  
  const casinos = await Promise.all(
    files.map(async (file) => {
      const name = file.replace('.json', '')
      const slug = name
      const casinoData = await getCasinoData(slug)
      
      return {
        name,
        slug,
        logo: `/images/casinos/${slug}.png`,
        rating: casinoData?.verdict?.rating,
        trustIndicators: casinoData?.trustIndicators
      }
    })
  )

  return casinos.sort((a, b) => 
    Number(b.rating || 0) - Number(a.rating || 0)
  )
}

export default async function CasinosPage() {
  const casinos = await getAllCasinos()
  
  return (
    <div className="min-h-screen bg-[#070a0f] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Topp Krypto Casinoer 2024
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {casinos.map((casino) => (
            <div 
              key={casino.slug}
              className="bg-[#1a1f2d] rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative w-full h-32 mb-4">
                <Image
                  src={casino.logo || '/images/casino-placeholder.png'}
                  alt={`${casino.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <h2 className="text-xl font-bold text-white text-center mb-4">
                {casino.name}
              </h2>
              
              {casino.trustIndicators && (
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {casino.trustIndicators.slice(0, 2).map((indicator, index) => (
                    <span 
                      key={index}
                      className="text-sm px-3 py-1 rounded-full bg-green-500/10 text-green-400"
                    >
                      {indicator.text}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Rating:</span>
                <span className="text-yellow-400 font-bold">
                  {casino.rating || 'N/A'}/10
                </span>
              </div>
              
              <Link 
                href={`/cryptocasinos/${casino.slug}`}
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Les Anmeldelse
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}