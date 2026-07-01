export async function generateMetadata({ params }) {
  const { id } = params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://admin.ayasirg.com";
  try {
    const res = await fetch(`${baseUrl}/api/user-detail/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch company details");
    const data = await res.json();
    const company = data.data;
    if (!company) {
      return {
        title: "Ayasirg Services, Reviews & Details | Ayasirg",
        description: "Learn more about ayasirg Check their services, customer reviews, contact details, and professional background on Ayasirg.",
      };
    }

    const companyName = company.username || "Ayasirg Partner";
    const title = `${companyName} Services, Reviews & Details | Ayasirg`;
    const description = `Learn more about ${companyName}. Check their services, customer reviews, contact details, and professional background on Ayasirg.`;

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
      title: "Ayasirg Services, Reviews & Details | Ayasirg",
      description: "Learn more about ayasirg Check their services, customer reviews, contact details, and professional background on Ayasirg.",
    };
  }
}

export default function CompanyDetailLayout({ children }) {
  return children;
}
