import { getCasinos } from '@/lib/casinoLoader';
import CasinoTable from '@/components/CasinoTable';
import Link from 'next/link';
import { StarIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default async function Home() {
  const allCasinos = await getCasinos();
  
  // Sort by rating and take top 20
  const topCasinos = [...allCasinos]
    .sort((a, b) => {
      const aRating = Number(a.casino_rating) || 0;
      const bRating = Number(b.casino_rating) || 0;
      return bRating - aRating;
    })
    .slice(0, 20);

  return (
    <main>
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/dramtic_crypto.webp"
            alt="Dramatic Crypto Gaming Scene with Bitcoin"
            width={1920}
            height={1080}
            priority
            className="w-full h-[400px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">
                Best Rated Crypto Casinos
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Compare the top 20 highest rated crypto casinos with the best bonuses and free spins offers.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-800/50 rounded-xl p-4 hover-effect">
                <StarIcon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-sm text-gray-400">Top Casinos</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 hover-effect">
                <SparklesIcon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">500%</div>
                <div className="text-sm text-gray-400">Max Bonus</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 hover-effect">
                <StarIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm text-gray-400">Free Spins</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 hover-effect">
                <SparklesIcon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-400">Cryptocurrencies</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link 
                href="/best-bonus-offers"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
              >
                Best Bonus Offers
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link 
                href="/most-free-spins"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors"
              >
                Most Free Spins
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link 
                href="/how-bonuses-work"
                className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-colors"
              >
                How Bonuses Work
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="container mx-auto px-4 py-12">
        <CasinoTable 
          casinos={topCasinos}
          simplified={true}
        />
        
        <div className="text-center mt-8">
          <Link 
            href="/all-casinos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-bold transition-all transform hover:-translate-y-1"
          >
            See All Casinos
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
