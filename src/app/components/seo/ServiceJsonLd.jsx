import { buildServiceStructuredData, stringifySchema } from "@/app/lib/serviceSchema";

/** Single `Service` JSON-LD (works in server or client trees). */
export default function ServiceJsonLd({ serviceType, description, url }) {
  if (!serviceType?.trim()) return null;
  const data = buildServiceStructuredData({
    serviceType,
    description,
    url,
  });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(data) }}
    />
  );
}
