import Advartisement from "@/app/components/AdvertisementBar/Advartisement";
import ServicesCategoriesJsonLd from "@/app/components/seo/ServicesCategoriesJsonLd";
import { canonicalUrl } from "@/app/lib/siteUrl";
import { getServicesHubIntro, getServicesHubFooter } from "@/app/lib/pageSeoContent";
import "@/app/about-us/about.css";
import "./services-page.css";
import ServicesCategoryGrid from "./ServicesCategoryGrid";

export const metadata = {
  title: "Services | Aya Sir G!",
  description:
    "Browse service categories on Aya Sir G! and open filtered listings for trusted professionals in Pakistan.",
  alternates: {
    canonical: canonicalUrl("/services"),
  },
};

async function fetchCategories() {
  const base =
    process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, "") ||
    "https://admin.ayasirg.com";
  try {
    const res = await fetch(`${base}/api/category-list`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return [];
    const json = await res.json();
    const rows = json?.data;
    return Array.isArray(rows)
      ? rows.filter((c) => c?.id != null && (c?.name || c?.category_image))
      : [];
  } catch {
    return [];
  }
}

export default async function ServicesPage() {
  const categories = (await fetchCategories()).slice().sort((a, b) =>
    String(a?.name || "").localeCompare(String(b?.name || ""), undefined, {
      sensitivity: "base",
    })
  );
  const hubIntro = getServicesHubIntro();
  const hubFooter = getServicesHubFooter();

  return (
    <section className="services_page margin_navbar">
      <ServicesCategoriesJsonLd categories={categories} />
      <div className="container py-3">
        <header className="services_page_header text-start">
          <h1 className="services_page_h1 fw-bold mb-1">Services</h1>
          <h2 className="services_page_h2 fw-semibold mb-0">Categories</h2>
          <div className="services_page_intro about_us">
            {hubIntro.paragraphs.map((text) => (
              <p key={text.slice(0, 48)}>{text}</p>
            ))}
            {hubFooter.paragraphs.map((text) => (
              <p key={text.slice(0, 48)}>{text}</p>
            ))}
          </div>
        </header>

        <div className="row align-items-start">
          <div className="col-lg-3 col-md-3 ad_bar p-0 hide_bar">
            <Advartisement />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <div className="services_main_panel">
              {/* <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                <p className="services_panel_kicker mb-0 text-uppercase">Browse</p>
                <Link
                  href="/compnies"
                  className="services_panel_all_link text-decoration-none"
                >
                  View all listings
                </Link>
              </div> */}
              <ServicesCategoryGrid categories={categories} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
