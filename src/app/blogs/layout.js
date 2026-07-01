export async function generateMetadata() {
  return {
    title: "Expert Blogs & Home Service Guides | Aya Sir G!",
    description: "Read the latest blogs, guides, and tips on maintenance, cleaning, parenting, and home improvement in Pakistan from Aya Sir G!.",
    alternates: {
      canonical: "https://www.ayasirg.com/blogs",
    },
  };
}

export default function BlogsLayout({ children }) {
  return children;
}
