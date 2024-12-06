"use client"

import { DEMO_CASINOS } from '@/lib/constants'
import { CasinoCard } from '@/components/casino-card'

interface LayoutWithCasinosProps {
  children: React.ReactNode
  title: string
  description: string
}

export function LayoutWithCasinos({ children, title, description }: LayoutWithCasinosProps) {
  return (
    <div className="bg-[#070a0f]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-white bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-gray-400 text-base lg:text-lg">
              {description}
            </p>
          </div>
        </div>

        {children}
        
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6">Recommended Casinos</h2>
          {DEMO_CASINOS.map((casino) => (
            <CasinoCard key={casino.name} {...casino} />
          ))}
        </div>
      </div>
    </div>
  )
} 