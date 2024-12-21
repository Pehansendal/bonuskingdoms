import { promises as fs } from 'fs'
import path from 'path'
import { Casino } from '@/types/casino'
import { normalizeSlug, getLogoFilename } from './slugs'

export async function getCasinos(): Promise<Casino[]> {
  try {
    const reviewsDir = path.join(process.cwd(), 'public', 'reviews')
    console.log('Looking in directory:', reviewsDir)

    const files = await fs.readdir(reviewsDir)
    const jsonFiles = files.filter(file => file.endsWith('.json'))
    console.log(`Found ${jsonFiles.length} JSON files`)

    const casinos = await Promise.all(
      jsonFiles.map(async (filename) => {
        try {
          const filePath = path.join(reviewsDir, filename)
          const content = await fs.readFile(filePath, 'utf8')
          const data = JSON.parse(content)
          
          return {
            ...data,
            description: data.verdict?.text?.slice(0, 150) + '...',
            logo: `/casinos/${getLogoFilename(data.name)}.png`,
            slug: normalizeSlug(data.name)
          } as Casino
        } catch (err) {
          console.error(`Error processing ${filename}:`, err)
          return null
        }
      })
    )

    const validCasinos = casinos.filter((casino): casino is Casino => casino !== null)
    console.log(`Successfully processed ${validCasinos.length} casinos`)
    
    return validCasinos

  } catch (error) {
    console.error('Error in getCasinos:', error)
    throw error
  }
}

export async function getFeaturedCasinos(count: number): Promise<Casino[]> {
  const allCasinos = await getCasinos()
  return allCasinos
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
} 