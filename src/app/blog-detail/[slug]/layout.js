export async function generateMetadata({ params }) {
  const { slug } = params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://admin.ayasirg.com";
  try {
    const res = await fetch(`${baseUrl}/api/blog-detail/${slug}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch blog details");
    const data = await res.json();
    const blog = data.blog_detail;
    if (!blog) return {};
    
    const plainDescription = blog.description
      ? blog.description.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 150)
      : "";

    return {
      title: `${blog.title} | Ayasirg`,
      description: plainDescription,
      alternates: {
        canonical: `https://www.ayasirg.com/blog-detail/${slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata for blog detail:", error);
    return {
      title: "Blog Details | Ayasirg",
    };
  }
}

export default function BlogDetailLayout({ children }) {
  return children;
}
