import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bonuskingdoms.com'
  
  // Liste over alle casino-sider (hardkodet siden vi nå bruker statisk innhold)
  const casinoPages = [
    '1xslotscasino',
    '22betcasino',
    '7bitcasino',
    'airbetcasino',
    // Legg til flere casino-slugs her
  ]

  // Hovedsider
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/casino-reviews`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cryptocasinos`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  // Casino review sider
  const casinoReviewPages = casinoPages.map((casino) => ({
    url: `${baseUrl}/casino-reviews/${casino}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticPages, ...casinoReviewPages]
}
