import { notFound, redirect } from "next/navigation";
import CompaniesClient from "../CompaniesClient";
import CompaniesListingHeader from "../CompaniesListingHeader";
import CompaniesListingFooter from "../CompaniesListingFooter";
import ListingServiceJsonLd from "../ListingServiceJsonLd";
import { getCategoryBySlug } from "@/app/lib/categoryRoutes";

function stripDefaultRole(params) {
  const rest = new URLSearchParams();
  Object.entries(params || {}).forEach(([key, value]) => {
    if (key === "role" && value === "handyman") return;
    if (value != null && value !== "") {
      rest.set(key, String(value));
    }
  });
  return rest;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};

  return {
    title: `${cat.name} in Pakistan | Ayasirg`,
    description: `Browse verified ${cat.name} professionals on Ayasirg in Pakistan.`,
    alternates: {
      canonical: `https://www.ayasirg.com/compnies/${slug}`,
    },
  };
}

export default async function CategoryCompniesPage({ params, searchParams }) {
  const { slug } = await params;
  const sp = await searchParams;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  if (sp?.role === "handyman") {
    const qs = stripDefaultRole(sp).toString();
    redirect(qs ? `/compnies/${slug}?${qs}` : `/compnies/${slug}`);
  }

  const canonical = `https://www.ayasirg.com/compnies/${slug}`;

  return (
    <section className="individuals margin_navbar">
      <ListingServiceJsonLd
        categorySlug={cat.slug}
        categoryName={cat.name}
        canonicalUrl={canonical}
      />
      <div className="container content py-3">
        <CompaniesListingHeader
          categorySlug={cat.slug}
          categoryName={cat.name}
        />
        <CompaniesListingFooter />
        <CompaniesClient categoryId={String(cat.id)} />
      </div>
    </section>
  );
}
