const fs = require('fs');
const path = require('path');

const reviewsDir = path.join(process.cwd(), 'public', 'data', 'reviews');
const outputFile = path.join(process.cwd(), 'public', 'data', 'casinos.json');

function generateCasinoList() {
  const files = fs.readdirSync(reviewsDir);
  
  const casinos = files.map(file => {
    const content = fs.readFileSync(path.join(reviewsDir, file), 'utf-8');
    const data = JSON.parse(content);
    
    return {
      id: file.replace('.json', ''),
      name: data.name || file.replace('.json', ''),
      slug: file.replace('.json', '').toLowerCase().replace(/ /g, '-'),
    };
  });

  fs.writeFileSync(outputFile, JSON.stringify({ casinos }, null, 2));
  console.log(`Genererte casinos.json med ${casinos.length} casinoer`);
}

generateCasinoList();
