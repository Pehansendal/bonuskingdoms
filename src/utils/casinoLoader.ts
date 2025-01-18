import { Casino } from '../types/casino';
import casinos from '../data/casinos.json';

export async function getCasinos(): Promise<Casino[]> {
  return casinos as Casino[];
} 