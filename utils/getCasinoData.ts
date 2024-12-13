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

    // Under bygging og i produksjon, bruk relative stier
    if (process.env.NODE_ENV === 'production') {
      try {
        const response = await fetch(`/data/reviews/${normalizedSlug}.json`)
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
        console.error(`Could not fetch data for ${slug}:`, error)
        return null
      }
    }

    // I development
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
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
    const fs = require('fs')
    const path = require('path')
    
    // Les index.json direkte fra filsystemet
    const indexPath = path.join(process.cwd(), 'public', 'data', 'reviews', 'index.json')
    const fileContents = fs.readFileSync(indexPath, 'utf8')
    const data = JSON.parse(fileContents)
    
    // Normaliser slugs i resultatet
    return data.map((casino: CasinoData) => ({
      ...casino,
      slug: casino.slug.toLowerCase().replace(/\s+/g, '')
    }))
  } catch (error) {
    console.error('Error loading casino index:', error)
    return []
  }
}