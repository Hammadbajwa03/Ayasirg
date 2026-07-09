import { notFound, redirect } from "next/navigation";
import CompaniesClient from "../CompaniesClient";
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

  return (
    <CompaniesClient
      categoryId={String(cat.id)}
      categoryName={cat.name}
      categorySlug={cat.slug}
    />
  );
}
