import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'edge'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'data', 'reviews.json')
    const fileContent = await readFile(filePath, 'utf-8')
    const reviews = JSON.parse(fileContent)
    
    return NextResponse.json(reviews)
  } catch (error) {
    console.error('Error loading reviews:', error)
    return new NextResponse(null, { status: 500 })
  }
} 