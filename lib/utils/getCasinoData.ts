import path from 'path'
import fs from 'fs'

export async function getCasinoData(slug: string) {
  try {
    const reviewsDir = path.join(process.cwd(), 'public', 'data', 'reviews')
    const files = fs.readdirSync(reviewsDir)
    const searchSlug = slug.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9-]/g, '')
    
    const casinoFile = files.find(file => {
      const fileName = file.toLowerCase().replace('.json', '')
      return fileName === searchSlug
    })
    
    if (!casinoFile) {
      console.error(`Kunne ikke finne casino-fil for slug: ${slug}`)
      return null
    }

    const filePath = path.join(reviewsDir, casinoFile)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(fileContent)
    
    return {
      ...data,
      logoPath: `/images/casinos/${searchSlug}.png`
    }

  } catch (error) {
    console.error(`Feil ved lasting av casino-data for ${slug}:`, error)
    return null
  }
} 