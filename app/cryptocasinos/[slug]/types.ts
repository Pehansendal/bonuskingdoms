export interface CasinoData {
  name: string
  lastUpdated: string
  logoPath?: string | null
  trustIndicators: {
    text: string
    color: string
  }[]
  verdict: {
    text: string
    rating: string
  }
  keyFacts: {
    icon: string
    label: string
    value: string
  }[]
  security: {
    title: string
    description: string
    features: string[]
  }
  games: {
    slots: {
      total: string
      popular: {
        name: string
        rtp?: string
      }[]
    }
    tableGames: {
      total: string
      popular: string[]
    }
  }
  bonuses: {
    type: string
    amount: string
    wagering: string
  }[]
  advantages: string[]
  disadvantages: string[]
  faq: {
    question: string
    answer: string
  }[]
} 