import { buildServicesItemListSchema, stringifySchema } from "@/app/lib/serviceSchema";
import { compniesListingHref, getServicePagePath } from "@/app/lib/categoryRoutes";

function siteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://www.ayasirg.com"
  );
}

/** Server: compact ItemList for /services (replaces heavy per-category Service @graph). */
export default function ServicesCategoriesJsonLd({ categories }) {
  if (!categories?.length) return null;

  const site = siteUrl();
  const items = categories.map((c) => {
    const name = (c?.name && String(c.name).trim()) || "Service";
    const servicePath = getServicePagePath(c.id);
    const url = servicePath
      ? servicePath
      : compniesListingHref(c.id);
    return { name, url };
  });

  const doc = buildServicesItemListSchema(items, site);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(doc) }}
    />
  );
}
