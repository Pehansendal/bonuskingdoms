import fs from 'fs/promises'
import path from 'path'

export async function getCasinoData(slug: string) {
  try {
    // Prøv først det originale formatet
    let fileName = `${slug}.json`
    let filePath = path.join(process.cwd(), 'public', 'data', 'reviews', fileName)
    
    try {
      const fileContent = await fs.readFile(filePath, 'utf8')
      return JSON.parse(fileContent)
    } catch {
      // Hvis original format ikke finnes, prøv det alternative formatet
      fileName = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace(/casino$/i, ' Casino') + '.json'
      
      filePath = path.join(process.cwd(), 'public', 'data', 'reviews', fileName)
      const fileContent = await fs.readFile(filePath, 'utf8')
      return JSON.parse(fileContent)
    }
  } catch (error) {
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
    return []
  }
}
