import Link from 'next/link';
import Image from 'next/image';
import { HomeIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <nav className="w-96 bg-gray-800/50 backdrop-blur-sm min-h-screen border-r border-gray-700/50">
      <Link href="/">
        <div className="relative w-full h-56">
          <Image
            src="/bk-logo-stor.png"
            alt="Bonus Kingdoms"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </Link>
      
      <div className="px-4 space-y-4 mt-12 text-center">
        <Link 
          href="/" 
          className="flex items-center justify-center gap-3 px-4 py-4 text-gray-300 hover:bg-gray-700/50 rounded-lg transition-all duration-200 group"
        >
          <HomeIcon className="w-5 h-5 text-gray-400 group-hover:text-green-400" />
          <span className="group-hover:text-green-400 text-lg">Featured Casinos</span>
        </Link>
        <Link 
          href="/all-casinos" 
          className="flex items-center justify-center gap-3 px-4 py-4 text-gray-300 hover:bg-gray-700/50 rounded-lg transition-all duration-200 group"
        >
          <Squares2X2Icon className="w-5 h-5 text-gray-400 group-hover:text-green-400" />
          <span className="group-hover:text-green-400 text-lg">All Casinos</span>
        </Link>
      </div>
    </nav>
  );
} 