// utils/getCasinoData.ts

import fs from 'fs'
import path from 'path'
import { casinoFiles } from './casinoList'

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
  slug?: string
  logoPath?: string
  logo?: string
  rating?: string
  promotion?: string
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

export async function getAllCasinos(): Promise<CasinoData[]> {
  try {
    const casinoPromises = casinoFiles.map(async (filename) => {
      try {
        const filePath = path.join(process.cwd(), 'public', 'data', 'reviews', filename)
        const slug = filename.replace('.json', '')
        const logoPath = `/images/casinos/${slug}.png`

        try {
          const fileContent = fs.readFileSync(filePath, 'utf-8')
          const casinoData = JSON.parse(fileContent)
          return {
            ...casinoData,
            slug,
            logoPath
          }
        } catch (error) {
          console.error(`Missing or invalid JSON file for casino ${filename}:`, error)
          return null
        }
      } catch (error) {
        console.error(`Error loading casino ${filename}:`, error)
        return null
      }
    })
    
    const casinos = await Promise.all(casinoPromises)
    return casinos.filter((casino): casino is CasinoData => casino !== null)
    
  } catch (error) {
    console.error('Error loading casinos:', error)
    return []
  }
}

export async function getCasinoData(slug: string): Promise<CasinoData | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'reviews', `${slug}.json`)
    const logoPath = `/images/casinos/${slug}.png`
    
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const casinoData = JSON.parse(fileContent)
      return {
        ...casinoData,
        slug,
        logoPath
      }
    } catch (error) {
      console.error(`Error loading casino ${slug}:`, error)
      return null
    }
  } catch (error) {
    console.error(`Error loading casino ${slug}:`, error)
    return null
  }
}