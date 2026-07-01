export async function generateMetadata({ params }) {
  const { id } = params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://admin.ayasirg.com";
  try {
    const res = await fetch(`${baseUrl}/api/user-detail/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch company details");
    const data = await res.json();
    const company = data.data;
    if (!company) return {};

    const title = `${company.username || "Company"} | Aya Sir G!`;
    const description = company.description
      ? company.description.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160)
      : `View profile, ratings, contact details and services of ${company.username || "this company"} on Aya Sir G!.`;

    return {
      title,
      description,
      alternates: {
        canonical: `https://www.ayasirg.com/compnies-details/${id}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata for company details:", error);
    return {
      title: "Company Details | Aya Sir G!",
    };
  }
}

export default function CompanyDetailLayout({ children }) {
  return children;
}
