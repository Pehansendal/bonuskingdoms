import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(new URL(`/data/reviews/${params.slug}.json`, baseUrl))
    
    if (!response.ok) {
      return new NextResponse(null, { status: 404 })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error(`Error loading casino data for ${params.slug}:`, error)
    return new NextResponse(null, { status: 404 })
  }
} 