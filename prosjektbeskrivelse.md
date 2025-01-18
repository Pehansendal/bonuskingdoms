# BonusKingdoms - Crypto Casino Comparison Platform

## Quick Start
```bash
git clone https://github.com/yourusername/bonuskingdoms.git
npm install
npm run dev
```

## Key Pages & Features
- `/` - Homepage with top 20 rated casinos and quick stats
- `/all-casinos` - Complete casino listing with advanced filtering
- `/best-bonus-offers` - Casinos sorted by bonus percentage
- `/most-free-spins` - Casinos sorted by free spins offers
- `/how-bonuses-work` - Educational guide about casino bonuses

## Core Components
1. **CasinoTable** (`src/components/CasinoTable.tsx`)
   - Main reusable table component
   - Handles sorting, filtering, and expandable details
   - Used across multiple pages with different configurations

2. **Navigation** (`src/components/Navigation.tsx`)
   - Main navigation with responsive mobile menu
   - Links to all major sections

## Data Flow
1. Data source: `src/data/casinos.json`
2. Interface: `src/types/casino.ts`
3. Loading: `src/utils/textLoader.ts`
4. Display: Components consume and render data

## Key Data Structure
```typescript
interface Casino {
  casino_name: string;          // Unique identifier
  website_url: string;          // Casino's website
  bonus_percentage: string;     // e.g., "100%"
  bonus_max_amount_in_euro: string; // e.g., "€500"
  max_bonus_value: string;      // Calculated max value
  free_spins: number;          // Number of free spins
  accepted_crypto: string;      // Comma-separated crypto symbols
  casino_rating: number;        // 1-5 rating
  bonus_type: string;          // Type of bonus offered
  // Paths to content files
  logo_path: string;           // From /public/casino_logos/
  pros_path: string;           // From /public/pros/
  cons_path: string;           // From /public/cons/
  review_path: string;         // From /public/review/
}
```

## Content Organization
```
public/
├── casino_logos/   # Casino logos (webp format)
├── crypto/         # Cryptocurrency icons
├── pros/          # Text files with casino pros
├── cons/          # Text files with casino cons
└── review/        # Detailed casino reviews
```

## Weekly Updates Process
1. Update `public/nyliste_bonus_processed.csv`
2. Run `npx tsx scripts/convertCsvToJson.ts`
3. Verify changes in `src/data/casinos.json`
4. Test and deploy

## Common Development Tasks
1. **Adding a New Casino**
   - Add logo to `/public/casino_logos/`
   - Add content files to respective directories
   - Update `casinos.json`

2. **Modifying Table Display**
   - Edit `CasinoTable.tsx` for layout changes
   - Update sorting/filtering in table component

3. **Content Updates**
   - Text content is in `/public/{pros,cons,review}/`
   - Images follow strict naming conventions

## Style Guide
- Use Tailwind CSS for styling
- Follow BEM-like class naming
- Maintain dark theme consistency
- Use provided animation classes

## Important Notes
- All images must be in WebP format
- File paths are relative to `/public`
- Never construct paths dynamically
- Always backup before weekly updates
- Test thoroughly in development

## Common Issues & Solutions
1. **Missing Images**
   - Check file paths in `casinos.json`
   - Verify WebP format
   - Ensure correct naming convention

2. **Data Updates**
   - Always create backups first
   - Use provided scripts
   - Follow validation steps

3. **Performance**
   - Images are optimized
   - Content is statically generated
   - Animations are optimized for performance

## Testing
- Build locally before deployment
- Verify all casino expansions work
- Check sorting and filtering
- Test responsive design
- Validate all links and images

## Deployment
```bash
npm run build
# Verify build
npm run preview
# If successful, deploy
git push origin main
``` 