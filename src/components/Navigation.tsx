'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HomeIcon, TableCellsIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home', icon: HomeIcon },
    { href: '/all-casinos', label: 'All Casinos', icon: TableCellsIcon },
    { href: '/about', label: 'About', icon: InformationCircleIcon },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/bk-logo-stor.png"
                alt="BonusKingdoms Logo"
                width={150}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
          </div>
          <div className="flex space-x-4">
            {links.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
} 