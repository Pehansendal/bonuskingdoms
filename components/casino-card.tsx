"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

type CasinoCardProps = {
  rank: number
  name: string
  logo: string
  promotion: string
  link: string
}

export function CasinoCard({ 
  rank, 
  name, 
  logo, 
  promotion, 
  link 
}: CasinoCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div ref={ref} className={`transform transition-all duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-blue-500">#{rank}</span>
              <div className="relative h-16 w-32">
                <Image
                  src={logo}
                  alt={`${name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 128px) 100vw, 128px"
                />
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <p className="text-gray-300 mb-4">{promotion}</p>

          <div className="space-y-4">
            <Link href={link} className="w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Besøk Casino
              </Button>
            </Link>

            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full text-gray-400 hover:text-white">
                  <span>Mer info</span>
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="text-gray-300">
                <div className="pt-2">
                  <h4 className="font-semibold mb-2">Høydepunkter:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Rask utbetaling</li>
                    <li>24/7 kundeservice</li>
                    <li>Stort spillutvalg</li>
                    <li>Kryptovennlig</li>
                  </ul>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
