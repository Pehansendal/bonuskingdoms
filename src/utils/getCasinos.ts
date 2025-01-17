import casinosData from '@/data/casinos.json';
import type { Casino } from '@/types/casino';

export async function getCasinos(): Promise<Casino[]> {
  return casinosData;
}

export async function getCasinoByName(name: string): Promise<Casino | undefined> {
  return casinosData.find(casino => casino.casino_name === name);
} 