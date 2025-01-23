"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import type { Casino } from '@/types/casino';
import { 
  ArrowTopRightOnSquareIcon, 
  SparklesIcon,
  GiftIcon,
  CurrencyDollarIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import { loadTextContent } from '@/utils/textLoader';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface CasinoCardListProps {
  casinos: Casino[];
}

interface FilterState {
  minBonus: number;
  minFreeSpins: number;
  selectedCryptos: string[];
}

const cryptoNames: Record<string, string> = {
  '₿': 'Bitcoin',
  'Ƀ': 'Bitcoin',
  'Ξ': 'Ethereum',
  'Ł': 'Litecoin',
  'Ð': 'Dogecoin',
  '₮': 'Tether',
  '✕': 'XRP',
  '₳': 'Cardano',
  'ℬ': 'BNB',
  'τ': 'Theta',
  '₵': 'Celo',
  'ɱ': 'Monero'
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

  const trimmedSymbol = symbol.trim();
  const fullName = cryptoNames[trimmedSymbol] || trimmedSymbol;
  
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

  return (
    <span 
      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-800/50 text-xs font-medium"
      title={fullName}
    >
      {trimmedSymbol}
    </span>
  );
};

// Hjelpefunksjon for å få symbol fra navn
const getSymbolFromName = (name: string): string => {
  for (const [symbol, cryptoName] of Object.entries(cryptoNames)) {
    if (cryptoName === name) return symbol;
  }
  return '';
};

// Hjelpefunksjon for å konvertere tekst til Markdown (kopiert fra CasinoTable)
const convertToMarkdown = (text: string) => {
  const lines = text.split('\n');
  
  return lines.map(line => {
    const trimmed = line.trim();
    
    // Sjekk om linjen ser ut som en overskrift
    if (trimmed && !trimmed.includes('.') && trimmed.length < 100) {
      // Sjekk om det ser ut som en hovedoverskrift
      if (trimmed.toLowerCase().includes('welcome') || trimmed.toLowerCase().includes('overview')) {
        return `# ${trimmed}\n`;
      }
      // Andre overskrifter
      return `## ${trimmed}\n`;
    }
    
    // Vanlige linjer
    return trimmed ? `${trimmed}\n\n` : '\n';
  }).join('');
};

export default function CasinoCardList({ casinos }: CasinoCardListProps) {
  const [sortBy, setSortBy] = useState<'rating' | 'bonus' | 'spins'>('rating');
  const [selectedCrypto, setSelectedCrypto] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expandedCasino, setExpandedCasino] = useState<string | null>(null);

  // Få unike kryptovalutaer for dropdown
  const availableCryptos = useMemo(() => {
    const cryptoSet = new Set<string>();
    casinos.forEach(casino => {
      casino.accepted_crypto.split(',').forEach(crypto => {
        const trimmed = crypto.trim();
        if (cryptoNames[trimmed]) {
          cryptoSet.add(cryptoNames[trimmed]);
        }
      });
    });
    return Array.from(cryptoSet).sort();
  }, [casinos]);

  // Filtrer og sorter casinoer
  const filteredAndSortedCasinos = useMemo(() => {
    return casinos
      .filter(casino => {
        if (!selectedCrypto) return true;
        
        const acceptedCryptos = casino.accepted_crypto.split(',').map(c => {
          const symbol = c.trim();
          return cryptoNames[symbol] || symbol;
        });
        
        return acceptedCryptos.includes(selectedCrypto);
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'bonus':
            const aBonus = parseInt(a.bonus_percentage) || 0;
            const bBonus = parseInt(b.bonus_percentage) || 0;
            return bBonus - aBonus;
          case 'spins':
            return (parseInt(b.free_spins) || 0) - (parseInt(a.free_spins) || 0);
          default:
            return (Number(b.casino_rating) || 0) - (Number(a.casino_rating) || 0);
        }
      });
  }, [casinos, sortBy, selectedCrypto]);

  // Oppdater ExpandedContent komponenten
  const ExpandedContent = ({ casino }: { casino: Casino }) => {
    const [pros, setPros] = useState<string>('Loading pros...');
    const [cons, setCons] = useState<string>('Loading cons...');
    const [review, setReview] = useState<string>('Loading review...');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      async function loadContent() {
        try {
          setPros('Loading pros...'); setCons('Loading cons...'); setReview('Loading review...');
          setError(null);

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
      return <div className="p-4 text-red-400 text-center">{error}</div>;
    }

    // Konverter review tekst til HTML-struktur
    const reviewHtml = review.split('\n').map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return null;

      // Sjekk for overskrifter (ingen punktum og ikke for lang)
      if (!trimmed.includes('.') && trimmed.length < 100) {
        return (
          <h2 key={index} className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">
            {trimmed}
          </h2>
        );
      }

      // Vanlige avsnitt
      return (
        <p key={index} className="text-gray-300 mb-4">
          {trimmed}
        </p>
      );
    });

    return (
      <div className="mt-6 space-y-6">
        {/* Casino Logo og Info */}
        <div className="flex items-center gap-6 p-6 bg-gray-800/30 rounded-xl">
          <div className="w-32 h-32 relative">
            <Image
              src={casino.logo_path}
              alt={`${casino.casino_name} logo`}
              width={128}
              height={128}
              className="rounded-xl object-contain"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">{casino.casino_name}</h2>
            <p className="text-gray-300">
              {casino.bonus_percentage} up to {casino.bonus_max_amount_in_euro}
              {casino.free_spins && ` + ${casino.free_spins} Free Spins`}
            </p>
          </div>
        </div>

        {/* Pros & Cons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-green-900/20 border border-green-800/50 rounded-xl overflow-hidden">
            <div className="bg-green-900/30 border-b border-green-800/50 px-3 py-2 md:px-6 md:py-4">
              <h3 className="text-base md:text-xl font-bold text-green-400">Pros</h3>
            </div>
            <div className="p-3 md:p-6">
              <div className="text-sm md:text-base space-y-2">
                {pros.split('\n').map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-red-900/20 border border-red-800/50 rounded-xl overflow-hidden">
            <div className="bg-red-900/30 border-b border-red-800/50 px-3 py-2 md:px-6 md:py-4">
              <h3 className="text-base md:text-xl font-bold text-red-400">Cons</h3>
            </div>
            <div className="p-3 md:p-6">
              <div className="text-sm md:text-base space-y-2">
                {cons.split('\n').map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Review Section - oppdatert med direkte HTML-struktur */}
        <div className="bg-blue-900/20 border border-blue-800/50 rounded-xl overflow-hidden">
          <div className="bg-blue-900/30 border-b border-blue-800/50 px-3 py-2 md:px-6 md:py-4">
            <h3 className="text-base md:text-xl font-bold text-blue-400">Full Review</h3>
          </div>
          <div className="p-3 md:p-6">
            {reviewHtml}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Oppdatert Filter og Sortering Header */}
      <div className="flex flex-wrap items-center gap-4 mb-6 bg-gray-800/30 p-4 rounded-xl border border-gray-700/50">
        <div className="flex gap-3">
          <button
            onClick={() => setSortBy('bonus')}
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
              sortBy === 'bonus'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-200 hover:scale-105'
            }`}
          >
            <SparklesIcon className="w-5 h-5" />
            Best Bonuses
          </button>
          <button
            onClick={() => setSortBy('spins')}
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
              sortBy === 'spins'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20 scale-105'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-200 hover:scale-105'
            }`}
          >
            <GiftIcon className="w-5 h-5" />
            Most Free Spins
          </button>
        </div>

        {/* Custom Crypto Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-gray-700 rounded-lg pl-10 pr-10 py-3 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:bg-gray-600 transition-colors flex items-center gap-2 min-w-[240px]"
          >
            <CurrencyDollarIcon className="w-5 h-5 text-gray-400 absolute left-3" />
            <span className="text-gray-200">
              {selectedCrypto || 'Sort by Cryptocurrency'}
            </span>
            <svg 
              className={`w-4 h-4 text-gray-400 absolute right-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute z-50 mt-2 w-full bg-gray-800 rounded-lg border border-gray-700 shadow-xl">
              <div className="py-1 max-h-[300px] overflow-y-auto">
                <button
                  onClick={() => {
                    setSelectedCrypto('');
                    setIsDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                >
                  Sort by Cryptocurrency
                </button>
                {availableCryptos.map(crypto => {
                  const symbol = getSymbolFromName(crypto);
                  return (
                    <button
                      key={crypto}
                      onClick={() => {
                        setSelectedCrypto(crypto);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700 flex items-center gap-3"
                    >
                      <CryptoIcon symbol={symbol} />
                      {crypto}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Casino Cards */}
      <div className="space-y-4">
        {filteredAndSortedCasinos.map((casino, index) => (
          <div key={casino.casino_name}>
            <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all flex items-center gap-6">
              {/* Ranking */}
              <div className="text-lg font-bold text-gray-400">
                #{index + 1}
              </div>

              {/* Logo */}
              <div className="w-20 h-20 relative">
                <Image
                  src={casino.logo_path}
                  alt={`${casino.casino_name} logo`}
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
              </div>

              {/* Casino Name */}
              <div className="flex-1">
                <h3 className="text-xl font-bold">{casino.casino_name}</h3>
                
                {/* Promotion */}
                <div className="text-gray-300 mt-1">
                  {casino.bonus_percentage} up to {casino.bonus_max_amount_in_euro}
                  {casino.free_spins && ` + ${casino.free_spins} Free Spins`}
                </div>
              </div>

              {/* Supported Coins */}
              <div className="flex gap-2">
                {casino.accepted_crypto.split(',').map((coin) => (
                  <CryptoIcon key={coin.trim()} symbol={coin.trim()} />
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Link
                  href={casino.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-medium flex items-center gap-2"
                >
                  GO TO SITE
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </Link>
                <button 
                  onClick={() => setExpandedCasino(expandedCasino === casino.casino_name ? null : casino.casino_name)}
                  className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  READ REVIEW
                  {expandedCasino === casino.casino_name ? (
                    <ChevronUpIcon className="w-4 h-4" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedCasino === casino.casino_name && (
              <ExpandedContent casino={casino} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 