import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CasinoData } from './types'
import { Metadata } from 'next'
import { getCasinoData } from '../../../lib/utils/getCasinoData'
import path from 'path'
import fs from 'fs'

export async function generateStaticParams() {
  const reviewsDir = path.join(process.cwd(), 'public', 'data', 'reviews')
  const files = fs.readdirSync(reviewsDir)
  
  return files.map(file => ({
    slug: file.replace('.json', '').toLowerCase()
      .replace(/\s+/g, '')
      .replace(/[^a-z0-9-]/g, '')
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const casinoData = await getCasinoData(params.slug)
  
  if (!casinoData) {
    return {
      title: 'Casino ikke funnet',
      description: 'Det forespurte casinoet ble ikke funnet.'
    }
  }

  return {
    title: `${casinoData.name} Anmeldelse - Crypto Casino Rating ${casinoData.verdict.rating}/10`,
    description: casinoData.verdict.text?.slice(0, 160),
    openGraph: {
      title: `${casinoData.name} - Crypto Casino Anmeldelse`,
      description: casinoData.verdict.text?.slice(0, 160),
      images: [`/images/casinos/${params.slug}.png`],
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

  return <CasinoContent data={casino} />
}

function CasinoContent({ data }: { data: CasinoData }) {
  // Sikre at vi har gyldige verdier eller standardverdier
  const totalGames = data?.games?.slots?.total || 0;
  const support = data?.keyFacts?.[1]?.value || "24/7";
  const withdrawals = data?.keyFacts?.[2]?.value || "Fast";
  const rating = data?.verdict?.rating || 'N/A';
  const lastUpdated = data?.lastUpdated || 'Recently';

  return (
    <div className="min-h-screen bg-[#0f1218]">
      {/* Hero Section med større sirkulær logo */}
      <div className="bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          {data.logoPath && (
            <div className="mb-12 flex justify-center">
              <div className="w-[400px] h-[400px] relative rounded-full overflow-hidden border-8 border-gray-700">
                <Image
                  src={data.logoPath}
                  alt={`${data.name} logo`}
                  fill
                  sizes="(max-width: 400px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="bg-yellow-400/10 px-8 py-4 rounded-full">
              <span className="text-5xl font-bold text-yellow-400">{rating}</span>
              <span className="text-gray-400 text-2xl ml-2">/10</span>
            </div>
            <div className="text-gray-400 text-xl">Updated: {lastUpdated}</div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Quick Navigation */}
        <nav className="mb-12 overflow-x-auto">
          <ul className="flex space-x-6 text-lg">
            <li>
              <a href="#overview" className="px-6 py-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Overview
              </a>
            </li>
            <li>
              <a href="#game-selection" className="px-6 py-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Games
              </a>
            </li>
            <li>
              <a href="#security-section" className="px-6 py-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Security
              </a>
            </li>
            <li>
              <a href="#bonuses" className="px-6 py-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Bonuses
              </a>
            </li>
            <li>
              <a href="#faq-section" className="px-6 py-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Verdict Card */}
        <section id="overview" className="mb-12">
          <div className="bg-[#1a1f2d] p-8 rounded-xl border border-gray-800">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Verdict</h2>
            <p className="text-gray-300 mb-6 text-xl leading-relaxed">{data?.verdict?.text || 'Review coming soon'}</p>
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
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 text-white">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Advantages */}
            <div className="bg-[#1a1f2d] p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-green-400 flex items-center">
                <span className="mr-3">✓</span> Advantages
              </h3>
              <ul className="space-y-4">
                {data?.advantages?.map((pro: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-300 text-lg">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disadvantages */}
            <div className="bg-[#1a1f2d] p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-red-400 flex items-center">
                <span className="mr-3">✗</span> Disadvantages
              </h3>
              <ul className="space-y-4">
                {data?.disadvantages?.map((con: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-300 text-lg">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

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