import { Casino } from './types'
import { DEMO_CASINOS } from './constants'

export function findCasinoBySlug(slug: string): Casino {
  // Konverter casino-navn til slug-format for sammenligning
  const normalizeSlug = (str: string) => 
    str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

  const casino = DEMO_CASINOS.find(
    casino => normalizeSlug(casino.name) === slug
  )

  if (!casino) {
    // Returner et standard casino-objekt hvis ingen match finnes
    return {
      rank: 0,
      name: slug.replace(/-/g, ' '),
      logo: '/default-casino-logo.webp',
      link: '',
      promotion: '',
      supportedCoins: [],
      additionalCoins: 0,
      relatedCasinos: DEMO_CASINOS.slice(0, 3) // Legg til de 3 første casinoene som relaterte
    }
  }

  // Legg til relaterte casinoer for det faktiske casinoet
  return {
    ...casino,
    relatedCasinos: DEMO_CASINOS.filter(c => c.name !== casino.name).slice(0, 3)
  }
} 