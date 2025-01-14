import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Sjekk om brukeren prøver å aksessere admin-siden
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Sjekk om brukeren er logget inn
    const isLoggedIn = request.cookies.get('isLoggedIn');
    
    if (!isLoggedIn) {
      // Hvis ikke logget inn, redirect til login
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}; 