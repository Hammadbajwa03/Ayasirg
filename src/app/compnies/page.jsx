import React from "react";
import CompaniesClient from "./CompaniesClient";

export async function generateMetadata({ searchParams }) {
  const categoryId = searchParams?.category_id;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://admin.ayasirg.com";

  try {
    const res = await fetch(`${baseUrl}/api/category-list`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch category list");
    const data = await res.json();
    const categories = data.data || [];

    if (categoryId) {
      const cat = categories.find((c) => String(c?.id) === String(categoryId));
      if (cat) {
        const name = String(cat.name).trim();
        const plainDesc = cat.description
          ? cat.description.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160)
          : "";
        return {
          title: `${name} Services in Pakistan | Ayasirg`,
          description: plainDesc || `${name} — Browse verified professionals on Ayasirg in Pakistan.`,
          alternates: {
            canonical: `https://www.ayasirg.com/compnies?category_id=${categoryId}`,
          },
        };
      }
    }
  } catch (error) {
    console.error("Error generating metadata for companies list:", error);
  }

  return {
    title: "Find Verified Companies & Workers Online | Ayasirg",
    description: "Browse our complete directory of verified companies and local workers. Connect with top-rated professionals for your needs today through Ayasirg.",
    alternates: {
      canonical: "https://www.ayasirg.com/compnies",
    },
  };
}

export default function Page() {
  return <CompaniesClient />;
}
