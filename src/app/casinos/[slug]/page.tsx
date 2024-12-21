import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import { normalizeSlug, getLogoFilename } from '@/utils/slugs'
import CasinoLogo from '@/components/CasinoLogo'

interface CasinoData {
  name: string
  lastUpdated: string
  trustIndicators: Array<{
    text: string
    color: string
  }>
  verdict: {
    text: string
    rating: string
  }
  keyFacts: Array<{
    icon: string
    label: string
    value: string
  }>
  security: {
    title: string
    description: string
    features: string[]
  }
  games: {
    slots: {
      total: string
      popular: Array<{
        name: string
        rtp: string
      }>
    }
    tableGames: {
      total: string
      popular: string[]
    }
  }
  bonuses: Array<{
    type: string
    amount: string
    wagering: string
  }>
  advantages: string[]
  disadvantages: string[]
  faq: Array<{
    question: string
    answer: string
  }>
}

export async function generateStaticParams() {
  const reviewsDir = path.join(process.cwd(), 'public/reviews')
  const files = fs.readdirSync(reviewsDir)
  const casinoFiles = files.filter(file => file.endsWith('.json'))
  
  return casinoFiles.map(file => ({
    slug: normalizeSlug(file)
  }))
}

async function getCasinoData(slug: string): Promise<CasinoData | null> {
  const reviewsDir = path.join(process.cwd(), 'public/reviews')
  const files = fs.readdirSync(reviewsDir)
  
  const casinoFile = files.find(file => normalizeSlug(file) === slug)
  
  if (!casinoFile) {
    console.log(`No file found for slug: ${slug}`)
    console.log('Available files:', files)
    return null
  }
  
  const filePath = path.join(reviewsDir, casinoFile)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(fileContent)
}

// Hjelpefunksjon for å sjekke om data eksisterer
function getTableGamesInfo(casino: CasinoData) {
  return {
    total: casino.games?.tableGames?.total || 'Not specified',
    popular: casino.games?.tableGames?.popular || []
  }
}

export default async function CasinoPage({
  params
}: {
  params: { slug: string }
}) {
  const casino = await getCasinoData(params.slug)
  if (!casino) return <div>Casino not found</div>

  const tableGames = getTableGamesInfo(casino)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 text-lg">
        {/* Hero Section - Legg til mer dramatisk styling */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8 border border-gray-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-4 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-transform duration-300">
              <CasinoLogo
                src={`/casinos/${getLogoFilename(params.slug + '.json')}.png`}
                alt={`${casino.name} logo`}
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-4">
                <h1 className="text-5xl font-bold mb-4 md:mb-0 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {casino.name}
                </h1>
                <a
                  href={`https://${casino.name.toLowerCase().replace(/\s+/g, '')}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <span>Go to Site</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                {casino.trustIndicators.map((indicator, index) => (
                  <span 
                    key={index}
                    className={`text-sm px-4 py-2 rounded-full border ${
                      indicator.color === 'green' ? 'border-green-500 text-green-400 bg-green-500/10' :
                      indicator.color === 'blue' ? 'border-blue-500 text-blue-400 bg-blue-500/10' :
                      'border-purple-500 text-purple-400 bg-purple-500/10'
                    }`}
                  >
                    {indicator.text}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                <div className="flex items-center bg-gray-700/50 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <span className="text-3xl text-yellow-500 mr-2">★</span>
                  <span className="text-2xl font-bold">{casino.verdict.rating}</span>
                </div>
                <span className="text-sm text-gray-400">
                  Last updated: {casino.lastUpdated}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts Grid - Legg til hover-effekter */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {casino.keyFacts.map((fact, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:bg-gray-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{fact.icon}</div>
              <div className="text-sm text-gray-400">{fact.label}</div>
              <div className="text-lg font-semibold text-gray-100">{fact.value}</div>
            </div>
          ))}
        </section>

        {/* Main Content Grid - Forbedre seksjonene */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Verdict */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Casino Review
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {casino.verdict.text}
              </p>
            </section>

            {/* Games */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Games
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">Slots</h3>
                  <p className="text-gray-400 mb-4">Total: {casino.games?.slots?.total || 'Not specified'}</p>
                  <div className="space-y-3">
                    {casino.games?.slots?.popular?.map((slot, index) => (
                      <div key={index} className="flex justify-between items-center bg-gray-700/30 p-3 rounded-lg">
                        <span className="text-gray-200">{slot.name}</span>
                        <span className="text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full text-sm">
                          RTP: {slot.rtp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">Table Games</h3>
                  <p className="text-gray-400 mb-4">Total: {tableGames.total}</p>
                  <div className="flex flex-wrap gap-2">
                    {tableGames.popular.map((game, index) => (
                      <span key={index} className="bg-gray-700/30 px-4 py-2 rounded-full text-gray-300">
                        {game}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Bonuses */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Bonuses
              </h2>
              <div className="space-y-6">
                {casino.bonuses.map((bonus, index) => (
                  <div key={index} className="border-b border-gray-700 last:border-0 pb-6 last:pb-0">
                    <h3 className="font-semibold text-lg text-gray-100 mb-2">{bonus.type}</h3>
                    <p className="text-blue-400 font-medium mb-1">{bonus.amount}</p>
                    <p className="text-sm text-gray-400">Wagering: {bonus.wagering}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Security */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {casino.security.title}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">{casino.security.description}</p>
              <div className="flex flex-wrap gap-2">
                {casino.security.features.map((feature, index) => (
                  <span key={index} className="bg-green-500/10 border border-green-500 text-green-400 px-3 py-1 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Pros & Cons - Mer dramatiske farger og effekter */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="bg-gradient-to-br from-green-900/20 to-gray-800/50 backdrop-blur-sm rounded-xl border border-green-700/50 p-8 relative overflow-hidden group hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-700/10" />
            <h2 className="relative text-2xl font-bold mb-6 text-green-400 group-hover:scale-105 transition-transform duration-300">
              Advantages
            </h2>
            <ul className="relative space-y-4">
              {casino.advantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-3 group/item hover:bg-green-500/10 p-2 rounded-lg transition-colors duration-200">
                  <span className="text-green-400 mt-1 group-hover/item:scale-125 transition-transform duration-200">✓</span>
                  <span className="text-gray-300">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-red-900/20 to-gray-800/50 backdrop-blur-sm rounded-xl border border-red-700/50 p-8 relative overflow-hidden group hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-700/10" />
            <h2 className="relative text-2xl font-bold mb-6 text-red-400 group-hover:scale-105 transition-transform duration-300">
              Disadvantages
            </h2>
            <ul className="relative space-y-4">
              {casino.disadvantages.map((disadvantage, index) => (
                <li key={index} className="flex items-start gap-3 group/item hover:bg-red-500/10 p-2 rounded-lg transition-colors duration-200">
                  <span className="text-red-400 mt-1 group-hover/item:scale-125 transition-transform duration-200">✗</span>
                  <span className="text-gray-300">{disadvantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ - Legg til interaktive elementer */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {casino.faq.map((item, index) => (
              <div 
                key={index} 
                className="border-b border-gray-700 last:border-0 pb-8 last:pb-0 hover:bg-gray-800/30 p-4 rounded-lg transition-colors duration-200"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-100">{item.question}</h3>
                <p className="text-gray-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 