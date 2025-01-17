import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

// Les CSV-filen
const csvPath = path.join(process.cwd(), 'public', 'nyliste_bonus_processed.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');
const records = parse(csvContent, { columns: true });

// Samle alle unike krypto-symboler
const uniqueSymbols = new Set<string>();

records.forEach((record: any) => {
  const symbols = record.accepted_crypto
    .split(',')
    .map((s: string) => s.trim());
  
  symbols.forEach((symbol: string) => uniqueSymbols.add(symbol));
});

console.log('Unike krypto-symboler funnet i CSV:');
console.log(Array.from(uniqueSymbols).sort().join(', ')); 