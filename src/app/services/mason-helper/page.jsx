"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaHammer,
  FaHelmetSafety,
  FaScrewdriverWrench,
  FaBuilding,
  FaHouseChimney,
  FaClock,
  FaUserShield,
  FaStar,
  FaCircleCheck,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./mason-helper.css";

export default function MasonHelperPage() {
  const [cityIds, setCityIds] = useState({
    lahore: "2",
    karachi: "1",
    islamabad: "9",
  });

  useEffect(() => {
    async function loadCityIds() {
      try {
        const lahore = await fetchCityIdByName("Lahore");
        const karachi = await fetchCityIdByName("Karachi");
        const islamabad = await fetchCityIdByName("Islamabad");
        setCityIds({
          lahore: lahore || "2",
          karachi: karachi || "1",
          islamabad: islamabad || "9",
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
        "name": "How do I book a mason (mistri) or helper on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To book, browse through our local mason and construction helper profiles, check their previous work reviews and ratings, and contact them directly to negotiate daily wages or contract rates."
        }
      },
      {
        "@type": "Question",
        "name": "What construction tasks do your masons perform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our masons handle bricklaying, plastering walls, concrete mixing, floor tiling, marble laying, roof waterproofing, wall repair, and complete bathroom or kitchen renovations."
        }
      },
      {
        "@type": "Question",
        "name": "Do masons charge daily wages (dihari) or take full contracts (theka)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They do both. You can hire them on a daily wage basis (mistri and mazdoor separate rates) or agree on a lump-sum project contract. Discuss all pricing directly before starting."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to supply construction materials like cement, sand, and bricks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually, clients purchase and supply all construction materials, while the mason provides the labor and manual tools. However, you can negotiate a 'material+labor' contract directly if preferred."
        }
      },
      {
        "@type": "Question",
        "name": "Are the construction helpers and masons background checked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aya Sir G! lists verified profile cards showing CNIC status and customer reviews to help you choose trusted, safe, and reliable helpers."
        }
      }
    ]
  };

  return (
    <div className="mason_helper_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="mason_helper_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="mason_helper_hero_content text-center text-lg-start">
                <h1 className="mason_helper_hero_h1">
                  Professional Masons & Construction Helpers — Aya Sir G!
                </h1>
                <p className="mason_helper_hero_subheading">
                  Find verified local brick masons (mistri), tiling specialists, and construction labor helpers (mazdoor). Compare profiles, negotiate wages, and hire directly.
                </p>
                <div className="mason_helper_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=48"
                    className="mason_helper_btn mason_helper_btn_primary"
                  >
                    Find Masons / Helpers
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="mason_helper_btn mason_helper_btn_secondary"
                  >
                    Register as Helper
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Mason visual icon */}
              <div
                style={{
                  background: "rgba(180, 83, 9, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(180, 83, 9, 0.15)",
                }}
              >
                <FaHelmetSafety size={120} style={{ color: "#b45309" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~150 words) */}
      <section className="mason_helper_content_block">
        <div className="container">
          <div className="mason_helper_content_wrapper">
            <h2 className="mason_helper_section_heading">Find Masons and Construction Helpers Easily with Aya Sir G!</h2>
            <p className="mason_helper_content_text">
              Are you a contractor facing a situation where your client or homeowner expects the job to be completed but your mason or helper is unavailable due to personal reasons?
            </p>
            <p className="mason_helper_content_text">
              In such cases, work delays can become stressful and impact your project timeline.
            </p>
            <p className="mason_helper_content_text">
              Instead of relying on references or calling friends to find a spare mason or construction helper, you can simply use Aya Sir G!. The platform allows contractors to quickly find available skilled workers nearby and contact them directly.
            </p>
            <p className="mason_helper_content_text">
              With Aya Sir G!, you can check profiles, availability and ratings, then hire the right mason or helper without unnecessary delays or dependency on informal networks.
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
      <section className="mason_helper_services_sec">
        <div className="container">
          <h2 className="mason_helper_section_heading">Masonry & Renovation Services Available</h2>
          <div className="mason_helper_services_grid">
            {/* Card 1 */}
            <div className="mason_helper_service_card">
              <div className="mason_helper_card_icon_wrap">
                <FaHammer />
              </div>
              <h3 className="mason_helper_card_title">Bricklaying & Blockwork</h3>
              <p className="mason_helper_card_desc">
                Constructing brick walls, partition walls, room boundary walls, and basic concrete foundations with precise alignment.
              </p>
            </div>
            {/* Card 2 */}
            <div className="mason_helper_service_card">
              <div className="mason_helper_card_icon_wrap">
                <FaScrewdriverWrench />
              </div>
              <h3 className="mason_helper_card_title">Plastering & Patching</h3>
              <p className="mason_helper_card_desc">
                Smooth internal and external wall cement plastering, repair of cracked structures, and patch repairs.
              </p>
            </div>
            {/* Card 3 */}
            <div className="mason_helper_service_card">
              <div className="mason_helper_card_icon_wrap">
                <FaHouseChimney />
              </div>
              <h3 className="mason_helper_card_title">Tile & Marble Installation</h3>
              <p className="mason_helper_card_desc">
                Laying ceramic floor tiles, kitchen backsplashes, bathroom floor tiles, and marble staircases with clean grouting.
              </p>
            </div>
            {/* Card 4 */}
            <div className="mason_helper_service_card">
              <div className="mason_helper_card_icon_wrap">
                <FaHelmetSafety />
              </div>
              <h3 className="mason_helper_card_title">Construction Helper Support</h3>
              <p className="mason_helper_card_desc">
                Helpers to assist masons with manual concrete mixing, bricks carrying, cleanup, and site preparation.
              </p>
            </div>
            {/* Card 5 */}
            <div className="mason_helper_service_card">
              <div className="mason_helper_card_icon_wrap">
                <FaBuilding />
              </div>
              <h3 className="mason_helper_card_title">Concrete Casting & Lintel</h3>
              <p className="mason_helper_card_desc">
                Manual concrete casting for lintel beams, pillar columns, sunshades, roof slabs, and floor base preparation.
              </p>
            </div>
            {/* Card 6 */}
            <div className="mason_helper_service_card">
              <div className="mason_helper_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="mason_helper_card_title">Renovation & Repairs</h3>
              <p className="mason_helper_card_desc">
                Complete bathroom redesign, kitchen wall modification, door frame installation, and foundation damp repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="mason_helper_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mason_helper_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Masons & Helpers?</span>
              </h2>
              <div className="mason_helper_trust_points">
                <div className="mason_helper_trust_point">
                  <div className="mason_helper_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="mason_helper_trust_point_title">Vetted Craftsmanship</h3>
                    <p className="mason_helper_trust_point_desc">
                      Safety first. We present helpers and masons with checked CNIC status and actual ratings.
                    </p>
                  </div>
                </div>
                <div className="mason_helper_trust_point">
                  <div className="mason_helper_trust_icon_box">
                    <FaHelmetSafety />
                  </div>
                  <div>
                    <h3 className="mason_helper_trust_point_title">Complete Construction Teams</h3>
                    <p className="mason_helper_trust_point_desc">
                      Find both master masons (mistri) and labor helpers (mazdoor) to handle structural tasks together.
                    </p>
                  </div>
                </div>
                <div className="mason_helper_trust_point">
                  <div className="mason_helper_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="mason_helper_trust_point_title">Zero Commissions Direct Deals</h3>
                    <p className="mason_helper_trust_point_desc">
                      Talk directly to the mason. Agree on daily dihari wages or full contract pricing without extra agency cuts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="mason_helper_trust_img_wrap">
                <Image
                  src="/assets/mason-helper.png"
                  alt="Verified mason laying bricks on Aya Sir G!"
                  width={600}
                  height={450}
                  className="mason_helper_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="mason_helper_cities_sec">
        <div className="container">
          <h2 className="mason_helper_section_heading">Find Masons & Helpers in Your City</h2>
          <div className="mason_helper_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=48${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="mason_helper_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=48${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="mason_helper_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=48${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="mason_helper_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mason_helper_faq_sec">
        <div className="container">
          <h2 className="mason_helper_section_heading">Frequently Asked Questions</h2>
          <div className="mason_helper_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a mason (mistri) or helper on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To book, browse through our local mason and construction helper profiles, check their previous work reviews and ratings, and contact them directly to negotiate daily wages or contract rates.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What construction tasks do your masons perform?</Accordion.Header>
                <Accordion.Body>
                  Our masons handle bricklaying, plastering walls, concrete mixing, floor tiling, marble laying, roof waterproofing, wall repair, and complete bathroom or kitchen renovations.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do masons charge daily wages (dihari) or take full contracts (theka)?</Accordion.Header>
                <Accordion.Body>
                  They do both. You can hire them on a daily wage basis (mistri and mazdoor separate rates) or agree on a lump-sum project contract. Discuss all pricing directly before starting.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Do I need to supply construction materials like cement, sand, and bricks?</Accordion.Header>
                <Accordion.Body>
                  Usually, clients purchase and supply all construction materials, while the mason provides the labor and manual tools. However, you can negotiate a 'material+labor' contract directly if preferred.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Are the construction helpers and masons background checked?</Accordion.Header>
                <Accordion.Body>
                  Aya Sir G! lists verified profile cards showing CNIC status and customer reviews to help you choose trusted, safe, and reliable helpers.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="mason_helper_cta_banner">
        <div className="container">
          <h2 className="mason_helper_cta_banner_h2">
            Planning Home Repairs or Tiling Work? Find Expert Masons Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=48"
            className="mason_helper_btn"
          >
            Browse Masons & Helpers
          </Link>
        </div>
      </section>
    </div>
  );
}
