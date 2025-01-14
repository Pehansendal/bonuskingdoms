# Bonus Kingdoms - Casino Affiliate Platform

## Prosjektoversikt
Bonus Kingdoms er en casino affiliate-plattform som lar administratorer håndtere og presentere casino-tilbud. Plattformen er bygget med Next.js, Supabase og Tailwind CSS.

## Teknisk Stack
- **Frontend**: Next.js 14.1.0
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Autentisering**: Supabase Auth
- **Hosting**: Vercel/Cloudflare Pages

## Databasestruktur
### Casinos Tabell
sql
create table casinos (
id text primary key,
name text not null,
logo text not null,
bonus text not null,
short_description text not null,
affiliate_link text not null,
features text[] not null,
position integer not null,
terms text not null,
rating numeric not null
);

## Hovedfunksjoner

### 1. Offentlig Visning
- Responsiv landing page med casino-kort
- Sorterte casino-tilbud basert på posisjon
- Klikkbare logoer og "Claim Bonus" knapper som leder til affiliate-lenker

### 2. Admin Panel
- Sikker innlogging for administratorer
- CRUD-operasjoner for casino-oppføringer
- Drag-and-drop funksjonalitet for å endre rekkefølge
- Bildevisning og validering

## Prosjektstruktur

bonuskingdoms/
├── src/
│ ├── app/
│ │ ├── page.tsx (Hovedside)
│ │ └── admin/
│ │ └── page.tsx (Admin panel)
│ ├── components/
│ │ ├── AffiliateCard.tsx
│ │ ├── Login.tsx
│ │ └── NavBar.tsx
│ ├── types/
│ │ └── affiliate.ts
│ └── utils/
│ └── supabase.ts
├── public/
│ └── casinos/ (Casino logoer)
└── .env.local (Miljøvariabler)
## Miljøvariabler
env
NEXT_PUBLIC_SUPABASE_URL=https://[prosjekt-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[din-anon-key]


## Kom i Gang
1. Klon repositoriet
2. Installer avhengigheter:
   ```bash
   npm install
   ```
3. Opprett `.env.local` med nødvendige miljøvariabler
4. Start utviklingsserver:
   ```bash
   npm run dev
   ```

## Admin Tilgang
1. Opprett admin bruker i Supabase:
   - Gå til Authentication → Users
   - Add User
   - Sett email og passord

## Deployment
1. Push til GitHub
2. Koble til Vercel/Cloudflare
3. Sett miljøvariabler i hosting-plattformen

## Nøkkelfunksjoner å Implementere
1. Bildeopplasting direkte i admin panel
2. Bedre feilhåndtering og validering
3. Admin brukerbehandling
4. Backup-system for database

## Sikkerhet
- Admin-tilgang er beskyttet med Supabase Auth
- Alle database-operasjoner krever autentisering
- RLS (Row Level Security) er implementert i Supabase

## Vedlikehold
- Regelmessig backup av database
- Oppdatering av avhengigheter
- Overvåking av affiliate-lenker

## Kontakt
For tilgang eller spørsmål, kontakt prosjektadministrator.