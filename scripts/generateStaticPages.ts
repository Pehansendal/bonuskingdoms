const fs = require('fs');
const path = require('path');

interface TrustIndicator {
  text: string;
  color: string;
}

interface KeyFact {
  icon: string;
  label: string;
  value: string;
}

interface Security {
  title: string;
  description: string;
  features: string[];
}

interface Game {
  name: string;
  rtp?: string;
}

interface GameCategory {
  total: string;
  popular: (Game | string)[];
}

interface Games {
  slots: GameCategory;
  tableGames: GameCategory;
}

interface BonusOffer {
  type: string;
  amount: string;
  wagering: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Verdict {
  text?: string;
  rating?: string;
}

interface CasinoData {
  name: string;
  lastUpdated: string;
  trustIndicators?: TrustIndicator[];
  verdict?: Verdict;
  keyFacts?: KeyFact[];
  security?: Security;
  games?: Games;
  bonuses?: BonusOffer[];
  advantages?: string[];
  disadvantages?: string[];
  faq?: FAQ[];
}

function generatePage(casino: CasinoData, slug: string): string {
  const casinoSlug = slug.replace('.json', '');
  const trustIndicators = casino.trustIndicators || [];
  const keyFacts = casino.keyFacts || [];
  const security = casino.security || {
    title: 'Is This Casino Safe?',
    description: 'Information about security measures coming soon...',
    features: []
  };
  const verdict = casino.verdict || {
    text: 'Full review coming soon...',
    rating: '0.0'
  };
  const games = casino.games || {
    slots: { total: '0', popular: [] },
    tableGames: { total: '0', popular: [] }
  };
  console.log('Games:', JSON.stringify(games, null, 2));
  const bonuses = casino.bonuses || [];
  const advantages = casino.advantages || [];
  const disadvantages = casino.disadvantages || [];
  const faqs = casino.faq || [];

  const functionName = casinoSlug.replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^(\d+)/, (match) => {
      // Convert numbers to words for the first number sequence
      const numberWords = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
        'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty',
        'TwentyOne', 'TwentyTwo', 'TwentyThree', 'TwentyFour', 'TwentyFive'];
      const num = parseInt(match);
      return numberWords[num] || 'Num' + match;
    });

  return `export default function ${functionName}Review(): JSX.Element {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Quick Summary Box */}
      <div className="bg-[#1a1f2d] rounded-xl p-8 mb-12 border border-gray-800">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          ${casino.name} Review
        </h1>
        <p className="text-gray-400 mb-6">Last updated on ${casino.lastUpdated}</p>
        
        {/* Trust Indicators */}
        ${trustIndicators.length > 0 ? `
        <div className="flex flex-wrap gap-4 mb-6">
          ${trustIndicators.map((indicator: TrustIndicator) => `
          <span className="bg-${indicator.color}-500/10 text-${indicator.color}-400 px-4 py-2 rounded-full flex items-center">
            <span className="mr-2">✓</span> ${indicator.text}
          </span>`).join('')}
        </div>
        ` : ''}

        {/* Expert Verdict */}
        <div className="bg-gray-800/50 rounded-lg p-6">
          <p className="text-xl text-gray-200 mb-4">
            ${verdict.text}
          </p>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-yellow-400 mr-2">${verdict.rating}/10</span>
            <span className="text-gray-400">Overall Rating</span>
          </div>
        </div>
      </div>

      {/* Key Facts */}
      ${keyFacts.length > 0 ? `
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        ${keyFacts.map((fact: KeyFact) => `
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">${fact.icon}</div>
          <div className="text-sm text-gray-400">${fact.label}</div>
          <div className="text-xl font-bold text-gray-200">${fact.value}</div>
        </div>`).join('')}
      </div>
      ` : ''}

      {/* Security Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">${security.title}</h2>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <p className="text-gray-300 mb-4">
            ${security.description}
          </p>
          ${security.features.length > 0 ? `
          <ul className="space-y-3">
            ${security.features.map((feature: string) => `
            <li className="flex items-center text-gray-300">
              <span className="text-green-400 mr-3">✓</span>
              ${feature}
            </li>`).join('')}
          </ul>
          ` : ''}
        </div>
      </section>

      {/* Game Selection */}
      ${games ? `
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Game Selection</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              <span className="mr-2">🎰</span> Slots
            </h3>
            <p className="text-gray-300 mb-4">Total Games: ${games.slots.total}</p>
            <h4 className="text-lg font-semibold mb-2 text-gray-200">Popular Slots:</h4>
            <ul className="space-y-2">
              ${games.slots.popular.map((game: any) => `
              <li className="text-gray-300">
                ${typeof game === 'string' ? game : `${game.name}${game.rtp ? ` (RTP: ${game.rtp})` : ''}`}
              </li>`).join('')}
            </ul>
          </div>
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              <span className="mr-2">🎲</span> Table Games
            </h3>
            <p className="text-gray-300 mb-4">Total Games: ${games.tableGames.total}</p>
            <h4 className="text-lg font-semibold mb-2 text-gray-200">Popular Games:</h4>
            <ul className="space-y-2">
              ${games.tableGames.popular.map((game: any) => `
              <li className="text-gray-300">
                ${typeof game === 'string' ? game : `${game.name}${game.rtp ? ` (RTP: ${game.rtp})` : ''}`}
              </li>`).join('')}
            </ul>
          </div>
        </div>
      </section>
      ` : ''}

      {/* Bonus Section */}
      ${bonuses.length > 0 ? `
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Bonus Offers</h2>
        <div className="bg-[#1a1f2d] rounded-xl border border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-4 text-left text-gray-200">Bonus Type</th>
                <th className="p-4 text-left text-gray-200">Amount</th>
                <th className="p-4 text-left text-gray-200">Wagering</th>
              </tr>
            </thead>
            <tbody>
              ${bonuses.map((bonus: BonusOffer) => `
              <tr className="border-b border-gray-800">
                <td className="p-4 text-gray-300">${bonus.type}</td>
                <td className="p-4 text-gray-300">${bonus.amount}</td>
                <td className="p-4 text-gray-300">${bonus.wagering}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </section>
      ` : ''}

      {/* Pros & Cons */}
      ${advantages.length > 0 || disadvantages.length > 0 ? `
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Advantages & Disadvantages</h2>
        <div className="grid md:grid-cols-2 gap-6">
          ${advantages.length > 0 ? `
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-[#1a1f2d]/80 backdrop-blur-sm p-8 rounded-3xl border border-green-500/20">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent flex items-center mb-6">
                <span className="text-3xl mr-3">★</span>
                Advantages
              </h3>
              <ul className="space-y-4">
                ${advantages.map((pro: string) => `
                <li className="text-gray-200 flex items-start group/item">
                  <span className="text-green-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="group-hover/item:text-green-300 transition-colors">${pro}</span>
                </li>`).join('')}
              </ul>
            </div>
          </div>
          ` : ''}
          ${disadvantages.length > 0 ? `
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-[#1a1f2d]/80 backdrop-blur-sm p-8 rounded-3xl border border-red-500/20">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-300 bg-clip-text text-transparent flex items-center mb-6">
                <span className="text-3xl mr-3">⚠</span>
                Disadvantages
              </h3>
              <ul className="space-y-4">
                ${disadvantages.map((con: string) => `
                <li className="text-gray-200 flex items-start group/item">
                  <span className="text-red-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">✗</span>
                  <span className="group-hover/item:text-red-300 transition-colors">${con}</span>
                </li>`).join('')}
              </ul>
            </div>
          </div>
          ` : ''}
        </div>
      </section>
      ` : ''}

      {/* FAQ Section */}
      ${faqs.length > 0 ? `
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          ${faqs.map((faq: FAQ) => `
          <details className="group bg-[#1a1f2d] rounded-xl border border-gray-800">
            <summary className="flex items-center justify-between p-6 cursor-pointer">
              <span className="text-lg font-semibold text-gray-200">${faq.question}</span>
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-6 text-gray-300">
              ${faq.answer}
            </div>
          </details>`).join('')}
        </div>
      </section>
      ` : ''}
    </div>
  )
}`;
}

async function generateStaticPages() {
  const reviewsDir: string = path.join(process.cwd(), 'public', 'data', 'reviews');
  const outputDir: string = path.join(process.cwd(), 'app', 'casino-reviews');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read all JSON files in the reviews directory
  const files: string[] = fs.readdirSync(reviewsDir);
  const jsonFiles: string[] = files.filter((file: string) => file.endsWith('.json'));

  for (const file of jsonFiles) {
    const filePath: string = path.join(reviewsDir, file);
    const casinoData: CasinoData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Create casino-specific directory
    const casinoDir: string = path.join(outputDir, file.replace('.json', ''));
    if (!fs.existsSync(casinoDir)) {
      fs.mkdirSync(casinoDir, { recursive: true });
    }

    // Generate and write the page.tsx file
    const pageContent: string = generatePage(casinoData, file);
    fs.writeFileSync(path.join(casinoDir, 'page.tsx'), pageContent);
  }

  console.log('Static pages generated successfully!');
}

generateStaticPages().catch(console.error);
