import CasinoCard from '@/components/CasinoCard';

export default function Home() {
  // Dette er bare eksempeldata - erstatt med din JSON senere
  const featuredCasinos = [
    {
      id: '1',
      name: 'Example Casino',
      logo: '/bonus-kingdoms-logo.png',
      rating: 4.5,
      bonus: '100% up to $500',
      shortDescription: 'Great casino with amazing bonuses and games',
    },
    {
      id: '2',
      name: 'Test Casino',
      logo: '/bonus-kingdoms-logo.png',
      rating: 4.0,
      bonus: '200% up to $1000',
      shortDescription: 'Amazing slots and live casino games',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Featured Casinos</h1>
      <div className="space-y-4">
        {featuredCasinos.map(casino => (
          <CasinoCard key={casino.id} casino={casino} />
        ))}
      </div>
    </div>
  );
}
