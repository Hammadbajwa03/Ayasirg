export async function generateMetadata({ params }) {
  const { id } = params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://admin.ayasirg.com";
  try {
    const res = await fetch(`${baseUrl}/api/user-detail/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch profile details");
    const data = await res.json();
    const user = data.data;
    if (!user) return {};

    const workerName = user.username || "Verified Professional";
    const jobTitle = (Array.isArray(user.fields_of_interest) && user.fields_of_interest[0]?.name)
      ? user.fields_of_interest[0].name
      : "Local Service";

    const title = `${workerName} - Professional ${jobTitle} Services | Ayasirg`;
    const description = `Hire ${workerName}, a professional ${jobTitle}. View skills, work experience, customer ratings, and book top local services instantly on Ayasirg.`;

    return {
      title,
      description,
      alternates: {
        canonical: `https://www.ayasirg.com/profile-details/${id}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata for profile details:", error);
    return {
      title: "Worker Profile | Ayasirg",
    };
  }
}

export default function ProfileDetailLayout({ children }) {
  return children;
}
