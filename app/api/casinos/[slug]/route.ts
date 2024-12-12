import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    // Oppdatert sti til å peke mot public/data mappen
    const casinoData = await import(`@/public/data/${params.slug}.json`)
    
    if (!casinoData) {
      return new NextResponse(null, { status: 404 })
    }

    return NextResponse.json(casinoData.default)
  } catch (error) {
    console.error(`Error loading casino data for ${params.slug}:`, error)
    return new NextResponse(null, { status: 404 })
  }
} 