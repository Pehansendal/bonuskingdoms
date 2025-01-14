import { NextResponse } from 'next/server';

interface CloudflareResponse {
  success: boolean;
  errors: string[];
  messages: string[];
  result: any;
}

export async function POST() {
  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/${process.env.NEXT_PUBLIC_PROJECT_NAME}/deployments`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json() as CloudflareResponse;

    if (!data.success) {
      throw new Error('Failed to trigger deployment');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Rebuild error:', error);
    return NextResponse.json(
      { error: 'Failed to trigger rebuild' },
      { status: 500 }
    );
  }
} 