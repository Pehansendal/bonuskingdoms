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
    // Under bygging, prøv å lese filen direkte
    if (process.env.NODE_ENV === 'production') {
      try {
        // @ts-ignore
        const data = await import(`@/public/data/reviews/${slug}.json`)
        return {
          ...data.default,
          slug,
          logoPath: `/images/casinos/${slug}.png`
        }
      } catch (error) {
        console.error(`Could not import data for ${slug}:`, error)
        return null
      }
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const reviewUrl = new URL(`/data/reviews/${slug}.json`, baseUrl).toString()
    
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
      slug,
      logoPath: `/images/casinos/${slug}.png`
    }

  } catch (error) {
    console.error(`Error loading casino data for ${slug}:`, error)
    return null
  }
}

export async function getAllCasinos(): Promise<CasinoData[]> {
  try {
    // Under bygging, prøv å lese filen direkte
    if (process.env.NODE_ENV === 'production') {
      try {
        // @ts-ignore
        const data = await import(`@/public/data/reviews/index.json`)
        return data.default
      } catch (error) {
        console.error('Could not import casino index:', error)
        return []
      }
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const indexUrl = new URL('/data/reviews/index.json', baseUrl).toString()
    
    const response = await fetch(indexUrl)
    
    if (!response.ok) {
      console.error('Could not fetch casino index')
      return []
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error loading casino index:', error)
    return []
  }
}