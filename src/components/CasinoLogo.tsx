'use client'

import Image from 'next/image'

export interface CasinoLogoProps {
  casino: {
    name: string
    logo: string
  }
  width: number
  height: number
}

export default function CasinoLogo({ casino, width, height }: CasinoLogoProps) {
  return (
    <div className="relative">
      <Image
        src={casino.logo}
        alt={`${casino.name} logo`}
        width={width}
        height={height}
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
} 