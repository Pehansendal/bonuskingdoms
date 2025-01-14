'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  HomeIcon, 
  Squares2X2Icon as ViewGridIcon,
  InformationCircleIcon,
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon
} from '@heroicons/react/24/outline';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/all-casinos', label: 'All Casinos', icon: ViewGridIcon },
    { href: '/about', label: 'About Us', icon: InformationCircleIcon },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Hamburger-meny for mobil */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors duration-200"
      >
        {isMenuOpen ? (
          <XIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>

      {/* Hovedmeny */}
      <nav className={`
        fixed h-full w-64 z-40 top-0 left-0 
        bg-gray-900/80 backdrop-blur-md
        border-r border-gray-800 
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col p-6">
          <Link href="/" className="flex flex-col items-center mb-12 group">
            <img 
              src="/bk-logo-stor.png" 
              alt="Bonus Kingdoms"
              className="w-48 h-auto transform transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 text-gray-300 hover:text-white px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-800/50 group"
              >
                <item.icon className="w-5 h-5 transform transition-transform duration-300 group-hover:scale-110" />
                <span className="text-lg font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mørkt overlay når mobil-menyen er åpen */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default NavBar; 