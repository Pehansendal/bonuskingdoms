'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import type { Casino } from '@/types/casino';
import { loadTextContent } from '@/utils/textLoader';

interface CasinoTableProps {
  casinos: Casino[];
}

const formatColumnHeader = (header: string) => {
  return header
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const CryptoIcon = ({ symbol }: { symbol: string }) => {
  const iconMap: Record<string, string> = {
    // Bitcoin variants
    '₿': '/crypto/bitcoin.svg',
    'Ƀ': '/crypto/bitcoin.svg',
    
    // Ethereum
    'Ξ': '/crypto/ethereum.svg',
    
    // Litecoin
    'Ł': '/crypto/litecoin.svg',
    
    // Dogecoin
    'Ð': '/crypto/dogecoin.svg',
    
    // Tether
    '₮': '/crypto/tether.svg',
    
    // XRP
    '✕': '/crypto/xrp.svg',
    
    // Cardano
    '₳': '/crypto/cardano.svg',
    
    // BNB
    'ℬ': '/crypto/bnb.svg',
    
    // Theta
    'τ': '/crypto/theta.svg',
    
    // Celo
    '₵': '/crypto/celo.svg',
    
    // Monero
    'ɱ': '/crypto/monero.svg',
  };

  // Legg til mapping for fulle navn
  const nameMap: Record<string, string> = {
    '₿': 'Bitcoin',
    'Ƀ': 'Bitcoin',
    'Ξ': 'Ethereum',
    'Ł': 'Litecoin',
    'Ð': 'Dogecoin',
    '₮': 'Tether',
    '✕': 'XRP',
    '₳': 'Cardano',
    'ℬ': 'Binance Coin',
    'τ': 'Theta',
    '₵': 'Celo',
    'ɱ': 'Monero',
  };

  const trimmedSymbol = symbol.trim();
  const fullName = nameMap[trimmedSymbol] || trimmedSymbol;
  
  // Hvis vi har et ikon, vis det
  if (iconMap[trimmedSymbol]) {
    return (
      <span 
        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-800/50 p-1" 
        title={fullName}
      >
        <Image 
          src={iconMap[trimmedSymbol]}
          alt={fullName}
          width={16} 
          height={16}
          className="object-contain"
        />
      </span>
    );
  }

  // Hvis ikke, vis symbolet i en sirkel med samme stil
  return (
    <span 
      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-800/50 text-xs font-medium"
      title={fullName}
    >
      {trimmedSymbol}
    </span>
  );
};

const LogoCell = ({ path }: { path: string }) => {
  const cleanPath = path.replace('public/', '');
  const fullPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  
  return (
    <div className="relative">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <Image
          src={fullPath}
          alt="Casino logo"
          width={48}
          height={48}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-200"
        />
      </div>
    </div>
  );
};

const ExpandedContent = ({ casino }: { casino: Casino }) => {
  const [pros, setPros] = useState<string>('Loading pros...');
  const [cons, setCons] = useState<string>('Loading cons...');
  const [review, setReview] = useState<string>('Loading review...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadContent() {
      try {
        // Reset states
        setPros('Loading pros...');
        setCons('Loading cons...');
        setReview('Loading review...');
        setError(null);

        // Load all content in parallel
        const [prosContent, consContent, reviewContent] = await Promise.all([
          loadTextContent(casino.pros_path),
          loadTextContent(casino.cons_path),
          loadTextContent(casino.review_path)
        ]);

        setPros(prosContent);
        setCons(consContent);
        setReview(reviewContent);
      } catch (err) {
        setError('Failed to load content. Please try again later.');
        console.error('Error loading casino content:', err);
      }
    }

    loadContent();
  }, [casino]);

  if (error) {
    return (
      <tr>
        <td colSpan={10}>
          <div className="p-4 text-red-400 text-center">{error}</div>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td colSpan={10}>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-500 mb-2">Pros</h3>
            <div className="whitespace-pre-wrap text-gray-300">{pros}</div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-500 mb-2">Cons</h3>
            <div className="whitespace-pre-wrap text-gray-300">{cons}</div>
          </div>
          <div className="md:col-span-2 bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-500 mb-2">Review</h3>
            <div className="whitespace-pre-wrap text-gray-300">{review}</div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default function CasinoTable({ casinos }: CasinoTableProps) {
  const [expandedCasino, setExpandedCasino] = useState<string | null>(null);

  const toggleExpand = (casinoName: string) => {
    setExpandedCasino(expandedCasino === casinoName ? null : casinoName);
  };

  return (
    <div className="overflow-x-auto bg-gray-900 rounded-xl shadow-xl">
      <table className="min-w-full divide-y divide-gray-800">
        <thead>
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Logo</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Casino</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Bonus %</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Max Bonus</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Value</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Free Spins</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Crypto</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Rating</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Details</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {casinos.map((casino) => (
            <>
              <tr key={casino.casino_name} className="hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">
                  <LogoCell path={casino.logo_path} />
                </td>
                <td className="px-6 py-4 font-medium">{casino.casino_name}</td>
                <td className="px-6 py-4">{casino.bonus_percentage}</td>
                <td className="px-6 py-4">{casino.bonus_max_amount_in_euro}</td>
                <td className="px-6 py-4">{casino.max_bonus_value}</td>
                <td className="px-6 py-4">{casino.free_spins}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-1">
                    {casino.accepted_crypto
                      .split(',')
                      .slice(0, 6)
                      .map((crypto, i) => (
                        <CryptoIcon key={i} symbol={crypto.trim()} />
                      ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    {casino.casino_rating}
                    <StarIcon className="w-5 h-5 text-yellow-500" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleExpand(casino.casino_name)}
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                  >
                    Read More
                    {expandedCasino === casino.casino_name ? (
                      <ChevronUpIcon className="w-4 h-4" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4" />
                    )}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <a
                    href={casino.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                  >
                    Visit Site
                  </a>
                </td>
              </tr>
              {expandedCasino === casino.casino_name && (
                <ExpandedContent casino={casino} />
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
} 