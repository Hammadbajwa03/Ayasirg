const SITE_ORIGIN = "https://www.ayasirg.com";

/** Absolute canonical URL for a pathname, e.g. `/services` → `https://www.ayasirg.com/services` */
export function canonicalUrl(pathname) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_ORIGIN}${path}`;
}

export { SITE_ORIGIN };
