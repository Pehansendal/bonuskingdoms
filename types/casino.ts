export interface Casino {
  name: string
  // Grunnleggende info
  rank: number
  logo: string
  logoPath?: string
  link: string
  
  // Promotering og vurdering
  promotion: string
  verdict: {
    text: string
    rating: string
  }
  
  // Kryptovaluta støtte
  supportedCoins: string[]
  additionalCoins: number
  
  // Detaljert informasjon
  lastUpdated?: string
  keyFacts?: Array<{
    icon: string
    label: string
    value: string
  }>
  trustIndicators?: Array<{
    text: string
    color: string
  }>
  
  // Spill og sikkerhet
  games?: {
    slots?: {
      total: string
      popular?: Array<{
        name: string
        rtp?: string
      }>
    }
    tableGames?: {
      total: string
      popular?: string[]
    }
  }
  security?: {
    title: string
    description: string
    features: string[]
  }
  
  // Anmeldelser og bonuser
  review: {
    description: string
    pros: string[]
    cons: string[]
  }
  advantages: string[]
  disadvantages: string[]
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

export interface CasinoReview {
  title: string;
  metadata: {
    lastUpdated: string;
  };
  name: string;
  trustIndicators: {
    text: string;
    color: string;
  }[];
  verdict: {
    text: string;
  };
  // Legg til andre felt basert på JSON-dataene dine
} 