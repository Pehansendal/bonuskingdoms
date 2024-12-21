import CasinoCard from '@/components/CasinoCard'
import { getCasinos } from '@/utils/casinos'

export default async function CasinosPage() {
  const casinos = await getCasinos()

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Extensive Casino Reviews
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Discover our comprehensive collection of {casinos.length}+ thoroughly reviewed online casinos. 
          Each review provides in-depth analysis of games, bonuses, security measures, and player experiences.
        </p>
      </section>

      <div className="space-y-6">
        {casinos.map((casino) => (
          <CasinoCard key={casino.name} casino={casino} />
        ))}
      </div>
    </div>
  )
} 