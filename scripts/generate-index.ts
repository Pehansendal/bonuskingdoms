import * as fsPromises from 'fs/promises'
import * as pathModule from 'path'
import { existsSync } from 'fs'

async function generateIndex(): Promise<void> {
  const reviewsDir = pathModule.join(process.cwd(), 'public', 'data', 'reviews')
  const outputPath = pathModule.join(process.cwd(), 'public', 'data', 'index.json')
  
  try {
    // Les alle JSON-filer i reviews-mappen
    const files = await fsPromises.readdir(reviewsDir)
    const jsonFiles = files.filter(file => file.endsWith('.json'))
    
    // Array for å lagre alle casino-data
    const allCasinos = []
    
    // Les hver JSON-fil og hent nødvendig data
    for (const file of jsonFiles) {
      const filePath = pathModule.join(reviewsDir, file)
      const fileContent = await fsPromises.readFile(filePath, 'utf-8')
      const casinoData = JSON.parse(fileContent)
      
      // Konstruer bilde-sti
      const imageName = file.replace('.json', '.png')
      const imagePath = pathModule.join(process.cwd(), 'public', 'images', 'casinos', imageName)
      
      // Sjekk om bildefilen eksisterer
      const imageExists = existsSync(imagePath)
      
      // Legg til casino i array
      allCasinos.push({
        slug: file.replace('.json', ''),
        name: casinoData.name || '',
        logo: imageExists ? `/images/casinos/${imageName}` : '/images/placeholder.png',
        rating: casinoData.rating || '0',
        bonus: casinoData.bonus || null,
        affiliateLink: casinoData.affiliateLink || null,
        shortDescription: casinoData.shortDescription || null
      })
    }
    
    // Sorter casinoer alfabetisk etter navn
    allCasinos.sort((a, b) => a.name.localeCompare(b.name))
    
    // Skriv til index.json
    await fsPromises.writeFile(outputPath, JSON.stringify(allCasinos, null, 2))
    console.log('Index-fil generert:', outputPath)
    
  } catch (error) {
    console.error('Feil ved generering av index:', error)
  }
}

// Kjør scriptet
generateIndex() 