import path from 'path'
import { promises as fs } from 'fs'
import { CasinoReview } from '@/types/casino'

interface RawReview {
  title: string;
  slug: string;
  metadata: {
    lastUpdated: string;
    trustIndicators: string[];
  };
  name: string;
  verdict: {
    text: string;
  };
}

// Hjelpefunksjon for å konvertere trustIndicators
function convertTrustIndicators(indicators: string[]) {
  return indicators.map(indicator => ({
    text: indicator,
    color: 'green'
  }))
}

export async function getCasinoReviews(): Promise<RawReview[]> {
  const jsonDirectory = path.join(process.cwd(), 'data')
  const fileContents = await fs.readFile(jsonDirectory + '/reviews.json', 'utf8')
  return JSON.parse(fileContents)
}

export async function getCasinoReview(slug: string): Promise<CasinoReview> {
  const reviews = await getCasinoReviews()
  const review = reviews.find((r: RawReview) => r.slug === slug)
  
  if (!review) {
    throw new Error(`No review found for slug: ${slug}`)
  }

  return {
    ...review,
    metadata: {
      lastUpdated: review.metadata.lastUpdated,
      trustIndicators: convertTrustIndicators(review.metadata.trustIndicators)
    }
  }
}

export async function getAllCasinoReviews(): Promise<CasinoReview[]> {
  const reviews = await getCasinoReviews()
  
  return reviews.map((review: RawReview) => ({
    ...review,
    metadata: {
      lastUpdated: review.metadata.lastUpdated,
      trustIndicators: convertTrustIndicators(review.metadata.trustIndicators)
    }
  }))
}