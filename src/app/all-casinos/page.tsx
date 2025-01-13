import { getCasinos } from '@/utils/getCasinos';
import CasinoCard from '@/components/CasinoCard';

export default async function AllCasinos() {
  const casinos = getCasinos();
  
  // Debug logging
  console.log('Total casinos loaded:', casinos.length);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">All Casinos ({casinos.length})</h1>
      
      <div className="space-y-4">
        {casinos.map(casino => (
          <CasinoCard 
            key={casino.id}
            casino={{
              id: casino.id,
              name: casino.name,
              logo: casino.logo,
              rating: casino.rating,
              bonus: casino.welcome_bonus,
              shortDescription: casino.short_description || casino.description?.slice(0, 150) + '...' || 'Visit casino for more information'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export const dynamic = 'force-static'; 