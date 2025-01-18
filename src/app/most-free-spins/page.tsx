import { getCasinos } from '@/lib/casinoLoader';
import CasinoTable from '@/components/CasinoTable';

export default async function MostFreeSpins() {
  const allCasinos = await getCasinos();
  
  // Sort by free spins
  const sortedCasinos = [...allCasinos].sort((a, b) => {
    const aSpins = parseInt(a.free_spins) || 0;
    const bSpins = parseInt(b.free_spins) || 0;
    return bSpins - aSpins;
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Highest Free Spins Offers
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compare casinos offering the most free spins with their welcome bonuses.
          </p>
        </div>

        <CasinoTable 
          casinos={sortedCasinos}
          simplified={true}
        />
      </div>
    </main>
  );
} 