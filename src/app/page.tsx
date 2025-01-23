import casinosData from '@/data/casinos.json';
import CasinoCardList from '@/components/CasinoCardList';
import CasinoTable from '@/components/CasinoTable';
import Link from 'next/link';
import { StarIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import type { Casino } from '@/types/casino';

export default function Home() {
  return (
    <main>
      {/* Hero Section med bakgrunnsbilde */}
      <div className="relative mb-12">
        {/* Bakgrunnsbilde */}
        <div className="absolute inset-0 h-[300px] overflow-hidden">
          <Image
            src="/dramtic_crypto.webp"
            alt="Crypto casino background"
            fill
            className="object-cover object-center brightness-[0.2]"
            priority
          />
        </div>

        {/* Innhold over bakgrunnsbildet */}
        <div className="relative container mx-auto px-4 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              The Ultimate Crypto Casino List
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare and filter through 500+ crypto casinos. Find the perfect match with our powerful sorting tools for bonuses and supported cryptocurrencies.
            </p>
          </div>
        </div>
      </div>

      {/* Casino List Section */}
      <div className="container mx-auto px-4">
        <CasinoCardList casinos={casinosData as Casino[]} />
      </div>
    </main>
  );
}
