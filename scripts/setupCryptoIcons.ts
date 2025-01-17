import fs from 'fs';
import path from 'path';

const iconMap = {
  // Bitcoin-relaterte
  'btc': 'bitcoin',    // For symbolene ₿ og Ƀ
  
  // Ethereum
  'eth': 'ethereum',   // For symbolet Ξ
  
  // Litecoin
  'ltc': 'litecoin',   // For symbolet Ł
  
  // Dogecoin
  'doge': 'dogecoin',  // For symbolet Ð
  
  // Tether
  'usdt': 'tether',    // For symbolet ₮
  
  // XRP
  'xrp': 'xrp',        // For symbolet ✕
  
  // Cardano
  'ada': 'cardano',    // For symbolet ₳
  
  // BNB (Binance)
  'bnb': 'bnb',        // For symbolet ℬ
  
  // Theta
  'theta': 'theta',    // For symbolet τ
  
  // Celo
  'celo': 'celo',      // For symbolet ₵
  
  // Monero
  'xmr': 'monero',     // For symbolet ɱ
};

const sourceDir = path.join(process.cwd(), 'node_modules/cryptocurrency-icons/svg/color');
const targetDir = path.join(process.cwd(), 'public/crypto');

// Opprett målmappen hvis den ikke eksisterer
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Kopier og gi nytt navn til ikonene
Object.entries(iconMap).forEach(([source, target]) => {
  const sourcePath = path.join(sourceDir, `${source}.svg`);
  const targetPath = path.join(targetDir, `${target}.svg`);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${source}.svg to ${target}.svg`);
  } else {
    console.warn(`Warning: Could not find ${source}.svg`);
  }
});

console.log('Crypto icons setup complete!'); 