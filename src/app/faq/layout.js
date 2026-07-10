import { canonicalUrl } from "@/app/lib/siteUrl";

export const metadata = {
  title: "FAQ: How Aya Sir G! Connects Handyman Services in Lahore",
  description:
    "Get answers about Aya Sir G! Find out how our platform helps handymen, companies, and E-centers in Lahore grow their service business and connect with clients.",
  alternates: {
    canonical: canonicalUrl("/faq"),
  },
};

export default function FaqLayout({ children }) {
  return children;
}
