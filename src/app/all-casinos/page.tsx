import casinosData from '@/data/casinos.json';
import CasinoTable from '@/components/CasinoTable';
import type { Casino } from '@/types/casino';

export default function AllCasinos() {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">All Crypto Casinos</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Explore our comprehensive overview of the most significant crypto casinos in the industry. 
          Here you can easily filter and compare casinos based on their bonus offers, number of free spins, 
          user ratings, and accepted cryptocurrencies. We have gathered all the information you need to 
          find your perfect crypto casino.
        </p>
      </div>

      <CasinoTable casinos={casinosData as Casino[]} />
    </div>
  );
} 