import path from 'path'

export function normalizeFileName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function getJsonPath(slug: string): string {
  const normalizedName = normalizeFileName(slug)
  return path.join(process.cwd(), 'jsongoogle', `${normalizedName}.json`)
}

export function getLogoPath(slug: string): string {
  const normalizedName = normalizeFileName(slug)
  return `/logosask/${normalizedName}.png`
} 