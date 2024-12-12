const fs = require('fs')
const path = require('path')

// Base URL for nettstedet
const BASE_URL = 'https://bonuskingdoms.com'

// Hent alle casino JSON-filer
const jsonDir = path.join(process.cwd(), 'jsongoogle')
const casinoFiles = fs.readdirSync(jsonDir)

// Generer URL-er for hver casino-side
const casinoUrls = casinoFiles.map(file => {
  const slug = file.replace('.json', '').toLowerCase().replace(/ /g, '-')
  return `${BASE_URL}/cryptocasinos/${slug}`
})

// Statiske sider
const staticPages = [
  '',
  '/contact',
  '/gambling-addiction',
  '/privacy-policy',
  '/responsible-gaming',
  '/self-exclusion',
  '/terms',
  '/top-casinos'
]

// Kombiner alle URL-er
const allUrls = [
  ...staticPages.map(page => `${BASE_URL}${page}`),
  ...casinoUrls
]

// Generer XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(url => `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `).join('')}
</urlset>`

// Lagre sitemap
fs.writeFileSync('public/sitemap.xml', sitemap)
console.log('Sitemap generert!') 