const fs = require('fs')
const path = require('path')

interface CasinoData {
  name: string;
  slug: string;
  logo?: string;
  rating?: number;
  bonus?: string;
  affiliateLink?: string;
  shortDescription?: string;
  verdict: {
    text: string;
    rating: string;
  };
  bonuses: Array<{
    type: string;
    amount: string;
    wagering: string;
  }>;
}

const reviewsDir = path.join(process.cwd(), 'public', 'data', 'reviews')

const normalizeForFileName = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/casino$/, '')
    + 'casino.png'
}

const files = fs.readdirSync(reviewsDir)
  .filter((file: string) => file.endsWith('.json') && file !== 'index.json')
  .map((file: string) => {
    try {
      const content = JSON.parse(
        fs.readFileSync(path.join(reviewsDir, file), 'utf8')
      ) as CasinoData
      
      const normalizedName = normalizeForFileName(content.name)
      const logoPath = `/images/casinos/${normalizedName}`
      
      // Sjekk om bildefilen eksisterer
      const fullImagePath = path.join(process.cwd(), 'public', logoPath)
      const logoExists = fs.existsSync(fullImagePath)
      
      console.log(`Processing ${content.name}: Logo path = ${logoExists ? logoPath : 'not found'}`)
      
      return {
        slug: file.replace('.json', ''),
        name: content.name,
        logo: logoExists ? logoPath : '/images/placeholder.png',
        rating: content.rating || content.verdict?.rating || null,
        bonus: content.bonus || null,
        affiliateLink: content.affiliateLink || null,
        shortDescription: content.shortDescription || null
      } as CasinoData
    } catch (error) {
      console.error(`Error processing file ${file}:`, error)
      return null
    }
  })
  .filter((item: CasinoData | null): item is CasinoData => item !== null)

const indexContent = JSON.stringify(files, null, 2)
fs.writeFileSync(
  path.join(reviewsDir, 'index.json'),
  indexContent
)

console.log(`Genererte index.json med ${files.length} casinoer`) 