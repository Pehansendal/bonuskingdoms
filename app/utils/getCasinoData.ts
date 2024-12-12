import path from 'path'
import fs from 'fs'

export async function getCasinoData(slug: string) {
  try {
    const jsonDir = path.join(process.cwd(), 'jsongoogle')
    const files = fs.readdirSync(jsonDir)
    const searchSlug = slug.toLowerCase().replace(/-/g, ' ')
    
    const casinoFile = files.find(file => {
      const fileName = file.toLowerCase()
      return fileName.includes(searchSlug) || 
             fileName.replace(/-/g, ' ').includes(searchSlug)
    })
    
    if (!casinoFile) {
      console.error(`Kunne ikke finne casino-fil for slug: ${slug}`)
      return null
    }

    const filePath = path.join(jsonDir, casinoFile)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    
    if (!fileContent.trim()) {
      console.error(`Tom JSON-fil: ${casinoFile}`)
      return null
    }

    try {
      const data = JSON.parse(fileContent)
      if (!data || typeof data !== 'object') {
        console.error(`Ugyldig JSON-struktur i ${casinoFile}`)
        return null
      }
      return data
    } catch (parseError) {
      console.error(`Feil ved parsing av JSON i ${casinoFile}:`, parseError)
      return null
    }

  } catch (error) {
    console.error(`Feil ved lasting av casino-data for ${slug}:`, error)
    return null
  }
} 