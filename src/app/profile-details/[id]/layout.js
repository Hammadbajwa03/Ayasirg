export async function generateMetadata({ params }) {
  const { id } = params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://admin.ayasirg.com";
  try {
    const res = await fetch(`${baseUrl}/api/user-detail/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch profile details");
    const data = await res.json();
    const user = data.data;
    if (!user) return {};

    const title = `${user.username || "Profile"} | Aya Sir G!`;
    const description = user.description
      ? user.description.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160)
      : `View profile, ratings, portfolio, contact details and reviews of ${user.username || "this helper"} on Aya Sir G!.`;

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
      title: "Profile Details | Aya Sir G!",
    };
  }
}

export default function ProfileDetailLayout({ children }) {
  return children;
}
