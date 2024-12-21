import Image from 'next/image'
import { normalizeSlug, getLogoFilename } from '@/utils/slugs'
import CasinoLogo from '@/components/CasinoLogo'
import { getCasinos } from '@/utils/casinos'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function CasinoPage({ params }: PageProps) {
  const casinos = await getCasinos()
  const casino = casinos.find(c => normalizeSlug(c.name) === params.slug)

  if (!casino) {
    return <div>Casino ikke funnet</div>
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="aspect-square relative">
              <CasinoLogo src={casino.logo} alt={casino.name} />
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{casino.name}</h1>
            <p className="text-gray-300 mb-6">{casino.description}</p>
            
            <div className="flex flex-wrap gap-3">
              {casino.trustIndicators.map((indicator, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium
                    ${indicator.color === 'green' ? 'bg-green-900/50 text-green-400' : ''}
                    ${indicator.color === 'blue' ? 'bg-blue-900/50 text-blue-400' : ''}
                  `}
                >
                  {indicator.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generer statiske paths basert på casino data
export async function generateStaticParams() {
  const casinos = await getCasinos()
  return casinos.map((casino) => ({
    slug: normalizeSlug(casino.name),
  }))
} 