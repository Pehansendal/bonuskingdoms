'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            BonusKingdoms
          </Link>
          <div className="flex space-x-4">
            <Link href="/casinos" className="text-gray-700 hover:text-gray-900">
              All Casinos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 