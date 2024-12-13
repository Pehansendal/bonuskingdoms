import path from 'path'
import fs from 'fs'

export async function getCasinoData(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data/reviews/${slug}.json`,
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return {
      ...data,
      slug,
      logoPath: `/images/casinos/${slug}.png`
    }

  } catch (error) {
    return null
  }
} 