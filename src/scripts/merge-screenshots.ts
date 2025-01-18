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
    screenshot_path?: string;
}

const main = async () => {
    // Les begge CSV-filene
    const originalPath = path.join(process.cwd(), 'public', 'nyliste_bonus_processed.csv');
    const screenshotsPath = path.join(process.cwd(), 'public', 'nyliste_bonus_processed_screenshots.csv');

    const originalContent = fs.readFileSync(originalPath, 'utf-8');
    const screenshotsContent = fs.readFileSync(screenshotsPath, 'utf-8');

    const originalRecords = parse(originalContent, { columns: true }) as CasinoRecord[];
    const screenshotsRecords = parse(screenshotsContent, { columns: true }) as CasinoRecord[];

    // Lag et map av screenshot-stier indeksert etter casino_name
    const screenshotMap = new Map(
        screenshotsRecords.map(record => [record.casino_name, record.screenshot_path])
    );

    // Oppdater original-recordsene med screenshot-stier og korriger filbanen
    const updatedRecords = originalRecords.map(record => ({
        ...record,
        screenshot_path: screenshotMap.get(record.casino_name)?.replace(/\\/g, '/') || ''
    }));

    // Skriv tilbake til original CSV-fil
    const updatedCsv = stringify(updatedRecords, { header: true });
    fs.writeFileSync(originalPath, updatedCsv);

    console.log('CSV-fil oppdatert med screenshot-stier');
};

main().catch(console.error); 