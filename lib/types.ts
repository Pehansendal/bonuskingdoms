export interface Casino {
  rank: number
  name: string
  logo: string
  link: string
  promotion: string
  supportedCoins: string[]
  additionalCoins: number
  relatedCasinos?: Casino[]
} 

export interface Review {
  title: string
  slug: string
  content: string
  metadata: {
    description: string
    keywords: string[]
    lastModified: string
    author: string
  }
  casino: Casino
}

export interface ReviewPageData {
  review: Review
  relatedCasinos: Casino[]
} 