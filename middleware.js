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
    "default-src 'self' https://admin.ayasirg.com",
    "img-src 'self' https://admin.ayasirg.com https: data:",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://admin.ayasirg.com/_next/static", 
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net https://admin.ayasirg.com/_next/static",
    "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net",
    "connect-src 'self' https://admin.ayasirg.com", // allow API calls
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
