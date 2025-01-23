'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  AdjustmentsHorizontalIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { 
    name: 'Home', 
    href: '/',
    icon: HomeIcon,
    description: 'Top rated crypto casinos'
  },
  { 
    name: 'Advanced Sorting List', 
    href: '/all-casinos',
    icon: AdjustmentsHorizontalIcon,
    description: 'Compare and filter 500+ casinos'
  },
  { 
    name: 'How Bonuses Work', 
    href: '/how-bonuses-work',
    icon: QuestionMarkCircleIcon,
    description: 'Learn about casino bonuses'
  },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
          <div className="hidden md:flex md:items-center md:space-x-6 relative z-50">
            {navigation.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="group relative px-4 py-2"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className={`
                  absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                  rounded-lg
                `} />
                
                <div className="relative flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </div>

                {/* Tooltip */}
                {hoveredItem === item.name && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-800 text-xs text-gray-300 rounded-lg border border-gray-700 whitespace-nowrap">
                    {item.description}
                  </div>
                )}
              </Link>
            ))}
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
            {navigation.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-3 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 