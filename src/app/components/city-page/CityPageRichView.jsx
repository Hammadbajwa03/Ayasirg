"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Advartisement from "@/app/components/AdvertisementBar/Advartisement";
import "./city-page.css";
import "../homepage_custom_sections.css";

const OurServices = dynamic(() => import("../our-services/OurServices"), {
  ssr: false,
  loading: () => <div className="skeleton-box" style={{ height: "300px", background: "#ffffff", margin: "20px 0", borderRadius: "8px" }}></div>,
});

/**
 * SEO-rich city landing (Islamabad / Karachi).
 * @param {{ city: object; cityId?: string | null }} props
 */
export default function CityPageRichView({ city, cityId }) {
  const listingsHref = cityId
    ? `/compnies?role=handyman&city=${encodeURIComponent(cityId)}`
    : "/compnies?role=handyman";

  const {
    hero,
    welcome,
    popularServices,
    commercialResidential,
    seasonalGuide,
    howItWorks,
    safetyChecklist,
    whyPrefer,
    areasServed,
  } = city;

  return (
    <section className="city_page margin_navbar">
      <div className="container py-3">
        <div className="row align-items-stretch">
          <div className="col-lg-3 col-md-3 ad_bar p-0 hide_bar">
            <Advartisement />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <article className="city_main_panel">
              <div className="city_hero city_hero_rich">
                <div className="city_hero_media">
                  <Image
                    src={city.heroImage}
                    alt={city.heroAlt}
                    fill
                    className="city_hero_img"
                    sizes="(max-width: 992px) 100vw, 66vw"
                    priority
                  />
                </div>
                <div className="city_hero_overlay city_hero_overlay_rich">
                  <span className="city_hero_tag">Aya Sir G · {city.name}</span>
                  <h1 className="city_hero_h1">{hero.h1}</h1>
                  <p className="city_hero_sub">{hero.subheading}</p>
                </div>
              </div>

              <div className="city_body">
                {welcome ? (
                  <section className="city_section">
                    <h2 className="city_section_h2">{welcome.title}</h2>
                    {welcome.subtitle ? (
                      <h3 className="city_section_h3">{welcome.subtitle}</h3>
                    ) : null}
                    {welcome.text ? (
                      <p className="city_intro mb-0">{welcome.text}</p>
                    ) : null}
                    {welcome.paragraphs?.map((p, i) => (
                      <p
                        key={p.slice(0, 40)}
                        className={`city_intro${i === welcome.paragraphs.length - 1 ? " mb-0" : ""}`}
                      >
                        {p}
                      </p>
                    ))}
                  </section>
                ) : null}

                {popularServices ? (
                  <section className="city_section">
                    <h2 className="city_section_h2">{popularServices.title}</h2>
                    <div className="row g-3">
                      {popularServices.items.map((item) => (
                        <div key={item.title} className="col-12">
                          <div className="city_block city_service_card">
                            <h3 className="city_service_h3">{item.title}</h3>
                            <p className="mb-0">{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}

                {commercialResidential ? (
                  <section className="city_section">
                    <h2 className="city_section_h2">{commercialResidential.title}</h2>
                    <p className="city_section_lead">{commercialResidential.intro}</p>
                    {commercialResidential.items.map((item) => (
                      <div key={item.title} className="city_block mb-3">
                        <h3 className="city_service_h3">{item.title}</h3>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    ))}
                  </section>
                ) : null}

                {seasonalGuide ? (
                  <section className="city_section">
                    <h2 className="city_section_h2">{seasonalGuide.title}</h2>
                    <p className="city_section_lead">{seasonalGuide.intro}</p>
                    {seasonalGuide.items.map((item) => (
                      <div key={item.title} className="city_block mb-3">
                        <h3 className="city_service_h3">{item.title}</h3>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    ))}
                  </section>
                ) : null}

                {howItWorks ? (
                  <section className="city_section">
                    <h2 className="city_section_h2">{howItWorks.title}</h2>
                    <p className="city_section_lead">{howItWorks.intro}</p>
                    <ol className="city_steps">
                      {howItWorks.steps.map((step) => (
                        <li key={step.title} className="city_block">
                          <strong>{step.title}</strong>
                          <p className="mb-0 mt-1">{step.text}</p>
                        </li>
                      ))}
                    </ol>
                  </section>
                ) : null}

                {safetyChecklist ? (
                  <section className="city_section">
                    <h2 className="city_section_h2">{safetyChecklist.title}</h2>
                    <p className="city_section_lead">{safetyChecklist.intro}</p>
                    <ul className="city_highlights">
                      {safetyChecklist.items.map((item) => (
                        <li key={item.title}>
                          <strong>{item.title}:</strong> {item.text}
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {whyPrefer ? (
                  <section className="city_section">
                    <h2 className="city_section_h2">{whyPrefer.title}</h2>
                    <div className="row g-3">
                      {whyPrefer.items.map((item) => (
                        <div key={item.title} className="col-md-6">
                          <div className="city_block h-100">
                            <h3 className="city_service_h3">{item.title}</h3>
                            <p className="mb-0">{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}

                {areasServed ? (
                  <section className="city_section">
                    <h2 className="city_section_h2">{areasServed.title}</h2>
                    <p className="city_section_lead">{areasServed.intro}</p>
                    <div className="city_block">
                      {areasServed.zones?.map((zone) => (
                        <p key={zone.label} className="mb-2">
                          <strong>{zone.label}:</strong> {zone.text}
                        </p>
                      ))}
                      {areasServed.sectors ? (
                        <p className="mb-2">{areasServed.sectors}</p>
                      ) : null}
                      {areasServed.societies ? (
                        <p className="mb-0">{areasServed.societies}</p>
                      ) : null}
                    </div>
                  </section>
                ) : null}
              </div>
            </article>
          </div>
        </div>
      </div>

      <OurServices />

      <div className="container py-4">
        <div className="city_cta_row justify-content-center text-center mt-2" style={{ borderTop: "none" }}>
          <Link href={listingsHref} className="city_btn_primary">
            {hero.ctaPrimary}
          </Link>
        </div>
      </div>
    </section>
  );
}
