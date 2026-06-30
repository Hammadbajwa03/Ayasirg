"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaLeaf,
  FaTree,
  FaScissors,
  FaSeedling,
  FaWater,
  FaTag,
  FaUserShield,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./gardener-mali.css";

export default function GardenerMaliPage() {
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
        "name": "How do I hire a gardener or Mali on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To hire, browse through our verified gardener profiles, check their reviews, ratings, and experience levels, and contact them directly to negotiate schedules, duties, and monthly salary or daily fees."
        }
      },
      {
        "@type": "Question",
        "name": "What are the standard visitation packages (weekly vs monthly)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gardeners on our platform offer flexible plans: 2-3 visits per week for regular watering and weeding, once-a-week visits for lawn mowing and trimming, or full-time monthly placements for large houses and corporate lawns."
        }
      },
      {
        "@type": "Question",
        "name": "Do gardeners bring their own mowing machines and tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, visiting gardeners carry basic hand tools like trowels, pruning shears, and sickles. For heavy machinery like lawn mowers, hedge trimmers, or long water pipes, you can negotiate with them to bring their own equipment for an additional fee, or use the tools available at your home."
        }
      },
      {
        "@type": "Question",
        "name": "Who pays for the new plants, soil, and organic fertilizers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of nursery plants, sweet soil (Bhal), manure (Khadd), and pots is paid by the client. The gardener can accompany you to the nursery to help select the best plants or purchase them on your behalf and present the receipts."
        }
      },
      {
        "@type": "Question",
        "name": "Can I hire a gardener for vertical garden setup or landscape designing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our platform lists skilled landscape designers and vertical gardening experts who can design, construct, and plant modern green walls, rooftop gardens, and custom patios."
        }
      }
    ]
  };

  return (
    <div className="gardener_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="gardener_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="gardener_hero_content text-center text-lg-start">
                <h1 className="gardener_hero_h1">
                  Professional Gardeners & Mali Services in Pakistan — Aya Sir G!
                </h1>
                <p className="gardener_hero_subheading">
                  Find verified gardeners, compare local Mali profiles, read real customer reviews, and hire landscaping experts.
                </p>
                <div className="gardener_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=20"
                    className="gardener_btn gardener_btn_primary"
                  >
                    Find a Gardener
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="gardener_btn gardener_btn_secondary"
                  >
                    Register as Mali
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Gardener visual icon */}
              <div
                style={{
                  background: "rgba(5, 150, 105, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(5, 150, 105, 0.15)",
                }}
              >
                <FaLeaf size={120} className="text-secondary" style={{ color: "#059669" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~150 words) */}
      <section className="gardener_content_block">
        <div className="container">
          <div className="gardener_content_wrapper">
            <h2 className="gardener_section_heading">What Does a Gardener or Mali Do?</h2>
            <p className="gardener_content_text">
              A skilled gardener, also known as a mali, helps maintain healthy and beautiful outdoor spaces for homes, offices, parks, and commercial properties. In Lahore, Pakistan, professional gardeners provide services such as lawn mowing, plant care, tree trimming, hedge cutting, garden maintenance, seasonal planting, flower bed design, landscaping, irrigation support, weed removal, and garden cleaning. Regular garden care enhances the beauty of your property while keeping plants healthy throughout the year. Whether you need a full-time mali, part-time gardener, or a landscaping expert for a new garden project, Aya Sir G connects you with trusted gardening professionals in Lahore who offer reliable residential and commercial garden maintenance and landscaping services tailored to your needs.
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
      <section className="gardener_services_sec">
        <div className="container">
          <h2 className="gardener_section_heading">Gardening Services Available on Aya Sir G!</h2>
          <div className="gardener_services_grid">
            {/* Card 1 */}
            <div className="gardener_service_card">
              <div className="gardener_card_icon_wrap">
                <FaScissors />
              </div>
              <h3 className="gardener_card_title">Lawn Mowing & Weeding</h3>
              <p className="gardener_card_desc">
                Trimming overgrown lawns with rotary lawn mowers, cleaning grass borders, and manually extracting unwanted weeds.
              </p>
            </div>
            {/* Card 2 */}
            <div className="gardener_service_card">
              <div className="gardener_card_icon_wrap">
                <FaTree />
              </div>
              <h3 className="gardener_card_title">Hedge & Shrub Pruning</h3>
              <p className="gardener_card_desc">
                Precision trimming of boundary hedges, ornamental green bushes, and tree branches into clean geometric shapes.
              </p>
            </div>
            {/* Card 3 */}
            <div className="gardener_service_card">
              <div className="gardener_card_icon_wrap">
                <FaSeedling />
              </div>
              <h3 className="gardener_card_title">Seasonal Flower Plantation</h3>
              <p className="gardener_card_desc">
                Planting vibrant winter and summer flowerbeds, roses, Jasmine, indoor palms, and evergreen shrubs.
              </p>
            </div>
            {/* Card 4 */}
            <div className="gardener_service_card">
              <div className="gardener_card_icon_wrap">
                <FaLeaf />
              </div>
              <h3 className="gardener_card_title">Soil Fertilization & Manure</h3>
              <p className="gardener_card_desc">
                Applying organic compost, sweet soil (Bhal), organic cow manure (Khadd), and treating soil against pests.
              </p>
            </div>
            {/* Card 5 */}
            <div className="gardener_service_card">
              <div className="gardener_card_icon_wrap">
                <FaWater />
              </div>
              <h3 className="gardener_card_title">Irrigation & Sprinkler Setup</h3>
              <p className="gardener_card_desc">
                Installing water pipes, setting up automated lawn sprinkler heads, and designing drip irrigation for pots.
              </p>
            </div>
            {/* Card 6 */}
            <div className="gardener_service_card">
              <div className="gardener_card_icon_wrap">
                <FaTag />
              </div>
              <h3 className="gardener_card_title">Balcony & Patio Gardening</h3>
              <p className="gardener_card_desc">
                Designing balcony pot grids, mounting hanging plant baskets, setting up kitchen herb tables, and vertical green walls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="gardener_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 gardener_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Professional Malis?</span>
              </h2>
              <div className="gardener_trust_points">
                <div className="gardener_trust_point">
                  <div className="gardener_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="gardener_trust_point_title">Experienced & Knowledgeable Malis</h3>
                    <p className="gardener_trust_point_desc">
                      Find gardeners who have deep knowledge of local Pakistani plants, seasonal schedules, and soil nutrition.
                    </p>
                  </div>
                </div>
                <div className="gardener_trust_point">
                  <div className="gardener_trust_icon_box">
                    <FaSeedling />
                  </div>
                  <div>
                    <h3 className="gardener_trust_point_title">Flexible Maintenance Packages</h3>
                    <p className="gardener_trust_point_desc">
                      Choose between full-time Malis, weekly visitation plans, or one-off complete garden cleanups.
                    </p>
                  </div>
                </div>
                <div className="gardener_trust_point">
                  <div className="gardener_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="gardener_trust_point_title">Direct Contracting & Negotiations</h3>
                    <p className="gardener_trust_point_desc">
                      Contact listed gardeners directly, negotiate monthly salaries or daily rates, and pay with no commissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="gardener_trust_img_wrap">
                <Image
                  src="/assets/gardener-mali.png"
                  alt="Verified gardener pruning plants on Aya Sir G!"
                  width={600}
                  height={450}
                  className="gardener_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="gardener_cities_sec">
        <div className="container">
          <h2 className="gardener_section_heading">Find Gardeners in Your City</h2>
          <div className="gardener_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=20${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="gardener_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=20${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="gardener_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=20${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="gardener_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="gardener_faq_sec">
        <div className="container">
          <h2 className="gardener_section_heading">Frequently Asked Questions</h2>
          <div className="gardener_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I hire a gardener or Mali on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To hire, browse through our verified gardener profiles, check their reviews, ratings, and experience levels, and contact them directly to negotiate schedules, duties, and monthly salary or daily fees.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What are the standard visitation packages (weekly vs monthly)?</Accordion.Header>
                <Accordion.Body>
                  Gardeners on our platform offer flexible plans: 2-3 visits per week for regular watering and weeding, once-a-week visits for lawn mowing and trimming, or full-time monthly placements for large houses and corporate lawns.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do gardeners bring their own mowing machines and tools?</Accordion.Header>
                <Accordion.Body>
                  Typically, visiting gardeners carry basic hand tools like trowels, pruning shears, and sickles. For heavy machinery like lawn mowers, hedge trimmers, or long water pipes, you can negotiate with them to bring their own equipment for an additional fee, or use the tools available at your home.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Who pays for the new plants, soil, and organic fertilizers?</Accordion.Header>
                <Accordion.Body>
                  The cost of nursery plants, sweet soil (Bhal), manure (Khadd), and pots is paid by the client. The gardener can accompany you to the nursery to help select the best plants or purchase them on your behalf and present the receipts.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Can I hire a gardener for vertical garden setup or landscape designing?</Accordion.Header>
                <Accordion.Body>
                  Yes. Our platform lists skilled landscape designers and vertical gardening experts who can design, construct, and plant modern green walls, rooftop gardens, and custom patios.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="gardener_cta_banner">
        <div className="container">
          <h2 className="gardener_cta_banner_h2">
            Want a Lush, Beautifully Maintained Lawn? Find a Gardener Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=20"
            className="gardener_btn"
          >
            Browse Verified Malis
          </Link>
        </div>
      </section>
    </div>
  );
}
