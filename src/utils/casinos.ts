import fs from 'fs'
import path from 'path'
import { normalizeSlug, getLogoFilename } from './slugs'

export async function getFeaturedCasinos(count: number) {
  const reviewsDir = path.join(process.cwd(), 'public/reviews')
  const files = fs.readdirSync(reviewsDir)
  const casinoFiles = files.filter(file => file.endsWith('.json'))
  
  // Shuffle array
  const shuffled = [...casinoFiles].sort(() => 0.5 - Math.random())
  
  // Get first n elements
  const selected = shuffled.slice(0, count)
  
  const casinos = selected.map(file => {
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

  return casinos
} 