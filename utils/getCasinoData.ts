// utils/getCasinoData.ts

export interface CasinoData {
  name: string
  lastUpdated: string
  trustIndicators?: Array<{
    text: string
    color: string
  }>
  verdict?: {
    text: string
    rating: string
  }
  slug?: string
  logoPath?: string
  logo?: string
  rating?: string
  keyFacts?: Array<{
    icon: string
    label: string
    value: string
  }>
  security?: {
    title: string
    description: string
    features: string[]
  }
  games?: {
    slots?: {
      total: string
      popular: Array<{
        name: string
        rtp?: string
      }>
    }
    tableGames?: {
      total: string
      popular: string[]
    }
  }
  advantages?: string[]
  disadvantages?: string[]
  bonuses?: Array<{
    type: string
    amount: string
    wagering: string
  }>
  faq?: Array<{
    question: string
    answer: string
  }>
}

export async function getCasinoData(slug: string) {
  try {
    // Normaliser slug til filnavnformat
    const normalizedSlug = slug.toLowerCase().replace(/\s+/g, '')

    // Bygg absolutt URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bonuskingdoms.com'
    const reviewUrl = new URL(`/data/reviews/${normalizedSlug}.json`, baseUrl).toString()
    
    const response = await fetch(reviewUrl, {
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      console.error(`Could not fetch data for ${slug}:`, response.statusText)
      return null
    }

    const data = await response.json()
    return {
      ...data,
      slug: normalizedSlug,
      logoPath: `/images/casinos/${normalizedSlug}.png`
    }

  } catch (error) {
    console.error(`Error loading casino data for ${slug}:`, error)
    return null
  }
}

export async function getAllCasinos(): Promise<CasinoData[]> {
  try {
    // Bygg absolutt URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bonuskingdoms.com'
    const indexUrl = new URL('/data/reviews/index.json', baseUrl).toString()
    
    const response = await fetch(indexUrl, {
      next: { revalidate: 3600 }
    })
    
    if (!response.ok) {
      console.error('Could not fetch casino index:', response.statusText)
      return []
    }
    
    const data = await response.json()
    
    // Normaliser slugs i resultatet, med null-sjekk
    return data.map((casino: CasinoData) => ({
      ...casino,
      slug: casino.slug ? casino.slug.toLowerCase().replace(/\s+/g, '') : ''
    }))
  } catch (error) {
    console.error('Error loading casino index:', error)
    return []
  }
}