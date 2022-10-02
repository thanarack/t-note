/* eslint-disable @next/next/no-server-import-in-page */
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // const response = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  console.log('Current path:', pathname);

  const isAuth = req.cookies.get('note-user-auth');
  if (isAuth === 'false') {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

// MIddleware will run follow this path
export const config = {
  matcher: ['/', '/note/:path*', '/new-note'],
};
