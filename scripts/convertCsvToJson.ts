import { promises as fs } from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

async function convertCsvToJson() {
  const csvPath = path.join(process.cwd(), 'public', 'nyliste_bonus_processed.csv');
  const csvContent = await fs.readFile(csvPath, 'utf-8');
  const data = parse(csvContent, { columns: true });
  
  await fs.writeFile(
    path.join(process.cwd(), 'src/data/casinos.json'),
    JSON.stringify(data, null, 2)
  );
}

convertCsvToJson().catch(console.error); 