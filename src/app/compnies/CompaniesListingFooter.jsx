import SeoIntroBlock from "@/app/components/seo/SeoIntroBlock";
import { getListingFooter } from "@/app/lib/pageSeoContent";
import "@/app/about-us/about.css";

export default function CompaniesListingFooter() {
  const footer = getListingFooter();
  return (
    <SeoIntroBlock
      paragraphs={footer.paragraphs}
      className="seo_intro_block listing_intro about_us listing_intro_followup w-100"
    />
  );
}
