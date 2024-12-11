import fs from 'fs'
import path from 'path'
import { normalizeFileName } from '../utils/filename-utils'

const checkDirectory = (dir: string) => {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const normalizedName = normalizeFileName(file)
    if (file !== normalizedName) {
      console.error(`Invalid filename: ${file} should be ${normalizedName}`)
    }
  })
}

// Sjekk JSON-filer
checkDirectory(path.join(process.cwd(), 'jsongoogle'))

// Sjekk logo-filer
checkDirectory(path.join(process.cwd(), 'public', 'logosask')) 