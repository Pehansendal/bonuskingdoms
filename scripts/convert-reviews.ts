import fs from 'fs'
import path from 'path'

const sourceDir = path.join(process.cwd(), 'designtekst')
const targetDir = path.join(process.cwd(), 'components/casino-reviews')

// Opprett målmappen hvis den ikke eksisterer
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

// Les alle .txt filer og konverter dem
const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.txt'))

files.forEach(file => {
  const content = fs.readFileSync(path.join(sourceDir, file), 'utf8')
  const newFileName = file
    .toLowerCase()
    .replace(/\s+casino\.txt$/i, '')
    .replace(/\.txt$/, '')
    .replace(/[^a-z0-9]+/g, '-') + '.tsx'
  
  fs.writeFileSync(
    path.join(targetDir, newFileName),
    content
  )
})

console.log('Converted', files.length, 'review files') 