export async function generateMetadata() {
  return {
    title: "Latest Blogs, News & Expert Articles | Ayasirg",
    description: "Read our latest blogs, expert articles, and helpful tips on local services, maintenance, and updates. Stay informed with Ayasirg.",
    alternates: {
      canonical: "https://www.ayasirg.com/blogs",
    },
  };
}

export default function BlogsLayout({ children }) {
  return children;
}
