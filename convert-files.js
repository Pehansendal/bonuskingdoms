const fs = require('fs').promises;
const path = require('path');

async function validateAndFixContent(content, filename) {
  let fixedContent = content;
  const errors = [];

  // Fiks 1: Standardiser komponentstruktur
  const baseStructure = `
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-[#1a1f2d] rounded-xl p-8 mb-12 border border-gray-800">
  `;

  if (!fixedContent.includes(baseStructure.trim())) {
    fixedContent = `export default function CasinoReview() {\n  return (${baseStructure}${fixedContent}\n      </div>\n    </div>\n  )\n}`;
  }

  // Fiks 2: Standardiser Trust Indicators
  fixedContent = fixedContent.replace(
    /<div className="flex flex-wrap gap-4 mb-6">(.*?)<\/div>/s,
    `<div className="flex flex-wrap gap-4 mb-6">
          <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full flex items-center">
            <span className="mr-2">✓</span> $1
          </span>
        </div>`
  );

  // Fiks 3: Standardiser FAQ-seksjonen
  fixedContent = fixedContent.replace(
    /<details>(.*?)<\/details>/gs,
    '<details className="bg-[#1a1f2d] p-4 rounded-xl border border-gray-800">\n$1\n</details>'
  );

  // Fiks 4: Standardiser Pros & Cons
  const prosConsTemplate = `
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-500/10 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Pros</h3>
            <ul className="space-y-2">
              $1
            </ul>
          </div>
          <div className="bg-red-500/10 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-red-400 mb-4">Cons</h3>
            <ul className="space-y-2">
              $2
            </ul>
          </div>
        </section>
  `;

  fixedContent = fixedContent.replace(
    /<section className="grid md:grid-cols-2 gap-8">(.*?)<\/section>/gs,
    prosConsTemplate
  );

  // Fiks 5: Standardiser Key Facts
  const keyFactsTemplate = `
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Key Facts</h2>
          <ul className="space-y-3">
            $1
          </ul>
        </div>
      </div>
  `;

  fixedContent = fixedContent.replace(
    /<div className="grid md:grid-cols-2 gap-8 mb-12">(.*?)<\/div>/gs,
    keyFactsTemplate
  );

  return { fixedContent, errors };
}

async function convertFiles() {
  const designtekstDir = path.join(process.cwd(), 'designtekst');
  
  try {
    const files = await fs.readdir(designtekstDir);
    const convertibleFiles = files.filter(file => file.endsWith('.txt') || file.endsWith('.tsx'));
    
    console.log(`Fant ${convertibleFiles.length} filer å konvertere`);
    
    for (const file of convertibleFiles) {
      const filePath = path.join(designtekstDir, file);
      const newFilePath = filePath.replace(/\.(txt|tsx)$/, '.tsx');
      
      console.log(`\nBehandler: ${file}`);
      
      try {
        let content = await fs.readFile(filePath, 'utf8');
        
        // Valider og fiks innhold
        const { fixedContent, errors } = await validateAndFixContent(content, file);
        
        if (errors.length > 0) {
          console.log('Fant følgende problemer:');
          errors.forEach(err => console.log(`- ${err}`));
          console.log('Prøver å fikse automatisk...');
        }
        
        // Skriv til ny .tsx fil
        await fs.writeFile(newFilePath, fixedContent);
        console.log(`Konvertert og lagret: ${path.basename(newFilePath)}`);
      } catch (error) {
        console.error(`Feil under behandling av ${file}:`, error);
      }
    }
    
  } catch (error) {
    console.error('Feil under konvertering:', error);
  }
}

convertFiles();