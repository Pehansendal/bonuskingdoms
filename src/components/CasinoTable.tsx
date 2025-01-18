'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, ChevronUpIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import type { Casino } from '@/types/casino';
import { loadTextContent } from '@/utils/textLoader';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { convertRating } from '@/utils/ratingConverter';
import CasinoFilters, { FilterState } from './CasinoFilters';

interface CasinoTableProps {
  casinos: Casino[];
  simplified?: boolean;
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
          {/* Header med logo og screenshot */}
          <div className="flex items-center gap-8 p-6 bg-gray-800/30 rounded-xl">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl overflow-hidden">
                <Image
                  src={casino.logo_path.replace('public/', '/')}
                  alt={`${casino.casino_name} logo`}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Screenshot */}
            <div className="flex-grow">
              <div className="relative w-full h-48 rounded-xl overflow-hidden">
                <Image
                  src={casino.screenshot_path}
                  alt={`${casino.casino_name} screenshot`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    console.error('Failed to load image:', e.currentTarget.src);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>

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

// Legg til disse stilene rett etter imports
const styles = {
  sortableHeader: `
    relative px-6 py-4 text-left text-sm font-semibold text-gray-300 
    cursor-pointer transition-all duration-200
    hover:bg-gray-800/50 hover:text-white
    border-b border-transparent hover:border-blue-500/30
  `,
  
  sortIndicator: `
    absolute right-2 top-1/2 -translate-y-1/2 
    flex flex-col opacity-50 transition-opacity duration-200
    group-hover:opacity-100
  `,
  
  tooltip: `
    absolute hidden group-hover:block 
    bg-gray-800 text-xs text-gray-300 
    px-2 py-1 rounded-md -bottom-8 
    left-1/2 transform -translate-x-1/2 
    whitespace-nowrap z-10
    border border-gray-700 shadow-lg
    opacity-0 group-hover:opacity-100 
    transition-opacity duration-200
  `
};

// Bruk stilene i SortableHeader
const SortableHeader = ({ title, field, sortConfig, onSort }: {
  title: string;
  field: keyof Casino;
  sortConfig: { key: keyof Casino; direction: 'asc' | 'desc' } | null;
  onSort: (field: keyof Casino) => void;
}) => {
  // Lag beskrivende tooltip tekst basert på feltet
  const getTooltip = (field: keyof Casino) => {
    const tooltips: Record<keyof Casino, string> = {
      casino_name: "Sort casinos alphabetically",
      website_url: "Sort by website URL",
      accepted_crypto: "Sort by accepted cryptocurrencies",
      bonus_percentage: "Sort by bonus percentage (highest/lowest)",
      bonus_max_amount_in_euro: "Maximum deposit amount eligible for bonus",
      max_bonus_value: "Total maximum bonus value (deposit × bonus %)",
      free_spins: "Sort by number of free spins",
      bonus_type: "Sort by bonus type",
      logo_path: "Sort by logo path",
      player_rating: "Sort by player rating",
      casino_rating: "Sort by casino rating",
      pros_path: "Sort by pros path",
      cons_path: "Sort by cons path",
      review_path: "Sort by review path",
      screenshot_path: "Sort by screenshot path"
    };
    return tooltips[field] || "Click to sort";
  };

  return (
    <th 
      onClick={() => onSort(field)}
      title={getTooltip(field)}
      className={styles.sortableHeader}
    >
      <div className="flex items-center gap-2">
        <span>{title}</span>
        <div className={styles.sortIndicator}>
          <ChevronUpIcon 
            className={`w-4 h-4 ${
              sortConfig?.key === field && sortConfig.direction === 'asc' 
                ? 'text-blue-400' 
                : 'text-gray-500'
            }`}
          />
          <ChevronDownIcon 
            className={`w-4 h-4 -mt-1 ${
              sortConfig?.key === field && sortConfig.direction === 'desc' 
                ? 'text-blue-400' 
                : 'text-gray-500'
            }`}
          />
        </div>
        
        {/* Hover tooltip */}
        <div className={styles.tooltip}>
          {getTooltip(field)}
        </div>
      </div>
    </th>
  );
};

export default function CasinoTable({ casinos, simplified = false }: CasinoTableProps) {
  const [expandedCasino, setExpandedCasino] = useState<string | null>(null);
  const [filteredCasinos, setFilteredCasinos] = useState(casinos);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Casino;
    direction: 'asc' | 'desc';
  } | null>(null);
  const [filters, setFilters] = useState<FilterState>({ casino_name: '', crypto: '' });

  // Sorteringsfunksjon
  const sortCasinos = (casinosToSort: Casino[]) => {
    if (!sortConfig) return casinosToSort;

    return [...casinosToSort].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      // Håndter numeriske verdier
      if (['casino_rating', 'free_spins'].includes(sortConfig.key)) {
        return sortConfig.direction === 'asc' 
          ? Number(aValue) - Number(bValue)
          : Number(bValue) - Number(aValue);
      }

      // Handle bonus_percentage
      if (sortConfig.key === 'bonus_percentage') {
        const aNum = parseInt(String(aValue).replace('%', '')) || 0;
        const bNum = parseInt(String(bValue).replace('%', '')) || 0;
        return sortConfig.direction === 'asc' ? aNum - bNum : bNum - aNum;
      }

      // Handle pengeverdier
      if (['bonus_max_amount_in_euro', 'max_bonus_value'].includes(sortConfig.key)) {
        const aNum = parseInt(String(aValue).replace(/[^0-9]/g, '')) || 0;
        const bNum = parseInt(String(bValue).replace(/[^0-9]/g, '')) || 0;
        return sortConfig.direction === 'asc' ? aNum - bNum : bNum - aNum;
      }

      return sortConfig.direction === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  };

  // Filtreringsfunksjon
  const filterCasinos = (casinosToFilter: Casino[]) => {
    return casinosToFilter.filter(casino => {
      if (filters.casino_name && !casino.casino_name.toLowerCase().includes(filters.casino_name.toLowerCase())) {
        return false;
      }

      if (filters.crypto) {
        const cryptoSymbols = casino.accepted_crypto.split(',').map(c => c.trim());
        const matchingSymbol = cryptoSymbols.find(symbol => cryptoNames[symbol] === filters.crypto);
        if (!matchingSymbol) {
          return false;
        }
      }

      return true;
    });
  };

  // Oppdater filtrerte og sorterte casinoer når noe endres
  useEffect(() => {
    let result = filterCasinos(casinos);
    
    // Hvis crypto er valgt, sorter etter bonus_percentage som standard
    if (filters.crypto && !sortConfig) {
      result.sort((a, b) => {
        const aBonus = parseInt(a.bonus_percentage) || 0;
        const bBonus = parseInt(b.bonus_percentage) || 0;
        return bBonus - aBonus; // Høyest bonus først
      });
    } else {
      result = sortCasinos(result);
    }
    
    setFilteredCasinos(result);
  }, [casinos, filters, sortConfig]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleSort = (key: keyof Casino) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Legg til toggleExpand funksjonen igjen
  const toggleExpand = (casinoName: string) => {
    setExpandedCasino(expandedCasino === casinoName ? null : casinoName);
  };

  return (
    <div className="space-y-4">
      {!simplified && (
        <>
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-blue-300">
              <InformationCircleIcon className="w-5 h-5" />
              <span>Click any column header to sort the table. Click again to reverse the order.</span>
            </div>
          </div>
          <CasinoFilters casinos={casinos} onFilterChange={handleFilterChange} />
        </>
      )}
      
      <div className="overflow-x-auto bg-gray-900 rounded-xl shadow-xl">
        <table className="min-w-full divide-y divide-gray-800">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Logo</th>
              <SortableHeader title="Casino" field="casino_name" sortConfig={sortConfig} onSort={handleSort} />
              <SortableHeader title="Bonus %" field="bonus_percentage" sortConfig={sortConfig} onSort={handleSort} />
              <SortableHeader title="Bonus Up To" field="bonus_max_amount_in_euro" sortConfig={sortConfig} onSort={handleSort} />
              <SortableHeader title="Max Bonus Value" field="max_bonus_value" sortConfig={sortConfig} onSort={handleSort} />
              <SortableHeader title="Free Spins" field="free_spins" sortConfig={sortConfig} onSort={handleSort} />
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Bonus Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Crypto</th>
              <SortableHeader title="Rating" field="casino_rating" sortConfig={sortConfig} onSort={handleSort} />
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Details</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {filteredCasinos.map((casino) => (
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
                  <td className="px-6 py-4 text-gray-300">{casino.bonus_type}</td>
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
    </div>
  );
} 