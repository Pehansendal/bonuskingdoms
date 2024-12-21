import { getFeaturedCasinos } from '@/utils/casinos'
import CasinoCard from '@/components/CasinoCard'

export default async function Home() {
  const featuredCasinos = await getFeaturedCasinos(6)

  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Casinos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredCasinos.map((casino) => (
          <CasinoCard key={casino.slug} casino={casino} />
        ))}
      </div>
    </main>
  )
}
