export const siteConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://bonuskingdoms.com',
  defaultImagePath: '/images/default-casino.png',
  reviewsPath: '/data/reviews',
  casinoImagesPath: '/images/casinos',
  metadata: {
    defaultTitle: 'Bonus Kingdoms - Crypto Casino Anmeldelser',
    defaultDescription: 'Omfattende anmeldelser av krypto-kasinoer med fokus på sikkerhet, spill og bonuser.',
    defaultImage: '/images/og-image.png',
    locale: 'nb-NO',
  },
  rateLimiting: {
    enabled: process.env.NODE_ENV === 'production',
    maxRequests: 60,
    windowMs: 60 * 1000, // 1 minutt
  },
  cache: {
    revalidate: 3600, // 1 time i sekunder
    staleWhileRevalidate: 7200, // 2 timer i sekunder
  },
  cloudflare: {
    enabled: process.env.CF_PAGES === '1',
    imageOptimization: true,
  }
}

// Type definisjon for konfigurasjon
export type SiteConfig = typeof siteConfig

// Hjelpefunksjoner
export const getImagePath = (slug: string): string => 
  `${siteConfig.casinoImagesPath}/${slug}.png`

export const getReviewPath = (slug: string): string => 
  `${siteConfig.reviewsPath}/${slug}.json`

export const getCanonicalUrl = (path: string): string => 
  `${siteConfig.baseUrl}${path}` 