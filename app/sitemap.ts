import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bonuskingdoms.com'
  
  const jsonDir = path.join(process.cwd(), 'jsongoogle')
  const casinoFiles = fs.readdirSync(jsonDir)
    .filter(file => file.endsWith('.json'))

  // Basis sider
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cryptocasinos`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Casino sider
  const casinoPages: MetadataRoute.Sitemap = casinoFiles.map(file => {
    const slug = file
      .replace('.json', '')
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')

    return {
      url: `${baseUrl}/cryptocasinos/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  })

  return [...staticPages, ...casinoPages]
} 