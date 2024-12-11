'use client'

import Image from 'next/image'
import { useState } from 'react'

interface CasinoLogoProps {
  src: string
  alt: string
}

export function CasinoLogo({ src, alt }: CasinoLogoProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) return null

  return (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={100}
      className="object-contain"
      onError={() => setImageError(true)}
    />
  )
} 