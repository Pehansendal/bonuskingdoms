# BonusKingdoms - Crypto Casino Comparison Platform

## Project Overview
BonusKingdoms is a modern web application built with Next.js that helps users find and compare crypto-friendly online casinos. The platform provides detailed information about casino bonuses, accepted cryptocurrencies, and user ratings.

## Core Features
- Comprehensive casino comparison table
- Detailed casino information including pros, cons, and reviews
- Cryptocurrency support visualization with custom icons
- Responsive design for all devices
- Interactive expandable casino details

## Technical Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel
- **Asset Handling**: Static assets served from /public directory

## Project Structure
```
bonuskingdoms/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Homepage
│   │   ├── all-casinos/
│   │   │   └── page.tsx            # Casino comparison page
│   │   └── about/
│   │       └── page.tsx            # About page
│   ├── components/
│   │   ├── Navigation.tsx          # Top navigation bar
│   │   └── CasinoTable.tsx         # Main casino comparison table
│   ├── types/
│   │   └── casino.ts               # TypeScript interfaces
│   └── utils/
│       └── textLoader.ts           # Content loading utility
├── public/
│   ├── casino_logos/              # Casino logo images
│   ├── crypto/                    # Cryptocurrency icons
│   ├── pros/                      # Casino pros text files
│   ├── cons/                      # Casino cons text files
│   └── review/                    # Casino review text files
└── data/
    └── casinos.json              # Main casino data
```

## Data Structure
Casino data is stored in `casinos.json` with the following structure:
```typescript
interface Casino {
  casino_name: string;
  logo_path: string;
  bonus_percentage: string;
  bonus_max_amount_in_euro: string;
  max_bonus_value: string;
  free_spins: number;
  accepted_crypto: string;
  casino_rating: number;
  pros_path: string;
  cons_path: string;
  review_path: string;
  website_url: string;
}
```

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bonuskingdoms.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up cryptocurrency icons:
   ```bash
   npm install cryptocurrency-icons
   npx tsx scripts/setupCryptoIcons.ts
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Content Management
- Casino data is managed through the `casinos.json` file
- Pros, cons, and reviews are stored as text files in their respective directories
- Images (logos, icons) are stored in the public directory

## Future Development Plans
- Implementation of filtering and sorting functionality
- Advanced search capabilities
- User authentication system
- Admin interface for content management
- SEO optimization
- Performance monitoring and optimization

## Contributing
1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details. 