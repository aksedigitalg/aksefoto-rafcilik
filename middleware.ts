import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

/**
 * Root middleware: Supabase auth session refresh + /c1907d/* gate.
 * Static asset'ler ve _next/* bypass edilir (matcher).
 */
export async function middleware(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: [
    // _next/static, _next/image, favicon, og images, robots, sitemap, public asset'ler haric
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|sitemap-0.xml|images/|og/|icon-|logo).*)",
  ],
};
