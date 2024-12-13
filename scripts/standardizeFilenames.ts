import * as fs from 'fs/promises'
import * as path from 'path'

async function standardizeFilenames() {
  const reviewsDir = path.join(process.cwd(), 'public', 'data', 'reviews')
  const logosDir = path.join(process.cwd(), 'public', 'images', 'casinos')

  try {
    // Håndter review-filer (.json)
    const reviewFiles = await fs.readdir(reviewsDir)
    for (const file of reviewFiles) {
      if (file.endsWith('.json')) {
        const oldPath = path.join(reviewsDir, file)
        const newName = file
          .toLowerCase()
          .replace(/\s+/g, '')
          .replace(/[^a-z0-9-.]/, '')
        const newPath = path.join(reviewsDir, newName)
        
        if (oldPath !== newPath) {
          await fs.rename(oldPath, newPath)
          console.log(`Renamed: ${file} -> ${newName}`)
        }
      }
    }

    // Håndter logo-filer (.png)
    const logoFiles = await fs.readdir(logosDir)
    for (const file of logoFiles) {
      if (file.endsWith('.png')) {
        const oldPath = path.join(logosDir, file)
        const newName = file
          .toLowerCase()
          .replace(/\s+/g, '')
          .replace(/[^a-z0-9-.]/, '')
        const newPath = path.join(logosDir, newName)
        
        if (oldPath !== newPath) {
          await fs.rename(oldPath, newPath)
          console.log(`Renamed: ${file} -> ${newName}`)
        }
      }
    }

    console.log('Ferdig med å standardisere filnavn!')

  } catch (error) {
    console.error('Feil:', error)
  }
}

standardizeFilenames() 