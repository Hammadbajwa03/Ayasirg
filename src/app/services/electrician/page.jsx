"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaBolt,
  FaPlug,
  FaLightbulb,
  FaWrench,
  FaGear,
  FaTag,
  FaUserShield,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./electrician.css";

export default function ElectricianPage() {
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
        "name": "How do I book an electrician on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To book, browse through our verified electrician profiles, check customer reviews, ratings, and project histories, and contact the technician directly to explain the scope of work and negotiate rates."
        }
      },
      {
        "@type": "Question",
        "name": "What are the common causes of frequent circuit breaker tripping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Circuit breakers usually trip due to an overloaded circuit (running too many heavy appliances at once), a short circuit (hot wire touching a neutral wire), or a ground fault (hot wire touching the ground/metal box). Our electricians can safely diagnose and resolve the exact cause."
        }
      },
      {
        "@type": "Question",
        "name": "Do electricians bring their own spare wires and switches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Electricians carry professional testing and cutting tools, tape, and basic screws. The cost of materials like replacement switches, sockets, wires, and breakers is borne by the customer. The electrician can purchase them on your behalf and provide receipts, or you can purchase them yourself."
        }
      },
      {
        "@type": "Question",
        "name": "Can I hire an electrician for full house electrical wiring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our platform lists experienced electrical contractors who handle complete conduit piping, wire pulling, distribution board (DB) box installations, and finish fittings for new houses and major renovation projects."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide emergency electrical repair services late at night?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact listed electricians directly to check if they offer 24/7 or emergency late-night call-out services in your specific neighborhood."
        }
      }
    ]
  };

  return (
    <div className="electrician_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="electrician_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="electrician_hero_content text-center text-lg-start">
                <h1 className="electrician_hero_h1">
                  Professional Electricians & Electrical Services — Aya Sir G!
                </h1>
                <p className="electrician_hero_subheading">
                  Find verified electricians, compare electrical repair and house wiring profiles, read real reviews, and hire local experts.
                </p>
                <div className="electrician_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=25"
                    className="electrician_btn electrician_btn_primary"
                  >
                    Find an Electrician
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="electrician_btn electrician_btn_secondary"
                  >
                    Register as Electrician
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Electrician visual icon */}
              <div
                style={{
                  background: "rgba(234, 88, 12, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(234, 88, 12, 0.15)",
                }}
              >
                <FaBolt size={120} className="text-secondary" style={{ color: "#ea580c" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~150 words) */}
      <section className="electrician_content_block">
        <div className="container">
          <div className="electrician_content_wrapper">
            <h2 className="electrician_section_heading">What Does a Professional Electrician Do?</h2>
            <p className="electrician_content_text">
              Electrical systems require proper installation and regular maintenance to ensure the safety and efficiency of homes, offices, shops, and commercial buildings. In Lahore, Pakistan, professional electricians provide a wide range of electrical services, including electrical wiring, switch and socket installation, circuit breaker repair, lighting installation, fan installation, power backup wiring, electrical fault finding, inverter and UPS wiring, DB panel installation, and complete electrical maintenance. Whether you need a qualified electrician for a new construction project, home renovation, emergency electrical repair, or routine maintenance, experienced professionals ensure safe and high-quality workmanship. Aya Sir G helps you connect with trusted electricians in Lahore, making it easy to find reliable experts for residential and commercial electrical installation, repair, troubleshooting, and maintenance services.
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
      <section className="electrician_services_sec">
        <div className="container">
          <h2 className="electrician_section_heading">Electrical Services Available on Aya Sir G!</h2>
          <div className="electrician_services_grid">
            {/* Card 1 */}
            <div className="electrician_service_card">
              <div className="electrician_card_icon_wrap">
                <FaBolt />
              </div>
              <h3 className="electrician_card_title">Short Circuit & Fault Repair</h3>
              <p className="electrician_card_desc">
                Quick diagnosis and repair of tripping breakers, short circuits, burnt outlets, voltage jumps, and phase issues.
              </p>
            </div>
            {/* Card 2 */}
            <div className="electrician_service_card">
              <div className="electrician_card_icon_wrap">
                <FaLightbulb />
              </div>
              <h3 className="electrician_card_title">Lighting & Fan Installation</h3>
              <p className="electrician_card_desc">
                Installing ceiling fans, bracket fans, modern LED downlights, rope lights, and mounting luxury chandeliers.
              </p>
            </div>
            {/* Card 3 */}
            <div className="electrician_service_card">
              <div className="electrician_card_icon_wrap">
                <FaPlug />
              </div>
              <h3 className="electrician_card_title">House Wiring & DB Setup</h3>
              <p className="electrician_card_desc">
                Complete internal conduit piping, wire pulling, distribution board (DB) installation, and earthing setups.
              </p>
            </div>
            {/* Card 4 */}
            <div className="electrician_service_card">
              <div className="electrician_card_icon_wrap">
                <FaWrench />
              </div>
              <h3 className="electrician_card_title">Switch & Socket Fitting</h3>
              <p className="electrician_card_desc">
                Replacing broken switchboards, fitting high-load power plugs, smart sockets, extension boxes, and dimmers.
              </p>
            </div>
            {/* Card 5 */}
            <div className="electrician_service_card">
              <div className="electrician_card_icon_wrap">
                <FaGear />
              </div>
              <h3 className="electrician_card_title">UPS & Generator Service</h3>
              <p className="electrician_card_desc">
                UPS installation, battery water top-up, auto changeover switch (ATS) wiring, and generator electrical repairs.
              </p>
            </div>
            {/* Card 6 */}
            <div className="electrician_service_card">
              <div className="electrician_card_icon_wrap">
                <FaTag />
              </div>
              <h3 className="electrician_card_title">Appliance Installation</h3>
              <p className="electrician_card_desc">
                Safe wall mounting of LED TVs, electric geysers, washing machine electrical setup, and water pump installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="electrician_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 electrician_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Electrical Services?</span>
              </h2>
              <div className="electrician_trust_points">
                <div className="electrician_trust_point">
                  <div className="electrician_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="electrician_trust_point_title">Vetted Safety-First Electricians</h3>
                    <p className="electrician_trust_point_desc">
                      Experienced electrical technicians with verified profiles who follow strict safety standards and protocols.
                    </p>
                  </div>
                </div>
                <div className="electrician_trust_point">
                  <div className="electrician_trust_icon_box">
                    <FaBolt />
                  </div>
                  <div>
                    <h3 className="electrician_trust_point_title">Rapid Troubleshooting Tools</h3>
                    <p className="electrician_trust_point_desc">
                      Technicians utilize professional multimeters, clamp meters, and phase testers to detect and isolate faults fast.
                    </p>
                  </div>
                </div>
                <div className="electrician_trust_point">
                  <div className="electrician_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="electrician_trust_point_title">Transparent Rates, Zero Middleman</h3>
                    <p className="electrician_trust_point_desc">
                      Compare actual client ratings, contact local electricians directly, and pay direct labor charges with no commission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="electrician_trust_img_wrap">
                <Image
                  src="/assets/electrician.png"
                  alt="Verified electrician repairing electrical panel on Aya Sir G!"
                  width={600}
                  height={450}
                  className="electrician_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="electrician_cities_sec">
        <div className="container">
          <h2 className="electrician_section_heading">Find Electricians in Your City</h2>
          <div className="electrician_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=25${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="electrician_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=25${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="electrician_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=25${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="electrician_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="electrician_faq_sec">
        <div className="container">
          <h2 className="electrician_section_heading">Frequently Asked Questions</h2>
          <div className="electrician_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book an electrician on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To book, browse through our verified electrician profiles, check customer reviews, ratings, and project histories, and contact the technician directly to explain the scope of work and negotiate rates.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What are the common causes of frequent circuit breaker tripping?</Accordion.Header>
                <Accordion.Body>
                  Circuit breakers usually trip due to an overloaded circuit (running too many heavy appliances at once), a short circuit (hot wire touching a neutral wire), or a ground fault (hot wire touching the ground/metal box). Our electricians can safely diagnose and resolve the exact cause.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do electricians bring their own spare wires and switches?</Accordion.Header>
                <Accordion.Body>
                  Electricians carry professional testing and cutting tools, tape, and basic screws. The cost of materials like replacement switches, sockets, wires, and breakers is borne by the customer. The electrician can purchase them on your behalf and provide receipts, or you can purchase them yourself.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Can I hire an electrician for full house electrical wiring?</Accordion.Header>
                <Accordion.Body>
                  Yes. Our platform lists experienced electrical contractors who handle complete conduit piping, wire pulling, distribution board (DB) box installations, and finish fittings for new houses and major renovation projects.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Do you provide emergency electrical repair services late at night?</Accordion.Header>
                <Accordion.Body>
                  You can contact listed electricians directly to check if they offer 24/7 or emergency late-night call-out services in your specific neighborhood.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="electrician_cta_banner">
        <div className="container">
          <h2 className="electrician_cta_banner_h2">
            Dealing with a Short Circuit or Need New Wiring? Find an Electrician Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=25"
            className="electrician_btn"
          >
            Browse Electricians
          </Link>
        </div>
      </section>
    </div>
  );
}
