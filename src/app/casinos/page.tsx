import CasinoCard from '@/components/CasinoCard'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import { normalizeSlug, getLogoFilename } from '@/utils/slugs'

interface Casino {
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

async function getCasinos(): Promise<Casino[]> {
  const reviewsDir = path.join(process.cwd(), 'public/reviews')
  const files = fs.readdirSync(reviewsDir)
  const casinoFiles = files.filter(file => file.endsWith('.json'))
  
  const casinos = casinoFiles.map(file => {
    const filePath = path.join(reviewsDir, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(fileContent)
    
    return {
      name: data.name,
      description: data.verdict?.text?.slice(0, 150) + '...' || 'Description coming soon...',
      rating: data.verdict?.rating || 'N/A',
      bonus: data.bonuses?.[0]?.amount || 'Bonus Available',
      logo: `/casinos/${getLogoFilename(file)}.png`,
      trustIndicators: data.trustIndicators || [],
      slug: normalizeSlug(file)
    }
  })

  return casinos.filter(casino => casino.name)
}

export default async function CasinosPage() {
  const casinos = await getCasinos()

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Extensive Casino Reviews
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Discover our comprehensive collection of {casinos.length}+ thoroughly reviewed online casinos. 
          Each review provides in-depth analysis of games, bonuses, security measures, and player experiences.
        </p>
      </section>

      <div className="space-y-6">
        {casinos.map((casino) => (
          <CasinoCard key={casino.name} casino={casino} />
        ))}
      </div>
    </div>
  )
} 