"use client"

import { CasinoCard } from '@/components/casino-card'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { DEMO_CASINOS } from '@/lib/constants'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.pageYOffset > 500)
    }
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 bg-blue-600/90 p-3 rounded-full
                 shadow-lg transition-all duration-300 z-50
                 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  )
}

export default function Home() {
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
      {/* Bakgrunnsbilder */}
      <div className="fixed top-20 right-20 opacity-15 w-[300px] h-[300px] -z-10"
           style={{ 
             transform: `rotate(${12 + scrollY * 0.02}deg) translateY(${scrollY * 0.1}px)`,
             transition: 'transform 0.1s ease-out'
           }}>
        <Image
          src="/pixterninger.png"
          alt=""
          fill
          className="blur-[2px] object-contain"
        />
      </div>
      <div className="fixed bottom-20 left-[300px] opacity-15 -rotate-45 w-[400px] h-[400px] -z-10">
        <Image
          src="/pixterninger.png"
          alt=""
          fill
          className="blur-[2px] object-contain"
        />
      </div>
      
      {/* Hovedinnhold */}
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
          {DEMO_CASINOS.map((casino) => (
            <CasinoCard key={casino.name} {...casino} />
          ))}
        </div>
      </div>
      <ScrollToTop />
    </main>
  )
}
