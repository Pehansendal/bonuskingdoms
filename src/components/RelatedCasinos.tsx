import Link from 'next/link';
import Image from 'next/image';
import type { Casino } from '@/types/casino';
import { createSlug } from '@/utils/casinoUtils';

interface RelatedCasinosProps {
  casinos: Casino[];
}

export function RelatedCasinos({ casinos }: RelatedCasinosProps) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Casinos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {casinos.map(casino => {
          // Sørg for at stien starter med /
          const logoPath = casino.logo_path.startsWith('/') 
            ? casino.logo_path 
            : `/${casino.logo_path}`;
          
          console.log('Using logo path:', logoPath);
          
          return (
            <Link 
              key={casino.casino_name}
              href={`/crypto-casinos/${createSlug(casino.casino_name)}`}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={logoPath}
                    alt={`${casino.casino_name} logo`}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white truncate">
                    {casino.casino_name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {casino.bonus_percentage}% up to €{casino.bonus_max_amount_in_euro}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
} 