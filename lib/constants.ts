import { Casino } from './types'

export const DEMO_CASINOS: Casino[] = [
  {
    rank: 1,
    name: "Stake",
    logo: "/stake-logo.jpg",
    promotion: "10% Lifetime Rakeback + $50 Sign-up Bonus",
    supportedCoins: ["bitcoin-btc", "ethereum-eth", "tether", "dogecoin-doge"],
    additionalCoins: 16
  },
  {
    rank: 2,
    name: "BC Game",
    logo: "/bc game log.jpg",
    promotion: "Up to 1 BTC Welcome Package + 180% Deposit Bonus",
    supportedCoins: ["bitcoin-btc", "ethereum-eth", "solana", "binance-coin-bnb"],
    additionalCoins: 20
  },
  {
    rank: 3,
    name: "Cloudbet",
    logo: "/cloudbet.webp",
    promotion: "100% Welcome Bonus up to 5 BTC + 50 Free Spins",
    supportedCoins: ["bitcoin-btc", "ethereum-eth", "tether", "xrp"],
    additionalCoins: 12
  },
  {
    rank: 4,
    name: "Raze",
    logo: "/raze.webp",
    promotion: "100% Deposit Match + Daily Cashback",
    supportedCoins: ["bitcoin-btc", "solana", "ethereum-eth", "binance-coin-bnb"],
    additionalCoins: 8
  },
  {
    rank: 5,
    name: "Bombastic",
    logo: "/bombastic.webp",
    promotion: "200% First Deposit Bonus + 50 Free Spins",
    supportedCoins: ["bitcoin-btc", "ethereum-eth", "dogecoin-doge", "tether"],
    additionalCoins: 10
  },
  {
    rank: 6,
    name: "Del Oro",
    logo: "/del-oro.webp",
    promotion: "Up to $3,000 Welcome Package + Weekly Cashback",
    supportedCoins: ["bitcoin-btc", "xrp", "tether", "ethereum-eth"],
    additionalCoins: 14
  },
  {
    rank: 7,
    name: "Duelbits",
    logo: "/Duelbits.webp",
    promotion: "VIP Rewards Program + Daily Rakeback",
    supportedCoins: ["bitcoin-btc", "ethereum-eth", "solana"],
    additionalCoins: 7
  },
  {
    rank: 8,
    name: "Kripty",
    logo: "/kripty.webp",
    promotion: "150% Welcome Bonus + 100 Free Spins",
    supportedCoins: ["bitcoin-btc", "dogecoin-doge", "binance-coin-bnb"],
    additionalCoins: 9
  },
  {
    rank: 9,
    name: "Playbet",
    logo: "/playbet.webp",
    promotion: "Up to 2 BTC First Deposit Bonus + Weekly Reload",
    supportedCoins: ["bitcoin-btc", "ethereum-eth", "tether"],
    additionalCoins: 11
  }
] 