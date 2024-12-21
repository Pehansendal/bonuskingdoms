'use client'

import Sidebar from './Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1 lg:ml-64 min-h-screen">
        {/* Header bare for mobil */}
        <header className="lg:hidden fixed top-0 right-0 left-0 bg-gray-900/80 backdrop-blur-sm z-30 border-b border-gray-800">
          <div className="flex justify-between items-center p-4">
            <Link href="/" className="block">
              <Image
                src="/bk-logg liten.png"
                alt="BonusKingdoms Logo"
                width={180}
                height={60}
                className="w-auto h-12"
                priority
              />
            </Link>
          </div>
        </header>
        
        {/* Juster padding-top bare for mobil */}
        <main className="lg:pt-0 pt-24">
          {children}
        </main>
      </div>
    </div>
  )
} 