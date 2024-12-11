import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'
import path from 'path'

async function generateSitemap(): Promise<void> {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc')
  
  const pages: string[] = await globby([
    'app/**/*.tsx',
    'app/**/*.mdx',
    'content/reviews/**/*.html',
    '!app/**/_*.tsx',
    '!app/**/layout.tsx',
    '!app/**/loading.tsx',
    '!app/**/error.tsx',
  ])

  const baseUrl = 'https://dinside.no'

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page: string) => {
          const parsedPath = path.parse(page)
          const routePath = parsedPath.dir
            .replace('app', '')
            .replace('content/reviews', '/reviews')
            .split(path.sep)
            .join('/')
          
          const cleanRoute = routePath === '' ? '/' : 
            `${routePath}/${parsedPath.name}`.replace('/page', '')

          return `
            <url>
              <loc>${baseUrl}${cleanRoute}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>${cleanRoute === '/' ? '1.0' : '0.7'}</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), formatted)
}

export default generateSitemap 