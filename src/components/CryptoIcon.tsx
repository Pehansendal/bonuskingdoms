import Image from 'next/image';

interface CryptoIconProps {
  symbol: string;
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

export function CryptoIcon({ symbol }: CryptoIconProps) {
  const iconMap: Record<string, string> = {
    '₿': '/crypto/bitcoin.svg',
    'Ƀ': '/crypto/bitcoin.svg',
    'Ξ': '/crypto/ethereum.svg',
    'Ł': '/crypto/litecoin.svg',
    'Ð': '/crypto/dogecoin.svg',
    '₮': '/crypto/tether.svg',
    '✕': '/crypto/xrp.svg',
    '₳': '/crypto/cardano.svg',
    'ℬ': '/crypto/bnb.svg',
    'τ': '/crypto/theta.svg',
    '₵': '/crypto/celo.svg',
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
} 