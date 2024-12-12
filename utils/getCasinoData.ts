import fs from 'fs/promises'
import path from 'path'

export async function getCasinoData(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'reviews', `${slug}.json`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.log(`Kunne ikke finne casino-fil for slug: ${slug}`)
    return null
  }
}

export async function getAllCasinos() {
  try {
    const reviewsDir = path.join(process.cwd(), 'public', 'data', 'reviews')
    const files = await fs.readdir(reviewsDir)
    
    const casinos = await Promise.all(
      files
        .filter(file => file.endsWith('.json'))
        .map(async file => {
          const content = await fs.readFile(path.join(reviewsDir, file), 'utf8')
          return JSON.parse(content)
        })
    )
    
    return casinos
  } catch (error) {
    console.error('Feil ved henting av casino-data:', error)
    return []
  }
}
