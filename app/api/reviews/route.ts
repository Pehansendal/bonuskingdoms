import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/data/reviews.json`)
    
    if (!response.ok) {
      return new NextResponse(null, { status: 500 })
    }

    const reviews = await response.json()
    return NextResponse.json(reviews)
  } catch (error) {
    console.error('Error loading reviews:', error)
    return new NextResponse(null, { status: 500 })
  }
} 