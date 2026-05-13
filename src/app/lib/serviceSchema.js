const ORG = "Aya Sir G!";

const defaultProvider = () => ({
  "@type": "LocalBusiness",
  name: ORG,
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pakistan",
      addressCountry: "PK",
    },
  },
});

/**
 * Service entity only (for @graph items — no @context).
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
    provider: defaultProvider(),
    description: desc.slice(0, 5000),
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

export function stringifySchema(obj) {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}
