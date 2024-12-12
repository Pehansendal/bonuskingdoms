const fs = require('fs')
const path = require('path')

const jsonDir = path.join(process.cwd(), 'jsongoogle')
const files = fs.readdirSync(jsonDir)

console.log('Starter JSON-validering...')
let hasErrors = false

files.forEach(file => {
  try {
    const content = fs.readFileSync(path.join(jsonDir, file), 'utf-8')
    if (!content.trim()) {
      console.error(`❌ Tom fil: ${file}`)
      hasErrors = true
      return
    }
    JSON.parse(content)
    console.log(`✅ Gyldig JSON: ${file}`)
  } catch (error) {
    console.error(`❌ Ugyldig JSON i ${file}:`, error.message)
    hasErrors = true
  }
})

if (hasErrors) {
  process.exit(1)
} else {
  console.log('✅ Alle JSON-filer er gyldige')
} 