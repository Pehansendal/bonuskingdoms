import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

interface CasinoRecord {
    casino_name: string;
    website_url: string;
    screenshot_path?: string;
    [key: string]: any;
}

const main = async () => {
    const csvPath = path.join(process.cwd(), 'public', 'nyliste_bonus_processed.csv');
    const screenshotsDir = path.join(process.cwd(), 'public', 'screenshots');
    
    // Les CSV
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const records = parse(csvContent, { columns: true }) as CasinoRecord[];
    
    // Få liste over faktiske screenshot-filer
    const screenshots = fs.readdirSync(screenshotsDir);
    
    // Debug: Skriv ut alle tilgjengelige screenshots
    console.log('Tilgjengelige screenshots:', screenshots.join(', '));
    
    const updatedRecords = records.map(record => {
        const domain = new URL(record.website_url).hostname
            .replace('www.', '')
            .toLowerCase()
            .split('.')[0];
        
        console.log(`\nProsesserer casino: ${record.casino_name}`);
        console.log(`Domene: ${domain}`);
        
        // Finn eksakt filnavn fra screenshots-mappen
        const matchingFile = screenshots.find(file => {
            const lowerFile = file.toLowerCase();
            return lowerFile.includes(`${domain}_`) || // matcher domain_com_screenshot.webp
                   lowerFile.includes(`www_${domain}_`) || // matcher www_domain_com_screenshot.webp
                   lowerFile.startsWith(domain); // matcher domain-screenshot.webp
        });
        
        if (matchingFile) {
            console.log(`✅ Fant matching fil: ${matchingFile}`);
            return {
                ...record,
                screenshot_path: `/screenshots/${matchingFile}` // Eksakt filnavn med korrekt extension
            };
        } else {
            console.log(`❌ Ingen matching fil funnet for ${domain}`);
            return {
                ...record,
                screenshot_path: '' // Tom streng hvis ingen match
            };
        }
    });
    
    // Skriv tilbake til CSV
    const updatedCsv = stringify(updatedRecords, { header: true });
    fs.writeFileSync(csvPath, updatedCsv);
    
    // Vis statistikk
    const totalCasinos = updatedRecords.length;
    const matchedCasinos = updatedRecords.filter(r => r.screenshot_path).length;
    console.log(`\nStatistikk:`);
    console.log(`Total antall casinoer: ${totalCasinos}`);
    console.log(`Antall med screenshots: ${matchedCasinos}`);
    console.log(`Dekningsgrad: ${((matchedCasinos/totalCasinos)*100).toFixed(1)}%`);
    
    // Debug: Vis noen eksempler på matchede filbaner
    console.log('\nEksempler på matchede filbaner:');
    updatedRecords
        .filter(r => r.screenshot_path)
        .slice(0, 5)
        .forEach(r => console.log(`${r.casino_name}: ${r.screenshot_path}`));
};

main().catch(console.error); 