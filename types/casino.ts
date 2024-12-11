export interface CasinoReview {
  slug: string
  title: string
  content: string
  excerpt?: string
  metadata: {
    pros: string[]
    cons: string[]
    faq: Array<{
      question: string
      answer: string
    }>
    lastUpdated: string
    trustIndicators: string[]
  }
} 