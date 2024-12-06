import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bonus Kingdoms',
  description: 'Find the best casino bonuses',
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

