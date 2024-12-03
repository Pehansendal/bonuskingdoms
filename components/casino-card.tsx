"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Casino } from '@/lib/types'

type CasinoCardProps = Casino

export function CasinoCard({ rank, name, logo, promotion, supportedCoins, additionalCoins }: CasinoCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <Card 
      ref={ref}
      className={`
        transition-all duration-700
        ${inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
        }
        bg-[#1a1f2e]/40 backdrop-blur-md border border-white/10 shadow-lg text-white 
        hover:shadow-xl hover:border-white/20 transition-all duration-300
        relative before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-white/5 before:to-transparent before:rounded-xl
      `}
    >
      <CardContent className="p-3 lg:p-4 relative">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-4 lg:hidden">
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image 
                src={logo} 
                alt={name} 
                fill
                className="rounded-lg object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-400 text-sm">#{rank}</span>
                <h2 className="text-lg font-bold uppercase bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {name}
                </h2>
              </div>
              <p className="text-gray-400 uppercase text-xs">PROMOTIONS</p>
              <p className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                {promotion}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 uppercase text-xs mb-1">COINS</p>
              <div className="flex gap-1">
                {supportedCoins.slice(0, 4).map((coin) => (
                  <div key={coin} className="bg-[#252b3d]/80 backdrop-blur-sm rounded-full p-1.5 
                                shadow-lg hover:shadow-xl hover:bg-[#252b3d] 
                                transition-all duration-300 border border-white/5">
                    <Image
                      src={`/${coin}.svg`}
                      alt={coin}
                      width={16}
                      height={16}
                      className="transition-transform hover:scale-125 hover:rotate-12"
                    />
                  </div>
                ))}
                {additionalCoins > 0 && (
                  <div className="bg-[#252b3d]/80 backdrop-blur-sm rounded-full p-1.5 
                                flex items-center shadow-lg hover:shadow-xl 
                                transition-all duration-300 border border-white/5">
                    <span className="text-gray-400 text-xs">+{additionalCoins}</span>
                  </div>
                )}
              </div>
            </div>
            <Button className="bg-blue-600/90 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg
                             shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                             transition-all duration-300 backdrop-blur-sm text-sm">
              Go to site
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image 
                src={logo} 
                alt={name} 
                fill
                className="rounded-lg object-contain"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">#{rank}</span>
              <h2 className="text-xl font-bold uppercase bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {name}
              </h2>
            </div>
          </div>

          <div className="flex-1 px-4">
            <p className="text-gray-400 uppercase text-xs">PROMOTIONS</p>
            <p className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              {promotion}
            </p>
          </div>

          <div className="flex-shrink-0">
            <p className="text-gray-400 uppercase text-xs mb-1">COINS</p>
            <div className="flex gap-1">
              {supportedCoins.slice(0, 4).map((coin) => (
                <div key={coin} 
                     className="bg-[#252b3d]/80 backdrop-blur-sm rounded-full p-1.5 
                              shadow-lg hover:shadow-xl hover:bg-[#252b3d] 
                              transition-all duration-300 border border-white/5">
                  <Image
                    src={`/${coin}.svg`}
                    alt={coin}
                    width={16}
                    height={16}
                    className="transition-transform hover:scale-125 hover:rotate-12"
                  />
                </div>
              ))}
              {additionalCoins > 0 && (
                <div className="bg-[#252b3d]/80 backdrop-blur-sm rounded-full p-1.5 
                              flex items-center shadow-lg hover:shadow-xl 
                              transition-all duration-300 border border-white/5">
                  <span className="text-gray-400 text-xs">+{additionalCoins}</span>
                </div>
              )}
            </div>
          </div>

          <Button className="bg-blue-600/90 hover:bg-blue-700 text-white px-6 py-1.5 rounded-lg
                           shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                           transition-all duration-300 backdrop-blur-sm text-sm">
            Go to site
          </Button>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              className="w-full mt-2 text-gray-400 hover:text-white border-t border-white/5
                         hover:bg-white/5 transition-colors duration-300 text-sm py-1"
            >
              Read review
              <ChevronDown className={`ml-2 h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="collapse-animate">
            <div className="mt-4 p-4 bg-[#252b3d]/60 backdrop-blur-sm rounded-lg
                          border border-white/5 shadow-inner
                          transform transition-all duration-300 ease-out">
              <div className="space-y-4">
                <h3 className="font-semibold">Om {name}</h3>
                <p className="text-gray-400">
                  Detaljert casino-informasjon kommer her...
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Fordeler</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Rask utbetaling</li>
                      <li>24/7 kundeservice</li>
                      <li>Stort spillutvalg</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Ulemper</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Ingen telefonsupport</li>
                      <li>Begrenset i enkelte land</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}

