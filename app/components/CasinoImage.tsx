'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface CasinoImageProps {
  src: string
  alt: string
  className?: string
}

export default function CasinoImage({ src, alt, className }: CasinoImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={100}
      className={`rounded-lg object-contain ${className || ''}`}
    />
  )
} 