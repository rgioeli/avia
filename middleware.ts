import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const session = req.cookies.get("next-auth.session-token");

  // If we have a session and are at the homepage, send user to the dashboard
  if (req.nextUrl.pathname === "/" && session) {
    return NextResponse.redirect(req.nextUrl.origin + "/dashboard");
  }

  if (req.nextUrl.pathname === "/api/auth/signin") {
    if (session) return NextResponse.redirect(req.nextUrl.origin);
  }

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!session)
      return NextResponse.redirect(req.nextUrl.origin + "/api/auth/signin");
  }
}
