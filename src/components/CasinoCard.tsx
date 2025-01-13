import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';

interface CasinoCardProps {
  casino: {
    id: string;
    name: string;
    logo: string;
    rating: number;
    bonus: string;
    shortDescription: string;
  };
}

export default function CasinoCard({ casino }: CasinoCardProps) {
  return (
    <Link href={`/casino/${casino.id}`}>
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-200 flex gap-6 cursor-pointer group">
        <div className="w-40 h-40 relative flex-shrink-0 bg-gray-900/50 rounded-lg p-4">
          <Image
            src={casino.logo}
            alt={casino.name}
            fill
            className="object-contain p-2"
            priority
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-bold group-hover:text-green-400 transition-colors">{casino.name}</h2>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i} 
                className={`w-5 h-5 ${i < casino.rating ? 'text-yellow-400' : 'text-gray-600'}`} 
              />
            ))}
          </div>
          <p className="text-green-400 text-lg font-semibold">{casino.bonus}</p>
          <p className="text-gray-400">{casino.shortDescription}</p>
        </div>
        
        <div className="flex items-center">
          <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-lg transition-all duration-200 transform group-hover:scale-105 font-medium">
            Visit Casino
          </button>
        </div>
      </div>
    </Link>
  );
} 