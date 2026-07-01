"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaBorderAll,
  FaLightbulb,
  FaPaintRoller,
  FaHammer,
  FaWrench,
  FaTag,
  FaUserShield,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./ceiling-work.css";

export default function CeilingWorkPage() {
  const [cityIds, setCityIds] = useState({
    lahore: "",
    karachi: "",
    islamabad: "",
  });

  useEffect(() => {
    async function loadCityIds() {
      try {
        const lahore = await fetchCityIdByName("Lahore");
        const karachi = await fetchCityIdByName("Karachi");
        const islamabad = await fetchCityIdByName("Islamabad");
        setCityIds({
          lahore: lahore || "",
          karachi: karachi || "",
          islamabad: islamabad || "",
        });
      } catch (err) {
        console.error("Failed to load city IDs", err);
      }
    }
    loadCityIds();
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I book a ceiling installer on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To book, browse through our verified false ceiling specialist profiles, review their previous designs, check ratings and client feedback, and contact them directly to request a site survey and quote."
        }
      },
      {
        "@type": "Question",
        "name": "What material is best for a false ceiling in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gypsum board is highly recommended for drawing rooms, bedrooms, and offices due to its smooth finish, quick installation, and design flexibility. For high-moisture areas like kitchens and bathrooms, PVC ceiling panels are ideal because they are waterproof and easy to clean."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to install a false ceiling in a standard room?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard 12x14 room false ceiling installation (framing, boarding, joint filling, and initial sanding) typically takes about 2 to 4 days, depending on the complexity of the design. Final paint finishing takes another 1-2 days."
        }
      },
      {
        "@type": "Question",
        "name": "Do false ceilings help with temperature and heat reduction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. False ceilings create an insulating air gap between the main concrete roof and the room. This trapped air layer slows down heat transmission, keeping the room cooler in summers, warmer in winters, and reducing AC electricity consumption."
        }
      },
      {
        "@type": "Question",
        "name": "Can ceiling spotlights and LED strips be replaced easily after installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Recessed LED downlights have spring-loaded clips and can be pulled out of their cut-out holes easily to change the driver or fixture. LED strip lights in the coves can also be accessed and replaced without damaging the gypsum board structure."
        }
      }
    ]
  };

  return (
    <div className="ceiling_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="ceiling_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="ceiling_hero_content text-center text-lg-start">
                <h1 className="ceiling_hero_h1">
                  Professional False Ceiling Design & Installation — Aya Sir G!
                </h1>
                <p className="ceiling_hero_subheading">
                  Find verified false ceiling installers, compare gypsum and POP ceiling design profiles, read reviews, and hire trusted experts.
                </p>
                <div className="ceiling_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=35"
                    className="ceiling_btn ceiling_btn_primary"
                  >
                    Find Ceiling Experts
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="ceiling_btn ceiling_btn_secondary"
                  >
                    Register as Installer
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Ceiling visual icon */}
              <div
                style={{
                  background: "rgba(217, 119, 6, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(217, 119, 6, 0.15)",
                }}
              >
                <FaBorderAll size={120} className="text-secondary" style={{ color: "#d97706" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~150 words) */}
      <section className="ceiling_content_block">
        <div className="container">
          <div className="ceiling_content_wrapper">
            <h2 className="ceiling_section_heading">Safe Ceiling and Construction Work with Aya Sir G!</h2>
            <p className="ceiling_content_text">
              Many people may have experienced or heard about cases where a ceiling suddenly collapses without any earthquake or major external event. It is a frightening thought, especially when families are sleeping inside a newly built or renovated house.
            </p>
            <p className="ceiling_content_text">
              Unfortunately, such incidents are not rare. Across different regions, including Pakistan, multiple ceiling and roof collapse cases have been reported over the years, often linked to poor construction quality, weak materials or lack of proper supervision.
            </p>
            <p className="ceiling_content_text">
              These situations highlight an important reality: even jobs that seem simple like ceiling installation or finishing work require skilled and experienced professionals. Poor workmanship can lead to serious safety risks for families.
            </p>
            <p className="ceiling_content_text">
              This is why trust and expertise matter so much when hiring construction workers.
            </p>
            <p className="ceiling_content_text">
              With Aya Sir G!, you can find verified ceiling contractors, builders and construction experts. Instead of relying on unknown or unverified individuals, you can check each worker's profile, experience and customer feedback before hiring.
            </p>
            <p className="ceiling_content_text">
              This helps ensure that you choose qualified professionals for your home, reducing risks and improving safety for your loved ones.
            </p>
            <div className="mt-4 pt-2">
              <span className="text-muted small">
                Explore other services at{" "}
                <Link href="/services" className="red_title text-decoration-none">
                  Aya Sir G! Services
                </Link>
                ,{" "}
                <Link href="/register-yourself" className="red_title text-decoration-none">
                  Register as a Service Provider
                </Link>
                , or{" "}
                <Link href="/contact-us" className="red_title text-decoration-none">
                  Contact Us
                </Link>{" "}
                for any assistance.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="ceiling_services_sec">
        <div className="container">
          <h2 className="ceiling_section_heading">Ceiling Services Available on Aya Sir G!</h2>
          <div className="ceiling_services_grid">
            {/* Card 1 */}
            <div className="ceiling_service_card">
              <div className="ceiling_card_icon_wrap">
                <FaBorderAll />
              </div>
              <h3 className="ceiling_card_title">Gypsum False Ceiling</h3>
              <p className="ceiling_card_desc">
                Installation of premium gypsum board false ceilings with durable metal tracks, perfect for modern drawing and living rooms.
              </p>
            </div>
            {/* Card 2 */}
            <div className="ceiling_service_card">
              <div className="ceiling_card_icon_wrap">
                <FaHammer />
              </div>
              <h3 className="ceiling_card_title">POP Ceiling Designs</h3>
              <p className="ceiling_card_desc">
                Traditional hand-crafted Plaster of Paris borders, custom center medallions, decorative domes, and classic floral moldings.
              </p>
            </div>
            {/* Card 3 */}
            <div className="ceiling_service_card">
              <div className="ceiling_card_icon_wrap">
                <FaPaintRoller />
              </div>
              <h3 className="ceiling_card_title">PVC Ceiling Panel Installation</h3>
              <p className="ceiling_card_desc">
                Installing lightweight, moisture-proof, and washable PVC ceiling panels, highly recommended for kitchens and bathrooms.
              </p>
            </div>
            {/* Card 4 */}
            <div className="ceiling_service_card">
              <div className="ceiling_card_icon_wrap">
                <FaLightbulb />
              </div>
              <h3 className="ceiling_card_title">LED Lighting Setup</h3>
              <p className="ceiling_card_desc">
                Adding recessed LED downlights, COB spot lamps, and color-changing LED rope/strip lights inside ceiling coves.
              </p>
            </div>
            {/* Card 5 */}
            <div className="ceiling_service_card">
              <div className="ceiling_card_icon_wrap">
                <FaWrench />
              </div>
              <h3 className="ceiling_card_title">Ceiling Repair & Patchwork</h3>
              <p className="ceiling_card_desc">
                Repairing cracks, resolving sagging frames, replacing water-damaged boards, and restoration after leakage.
              </p>
            </div>
            {/* Card 6 */}
            <div className="ceiling_service_card">
              <div className="ceiling_card_icon_wrap">
                <FaTag />
              </div>
              <h3 className="ceiling_card_title">Wooden & Slatted Ceilings</h3>
              <p className="ceiling_card_desc">
                Luxury wood slat ceilings, floating wooden panels, rafters, and decorative partition designs for architectural appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="ceiling_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ceiling_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Ceiling Installation?</span>
              </h2>
              <div className="ceiling_trust_points">
                <div className="ceiling_trust_point">
                  <div className="ceiling_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="ceiling_trust_point_title">Verified & Expert Installers</h3>
                    <p className="ceiling_trust_point_desc">
                      Experienced technicians with clean background checks who ensure structural stability and flawless alignment.
                    </p>
                  </div>
                </div>
                <div className="ceiling_trust_point">
                  <div className="ceiling_trust_icon_box">
                    <FaBorderAll />
                  </div>
                  <div>
                    <h3 className="ceiling_trust_point_title">Custom Trendy Designs</h3>
                    <p className="ceiling_trust_point_desc">
                      Choose from a wide variety of minimalist, geometric, tray, and classic false ceiling designs tailored to your space.
                    </p>
                  </div>
                </div>
                <div className="ceiling_trust_point">
                  <div className="ceiling_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="ceiling_trust_point_title">Direct Contracting, No Markup</h3>
                    <p className="ceiling_trust_point_desc">
                      Compare provider portfolios, contact them directly to negotiate labor and material rates, and save money.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="ceiling_trust_img_wrap">
                <Image
                  src="/assets/ceiling-work.png"
                  alt="Verified ceiling work specialist installing plaster ceiling on Aya Sir G!"
                  width={600}
                  height={450}
                  className="ceiling_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="ceiling_cities_sec">
        <div className="container">
          <h2 className="ceiling_section_heading">Find Ceiling Installers in Your City</h2>
          <div className="ceiling_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=35${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="ceiling_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=35${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="ceiling_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=35${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="ceiling_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="ceiling_faq_sec">
        <div className="container">
          <h2 className="ceiling_section_heading">Frequently Asked Questions</h2>
          <div className="ceiling_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a ceiling installer on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To book, browse through our verified false ceiling specialist profiles, review their previous designs, check ratings and client feedback, and contact them directly to request a site survey and quote.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What material is best for a false ceiling in Pakistan?</Accordion.Header>
                <Accordion.Body>
                  Gypsum board is highly recommended for drawing rooms, bedrooms, and offices due to its smooth finish, quick installation, and design flexibility. For high-moisture areas like kitchens and bathrooms, PVC ceiling panels are ideal because they are waterproof and easy to clean.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How long does it take to install a false ceiling in a standard room?</Accordion.Header>
                <Accordion.Body>
                  A standard 12x14 room false ceiling installation (framing, boarding, joint filling, and initial sanding) typically takes about 2 to 4 days, depending on the complexity of the design. Final paint finishing takes another 1-2 days.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Do false ceilings help with temperature and heat reduction?</Accordion.Header>
                <Accordion.Body>
                  Yes. False ceilings create an insulating air gap between the main concrete roof and the room. This trapped air layer slows down heat transmission, keeping the room cooler in summers, warmer in winters, and reducing AC electricity consumption.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Can ceiling spotlights and LED strips be replaced easily after installation?</Accordion.Header>
                <Accordion.Body>
                  Yes. Recessed LED downlights have spring-loaded clips and can be pulled out of their cut-out holes easily to change the driver or fixture. LED strip lights in the coves can also be accessed and replaced without damaging the gypsum board structure.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="ceiling_cta_banner">
        <div className="container">
          <h2 className="ceiling_cta_banner_h2">
            Elevate Your Room's Interior. Find False Ceiling Installers Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=35"
            className="ceiling_btn"
          >
            Browse Ceiling Installers
          </Link>
        </div>
      </section>
    </div>
  );
}
