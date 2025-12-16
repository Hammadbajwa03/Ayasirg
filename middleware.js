import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  // 🔐 Security headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set(
    "Referrer-Policy",
    "strict-origin-when-cross-origin"
  );

  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "img-src 'self' https: data:",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // 🔹 allow inline & eval scripts
      "style-src 'self' 'unsafe-inline' https:", // 🔹 allow external styles
      "object-src 'none'",
      "base-uri 'self'",
      "frame-ancestors 'none'",
    ].join("; ")
  );

  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  response.headers.set("X-DNS-Prefetch-Control", "off");

  return response;
}
