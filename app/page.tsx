import { CasinoCard } from '@/components/casino-card'

export default function Home() {
  const topCasinos = [
    {
      rank: 1,
      name: "1xSlots Casino",
      logo: "/images/casinos/1xslotscasino.png",
      promotion: "100% up to €1500 + 150 Free Spins",
      link: "/casino-reviews/1xslotscasino"
    },
    {
      rank: 2,
      name: "7Bit Casino",
      logo: "/images/casinos/7bitcasino.png",
      promotion: "100% up to €100 + 100 Free Spins",
      link: "/casino-reviews/7bitcasino"
    },
    {
      rank: 3,
      name: "22Bet Casino",
      logo: "/images/casinos/22betcasino.png",
      promotion: "100% up to €300 Welcome Bonus",
      link: "/casino-reviews/22betcasino"
    },
    // ... legg til flere casinoer her
  ]

  return (
    <main className="min-h-screen bg-[#070a0f] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Top Online Casinos
        </h1>
        
        <div className="space-y-4">
          {topCasinos.map((casino) => (
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
