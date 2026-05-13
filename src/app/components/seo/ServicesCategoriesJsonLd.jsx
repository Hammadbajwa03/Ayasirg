import {
  buildServiceEntity,
  stringifySchema,
} from "@/app/lib/serviceSchema";

function siteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://ayasirg.com"
  );
}

/** Server: one `@graph` of `Service` for each category on /services */
export default function ServicesCategoriesJsonLd({ categories }) {
  if (!categories?.length) return null;
  const site = siteUrl();
  const graph = categories.map((c) => {
    const name = (c?.name && String(c.name).trim()) || "Service";
    const rawDesc =
      (typeof c?.description === "string" && c.description.trim()) ||
      (typeof c?.meta_description === "string" && c.meta_description.trim()) ||
      "";
    const description =
      rawDesc ||
      `${name} services on Aya Sir G! — verified professionals in Pakistan.`;
    const url = `${site}/compnies?role=handyman&category_id=${encodeURIComponent(c.id)}`;
    return buildServiceEntity({
      serviceType: name,
      description,
      url,
    });
  });

  const doc = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(doc) }}
    />
  );
}
