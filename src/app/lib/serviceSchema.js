const ORG = "Aya Sir G!";
export const ORGANIZATION_ID = "https://www.ayasirg.com/#organization";

const defaultProvider = () => ({
  "@type": "LocalBusiness",
  "@id": ORGANIZATION_ID,
  name: ORG,
  url: "https://www.ayasirg.com",
  image: "https://www.ayasirg.com/logo_header.png",
  telephone: "+92-309-8574093",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
});

/** Compact provider reference (no duplicated address block). */
export function providerReference() {
  return { "@id": ORGANIZATION_ID };
}

/**
 * Service entity only (for single-page JSON-LD).
 * @param {{ serviceType: string; description?: string; url?: string }} p
 */
export function buildServiceEntity({ serviceType, description, url }) {
  const name = (serviceType && String(serviceType).trim()) || "Professional services";
  const desc =
    (description && String(description).trim()) ||
    `${name} — Find trusted professionals on ${ORG} in Pakistan.`;
  return {
    "@type": "Service",
    serviceType: name,
    provider: providerReference(),
    description: desc.slice(0, 320),
    ...(url ? { url: String(url) } : {}),
  };
}

/** Full Service document with @context (single page). */
export function buildServiceStructuredData({ serviceType, description, url }) {
  return {
    "@context": "https://schema.org",
    ...buildServiceEntity({ serviceType, description, url }),
  };
}

/** Lightweight ItemList for /services hub (avoids 30+ nested Service graphs). */
export function buildServicesItemListSchema(items, siteOrigin) {
  const site = siteOrigin.replace(/\/+$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Aya Sir G! Service Categories",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : `${site}${item.url}`,
    })),
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    ...defaultProvider(),
  };
}

export function stringifySchema(obj) {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}
