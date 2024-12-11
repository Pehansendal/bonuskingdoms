import fs from 'fs/promises'
import path from 'path'
import { Review } from './types'
import { reviewCache } from './cache'
import { findCasinoBySlug } from '@/lib/casino-utils'

export async function loadReview(slug: string): Promise<Review | null> {
  // Sjekk cache først
  const cached = reviewCache.get(slug)
  if (cached) return cached

  try {
    const filePath = path.join(process.cwd(), 'content', 'reviews', `${slug}.html`)
    const content = await fs.readFile(filePath, 'utf-8')
    
    // Parse metadata fra HTML-kommentarer
    const metadata = parseMetadata(content)
    
    const review: Review = {
      title: metadata.title || slug.replace(/-/g, ' '),
      slug,
      content,
      metadata: {
        description: metadata.description || '',
        keywords: metadata.keywords?.split(',') || [],
        lastModified: metadata.lastModified || new Date().toISOString(),
        author: metadata.author || 'Casino Expert'
      },
      casino: findCasinoBySlug(slug)
    }

    // Lagre i cache
    reviewCache.set(slug, review)
    
    return review
  } catch (error) {
    console.error(`Error loading review for ${slug}:`, error)
    return null
  }
}

function parseMetadata(content: string): Record<string, string> {
  const metadataRegex = /<!--\s*metadata\s*([\s\S]*?)\s*-->/
  const match = content.match(metadataRegex)
  
  if (!match) return {}
  
  const metadataStr = match[1]
  const metadata: Record<string, string> = {}
  
  metadataStr.split('\n').forEach(line => {
    const [key, value] = line.split(':').map(s => s.trim())
    if (key && value) {
      metadata[key] = value
    }
  })
  
  return metadata
} 