import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BonusKingdoms - Find the best casino bonuses',
  description: 'Discover the best crypto casino bonuses and reviews',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full bg-gray-900 text-gray-100`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
