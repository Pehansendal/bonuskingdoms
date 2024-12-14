# Bonuskingdoms - Casino Review Platform

## Project Overview
Bonuskingdoms is a static website for casino reviews. The platform provides detailed evaluations and comparisons of various online casinos, focusing on security, user experience, and bonus offers. All pages are statically generated at build time for optimal performance and SEO.

## Technical Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Build Process**: Static page generation
- **Images**: Next.js Image components for optimized image handling
- **Data**: JSON-based static content

## Project Structure
```
bonuskingdoms/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with sidebar
│   ├── globals.css                 # Global styles
│   ├── casino-reviews/            # Static casino review pages
│   │   └── [casinoname]/
│   │       └── page.tsx
│   ├── example-review/            # Template for new reviews
│   ├── gambling-addiction/        # Information page
│   ├── responsible-gaming/        # Information page
│   ├── privacy-policy/           # Legal page
│   ├── terms/                    # Legal page
│   └── self-exclusion/          # Information page
├── components/
│   ├── ui/                       # shadcn/ui components
│   └── sidebar.tsx              # Navigation sidebar
├── public/
│   ├── data/
│   │   └── reviews/            # Casino review JSON files
│   └── images/
│       └── casinos/           # Casino logos (.png format)
└── scripts/
    └── generateStaticPages.ts  # Static page generator
```

## Data Structure
Each casino review is stored as a JSON file in `public/data/reviews/` with the following structure:

```typescript
interface CasinoData {
  name: string;
  lastUpdated: string;
  trustIndicators?: {
    text: string;
    color: string;
  }[];
  verdict?: {
    text: string;
    rating: string;
  };
  keyFacts?: {
    icon: string;
    label: string;
    value: string;
  }[];
  security?: {
    title: string;
    description: string;
    features: string[];
  };
  games?: {
    slots: {
      total: string;
      popular: (string | { name: string; rtp?: string })[];
    };
    tableGames: {
      total: string;
      popular: (string | { name: string; rtp?: string })[];
    };
  };
  bonuses?: {
    type: string;
    amount: string;
    wagering: string;
  }[];
  advantages?: string[];
  disadvantages?: string[];
  faq?: {
    question: string;
    answer: string;
  }[];
}
```

## Workflow for Adding New Casinos

### 1. Prepare Assets
1. Add casino logo to: `public/images/casinos/[casinoname]casino.png`
   - Format: PNG
   - Recommended size: 200x200px
   - Naming convention: lowercase, no spaces

2. Create JSON file: `public/data/reviews/[casinoname]casino.json`
   - Use template from example-review
   - Follow TypeScript interface structure
   - Ensure all required fields are filled

### 2. Generate Static Pages
```bash
# From project root
npm run generate-pages
```
This will:
- Read all JSON files from reviews directory
- Generate static pages in casino-reviews/
- Update sidebar navigation

### 3. Verify Changes
```bash
npm run dev
```
Check:
- New casino page at: `/casino-reviews/[casinoname]casino`
- Sidebar navigation includes new casino
- Homepage displays casino correctly
- All images load properly

### 4. Deploy
```bash
git add .
git commit -m "Add new casino: [casinoname]"
git push
```

## Design Guidelines
- Dark theme with #070a0f as main background
- Trust indicators use consistent colors:
  - Green: Security/Safety
  - Blue: Features/Games
  - Purple: Support/Service
- All casino logos should be consistent in size and format
- Maintain responsive design across all pages

## SEO Optimization
- Each casino page includes:
  - Unique meta description
  - Proper heading hierarchy
  - Alt text for images
  - Structured data for casino reviews
- All content is pre-rendered statically
- Proper sitemap and robots.txt configuration

## Maintenance
- Regular updates to casino information via JSON files
- Keep casino logos up to date
- Monitor and update security information
- Regular checks of bonus terms and conditions
- Update lastUpdated field when making changes

## Error Handling
- Fallback images for missing casino logos
- Default values for optional JSON fields
- Proper error boundaries in components
- Logging during static generation

## Performance Considerations
- All pages are statically generated
- Images are optimized at build time
- No client-side data fetching
- Minimal JavaScript usage
- Efficient CSS with Tailwind

## Future Improvements
- Advanced filtering system
- Search functionality
- More language versions
- Comparison feature
- User reviews integration
- Rating aggregation

## Development Guidelines
- Follow TypeScript strict mode
- Maintain consistent code formatting
- Document complex functions
- Keep components modular
- Regular dependency updates
