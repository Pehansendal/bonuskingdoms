import { getCasinos } from '@/lib/casinoLoader';
import CasinoTable from '@/components/CasinoTable';

export default async function BestBonusOffers() {
  const allCasinos = await getCasinos();
  
  // Sort by bonus percentage
  const sortedCasinos = [...allCasinos].sort((a, b) => {
    const aBonus = parseInt(a.bonus_percentage) || 0;
    const bBonus = parseInt(b.bonus_percentage) || 0;
    return bBonus - aBonus;
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Best Casino Bonus Offers
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find the highest bonus percentages and maximum bonus amounts available at crypto casinos.
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