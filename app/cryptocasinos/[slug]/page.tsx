import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Casino } from '@/types/casino'
import { Metadata } from 'next'
import { getCasinoData } from '@/utils/getCasinoData'
import path from 'path'
import fs from 'fs/promises'

export async function generateStaticParams() {
  try {
    const reviewsDir = path.join(process.cwd(), 'public', 'data', 'reviews')
    const files = await fs.readdir(reviewsDir)
    
    const slugs = files.map(file => ({
      slug: file.replace('.json', '')
    }))

    return slugs
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const casinoData = await getCasinoData(params.slug)
  
  if (!casinoData) {
    return {
      title: 'Casino ikke funnet',
      description: 'Det forespurte casinoet ble ikke funnet.'
    }
  }

  const description = casinoData?.verdict?.text || 
                     `Les vår anmeldelse av ${casinoData.name} crypto casino`

  return {
    title: `${casinoData.name} Anmeldelse - Crypto Casino Rating ${casinoData.verdict?.rating || '?'}/10`,
    description: description.slice(0, 160),
    openGraph: {
      title: `${casinoData.name} - Crypto Casino Anmeldelse`,
      description: description.slice(0, 160),
      images: [casinoData.logo],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/cryptocasinos/${params.slug}`,
    }
  }
}

export default async function CasinoPage({ params }: { params: { slug: string } }) {
  const casino = await getCasinoData(params.slug)

  if (!casino) {
    notFound()
  }

  return <CasinoContent data={casino} slug={params.slug} />
}

function CasinoContent({ data, slug }: { data: Casino, slug: string }) {
  const logoPath = `/images/casinos/${slug}.png`

  // Sikre at vi har review-data
  const review = data.review || {
    description: data.verdict?.text || 'Ingen beskrivelse tilgjengelig',
    pros: [],
    cons: []
  }

  // Sikre at vi har gyldige verdier eller standardverdier
  const totalGames = data?.games?.slots?.total || 0;
  const support = data?.keyFacts?.[1]?.value || "24/7";
  const withdrawals = data?.keyFacts?.[2]?.value || "Fast";
  const rating = data?.verdict?.rating ?? 0;
  const lastUpdated = data?.lastUpdated || 'Recently';

  return (
    <div className="min-h-screen bg-[#070a0f] text-white pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header med logo, navn og rating */}
        <header className="text-center pt-8">
          <div className="relative w-48 h-48 mx-auto mb-4">
            <Image
              src={logoPath}
              alt={`${data.name} logo`}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 208px, 288px"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
          <div className="text-2xl md:text-3xl">
            <span className="text-yellow-500 font-bold">{data.verdict?.rating || '?'}</span>
            <span className="text-yellow-500/60">/10</span>
          </div>
        </header>

        {/* Navigasjon */}
        <nav className="flex justify-center gap-4 mb-8">
          <button className="px-4 py-2 rounded-lg bg-[#1a1f2d] hover:bg-[#252b3d] transition-colors">
            Overview
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#1a1f2d] hover:bg-[#252b3d] transition-colors">
            Games
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#1a1f2d] hover:bg-[#252b3d] transition-colors">
            Security
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#1a1f2d] hover:bg-[#252b3d] transition-colors">
            Bonuses
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#1a1f2d] hover:bg-[#252b3d] transition-colors">
            FAQ
          </button>
        </nav>

        {/* Verdict section */}
        <section className="bg-[#1a1f2d] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Verdict</h2>
          <p className="text-gray-300 leading-relaxed">
            {data.review?.description || data.verdict?.text || 'Ingen beskrivelse tilgjengelig'}
          </p>
        </section>

        {/* Verdict Card */}
        <section id="overview" className="mb-12">
          <div className="bg-[#1a1f2d] p-8 rounded-xl border border-gray-800">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Verdict</h2>
            <p className="text-gray-300 mb-6 text-xl leading-relaxed">{review.description}</p>
            <div className="flex flex-wrap gap-4">
              {data?.trustIndicators?.map((indicator: any, index: number) => (
                <span 
                  key={index}
                  className={`bg-${indicator.color}-500/10 text-${indicator.color}-400 px-6 py-3 rounded-full flex items-center text-lg`}
                >
                  <span className="mr-2">✓</span> {indicator.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {data?.keyFacts?.map((fact: any, index: number) => (
            <div key={index} className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
              <div className="text-3xl mb-2">{fact.icon}</div>
              <div className="text-sm text-gray-400">{fact.label}</div>
              <div className="text-xl font-bold text-gray-200">{fact.value}</div>
            </div>
          ))}
        </div>

        {/* Security Section */}
        <section id="security-section" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">{data?.security?.title}</h2>
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
            <p className="text-gray-300 mb-4">{data?.security?.description}</p>
            <ul className="space-y-3">
              {data?.security?.features?.map((feature: string, index: number) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Game Selection */}
        <section id="game-selection" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Game Selection</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-100">
                <span className="mr-2">🎰</span> Slots
              </h3>
              <p className="text-gray-300 mb-4">{data?.games?.slots?.total || 0} titles including:</p>
              <ul className="space-y-2">
                {data?.games?.slots?.popular?.map((game: any, index: number) => (
                  <li key={index} className="text-gray-300">
                    {game.name} {game.rtp && `(RTP: ${game.rtp})`}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-100">
                <span className="mr-2">🎲</span> Table Games
              </h3>
              <p className="text-gray-300 mb-4">{data?.games?.tableGames?.total || 0} variants including:</p>
              <ul className="space-y-2">
                {data?.games?.tableGames?.popular?.map((game: string, index: number) => (
                  <li key={index} className="text-gray-300">
                    {game}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pros & Cons Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Advantages */}
          <div className="bg-gradient-to-br from-[#1a1f2d] to-green-950/30 
                          rounded-xl p-6 
                          border border-green-500/10
                          shadow-lg shadow-green-900/20
                          backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 
                           text-green-400 border-b border-green-500/20 pb-3">
              <span className="bg-green-500/10 p-1.5 rounded-full">✓</span>
              Advantages
            </h3>
            <ul className="space-y-4">
              {data.advantages?.map((advantage, index) => (
                <li key={index} 
                    className="flex items-start gap-3 text-gray-300 
                               hover:text-green-300 transition-colors">
                  <span className="text-green-500 mt-1 
                                  bg-green-500/10 p-1 rounded-full 
                                  text-xs">
                    ✓
                  </span>
                  <span className="leading-relaxed">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Disadvantages */}
          <div className="bg-gradient-to-br from-[#1a1f2d] to-red-950/30 
                          rounded-xl p-6 
                          border border-red-500/10
                          shadow-lg shadow-red-900/20
                          backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 
                           text-red-400 border-b border-red-500/20 pb-3">
              <span className="bg-red-500/10 p-1.5 rounded-full">✗</span>
              Disadvantages
            </h3>
            <ul className="space-y-4">
              {data.disadvantages?.map((disadvantage, index) => (
                <li key={index} 
                    className="flex items-start gap-3 text-gray-300 
                               hover:text-red-300 transition-colors">
                  <span className="text-red-500 mt-1 
                                  bg-red-500/10 p-1 rounded-full 
                                  text-xs">
                    ✗
                  </span>
                  <span className="leading-relaxed">{disadvantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ Section with Accordions */}
        <section id="faq-section" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {data?.faq?.map((item: any, index: number) => (
              <details
                key={index}
                className="group bg-[#1a1f2d] rounded-xl border border-gray-800"
              >
                <summary className="flex justify-between items-center cursor-pointer p-6">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <span className="text-gray-400 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Bonuses Section */}
        <section id="bonuses" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Casino Bonuses</h2>
          <div className="grid gap-6">
            {data?.bonuses?.map((bonus: any, index: number) => (
              <div key={index} className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{bonus.type}</h3>
                  <span className="text-2xl font-bold text-green-400">{bonus.amount}</span>
                </div>
                <div className="mt-2 text-gray-400">
                  Wagering: <span className="text-white">{bonus.wagering}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof */}
        <section className="mb-12 bg-[#1a1f2d] p-8 rounded-xl border border-gray-800">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{totalGames}</div>
              <div className="text-gray-400">Total Games</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">{support}</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">{withdrawals}</div>
              <div className="text-gray-400">Withdrawals</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
