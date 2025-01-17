import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

interface CasinoRecord {
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
}

const csvPath = path.join(process.cwd(), 'public', 'nyliste_bonus_processed.csv');

// Les CSV-filen
const csvContent = fs.readFileSync(csvPath, 'utf-8');
const records = parse(csvContent, { columns: true }) as CasinoRecord[];

// Oppdater stier
const updatedRecords = records.map(record => ({
    ...record,
    logo_path: record.logo_path.toLowerCase(),
    pros_path: record.pros_path.toLowerCase(),
    cons_path: record.cons_path.toLowerCase(),
    review_path: record.review_path.toLowerCase()
}));

// Skriv tilbake til fil
const updatedCsv = stringify(updatedRecords, { header: true });
fs.writeFileSync(csvPath, updatedCsv);

console.log('CSV-fil oppdatert med små bokstaver i filstier'); 