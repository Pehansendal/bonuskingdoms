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
  const [visibleCount, setVisibleCount] = useState(15);

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

  // Hent bare synlige casinoer
  const visibleCasinos = filteredAndSortedCasinos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSortedCasinos.length;

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

      if (!trimmed.includes('.') && trimmed.length < 100) {
        return (
          <h2 key={index} className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">
            {trimmed}
          </h2>
        );
      }

      return (
        <p key={index} className="text-gray-300 mb-4">
          {trimmed}
        </p>
      );
    });

    return (
      <div className="mt-2 space-y-6 bg-gray-900/50 rounded-b-xl p-6 -mt-2 border-t border-gray-700/50">
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

        {/* Review Section */}
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
    <div className="relative min-h-screen">
      {/* Animated Background - Balansert belysning */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-indigo-900/5" />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-[0.02] animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-[0.02] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-[0.02] animate-blob animation-delay-4000" />
      </div>

      {/* Filter Section med glass effect */}
      <div className="relative mb-6">
        {/* Legg til overskrift med sticky container */}
        <div className="sticky top-[72px] bg-gray-900/95 backdrop-blur-xl z-40 py-4 -mx-4 px-4 md:px-0">
          <h2 className="text-xl font-medium text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Sort and Filter Casinos
          </h2>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl shadow-xl">
            <div className="flex flex-wrap items-center justify-center gap-4 p-4">
              <div className="flex gap-3">
                <button
                  onClick={() => setSortBy('bonus')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    sortBy === 'bonus'
                      ? 'bg-gray-700 text-gray-200'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:scale-105'
                  }`}
                >
                  <SparklesIcon className="w-5 h-5" />
                  Best Bonuses
                </button>
                <button
                  onClick={() => setSortBy('spins')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    sortBy === 'spins'
                      ? 'bg-gray-700 text-gray-200'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20 hover:scale-105'
                  }`}
                >
                  <GiftIcon className="w-5 h-5" />
                  Most Free Spins
                </button>
              </div>

              {/* Custom Crypto Dropdown - Oppdatert stil */}
              <div className="relative z-50">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`
                    px-6 py-3 rounded-lg font-medium transition-all
                    flex items-center gap-2 min-w-[240px]
                    ${isDropdownOpen 
                      ? 'bg-gray-700 text-gray-200'
                      : 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-105'
                    }
                  `}
                >
                  <CurrencyDollarIcon className="w-5 h-5" />
                  <span className="flex-1 text-left">
                    {selectedCrypto || 'Sort by Cryptocurrency'}
                  </span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute mt-2 w-full bg-gray-800 rounded-lg border border-gray-700 shadow-xl z-50">
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
          </div>
        </div>
      </div>

      {/* Casino Cards med glass effect */}
      <div className="space-y-4 relative z-30">
        {visibleCasinos.map((casino, index) => (
          <div key={casino.casino_name}>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 hover:bg-white/10 transition-all shadow-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                  {/* Ranking */}
                  <div className="text-lg font-bold text-gray-400">
                    #{index + 1}
                  </div>

                  {/* Logo */}
                  <div className="w-16 md:w-20 h-16 md:h-20 relative flex-shrink-0">
                    <Image
                      src={casino.logo_path}
                      alt={`${casino.casino_name} logo`}
                      width={80}
                      height={80}
                      className="rounded-lg object-contain"
                    />
                  </div>

                  {/* Casino Name - Only visible on mobile */}
                  <h3 className="text-xl font-bold md:hidden">{casino.casino_name}</h3>
                </div>

                {/* Middle Section */}
                <div className="flex-1 space-y-4 md:space-y-0 md:flex md:items-center md:gap-6">
                  {/* Casino Name - Hidden on mobile */}
                  <div className="hidden md:block">
                    <h3 className="text-xl font-bold">{casino.casino_name}</h3>
                  </div>

                  {/* Bonus Info */}
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg px-4 py-2">
                      <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                        {casino.bonus_percentage}
                      </span>
                      <span className="text-gray-300 text-base md:text-lg ml-1">
                        up to
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-white ml-2">
                        {casino.bonus_max_amount_in_euro}
                      </span>
                    </div>

                    {casino.free_spins && (
                      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg px-4 py-2 flex items-center gap-2">
                        <GiftIcon className="w-5 h-5 text-purple-400" />
                        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {casino.free_spins}
                        </span>
                        <span className="text-base md:text-lg text-gray-300">
                          Free Spins
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center w-full md:w-auto">
                  {/* Supported Coins */}
                  <div className="flex flex-wrap gap-2">
                    {casino.accepted_crypto.split(',').slice(0, 6).map((coin) => (
                      <CryptoIcon key={coin.trim()} symbol={coin.trim()} />
                    ))}
                    {casino.accepted_crypto.split(',').length > 6 && (
                      <span 
                        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 text-xs font-medium text-blue-400 hover:bg-gray-700 transition-colors cursor-help"
                        title={`${casino.accepted_crypto.split(',').slice(6).map(c => cryptoNames[c.trim()] || c.trim()).join(', ')}`}
                      >
                        +{casino.accepted_crypto.split(',').length - 6}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 w-full md:w-auto">
                    <Link
                      href={casino.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-initial bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-green-600/20"
                    >
                      GO TO SITE
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </Link>
                    <button 
                      onClick={() => setExpandedCasino(expandedCasino === casino.casino_name ? null : casino.casino_name)}
                      className="flex-1 md:flex-initial bg-gray-800 hover:bg-gray-700 border border-indigo-500/30 px-6 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 text-indigo-400 hover:text-indigo-300"
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
              </div>
            </div>

            {/* Expanded content - Samme bakgrunn som kortet */}
            {expandedCasino === casino.casino_name && (
              <div className="mt-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-b-xl p-6 -mt-2 border-t border-white/20">
                <ExpandedContent casino={casino} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setVisibleCount(prev => prev + 15)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 
                     px-8 py-3 rounded-xl font-medium text-white shadow-lg shadow-blue-500/20 
                     transition-all hover:scale-105 flex items-center gap-2"
          >
            Load More Casinos
            <span className="text-sm text-blue-200">
              ({filteredAndSortedCasinos.length - visibleCount} remaining)
            </span>
          </button>
        </div>
      )}
    </div>
  );
} 