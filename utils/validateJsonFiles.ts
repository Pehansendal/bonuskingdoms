const fs = require('fs').promises
const path = require('path')

interface CasinoData {
  name: string;
  lastUpdated: string;
  trustIndicators: Array<{
    text: string;
    color: string;
  }>;
  verdict: {
    text: string;
    rating: string;
  };
  keyFacts: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
}

async function validateAllJsonFiles() {
  const reviewsDir = path.join(process.cwd(), 'public', 'data', 'reviews')
  const files = await fs.readdir(reviewsDir)
  const errors: string[] = []

  for (const file of files) {
    // Ignorer index.json og filer som ikke er .json
    if (file === 'index.json' || !file.endsWith('.json')) continue

    try {
      const content = await fs.readFile(path.join(reviewsDir, file), 'utf8')
      const data = JSON.parse(content) as CasinoData

      // Sjekk påkrevde felt
      if (!data.name) errors.push(`${file}: Mangler 'name'`)
      if (!data.verdict?.rating) errors.push(`${file}: Mangler 'verdict.rating'`)
      if (!Array.isArray(data.keyFacts)) errors.push(`${file}: 'keyFacts' er ikke et array`)
      
      // Sjekk keyFacts struktur
      data.keyFacts?.forEach((fact, index) => {
        if (!fact.icon || !fact.label || !fact.value) {
          errors.push(`${file}: Ugyldig keyFact objekt på index ${index}`)
        }
      })

    } catch (error: any) {
      if (error instanceof Error) {
        errors.push(`${file}: Ugyldig JSON - ${error.message}`)
      } else {
        errors.push(`${file}: Ugyldig JSON - Ukjent feil`)
      }
    }
  }

  return errors
}

// Kjør validering
validateAllJsonFiles().then(errors => {
  if (errors.length > 0) {
    console.log('Fant følgende feil i JSON-filene:')
    errors.forEach(error => console.log(error))
    process.exit(1)
  } else {
    console.log('Alle JSON-filer er gyldige!')
  }
}).catch(error => {
  console.error('En feil oppstod under validering:', error)
  process.exit(1)
}) 