import fs from 'fs'
import path from 'path'

const logosDir = path.join(process.cwd(), 'logosask')

try {
  const files = fs.readdirSync(logosDir)
  
  files.forEach(file => {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.webp')) {
      const lowercaseFile = file.toLowerCase()
      if (file !== lowercaseFile) {
        fs.renameSync(
          path.join(logosDir, file),
          path.join(logosDir, lowercaseFile)
        )
        console.log(`Renamed: ${file} -> ${lowercaseFile}`)
      }
    }
  })
  
  console.log('All files processed!')
} catch (error) {
  console.error('Error:', error)
} 