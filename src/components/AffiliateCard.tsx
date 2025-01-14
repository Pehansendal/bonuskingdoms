import { AffiliateData } from '@/types/affiliate';

interface AffiliateCardProps {
  casino: AffiliateData;
}

export default function AffiliateCard({ casino }: AffiliateCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 lg:p-8 hover:bg-gray-700/50 transition-all duration-300 hover-effect">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 lg:gap-8">
        <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
          <a 
            href={casino.affiliate_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 relative flex-shrink-0 bg-gray-900/50 rounded-lg p-2 sm:p-4 overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={casino.logo} 
              alt={casino.name} 
              className="w-full h-full object-contain"
            />
          </a>
          <div className="flex-grow">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {casino.name}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl">
              {casino.short_description}
            </p>
          </div>
        </div>
        <div className="text-left sm:text-right flex-shrink-0 lg:min-w-[300px]">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 mb-2">
            {casino.bonus}
          </div>
          <div className="flex flex-wrap gap-2">
            {casino.features.map((feature, index) => (
              <span 
                key={index} 
                className="bg-gray-700/50 text-xs sm:text-sm lg:text-base px-2 sm:px-3 lg:px-4 py-1 rounded-full text-gray-300 hover:bg-gray-600/50 transition-colors duration-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-end">
        <a 
          href={casino.affiliate_link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-6 sm:px-8 lg:px-12 py-3 lg:py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center text-base lg:text-lg font-semibold"
        >
          Claim Bonus
        </a>
      </div>
    </div>
  );
} 