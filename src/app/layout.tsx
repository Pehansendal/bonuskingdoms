import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BonusKingdoms',
  description: 'Find the best casino bonuses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-gray-950 text-gray-100 h-full`}>
        <div className="min-h-full">
          <Navigation />
          <main className="py-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
