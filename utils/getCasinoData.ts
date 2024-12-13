import path from 'path'
import fs from 'fs/promises'

export interface CasinoData {
  name: string
  lastUpdated: string
  trustIndicators?: Array<{
    text: string
    color: string
  }>
  verdict?: {
    text: string
    rating: string
  }
  keyFacts?: Array<{
    icon: string
    label: string
    value: string
  }>
  security?: {
    title: string
    description: string
    features: string[]
  }
  games?: {
    slots?: {
      total: string
      popular: Array<{
        name: string
        rtp?: string
      }>
    }
    tableGames?: {
      total: string
      popular: string[]
    }
  }
  advantages?: string[]
  disadvantages?: string[]
  bonuses?: Array<{
    type: string
    amount: string
    wagering: string
  }>
  faq?: Array<{
    question: string
    answer: string
  }>
}

export async function getCasinoData(slug: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(
      `${baseUrl}/data/reviews/${slug}.json`,
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

export async function getAllCasinos(): Promise<CasinoData[]> {
  try {
    const response = await fetch(`/data/reviews/index.json`);
    if (!response.ok) return [];
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all casinos:', error);
    return [];
  }
}