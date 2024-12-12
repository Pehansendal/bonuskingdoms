import type { Review } from './types'
import { reviewCache } from './cache'

// Definer interface for review data
interface ReviewData {
  slug: string
  title: string
  content: string
  metadata: {
    description?: string
    keywords?: string[]
    lastModified?: string
    author?: string
  }
  casino?: any
}

// Hent reviews data
async function getReviewsData(): Promise<ReviewData[]> {
  try {
    const response = await fetch('/api/reviews')
    if (!response.ok) return []
    return response.json()
  } catch (error) {
    console.error('Error loading reviews:', error)
    return []
  }
}

export async function loadReview(slug: string): Promise<Review | null> {
  // Sjekk cache først
  const cached = reviewCache.get(slug)
  if (cached) return cached

  try {
    const reviews = await getReviewsData()
    const review = reviews.find(r => r.slug === slug)
    if (!review) return null
    
    const formattedReview: Review = {
      title: review.title || slug.replace(/-/g, ' '),
      slug,
      content: review.content,
      metadata: {
        description: review.metadata?.description || '',
        keywords: review.metadata?.keywords || [],
        lastModified: review.metadata?.lastModified || new Date().toISOString(),
        author: review.metadata?.author || 'Casino Expert'
      },
      casino: review.casino || null
    }

    // Lagre i cache
    reviewCache.set(slug, formattedReview)
    
    return formattedReview
  } catch (error) {
    console.error(`Error loading review for ${slug}:`, error)
    return null
  }
} 