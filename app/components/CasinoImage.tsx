'use client'

import { useState, useEffect } from 'react'

interface CasinoImageProps {
  src: string
  alt: string
  className?: string
}

export default function CasinoImage({ src, alt, className }: CasinoImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const testImage = document.createElement('img')
    testImage.src = src
    
    testImage.onload = () => {
      setImgSrc(src)
      setIsLoading(false)
    }
    
    testImage.onerror = () => {
      setImgSrc('/images/placeholder.png')
      setIsLoading(false)
    }
  }, [src])

  return (
    <div className="relative h-32 mb-4 flex items-center justify-center">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          Laster...
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`w-32 h-32 object-cover rounded-full ${className || ''}`}
        loading="lazy"
      />
    </div>
  )
} 