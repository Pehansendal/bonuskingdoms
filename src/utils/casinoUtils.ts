import casinosData from '@/data/casinos.json';
import type { Casino } from '@/types/casino';

// Konverterer casino navn til URL-vennlig slug
export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/ casino/g, '')  // Fjern "casino" fra navnet
    .replace(/[^a-z0-9]/g, '') // Fjern alle tegn unntatt bokstaver og tall
    .trim();
}

// Henter casino basert på slug
export async function getCasinoBySlug(slug: string): Promise<Casino> {
  const casino = casinosData.find(casino => 
    createSlug(casino.casino_name) === slug
  );

  if (!casino) {
    throw new Error(`Casino not found: ${slug}`);
  }

  return casino;
}

// Hjelpefunksjon for å blande et array tilfeldig
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Oppdatert getRelatedCasinos funksjon
export async function getRelatedCasinos(casino: Casino): Promise<Casino[]> {
  // Bruk casino.casino_name som seed for pseudo-tilfeldig utvalg
  const seed = casino.casino_name
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Filtrer ut gjeldende casino
  const otherCasinos = casinosData.filter(c => 
    c.casino_name !== casino.casino_name
  );
  
  // Sorter basert på seed (gir samme rekkefølge hver gang for samme casino)
  const sortedCasinos = otherCasinos.sort((a, b) => {
    const scoreA = (a.casino_name.length * seed) % 100;
    const scoreB = (b.casino_name.length * seed) % 100;
    return scoreA - scoreB;
  });
  
  // Returner de første 3
  return sortedCasinos.slice(0, 3);
} 