import { AffiliateData } from '@/types/affiliate';

interface CasinoCardProps {
  casino: AffiliateData;
}

export default function CasinoCard({ casino }: CasinoCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a 
            href={casino.affiliate_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={casino.logo} 
              alt={casino.name} 
              className="w-24 h-24 object-contain"
            />
          </a>
          <div>
            <h2 className="text-xl font-bold">{casino.name}</h2>
            <p className="text-gray-300">{casino.short_description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-green-500">{casino.bonus}</div>
          <div className="flex items-center mt-2">
            {casino.features.map((feature, index) => (
              <span 
                key={index} 
                className="bg-gray-700 text-sm px-2 py-1 rounded mr-2"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <a 
          href={casino.affiliate_link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          Claim Bonus
        </a>
      </div>
    </div>
  );
} 