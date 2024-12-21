export interface Casino {
  name: string
  description: string
  rating: string
  bonus: string
  logo: string
  trustIndicators: Array<{
    text: string
    color: string
  }>
  slug: string
  lastUpdated: string
  verdict: {
    text: string
    rating: string
  }
  keyFacts: Array<{
    icon: string
    label: string
    value: string
  }>
  security: {
    title: string
    description: string
    features: string[]
  }
  games: {
    slots: {
      total: string
      popular: Array<{
        name: string
        rtp: string
      }>
    }
    tableGames: {
      total: string
      popular: string[]
    }
  }
  bonuses: Array<{
    type: string
    amount: string
    wagering: string
  }>
  advantages: string[]
  disadvantages: string[]
  faq: Array<{
    question: string
    answer: string
  }>
} 