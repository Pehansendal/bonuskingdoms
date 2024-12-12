'use client'

import { useEffect } from 'react'

export default function ImageTest({ src }: { src: string }) {
  useEffect(() => {
    // Test om bildet kan lastes
    fetch(src)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        console.log(`✅ Bilde funnet: ${src}`)
      })
      .catch(error => {
        console.error(`❌ Kunne ikke laste bilde: ${src}`, error)
      })
  }, [src])

  return null
} 