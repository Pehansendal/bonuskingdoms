# Bonuskingdoms - Crypto Casino Review Platform

## Prosjektoversikt
Bonuskingdoms er en nettside for anmeldelser av kryptovaluta-kasinoer. Plattformen gir detaljerte vurderinger og sammenligninger av ulike crypto-kasinoer, med fokus på sikkerhet, brukervennlighet og bonustilbud.

## Teknisk Stack
- **Framework**: Next.js 14 med App Router
- **Språk**: TypeScript
- **Styling**: Tailwind CSS
- **UI Komponenter**: shadcn/ui
- **Animasjoner**: Framer Motion
- **Bilder**: Next.js Image komponenter for optimalisert bildehåndtering
- **Data**: Statisk genererte sider med JSON-data

## Prosjektstruktur

bonuskingdoms/
├── app/
│ ├── page.tsx # Hovedsiden med tilfeldig utvalgte kasinoer
│ └── cryptocasinos/
│ └── [slug]/
│ └── page.tsx # Dynamiske casino-anmeldelsessider
├── components/
│ ├── ui/ # shadcn/ui komponenter
│ ├── casino-card.tsx # Kortvisning av casino i listen
│ └── error-boundary.tsx # Feilhåndtering
├── lib/
│ └── types.ts # TypeScript-definisjoner
├── public/
│ ├── data/
│ │ └── reviews/ # JSON-filer med casino-anmeldelser
│ └── images/
│ └── casinos/ # Casino-logoer (.png format)
└── utils/
└── getCasinoData.ts # Data-henting funksjoner


## Datastruktur
Casino-dataene følger en definert TypeScript-interface som inkluderer:
- Grunnleggende info (navn, oppdateringsdato)
- Trust Indicators (lisens, spill, utbetalingstid)
- Vurderingstekst og rating
- Key Facts
- Sikkerhetsinformasjon
- Spillutvalg
- Bonusinformasjon
- Fordeler og ulemper
- FAQ

## Hovedfunksjonalitet

### Hovedside (/)
- Viser 10 tilfeldig utvalgte kasinoer
- Responsivt kortdesign med:
  - Rangering
  - Logo
  - Navn
  - Promotering
  - Utfoldbar anmeldelse
- Animerte kort med IntersectionObserver

### Detaljvisning (/cryptocasinos/[slug])
- Detaljert anmeldelse av hvert casino
- Forbedret logo-visning med:
  - Optimalisert størrelse
  - Sirkulær ramme
  - Gradient bakgrunn
- Fordeler/ulemper med fargekodet design
- Trust Indicators
- Omfattende casino-informasjon

## Design
- Mørkt tema med #070a0f som hovedbakgrunnsfarge
- Accent-farger:
  - Grønn/rød for fordeler/ulemper
  - Gradient bakgrunner
  - Mørkere paneler (#1a1f2d)
- Responsivt design
- Forbedrede hover-effekter og animasjoner

## Spesielle Funksjoner
1. Tilfeldig casino-utvalg på hovedsiden
2. Optimalisert bildehåndtering med Next.js Image
3. Forbedret error handling
4. Animerte UI-komponenter med Framer Motion
5. Type-sikker databehandling

## Fremtidige Utvidelser
- Filtreringssystem for kasinoer
- Søkefunksjonalitet
- Sorteringsmuligheter
- Flere språkversjoner
- Kampanjeside

## Vedlikehold
- Casino-data oppdateres via JSON-filer
- Bilder lagres som .png i casinos-mappen
- Konsistent navnekonvensjon for filer
- TypeScript-interfaces oppdateres ved behov

## Filnavnkonvensjoner
### Casino Reviews
Casino-anmeldelser støtter nå to filnavnformater:
- Standard format: `slugname.json`
- Alternativt format: `Casino Name.json`

Systemet vil automatisk prøve begge formater ved filsøk.

## Databehandling
### Trust Indicators
Trust Indicators følger nå et standardisert format:

Dette dokumentet oppdateres kontinuerlig ved endringer i prosjektet.

typescript
interface TrustIndicator {
text: string;
color: string;
}

Alle indikatorer konverteres automatisk til dette formatet ved datahenting.

## Feilhåndtering
- Forbedret feilhåndtering for manglende casino-filer
- Graceful fallback ved filnavnmismatch
- Konsistent logging av filsøkfeil

