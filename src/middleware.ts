import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export const config = {
  matcher: ["/login/:path*", "/signup/:path*", "/my-account/:path*"],
};

export function middleware(request: NextRequest) {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;
  const pathname = request.nextUrl.pathname;
  if (
    (pathname.startsWith("/login") || pathname.startsWith("/signup")) &&
    accessToken
  ) {
    return NextResponse.redirect(new URL("/store", request.url));
  }

  if (pathname.startsWith("/my-account") && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
