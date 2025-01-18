import { useState } from 'react';
import { Casino } from '@/types/casino';

export interface FilterState {
  casino_name: string;
  crypto: string;
}

interface CasinoFiltersProps {
  casinos: Casino[];
  onFilterChange: (filters: FilterState) => void;
}

// Mapping for crypto symboler til fulle navn
const cryptoNames: Record<string, string> = {
  '₿': 'Bitcoin',
  'Ƀ': 'Bitcoin',
  'Ξ': 'Ethereum',
  'Ł': 'Litecoin',
  'Ð': 'Dogecoin',
  '₮': 'Tether',
  '✕': 'XRP',
  '₳': 'Cardano',
  'ℬ': 'BNB',
  'τ': 'Theta',
  '₵': 'Celo',
  'ɱ': 'Monero'
};

export default function CasinoFilters({ casinos, onFilterChange }: CasinoFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    casino_name: '',
    crypto: ''
  });

  // Hent unike cryptovalutaer og konverter til fulle navn
  const uniqueCryptos = Array.from(new Set(
    casinos.flatMap(casino => 
      casino.accepted_crypto.split(',').map(c => {
        const symbol = c.trim();
        return cryptoNames[symbol] || symbol;
      })
    )
  )).sort();

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-800/50 rounded-xl mb-4">
      {/* Casino Name Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Search Casino</label>
        <input
          type="text"
          value={filters.casino_name}
          onChange={(e) => handleFilterChange('casino_name', e.target.value)}
          className="w-full px-3 py-2 bg-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter casino name..."
        />
      </div>

      {/* Crypto Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Filter by Cryptocurrency</label>
        <select
          value={filters.crypto}
          onChange={(e) => handleFilterChange('crypto', e.target.value)}
          className="w-full px-3 py-2 bg-gray-700/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">All Cryptocurrencies</option>
          {uniqueCryptos.map(crypto => (
            <option key={crypto} value={crypto}>{crypto}</option>
          ))}
        </select>
      </div>
    </div>
  );
} 