import fs from 'fs/promises'
import path from 'path'

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
  logo: string;
  logoPath: string;
  slug: string;
  rank: number;
  link: string;
  promotion: string;
  supportedCoins: string[];
  additionalCoins: number;
  review: {
    description: string;
    pros: string[];
    cons: string[];
  };
  advantages: string[];
  disadvantages: string[];
  security?: {
    title: string;
    description: string;
    features: string[];
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

interface KeyFact {
  icon: string;
  label: string;
  value: string;
}

function validateCasinoData(data: any): CasinoData | null {
  if (!data || typeof data !== 'object') return null;

  // Sikre at obligatoriske felt eksisterer og har riktig type
  if (typeof data.name !== 'string') return null;
  if (!data.verdict?.rating) return null;
  
  // Normaliser data-strukturen
  return {
    name: data.name,
    lastUpdated: data.lastUpdated || 'Not specified',
    trustIndicators: Array.isArray(data.trustIndicators) 
      ? data.trustIndicators.filter((ti: { text: string; color: string }) => ti.text && ti.color)
      : [],
    verdict: {
      text: data.verdict?.text || '',
      rating: data.verdict?.rating || '0'
    },
    keyFacts: Array.isArray(data.keyFacts)
      ? data.keyFacts.filter((kf: KeyFact) => kf.icon && kf.label && kf.value)
      : [],
    logo: data.logo || '/images/default-casino-logo.png',
    logoPath: data.logoPath || '/images/default-casino-logo.png',
    slug: data.slug || '',
    rank: data.rank || 0,
    link: data.link || '',
    promotion: data.promotion || '',
    supportedCoins: Array.isArray(data.supportedCoins) ? data.supportedCoins : [],
    additionalCoins: typeof data.additionalCoins === 'number' ? data.additionalCoins : 0,
    review: {
      description: data.review?.description || '',
      pros: Array.isArray(data.review?.pros) ? data.review.pros : [],
      cons: Array.isArray(data.review?.cons) ? data.review.cons : []
    },
    advantages: Array.isArray(data.advantages) ? data.advantages : [],
    disadvantages: Array.isArray(data.disadvantages) ? data.disadvantages : [],
    security: data.security,
    games: data.games,
    faq: data.faq,
    bonuses: data.bonuses
  };
}

export async function getCasinoData(slug: string) {
  if (!slug || typeof slug !== 'string') {
    return null;
  }

  try {
    // Bruk slug direkte siden den allerede er i lowercase
    let fileName = `${slug}.json`
    let filePath = path.join(process.cwd(), 'public', 'data', 'reviews', fileName)
    
    try {
      const fileContent = await fs.readFile(filePath, 'utf8')
      const data = validateCasinoData(JSON.parse(fileContent))
      if (data) return data;
    } catch {
      // Alternative format hvis første forsøk feiler
      fileName = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace(/casino$/i, ' Casino') + '.json'
      
      filePath = path.join(process.cwd(), 'public', 'data', 'reviews', fileName)
      const fileContent = await fs.readFile(filePath, 'utf8')
      const data = validateCasinoData(JSON.parse(fileContent))
      if (data) return data;
    }
  } catch {
    return null;
  }

  return null;
}

export async function getAllCasinos() {
  try {
    const reviewsDir = path.join(process.cwd(), 'public', 'data', 'reviews')
    const files = await fs.readdir(reviewsDir)
    
    const casinos = await Promise.all(
      files
        .filter(file => file.endsWith('.json'))
        .map(async file => {
          const content = await fs.readFile(path.join(reviewsDir, file), 'utf8')
          return JSON.parse(content)
        })
    )
    
    return casinos
  } catch (error) {
    return []
  }
}
