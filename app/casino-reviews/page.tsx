import CasinoReviews from './index'
import { CasinoCard } from '@/components/casino-card'
import { Pagination } from '@/components/ui/pagination'
import { useSearchParams } from 'next/navigation'

// Antall casinoer per side
const ITEMS_PER_PAGE = 20

export default function Page() {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  
  // Hardkodet casino-data (eller importer fra en statisk fil)
  const allCasinos = [
    {
      name: "1xSlots Casino",
      logo: "/images/casinos/1xslotscasino.png",
      promotion: "100% up to €1500 + 150 Free Spins",
      link: "/casino-reviews/1xslotscasino"
    },
    // ... flere casinoer
  ]

  // Beregn start og slutt-indeks for gjeldende side
  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentCasinos = allCasinos.slice(startIndex, endIndex)
  const totalPages = Math.ceil(allCasinos.length / ITEMS_PER_PAGE)

  return (
    <main className="min-h-screen bg-[#070a0f] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          All Casino Reviews
        </h1>
        
        <div className="space-y-4 mb-8">
          {currentCasinos.map((casino, index) => (
            <CasinoCard
              key={casino.name}
              rank={startIndex + index + 1}
              name={casino.name}
              logo={casino.logo}
              promotion={casino.promotion}
              link={casino.link}
            />
          ))}
        </div>

        <Pagination 
          currentPage={page}
          totalPages={totalPages}
          baseUrl="/casino-reviews"
        />
      </div>
    </main>
  )
}
