import CasinoCard from '@/components/CasinoCard';
import { AffiliateData } from '@/types/affiliate';

export default function AllCasinos() {
  // Eksempeldata som følger AffiliateData interface
  const casinos: AffiliateData[] = [
    {
      id: 'casino1',
      name: 'Example Casino',
      logo: '/path/to/logo.png',
      rating: 4.5,
      bonus: '100% up to $500',
      short_description: 'Great casino with amazing bonuses and games',
      affiliate_link: 'https://example.com',
      features: ['Fast Withdrawals', '24/7 Support'],
      position: 1,
      terms: '18+ Terms Apply'
    },
    // Legg til flere casinoer her...
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">All Casinos</h1>
      <div className="space-y-4">
        {casinos.map(casino => (
          <CasinoCard 
            key={casino.id}
            casino={casino}
          />
        ))}
      </div>
    </div>
  );
}

export const dynamic = 'force-static'; 