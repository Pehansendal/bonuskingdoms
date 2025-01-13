Bonus Kingdoms - Prosjektbeskrivelse
Teknisk Stack
Next.js 14.1.0
TypeScript
Tailwind CSS
Cloudflare Pages
React 18
Cloudflare-spesifikke Detaljer
Konfigurasjon
Bruker @cloudflare/next-on-pages for statisk generering
next.config.js er konfigurert med output: 'export' og images.unoptimized: true
Spesielle script i package.json:

     "pages:build": "npx @cloudflare/next-on-pages@1",
     "preview": "npm run pages:build && wrangler pages dev .vercel/output/static"

     Development Workflow
Lokal utvikling: npm run preview
Bygger statiske sider med Cloudflare's verktøy
Krever wrangler for lokal testing
Prosjektstruktur

src/
├── app/
│   ├── page.tsx                 # Hovedside med featured casinos
│   ├── all-casinos/
│   │   └── page.tsx            # Side som viser alle casinoer
│   ├── layout.tsx              # Root layout med Sidebar
│   ├── globals.css             # Global CSS og Tailwind
│   └── not-found.tsx           # 404 side
├── components/
│   ├── Sidebar.tsx             # Navigasjonsmeny
│   └── CasinoCard.tsx          # Gjenbrukbar casino-kortkomponent
├── types/
│   └── casino.ts               # TypeScript interfaces
└── utils/
    └── getCasinos.ts           # Data-henting funksjon

    Data Håndtering
Casino-data lagres som JSON-filer i public/reviews/
Hvert casino har en tilhørende PNG-logo i public/casinos/
Data transformeres fra raw JSON til Casino interface via getCasinos()
Hovedfunksjonalitet
Featured Casinos (Hovedside)
Viser utvalgte casinoer
Bruker CasinoCard for presentasjon
All Casinos
Lister alle tilgjengelige casinoer
Statisk generert med force-static
Viser antall casinoer i header
Sidebar Navigasjon
Fast sidebar med logo
Lenker til hovedsiden og all-casinos

Type Definisjoner
interface Casino {
  id: string;
  name: string;
  rating: number;
  welcome_bonus: string;
  description?: string;
  short_description?: string;
  pros: string[];
  cons: string[];
  logo: string;
}

Styling
Bruker Tailwind CSS med dark mode
Custom gradient bakgrunn
Glassmorphism effekter med backdrop-blur
Responsive design med mobile-first tilnærming
Viktige Kommandoer

# Installasjon
npm install
npm install @cloudflare/next-on-pages

# Development
npm run preview    # Starter Cloudflare Pages development server

# Build
npm run pages:build    # Bygger for Cloudflare Pages

Spesielle Hensyn
Bilder
Må være unoptimized pga Cloudflare Pages
Logoer må følge navnekonvensjon: lowercase, .png
Statisk Generering
Alle sider må være statisk genererte
Bruker force-static for konsistent oppførsel
3. Data Validering
Grundig validering i getCasinos()
Fallback-verdier for manglende data
Neste Steg
Implementere casino-detaljsider
Legge til sortering/filtrering
Forbedre error handling
Implementere søkefunksjonalitet
Dette prosjektet er optimalisert for Cloudflare Pages og følger best practices for statisk generering og type-sikkerhet.