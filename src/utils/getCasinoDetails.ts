import type { CasinoDetails } from '@/types/casinoDetails';

export async function getCasinoDetails(id: string): Promise<CasinoDetails | null> {
  try {
    const details = await import(`@/data/casino-details/${id}.json`);
    return details.default;
  } catch (error) {
    console.error('Error fetching casino details:', error);
    return null;
  }
} 