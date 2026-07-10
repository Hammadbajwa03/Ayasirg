/** Backend origin for server-side fetches and Next.js rewrites. */
export function getServerApiBase() {
  return (
    process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, "") ||
    "https://admin.ayasirg.com"
  );
}

/**
 * API base URL for fetch/axios calls.
 * In the browser, use same-origin `/api/*` (proxied in next.config) to avoid CORS.
 */
export function getApiBase() {
  if (typeof window !== "undefined") {
    return "";
  }
  return getServerApiBase();
}
