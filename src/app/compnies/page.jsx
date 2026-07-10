import React from "react";
import { redirect } from "next/navigation";
import CompaniesClient from "./CompaniesClient";
import CompaniesListingHeader from "./CompaniesListingHeader";
import CompaniesListingFooter from "./CompaniesListingFooter";
import { getCategoryById } from "@/app/lib/categoryRoutes";

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

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const categoryId = params?.category_id;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://admin.ayasirg.com";

  try {
    const res = await fetch(`${baseUrl}/api/category-list`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch category list");
    const data = await res.json();
    const categories = data.data || [];

    if (categoryId) {
      const known = getCategoryById(categoryId);
      const cat = known || categories.find((c) => String(c?.id) === String(categoryId));
      if (cat) {
        const name = String(known?.name || cat.name).trim();
        const slug = known?.slug;
        const plainDesc = cat.description
          ? cat.description.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160)
          : "";
        return {
          title: `${name} in Pakistan | Ayasirg`,
          description: plainDesc || `${name} — Browse verified professionals on Ayasirg in Pakistan.`,
          alternates: {
            canonical: slug
              ? `https://www.ayasirg.com/compnies/${slug}`
              : `https://www.ayasirg.com/compnies?category_id=${categoryId}`,
          },
        };
      }
    }
  } catch (error) {
    console.error("Error generating metadata for companies list:", error);
  }

  return {
    title: "Find Verified Companies & Workers Online | Ayasirg",
    description:
      "Browse our complete directory of verified companies and local workers. Connect with top-rated professionals for your needs today through Ayasirg.",
    alternates: {
      canonical: "https://www.ayasirg.com/compnies",
    },
  };
}

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const categoryId = params?.category_id;

  if (categoryId) {
    const cat = getCategoryById(categoryId);
    if (cat) {
      const rest = stripDefaultRole(params);
      rest.delete("category_id");
      const qs = rest.toString();
      redirect(qs ? `/compnies/${cat.slug}?${qs}` : `/compnies/${cat.slug}`);
    }
  }

  if (params?.role === "handyman") {
    const qs = stripDefaultRole(params).toString();
    redirect(qs ? `/compnies?${qs}` : "/compnies");
  }

  return (
    <section className="individuals margin_navbar">
      <div className="container content py-3">
        <CompaniesListingHeader />
        <CompaniesClient />
        <CompaniesListingFooter />
      </div>
    </section>
  );
}
