"use client"

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.pageYOffset > 500)
    }
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 bg-blue-600/90 p-3 rounded-full
                 shadow-lg transition-all duration-300 z-50
                 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  )
} 