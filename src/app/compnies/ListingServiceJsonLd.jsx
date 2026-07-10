import ServiceJsonLd from "@/app/components/seo/ServiceJsonLd";
import { getServiceChooseContent } from "@/app/lib/serviceChooseContent";

/** Server JSON-LD for category listing pages (no client context). */
export default function ListingServiceJsonLd({ categorySlug, categoryName, canonicalUrl }) {
  const choose = categorySlug ? getServiceChooseContent(categorySlug) : null;
  const name = categoryName || choose?.highlight || "";
  if (!name) return null;

  const description =
    choose?.metaDescription ||
    `${name} — Browse verified professionals on Aya Sir G! in Pakistan.`;

  return (
    <ServiceJsonLd
      serviceType={name}
      description={description}
      url={canonicalUrl}
    />
  );
}
