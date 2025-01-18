import { promises as fs } from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

interface CsvRecord {
  casino_name: string;
  website_url: string;
  accepted_crypto: string;
  bonus_percentage: string;
  bonus_max_amount_in_euro: string;
  max_bonus_value: string;
  free_spins: string;
  bonus_type: string;
  logo_path: string;
  player_rating: string;
  casino_rating: string;
  pros_path: string;
  cons_path: string;
  review_path: string;
  screenshot_path?: string;
}

async function convertCsvToJson() {
  const csvPath = path.join(process.cwd(), 'public', 'nyliste_bonus_processed.csv');
  const csvContent = await fs.readFile(csvPath, 'utf-8');
  const records = parse(csvContent, { columns: true }) as CsvRecord[];
  
  // Prosesser records for å fikse filbaner
  const processedRecords = records.map((record: CsvRecord) => ({
    ...record,
    logo_path: record.logo_path?.replace('public/', ''),
    pros_path: record.pros_path?.replace('public/', ''),
    cons_path: record.cons_path?.replace('public/', ''),
    review_path: record.review_path?.replace('public/', ''),
    screenshot_path: record.screenshot_path?.replace('public/', '') || '' // Inkluder screenshot_path
  }));

  // Debug: Skriv ut første record for å sjekke
  console.log('Første record:', processedRecords[0]);
  console.log('Antall records:', processedRecords.length);
  
  await fs.writeFile(
    path.join(process.cwd(), 'src/data/casinos.json'),
    JSON.stringify(processedRecords, null, 2)
  );

  console.log('Konvertering fullført!');
}

convertCsvToJson().catch(console.error); 