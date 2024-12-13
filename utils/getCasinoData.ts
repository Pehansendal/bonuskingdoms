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

export async function getCasinoData(slug: string): Promise<CasinoData | null> {
  try {
    const response = await fetch(`/data/reviews/${slug}.json`)
    if (!response.ok) {
      console.error(`Could not fetch casino data for ${slug}`)
      return null
    }
    const data = await response.json()
    return {
      ...data,
      slug: slug
    }
  } catch (error) {
    console.error(`Error loading casino data for ${slug}:`, error)
    return null
  }
}

export async function getAllCasinos(): Promise<CasinoData[]> {
  try {
    const response = await fetch('/data/reviews/index.json')
    if (!response.ok) {
      console.error('Could not fetch casino index')
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