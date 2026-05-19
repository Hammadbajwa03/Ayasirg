import Image from "next/image";
import Link from "next/link";
import Advartisement from "@/app/components/AdvertisementBar/Advartisement";
import "./city-page.css";

/**
 * @param {{ city: object; cityId?: string | null }} props
 */
export default function CityPageView({ city, cityId }) {
  const listingsHref = cityId
    ? `/compnies?role=handyman&city=${encodeURIComponent(cityId)}`
    : "/compnies?role=handyman";

  return (
    <section className="city_page margin_navbar">
      <div className="container py-3">
        <header className="city_page_header text-center text-md-start mb-3 mb-md-4">
          <h1 className="city_page_h1 fw-bold mb-1">{city.name}</h1>
          <p className="city_page_h2 fw-semibold mb-0">{city.tagline}</p>
        </header>

        <div className="row align-items-stretch">
          <div className="col-lg-3 col-md-3 ad_bar p-0 hide_bar">
            <Advartisement />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <article className="city_main_panel">
              <div className="city_hero">
                <Image
                  src={city.heroImage}
                  alt={city.heroAlt}
                  fill
                  className="city_hero_img"
                  sizes="(max-width: 992px) 100vw, 66vw"
                  priority
                />
                <div className="city_hero_overlay">
                  <span className="city_hero_tag">Aya Sir G! · Pakistan</span>
                  <h2 className="city_hero_title">
                    Services in {city.name}
                  </h2>
                </div>
              </div>

              <div className="city_body">
                <p className="city_intro">{city.intro}</p>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="city_block">
                      <h3>Why choose us</h3>
                      <ul className="city_highlights">
                        {city.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="city_block">
                      <h3>Popular services</h3>
                      <div className="city_services_grid">
                        {city.services.map((s) => (
                          <span key={s} className="city_service_chip">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {city.bodySections.map((section) => (
                    <div key={section.title} className="col-12">
                      <div className="city_block">
                        <h3>{section.title}</h3>
                        <p className="mb-0">{section.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <div className="city_cta_row">
                  <Link href={listingsHref} className="city_btn_primary">
                    Browse professionals in {city.name}
                  </Link>
                  <Link href="/services" className="city_btn_outline">
                    View all categories
                  </Link>
                  <Link href="/create-profile" className="city_btn_outline">
                    Create your profile
                  </Link>
                </div> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
