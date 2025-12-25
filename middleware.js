import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req });
  const pathname = req.nextUrl.pathname;

  // Allow internal & auth routes
  if (pathname.startsWith("/api/auth")) return NextResponse.next();
  if (["/api/login", "/api/register"].includes(pathname))
    return NextResponse.next();

  // Allow public GET /api/doctors without token
  if (
    req.method === "GET" &&
    (pathname === "/api/doctors" ||
      pathname.startsWith("/api/doctors/"))
  ) {
    return NextResponse.next();
  }

  // Protected API
  if (!token) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }
  const response = NextResponse.next({
    request: {
      headers: new Headers(req.headers),
    },
  });

  response.headers.set("role", token.role);

  return response;
}

export const config = {
  matcher: ["/api/:path*"],
};
