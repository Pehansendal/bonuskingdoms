import casinosData from '@/data/casinos.json';
import CasinoTable from '@/components/CasinoTable';
import type { Casino } from '@/types/casino';

export default function AllCasinos() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Advanced Sorting List
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Use our advanced filtering tools to find exactly what you're looking for. Sort and filter by bonus size, free spins, cryptocurrencies, and more.
        </p>
      </div>

      <CasinoTable casinos={casinosData as Casino[]} />
    </main>
  );
} 