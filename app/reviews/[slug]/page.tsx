import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ReviewLayout } from '@/components/review-layout'
import { loadReview } from '@/lib/review-loader'

interface ReviewPageProps {
  params: {
    slug: string
  }
}

async function getReviewContent(slug: string) {
  const review = await loadReview(slug)
  return review
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const review = await getReviewContent(params.slug)
  if (!review) return {}

  return {
    title: review.title,
    description: review.metadata.description,
    openGraph: {
      title: review.title,
      description: review.metadata.description,
      type: 'article',
    }
  }
}

export const runtime = 'edge'

export default async function ReviewPage({ params }: ReviewPageProps) {
  const review = await getReviewContent(params.slug)
  if (!review) notFound()

  return (
    <ReviewLayout review={review}>
      <article 
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: review.content }}
      />
    </ReviewLayout>
  )
} 