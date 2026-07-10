import React from "react";
import { ORGANIZATION_ID, stringifySchema } from "@/app/lib/serviceSchema";

/** Compact homepage JSON-LD — FAQ omitted (visible on page); org referenced by @id. */
export default function HomeJsonLd() {
  const doc = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Aya Sir G!",
        url: "https://www.ayasirg.com",
        publisher: { "@id": ORGANIZATION_ID },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.ayasirg.com/compnies?category_id={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Service",
        name: "Blue Collar Jobs & Home Services",
        serviceType: "Blue Collar Jobs & Home Services",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: ["Lahore", "Karachi", "Islamabad"],
        url: "https://www.ayasirg.com/services",
      },
    ],
  };

  return (
    <script
      id="jsonld-home"
      suppressHydrationWarning
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(doc) }}
    />
  );
}
