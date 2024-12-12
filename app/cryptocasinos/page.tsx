export const runtime = 'edge'
import React from 'react'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'

interface CasinoListItem {
  slug: string
  name: string
  rating: string
  logoPath?: string | null
  shortDescription?: string
  originalName: string
}

async function getCasinoList(): Promise<CasinoListItem[]> {
  const jsonDir = path.join(process.cwd(), 'jsongoogle')
  const files = fs.readdirSync(jsonDir).filter(file => file.endsWith('.json'))
  
  return files.reduce<CasinoListItem[]>((validCasinos, file) => {
    try {
      const originalName = file.replace('.json', '')
      const slug = originalName.toLowerCase().replace(/\s+/g, '-')
      const jsonPath = path.join(jsonDir, file)
      const rawData = fs.readFileSync(jsonPath, 'utf8')
      
      let data
      try {
        data = JSON.parse(rawData)
      } catch (parseError) {
        console.error(`Invalid JSON in file ${file}:`, parseError)
        return validCasinos
      }
      
      const normalizedSlug = originalName.toLowerCase().replace(/[^a-z0-9]+/g, '')
      const logoPath = fs.existsSync(path.join(process.cwd(), 'public', 'logosask', `${normalizedSlug}.png`))
        ? `/logosask/${normalizedSlug}.png`
        : null

      validCasinos.push({
        slug,
        originalName,
        name: data.name || originalName,
        rating: data.verdict?.rating || "N/A",
        logoPath,
        shortDescription: data.verdict?.text
      })

      return validCasinos
    } catch (error) {
      console.error(`Error processing file ${file}:`, error)
      return validCasinos
    }
  }, [])
}

export default async function CryptoCasinos() {
  const casinos = await getCasinoList()

  return (
    <div className="min-h-screen bg-[#0f1218]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Crypto Casinos
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {casinos.map((casino) => (
            <Link 
              key={casino.slug}
              href={`/cryptocasinos/${casino.slug}`}
              className="bg-[#1a1f2d] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors group"
            >
              <div className="flex flex-col items-center mb-4">
                {casino.logoPath && (
                  <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-gray-600 transition-colors">
                    <Image
                      src={casino.logoPath}
                      alt={`${casino.name} logo`}
                      fill
                      sizes="(max-width: 128px) 100vw, 128px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-white">{casino.name}</h2>
                  <div className="flex items-center justify-center mt-2">
                    <span className="text-yellow-400 font-bold text-2xl">{casino.rating}</span>
                    <span className="text-gray-400 ml-1">/10</span>
                  </div>
                </div>
              </div>
              {casino.shortDescription && (
                <p className="text-gray-400 text-sm line-clamp-2 text-center">
                  {casino.shortDescription}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export const dynamic = 'force-dynamic'