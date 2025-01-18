'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo section */}
          <div className="flex-shrink-0 py-2 nav-logo-container">
            <Link href="/" className="flex items-center">
              <Image
                src="/bk-logo-stor.png"
                alt="BonusKingdoms"
                width={123}
                height={51}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8 relative z-50">
            <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/best-bonus-offers" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Best Bonus Offers
            </Link>
            <Link href="/most-free-spins" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Most Free Spins
            </Link>
            <Link href="/how-bonuses-work" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              How Bonuses Work
            </Link>
            <Link href="/all-casinos" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              All Casinos
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/90 backdrop-blur-sm">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/best-bonus-offers" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Best Bonus Offers
            </Link>
            <Link 
              href="/most-free-spins" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Most Free Spins
            </Link>
            <Link 
              href="/how-bonuses-work" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              How Bonuses Work
            </Link>
            <Link 
              href="/all-casinos" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              All Casinos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 