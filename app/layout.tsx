import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dinside.no'),
  title: {
    default: 'Crypto Casino Guide | Best Crypto Gambling Sites',
    template: '%s | Crypto Casino Guide'
  },
  description: 'Find the best crypto casinos with our comprehensive reviews and comparisons. Expert analysis of bonuses, games, and payment methods.',
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://dinside.no',
    siteName: 'Crypto Casino Guide',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Crypto Casino Guide'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#070a0f]`}>
        <div className="flex flex-col lg:flex-row min-h-screen">
          <Sidebar />
          <main className="flex-1 bg-[#070a0f] pt-20 lg:pt-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

