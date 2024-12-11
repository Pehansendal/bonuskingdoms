import { Review } from './types'

const CACHE_DURATION = 1000 * 60 * 60 // 1 time

interface CacheItem {
  data: Review
  timestamp: number
}

class ReviewCache {
  private cache: Map<string, CacheItem> = new Map()

  set(slug: string, data: Review): void {
    this.cache.set(slug, {
      data,
      timestamp: Date.now()
    })
  }

  get(slug: string): Review | null {
    const item = this.cache.get(slug)
    if (!item) return null

    if (Date.now() - item.timestamp > CACHE_DURATION) {
      this.cache.delete(slug)
      return null
    }

    return item.data
  }

  clear(): void {
    this.cache.clear()
  }
}

export const reviewCache = new ReviewCache() 