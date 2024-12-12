import { getCasinoData, getAllCasinos } from '@/utils/getCasinoData'
import { CasinoCard } from '@/components/casino-card'

export default async function Home() {
  // Hent alle casinoer
  const casinos = await getAllCasinos()
  
  // Velg 10 tilfeldige casinoer
  const randomCasinos = casinos
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
    .map((casino, index) => ({
      rank: index + 1,
      name: casino.name,
      logo: `/images/casinos/${casino.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace('casino', '')}casino.png`,
      promotion: casino.bonuses?.[0]?.amount || "See website for current offers",
      link: `casino.com`,
      verdict: casino.verdict
    }))

  return (
    <main className="min-h-screen bg-[#070a0f] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Top Crypto Casinos
        </h1>
        
        <div className="space-y-4">
          {randomCasinos.map((casino) => (
            <CasinoCard
              key={casino.name}
              rank={casino.rank}
              name={casino.name}
              logo={casino.logo}
              promotion={casino.promotion}
              link={casino.link}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
