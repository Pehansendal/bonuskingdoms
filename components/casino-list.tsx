"use client"

import { useState, useEffect } from 'react'
import { CasinoCard } from './casino-card'
import { Casino } from '@/types/casino'
import { ScrollToTop } from './scroll-to-top'
import { BackgroundDice } from './background-dice'

interface CasinoListProps {
  initialCasinos: Casino[]
}

export function CasinoList({ initialCasinos }: CasinoListProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="overflow-y-auto p-4 lg:p-8 bg-[#070a0f]">
      <BackgroundDice scrollY={scrollY} />
      
      <div className="relative">
        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12 px-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-white bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent">
            Top Crypto Casinos
          </h1>
          <p className="text-gray-400 text-base lg:text-lg">
            Explore our curated selection of the best cryptocurrency casinos in 2024. 
            Each platform has been thoroughly vetted for security, game variety, 
            payment speed, and customer service. Whether you&apos;re looking for the best 
            bonuses or the widest selection of crypto payment options, our expert 
            reviews will help you find your perfect match.
          </p>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto px-4">
          {initialCasinos.map((casino) => (
            <CasinoCard key={casino.name} {...casino} />
          ))}
        </div>
      </div>
      <ScrollToTop />
    </main>
  )
} 