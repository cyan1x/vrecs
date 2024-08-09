import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const lowercasePathname = url.pathname.toLowerCase()

  if (url.pathname !== lowercasePathname) {
    url.pathname = lowercasePathname
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}
