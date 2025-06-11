// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Redirect only the root path "/"
  if (pathname === '/') {
    const redirectUrl = new URL(`/directory-listing${search}`, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  // Allow all other paths
  return NextResponse.next();
}
