export interface CasinoData {
  name: string;
  lastUpdated: string;
  trustIndicators: Array<{
    text: string;
    color: string;
  }>;
  verdict: {
    text: string;
    rating: string;
  };
  keyFacts: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
  logoPath: string;
  review: {
    description: string;
    pros: string[];
    cons: string[];
  };
  games?: {
    slots?: {
      total: number;
      popular: Array<{
        name: string;
        rtp?: string;
      }>;
    };
    tableGames?: {
      total: number;
      popular: string[];
    };
  };
  security?: {
    title: string;
    description: string;
    features: string[];
  };
  advantages: string[];
  disadvantages: string[];
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  bonuses?: Array<{
    type: string;
    amount: string;
    wagering: string;
  }>;
}

export async function getCasinoData(slug: string): Promise<CasinoData | null> {
  try {
    const response = await fetch(`/data/reviews/${slug}.json`);
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching casino data:', error);
    return null;
  }
}

export async function getAllCasinos(): Promise<CasinoData[]> {
  try {
    const response = await fetch(`/data/reviews/index.json`);
    if (!response.ok) return [];
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all casinos:', error);
    return [];
  }
}