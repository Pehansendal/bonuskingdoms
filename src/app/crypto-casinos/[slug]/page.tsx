import { getCasinoBySlug, getRelatedCasinos } from '@/utils/casinoUtils';
import { CasinoReview } from '@/components/CasinoReview';
import { RelatedCasinos } from '@/components/RelatedCasinos';
import type { Metadata } from 'next';
import casinosData from '@/data/casinos.json';

// Spesifiser edge runtime
export const runtime = 'edge';

interface CasinoPageProps {
  params: {
    slug: string;
  };
}

// Generer statiske paths for alle casinoer
export async function generateStaticParams() {
  return casinosData.map((casino) => ({
    slug: casino.casino_name.toLowerCase()
      .replace(/ casino/g, '')
      .replace(/[^a-z0-9]/g, '')
      .trim()
  }));
}

// Generer metadata for hver casino-side
export async function generateMetadata({ params }: CasinoPageProps): Promise<Metadata> {
  const casino = await getCasinoBySlug(params.slug);
  
  return {
    title: `${casino.casino_name} Review 2024 | Crypto Casino Guide`,
    description: `Detailed review of ${casino.casino_name}. Bonus: ${casino.bonus_percentage} up to ${casino.bonus_max_amount_in_euro}. Supported cryptocurrencies and complete analysis.`,
    openGraph: {
      title: `${casino.casino_name} Review - Crypto Casino`,
      description: `Explore ${casino.casino_name}'s bonus offers, supported cryptocurrencies, and expert analysis.`,
      images: [{ url: casino.logo_path }],
    }
  };
}

export default async function CasinoPage({ params }: CasinoPageProps) {
  const casino = await getCasinoBySlug(params.slug);
  const relatedCasinos = await getRelatedCasinos(casino);

  return (
    <main className="container mx-auto px-4 py-8">
      <CasinoReview casino={casino} />
      <RelatedCasinos casinos={relatedCasinos} />
    </main>
  );
} 