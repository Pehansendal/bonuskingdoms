import path from 'path'
import fs from 'fs'

export async function getCasinoData(slug: string) {
  try {
    const reviewsDir = path.join(process.cwd(), 'public', 'data', 'reviews')
    const files = fs.readdirSync(reviewsDir)
    
    const casinoFile = files.find(file => {
      const fileName = file.replace('.json', '')
      return fileName === slug
    })
    
    if (!casinoFile) {
      console.error(`Kunne ikke finne casino-fil for slug: ${slug}`)
      return null
    }

    const filePath = path.join(reviewsDir, casinoFile)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(fileContent)
    
    const returnData = {
      ...data,
      slug: slug,
      logoPath: `/images/casinos/${slug}.png`
    }
    
    console.log('getCasinoData returnerer:', returnData)
    return returnData

  } catch (error) {
    console.error(`Feil ved lasting av casino-data for ${slug}:`, error)
    return null
  }
} 