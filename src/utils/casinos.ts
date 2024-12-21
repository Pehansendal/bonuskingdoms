import { normalizeSlug, getLogoFilename } from './slugs'

// Definer casino interface
interface Casino {
  name: string
  description: string
  rating: string
  bonus: string
  logo: string
  trustIndicators: Array<{
    text: string
    color: string
  }>
  slug: string
}

// Legg til statisk casino data (dette kan senere flyttes til en egen JSON-fil)
const casinoData = [
  {
    name: "Example Casino",
    verdict: {
      text: "Dette er et eksempel casino med god spillopplevelse...",
      rating: "4.5"
    },
    bonuses: [
      { amount: "€200" }
    ],
    trustIndicators: [
      { text: "Licensed", color: "green" },
      { text: "Fast Payouts", color: "blue" }
    ]
  }
  // Legg til flere casinoer her
]

export async function getCasinos(): Promise<Casino[]> {
  // Transformer data til riktig format
  return casinoData.map(data => ({
    name: data.name,
    description: data.verdict?.text?.slice(0, 150) + '...' || 'Description coming soon...',
    rating: data.verdict?.rating || 'N/A',
    bonus: data.bonuses?.[0]?.amount || 'Bonus Available',
    logo: `/casinos/${getLogoFilename(data.name)}.png`,
    trustIndicators: data.trustIndicators || [],
    slug: normalizeSlug(data.name)
  }))
}

export async function getFeaturedCasinos(count: number): Promise<Casino[]> {
  const allCasinos = await getCasinos()
  // Shuffle array og returner ønsket antall
  return allCasinos
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
} 