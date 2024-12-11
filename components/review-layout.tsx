"use client"

import { motion } from 'framer-motion'
import { CasinoCard } from './casino-card'
import { Review, Casino } from '@/lib/types'
import Head from 'next/head'

interface ReviewLayoutProps {
  review: Review
  children: React.ReactNode
}

export function ReviewLayout({ review, children }: ReviewLayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "name": review.title,
    "author": {
      "@type": "Person",
      "name": review.metadata.author
    },
    "datePublished": review.metadata.lastModified,
    "reviewBody": review.content,
    "itemReviewed": {
      "@type": "Game",
      "name": review.casino.name
    }
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {review.title}
          </h1>
          
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <time dateTime={review.metadata.lastModified}>
              {new Date(review.metadata.lastModified).toLocaleDateString('nb-NO')}
            </time>
            <span>•</span>
            <span>{review.metadata.author}</span>
          </div>

          {children}
        </motion.div>

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-white">
            Andre Anbefalte Casinoer
          </h2>
          <div className="space-y-4">
            {review.casino.relatedCasinos?.map((casino: Casino) => (
              <CasinoCard key={casino.name} {...casino} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
} 