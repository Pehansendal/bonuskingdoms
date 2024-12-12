const fs = require('fs');
const path = require('path');

const dataDir = './jsongoogle/';

try {
    fs.readdirSync(dataDir).forEach(file => {
        if (file.endsWith('.json')) {
            try {
                const filePath = path.join(dataDir, file);
                const content = fs.readFileSync(filePath, 'utf8');
                JSON.parse(content);
                console.log(`✓ ${file} er gyldig`);
            } catch (e) {
                console.error(`✗ ${file} har feil:`, e.message);
                console.error(`  Posisjon: ${e.message.match(/position (\d+)/)?.[1] || 'ukjent'}`);
                
                if (e instanceof SyntaxError) {
                    const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
                    const pos = parseInt(e.message.match(/position (\d+)/)?.[1]);
                    if (!isNaN(pos)) {
                        console.error(`  Kontekst: "${content.slice(Math.max(0, pos-20), pos)}[HER]${content.slice(pos, pos+20)}"`);
                    }
                }
            }
        }
    });
} catch (e) {
    console.error('En feil oppstod:', e);
}
