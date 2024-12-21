'use client'

import Image from 'next/image'
import { useState } from 'react'

interface CasinoLogoProps {
  src: string
  alt: string
}

export default function CasinoLogo({ src, alt }: CasinoLogoProps) {
  const [error, setError] = useState(false)

  return (
    <div className="w-full h-full relative">
      <Image
        src={error ? '/placeholder-casino-logo.png' : src}
        alt={alt}
        fill
        className="object-contain"
        onError={() => setError(true)}
      />
    </div>
  )
} 