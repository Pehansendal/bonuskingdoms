'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CasinoSearch } from './CasinoSearch';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      href: '/',
      label: 'Home',
      description: 'Back to homepage',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      )
    },
    {
      href: '/all-casinos',
      label: 'Advanced Casino Filtering',
      description: 'Find the perfect casino with our advanced filters',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      href: '/how-bonuses-work',
      label: 'How Bonuses Work',
      description: 'Learn about casino bonuses and how to use them',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      )
    }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-gray-900/75 border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/bk-logo-stor.png"
              alt="BonusKingdoms"
              width={150}
              height={40}
              priority
            />
          </Link>

          {/* Søkefelt */}
          <div className="w-full max-w-md">
            <CasinoSearch />
          </div>

          {/* Desktop Meny */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map(item => (
              <Link 
                key={item.href}
                href={item.href} 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobil menyknapp */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobil meny */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            {menuItems.map(item => (
              <Link 
                key={item.href}
                href={item.href} 
                className="block p-4 hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <div className="text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-medium text-white">{item.label}</div>
                    <div className="text-sm text-gray-400">{item.description}</div>
                  </div>
                </div>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
} 