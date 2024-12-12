"use client"

import Image from 'next/image'

interface BackgroundDiceProps {
  scrollY: number
}

export function BackgroundDice({ scrollY }: BackgroundDiceProps) {
  return (
    <>
      <div 
        className="fixed top-20 right-20 opacity-15 w-[300px] h-[300px] -z-10"
        style={{ 
          transform: `rotate(${12 + scrollY * 0.02}deg) translateY(${scrollY * 0.1}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
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
    </>
  )
} 