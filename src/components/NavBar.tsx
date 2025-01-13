'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/all-casinos', label: 'All Casinos' },
    { href: '/about', label: 'About Us' },
  ];

  return (
    <>
      {/* Hamburger-knapp for mobil */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        type="button"
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
      >
        {isMenuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Hovedmeny */}
      <nav className={`bg-gray-900 fixed h-full w-64 z-40 top-0 left-0 border-r border-gray-600 transform transition-transform duration-200 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="flex flex-col p-4">
          <Link href="/" className="flex flex-col items-center mb-8 pt-4">
            <img 
              src="/bk-logo-stor.png" 
              alt="Bonus Kingdoms"
              className="w-48 h-auto"
            />
          </Link>

          {/* Vertikal meny med midtstilt tekst */}
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mørkt overlay når mobil-menyen er åpen */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default NavBar; 