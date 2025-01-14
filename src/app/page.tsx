'use client'
import { getAffiliateData } from '@/utils/affiliateData';
import AffiliateCard from '@/components/AffiliateCard';

export default async function Home() {
  const affiliateCasinos = await getAffiliateData();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900/90 z-10" />
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 animate-fadeIn">
          <div className="flex justify-center mb-8">
            <img 
              src="/bk-logo-stor.png" 
              alt="Bonus Kingdoms"
              className="w-64 md:w-96 h-auto"
            />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
            Discover the Best Casino Bonuses and Exclusive Offers
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#featured-casinos" 
              className="px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Explore Casinos
            </a>
          </div>
        </div>
      </div>

      {/* Featured Casinos Section */}
      <div id="featured-casinos" className="max-w-[1920px] mx-auto px-4 lg:pl-72 lg:pr-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Casinos
        </h2>
        <div className="space-y-6">
          {affiliateCasinos.map((casino, index) => (
            <div 
              key={casino.id}
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <AffiliateCard casino={casino} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
