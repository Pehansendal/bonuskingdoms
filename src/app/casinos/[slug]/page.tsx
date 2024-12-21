import { getCasinos } from '@/utils/casinos'
import { normalizeSlug } from '@/utils/slugs'
import Image from 'next/image'

export default async function CasinoPage({
  params
}: {
  params: { slug: string }
}) {
  const casinos = await getCasinos()
  const casino = casinos.find(c => normalizeSlug(c.name) === params.slug)

  if (!casino) {
    return <div className="p-4">Casino not found</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gray-900 rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Logo */}
          <div className="w-full md:w-1/4">
            <div className="relative aspect-square">
              <Image
                src={casino.logo}
                alt={casino.name}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Info */}
          <div className="w-full md:w-3/4">
            <h1 className="text-4xl font-bold text-white mb-4">{casino.name}</h1>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-2 mb-6">
              {casino.trustIndicators.map((indicator, i) => (
                <span 
                  key={i}
                  className={`px-3 py-1 rounded-full text-white text-sm
                    ${indicator.color === 'green' ? 'bg-green-600' : ''}
                    ${indicator.color === 'blue' ? 'bg-blue-600' : ''}
                    ${indicator.color === 'purple' ? 'bg-purple-600' : ''}
                  `}
                >
                  {indicator.text}
                </span>
              ))}
            </div>

            {/* Verdict */}
            <div className="prose prose-invert max-w-none mb-6">
              <p className="text-gray-300">{casino.verdict.text}</p>
            </div>

            {/* Rating & Bonus */}
            <div className="flex flex-wrap gap-6">
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Rating:</span>
                <span className="ml-2 text-yellow-400 font-bold">{casino.verdict.rating}</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Bonus:</span>
                <span className="ml-2 text-green-400 font-bold">
                  {casino.bonuses[0]?.amount || 'No bonus available'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Facts */}
      <div className="bg-gray-900 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Key Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {casino.keyFacts?.map((fact, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl mb-2">{fact.icon}</div>
              <div className="text-gray-400">{fact.label}</div>
              <div className="text-white font-bold">{fact.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      {casino.security && (
        <div className="bg-gray-900 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{casino.security.title}</h2>
          <p className="text-gray-300 mb-6">{casino.security.description}</p>
          <div className="flex flex-wrap gap-2">
            {casino.security.features.map((feature, i) => (
              <span key={i} className="bg-gray-800 px-3 py-1 rounded-full text-white">
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 