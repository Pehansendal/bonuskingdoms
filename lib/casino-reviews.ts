import { CasinoReview } from '@/types/casino'
import fs from 'fs'
import path from 'path'

function normalizeSlug(fileName: string): string {
  return fileName
    .toLowerCase()
    .replace(/\.txt$/, '')
    .replace(/\s+casino\s*$/i, '')
    .replace(/\s+/g, '-')
}

export function getCasinoReviews(): CasinoReview[] {
  const reviewsDirectory = path.join(process.cwd(), 'designtekst')
  
  try {
    const fileNames = fs.readdirSync(reviewsDirectory)
      .filter(fileName => fileName.endsWith('.txt'))

    const reviews = fileNames.map(fileName => {
      const originalSlug = fileName.replace(/\.txt$/, '')
      const slug = normalizeSlug(fileName)
      const fullPath = path.join(reviewsDirectory, fileName)
      const content = fs.readFileSync(fullPath, 'utf8')

      // Ekstraher tittel
      const titleMatch = content.match(/<h1[^>]*>(.*?)\s*Review\s*\d{4}/i)
      const title = titleMatch ? titleMatch[1].trim() : slug.replace(/-/g, ' ')

      // Ekstraher last updated
      const dateMatch = content.match(/Last updated on ([^<]+)/i)
      const lastUpdated = dateMatch ? dateMatch[1].trim() : new Date().toISOString().split('T')[0]

      // Ekstraher trust indicators
      const trustIndicators = extractTrustIndicators(content)

      // Ekstraher quick verdict
      const verdictMatch = content.match(/<p[^>]*className="text-xl[^>]*>(.*?)<\/p>/i)
      const quickVerdict = verdictMatch ? verdictMatch[1].trim() : ''

      // Ekstraher pros og cons
      const pros = extractListItems(content, 'Pros')
      const cons = extractListItems(content, 'Cons')

      // Ekstraher FAQ
      const faq = extractFAQ(content)

      const review: CasinoReview = {
        slug,
        title: originalSlug.replace(/-/g, ' ').replace(/\.txt$/, ''),
        content: quickVerdict,
        excerpt: quickVerdict.slice(0, 150) + '...',
        metadata: {
          pros,
          cons,
          faq,
          lastUpdated,
          trustIndicators
        }
      }

      return review
    })

    return reviews
  } catch (error) {
    console.error('Error reading casino reviews:', error)
    return []
  }
}

function extractTrustIndicators(content: string): string[] {
  const indicators: string[] = []
  const regex = /✓\s*([^<]+?)(?=<\/span>)/g
  let match
  while ((match = regex.exec(content)) !== null) {
    indicators.push(match[1].trim())
  }
  return indicators
}

function extractListItems(content: string, section: string): string[] {
  const sectionRegex = new RegExp(`<h3[^>]*>${section}[^>]*>.*?<ul[^>]*>(.*?)<\/ul>`, 's')
  const match = content.match(sectionRegex)
  if (!match) return []

  const itemRegex = /<li[^>]*>(.*?)<\/li>/g
  const items: string[] = []
  let itemMatch
  while ((itemMatch = itemRegex.exec(match[1])) !== null) {
    items.push(itemMatch[1].trim())
  }
  return items
}

function extractFAQ(content: string): Array<{question: string, answer: string}> {
  const faqItems: Array<{question: string, answer: string}> = []
  const faqRegex = /<summary[^>]*>(.*?)<\/summary>\s*<p[^>]*>(.*?)<\/p>/g
  let match

  while ((match = faqRegex.exec(content)) !== null) {
    faqItems.push({
      question: match[1].trim(),
      answer: match[2].trim()
    })
  }

  return faqItems
}

export function getCasinoReview(slug: string): CasinoReview | null {
  try {
    const reviews = getCasinoReviews()
    // Normaliser input-slug for sammenligning
    const normalizedSlug = slug.toLowerCase()
    return reviews.find(review => review.slug === normalizedSlug) || null
  } catch (error) {
    console.error(`Error reading casino review for ${slug}:`, error)
    return null
  }
}