import SeoIntroBlock from "@/app/components/seo/SeoIntroBlock";
import { getListingIntro } from "@/app/lib/pageSeoContent";
import "@/app/about-us/about.css";

/** Server-rendered listing title + SEO intro (counts as visible HTML, not client JS). */
export default function CompaniesListingHeader({
  categorySlug = "",
  categoryName = "",
}) {
  const pageTitle = categoryName
    ? `Find Verified ${categoryName}`
    : "Find Verified Companies & Workers";
  const intro = getListingIntro(categorySlug, categoryName);

  return (
    <>
      <h1 className="fw-bold mb-0">{pageTitle}</h1>
      <SeoIntroBlock
        paragraphs={intro.paragraphs}
        className="seo_intro_block listing_intro about_us w-100"
      />
    </>
  );
}
