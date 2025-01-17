'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import type { Casino } from '@/types/casino';
import { loadTextContent } from '@/utils/textLoader';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { convertRating } from '@/utils/ratingConverter';

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

// Hjelpefunksjon for å konvertere tekst til Markdown
const convertToMarkdown = (text: string) => {
  // Del teksten i linjer
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
    
    // Vanlig tekst - legg til linjeskift for å lage avsnitt
    return trimmed ? `${trimmed}\n\n` : '\n';
  }).join('');
};

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

        setPros(prosContent); setCons(consContent); setReview(reviewContent);
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
        <div className="p-6 space-y-6 bg-gray-900/50 border border-gray-800">
          {/* Pros og Cons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros Card */}
            <div className="bg-green-900/20 border border-green-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-green-900/20 transition-shadow duration-300">
              <div className="bg-green-900/30 border-b border-green-800/50 px-6 py-4">
                <h3 className="text-xl font-bold text-green-400 tracking-wide uppercase">Pros</h3>
              </div>
              <div className="p-6">
                <div className="prose prose-invert prose-green max-w-none">
                  {pros.split('\n').map((item, index) => (
                    <div key={index} className="flex items-start mb-3 last:mb-0">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cons Card */}
            <div className="bg-red-900/20 border border-red-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-red-900/20 transition-shadow duration-300">
              <div className="bg-red-900/30 border-b border-red-800/50 px-6 py-4">
                <h3 className="text-xl font-bold text-red-400 tracking-wide uppercase">Cons</h3>
              </div>
              <div className="p-6">
                <div className="prose prose-invert prose-red max-w-none">
                  {cons.split('\n').map((item, index) => (
                    <div key={index} className="flex items-start mb-3 last:mb-0">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Review Section */}
          <div className="bg-blue-900/20 border border-blue-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-shadow duration-300">
            <div className="bg-blue-900/30 border-b border-blue-800/50 px-6 py-4">
              <h3 className="text-xl font-bold text-blue-400 tracking-wide uppercase">Review</h3>
            </div>
            <div className="p-6">
              <div className="prose prose-invert prose-blue max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({node, ...props}) => <h1 {...props} className="text-3xl font-extrabold text-blue-300 mb-8" />,
                    h2: ({node, ...props}) => <h2 {...props} className="text-2xl font-bold text-blue-400 mt-8 mb-4" />,
                    p: ({node, ...props}) => <p {...props} className="text-gray-300 text-lg leading-relaxed mb-4" />
                  }}
                >
                  {convertToMarkdown(review)}
                </ReactMarkdown>
              </div>
            </div>
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
                <td className="px-6 py-4">{Number(casino.free_spins)}</td>
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
                    {convertRating(Number(casino.casino_rating), casino.casino_name)}
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