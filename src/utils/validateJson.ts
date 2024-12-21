import fs from 'fs'
import path from 'path'

export function validateJsonFiles() {
  const reviewsDir = path.join(process.cwd(), 'public/reviews')
  const files = fs.readdirSync(reviewsDir)
  
  files.forEach(file => {
    try {
      const content = fs.readFileSync(path.join(reviewsDir, file), 'utf-8')
      JSON.parse(content) // Vil kaste feil hvis JSON er ugyldig
    } catch (error) {
      console.error(`Invalid JSON in file ${file}:`, error)
    }
  })
} 