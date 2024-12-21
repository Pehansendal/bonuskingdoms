'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      name: 'Home',
      href: '/',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
          />
        </svg>
      )
    },
    {
      name: 'Casinos',
      href: '/casinos',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      )
    }
  ]

  return (
    <>
      {/* Mobil hamburger-knapp */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 min-h-screen bg-gray-900 text-white p-6 fixed left-0 top-0 shadow-xl">
        {/* Logo */}
        <div className="mb-16 flex justify-center">
          <Link href="/" className="block">
            <Image
              src="/bk-logg liten.png"
              alt="BonusKingdoms Logo"
              width={240}
              height={80}
              className="w-auto h-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-center">
          <ul className="space-y-4 w-full max-w-[200px]">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="flex items-center gap-3 py-3 px-4 hover:bg-gray-800 rounded-lg 
                    transition-all duration-200 text-gray-300 hover:text-white group"
                >
                  <span className="text-blue-400 group-hover:text-blue-300">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobil meny */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900 z-40">
          <div className="p-6 pt-20">
            <nav className="flex flex-col items-center">
              <ul className="space-y-4 w-full max-w-[200px]">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="flex items-center gap-3 py-3 px-4 hover:bg-gray-800 rounded-lg 
                        transition-all duration-200 text-gray-300 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-blue-400">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  )
} 