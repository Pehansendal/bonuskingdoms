import fs from 'fs';
import path from 'path';
import { Casino } from '@/types/casino';

interface RawCasinoData {
  name: string;
  bonuses: Array<{ text: string }>;
  verdict?: {
    text: string;
    rating: string;
  };
  advantages?: string[];
  disadvantages?: string[];
}

export function getCasinos(): Casino[] {
  try {
    const reviewsDirectory = path.join(process.cwd(), 'public/reviews');
    const filenames = fs.readdirSync(reviewsDirectory);
    
    const casinos = filenames
      .filter(filename => filename.endsWith('.json'))
      .map(filename => {
        try {
          const filePath = path.join(reviewsDirectory, filename);
          const fileContents = fs.readFileSync(filePath, 'utf8');
          const casinoData = JSON.parse(fileContents) as RawCasinoData;
          
          if (!casinoData.name) {
            return null;
          }

          const casino: Casino = {
            id: filename.replace('.json', ''),
            name: casinoData.name,
            welcome_bonus: casinoData.bonuses?.[0]?.text || 'No bonus information available',
            description: casinoData.verdict?.text || '',
            short_description: casinoData.verdict?.text?.slice(0, 150) + '...' || '',
            pros: casinoData.advantages || [],
            cons: casinoData.disadvantages || [],
            logo: `/casinos/${filename.replace('.json', '.png').toLowerCase()}`,
            rating: parseFloat(casinoData.verdict?.rating || '4')
          };

          return casino;
        } catch (error) {
          console.error(`Error processing casino file ${filename}:`, error);
          return null;
        }
      })
      .filter((casino): casino is Casino => casino !== null);

    return casinos;
  } catch (error) {
    console.error('Error loading casinos:', error);
    return [];
  }
} 