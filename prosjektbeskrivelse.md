# BonusKingdoms - Crypto Casino Comparison Platform

## Quick Start
```bash
git clone https://github.com/yourusername/bonuskingdoms.git
npm install
npm run dev
```

## Key Pages & Features
- `/` - Homepage with modern card layout, filtering and expandable reviews
- `/all-casinos` - Complete casino listing with advanced filtering
- `/best-bonus-offers` - Casinos sorted by bonus percentage
- `/most-free-spins` - Casinos sorted by free spins offers
- `/how-bonuses-work` - Educational guide about casino bonuses

## Core Components
1. **CasinoCardList** (`src/components/CasinoCardList.tsx`)
   - Modern card-based layout for homepage
   - Interactive filtering with animated buttons and gradients
   - Custom cryptocurrency dropdown with improved z-indexing
   - Expandable detailed reviews
   - Responsive design with glass-morphism effects
   - Sticky filter section with backdrop blur

2. **CasinoSearch** (`src/components/CasinoSearch.tsx`)
   - Instant search with dropdown results
   - Real-time filtering of casinos
   - Optimized z-index handling
   - Responsive design for mobile and desktop
   - Preview cards with casino logos and bonus info

3. **Header** (`src/components/Header.tsx`)
   - Sticky navigation with glass effect
   - Integrated search component
   - Responsive mobile menu
   - Optimized for all screen sizes

4. **CasinoTable** (`src/components/CasinoTable.tsx`)
   - Traditional table component
   - Handles sorting, filtering, and expandable details
   - Used in all-casinos and other listing pages

5. **Navigation** (`src/components/Navigation.tsx`)
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

## Homepage Features
1. **Quick Filtering**
   - "Best Bonuses" button - Sorts by bonus percentage
   - "Most Free Spins" button - Sorts by number of free spins
   - Cryptocurrency dropdown with icons

2. **Casino Cards**
   - Ranking display (#1, #2, etc.)
   - Casino logo and name
   - Bonus information
   - Supported cryptocurrencies with icons
   - "GO TO SITE" and "READ REVIEW" actions

3. **Expandable Reviews**
   - Detailed casino information
   - Pros and Cons in grid layout
   - Full review with formatted headings
   - Consistent styling with main theme

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

2. **Modifying Components**
   - Edit `CasinoCardList.tsx` for homepage layout
   - Edit `CasinoTable.tsx` for table layout
   - Update sorting/filtering in respective components

3. **Content Updates**
   - Text content is in `/public/{pros,cons,review}/`
   - Images follow strict naming conventions

## Style Guide
- Use Tailwind CSS for styling
- Follow BEM-like class naming
- Maintain dark theme consistency
- Use provided animation classes
- Use gradients for active/inactive states
- Glass-morphism effects with backdrop-blur
- Proper z-index layering for components
- Consistent spacing in card layouts

## Performance
- Optimized z-index hierarchy
- Proper component layering
- Efficient dropdown handling
- Responsive search functionality
- Smooth animations and transitions

## Important Notes
- All images must be in WebP format
- File paths are relative to `/public`
- Never construct paths dynamically
- Always backup before weekly updates
- Test thoroughly in development
- Ensure proper git configuration for deployment

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
   - Dropdown menus use proper z-indexing

## Testing
- Build locally before deployment
- Verify all casino expansions work
- Check sorting and filtering
- Test responsive design
- Validate all links and images
- Test cryptocurrency filtering
- Verify card animations

## Deployment
```bash
npm run build
# Verify build
npm run preview
# If successful, deploy
git push origin main
``` 