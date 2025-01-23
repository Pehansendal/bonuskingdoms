'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createSlug } from '@/utils/casinoUtils';
import type { Casino } from '@/types/casino';
import casinosData from '@/data/casinos.json';

export function CasinoSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCasinos, setFilteredCasinos] = useState<Casino[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Lukk søkeresultater når man klikker utenfor
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Oppdatert useEffect for filtrering
  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = casinosData
        .filter(casino => 
          casino.casino_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => a.casino_name.localeCompare(b.casino_name));
      setFilteredCasinos(filtered);
    } else {
      // Vis alle casinoer når søkefeltet er tomt
      setFilteredCasinos(casinosData.sort((a, b) => a.casino_name.localeCompare(b.casino_name)));
    }
  }, [searchTerm]);

  return (
    <div className="relative z-[9999]" ref={searchRef}>
      {/* Søkefelt */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search casinos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => {
            setIsOpen(true);
            if (!searchTerm) {
              setFilteredCasinos(casinosData.sort((a, b) => a.casino_name.localeCompare(b.casino_name)));
            }
          }}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   text-white placeholder-gray-400"
        />
      </div>

      {/* Søkeresultater */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 max-h-[80vh] md:max-h-96 overflow-y-auto 
                      backdrop-blur-xl bg-gray-900/95 border border-white/10 rounded-lg 
                      shadow-xl z-[9999]">
          <div className="p-2">
            {filteredCasinos.length === 0 ? (
              <div className="p-4 text-center text-gray-400">
                No casinos found
              </div>
            ) : (
              filteredCasinos.map(casino => (
                <Link
                  key={casino.casino_name}
                  href={`/crypto-casinos/${createSlug(casino.casino_name)}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg 
                           transition-colors"
                >
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <Image
                      src={casino.logo_path.startsWith('/') ? casino.logo_path : `/${casino.logo_path}`}
                      alt={`${casino.casino_name} logo`}
                      fill
                      className="object-contain"
                      sizes="32px"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white">{casino.casino_name}</div>
                    <div className="text-sm text-gray-400">
                      {casino.bonus_percentage}% up to €{casino.bonus_max_amount_in_euro}
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
} 