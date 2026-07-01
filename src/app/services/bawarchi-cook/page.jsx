"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaUtensils,
  FaFire,
  FaPizzaSlice,
  FaCakeCandles,
  FaAppleWhole,
  FaSoap,
  FaUserShield,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./bawarchi-cook.css";

export default function BawarchiCookPage() {
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
        "name": "How to hire a cook or bawarchi on Aya Sir G?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To hire a cook or bawarchi on Aya Sir G!, browse our list of verified kitchen experts, compare their reviews and experience, and contact the chef directly."
        }
      },
      {
        "@type": "Question",
        "name": "What cuisines can the cooks prepare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our registered cooks can prepare a variety of cuisines, including traditional Pakistani (Desi), Chinese, continental, fast food, and specialized diet-friendly meals."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a cook cost in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of hiring a cook in Pakistan depends on whether they are hired full-time, part-time, or for a single event. Compare cook profiles to discuss rates directly."
        }
      },
      {
        "@type": "Question",
        "name": "Are the cooks on Aya Sir G! verified for hygiene?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Aya Sir G! verifies the profiles and credentials of cooks and bawarchis. We also recommend that parents read authentic reviews and discuss hygiene standards during the interview."
        }
      },
      {
        "@type": "Question",
        "name": "Which cities have cooks and bawarchis available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our bawarchi and cooking services are currently available in Lahore, Karachi, and Islamabad, connecting you with local experts."
        }
      }
    ]
  };

  return (
    <div className="cook_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="cook_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cook_hero_content text-center text-lg-start">
                <h1 className="cook_hero_h1">
                  Trusted Bawarchis & Cooks in Pakistan — Hire on Aya Sir G!
                </h1>
                <p className="cook_hero_subheading">
                  Find verified home cooks and professional chefs, compare professional profiles, read authentic reviews, and hire the perfect cook in minutes.
                </p>
                <div className="cook_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=22"
                    className="cook_btn cook_btn_primary"
                  >
                    Find a Bawarchi / Cook
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="cook_btn cook_btn_secondary"
                  >
                    Register as Bawarchi / Cook
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Culinary icon box */}
              <div
                style={{
                  background: "rgba(253, 126, 20, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(253, 126, 20, 0.15)",
                }}
              >
                <FaUtensils size={120} className="text-warning" style={{ color: "#fd7e14" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: 127 words) */}
      <section className="cook_content_block">
        <div className="container">
          <div className="cook_content_wrapper">
            <h2 className="cook_section_heading">Trusted Home Cook Services for Overseas Pakistanis with Aya Sir G!</h2>
            <p className="cook_content_text">
              Are you an overseas Pakistani with parents living back home but no one available to cook for them regularly? Many families in this situation try different service providers who promise "professional staff," "zero commission," and "high-quality service," but still struggle to find someone truly reliable.
            </p>
            <p className="cook_content_text">
              In reality, what matters most is not formal promises it is finding a trustworthy home cook who understands traditional Pakistani taste and can prepare and serve meals properly with care.
            </p>
            <p className="cook_content_text">
              This is why Aya Sir G! has introduced a platform where you can find hundreds of verified home cooks and domestic helpers without paying any commission. You can directly contact service providers, discuss your requirements and agree on working terms without unnecessary middlemen.
            </p>
            <p className="cook_content_text">
              For safety and transparency, Aya Sir G! recommends users to always verify profiles. You may request a CNIC copy or background check for non-verified users. However, if a service provider has a verified "green badge", you can hire them with confidence, as their profile has already been checked for authenticity.
            </p>
            <p className="cook_content_text">
              With Aya Sir G!, families can ensure their loved ones are cared for by reliable and skilled individuals, giving peace of mind even from abroad.
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
      <section className="cook_services_sec">
        <div className="container">
          <h2 className="cook_section_heading">Cooking Services Available on Aya Sir G!</h2>
          <div className="cook_services_grid">
            {/* Card 1 */}
            <div className="cook_service_card">
              <div className="cook_card_icon_wrap">
                <FaUtensils />
              </div>
              <h3 className="cook_card_title">Daily Family Meals</h3>
              <p className="cook_card_desc">
                Preparation of fresh, healthy breakfast, lunch, and dinner options tailored for your family.
              </p>
            </div>
            {/* Card 2 */}
            <div className="cook_service_card">
              <div className="cook_card_icon_wrap">
                <FaFire />
              </div>
              <h3 className="cook_card_title">Traditional Desi Cuisine</h3>
              <p className="cook_card_desc">
                Authentic preparation of Pakistani favorites like Biryani, Karahi, Korma, and Roti.
              </p>
            </div>
            {/* Card 3 */}
            <div className="cook_service_card">
              <div className="cook_card_icon_wrap">
                <FaPizzaSlice />
              </div>
              <h3 className="cook_card_title">Continental & Fast Food</h3>
              <p className="cook_card_desc">
                Expert cooking of Chinese, Italian, and fast food items for modern dietary choices.
              </p>
            </div>
            {/* Card 4 */}
            <div className="cook_service_card">
              <div className="cook_card_icon_wrap">
                <FaCakeCandles />
              </div>
              <h3 className="cook_card_title">Party & Event Catering</h3>
              <p className="cook_card_desc">
                Customized large-scale cooking services for family gatherings, Eid parties, and dinners.
              </p>
            </div>
            {/* Card 5 */}
            <div className="cook_service_card">
              <div className="cook_card_icon_wrap">
                <FaAppleWhole />
              </div>
              <h3 className="cook_card_title">Diet & Healthy Meal Prep</h3>
              <p className="cook_card_desc">
                Specialized low-oil, low-sodium, or keto-friendly cooking according to health requirements.
              </p>
            </div>
            {/* Card 6 */}
            <div className="cook_service_card">
              <div className="cook_card_icon_wrap">
                <FaSoap />
              </div>
              <h3 className="cook_card_title">Kitchen Hygiene & Management</h3>
              <p className="cook_card_desc">
                Complete kitchen cleanup, dishwashing, and safe food storage practices by experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="cook_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 cook_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Bawarchis & Cooks?</span>
              </h2>
              <div className="cook_trust_points">
                <div className="cook_trust_point">
                  <div className="cook_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="cook_trust_point_title">Verified and Reviewed Cooks</h3>
                    <p className="cook_trust_point_desc">
                      Vetted kitchen experts with real reviews from verified families.
                    </p>
                  </div>
                </div>
                <div className="cook_trust_point">
                  <div className="cook_trust_icon_box">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h3 className="cook_trust_point_title">Available Across Lahore, Karachi, and Islamabad</h3>
                    <p className="cook_trust_point_desc">
                      Find local home cooks and professional chefs near you in major cities.
                    </p>
                  </div>
                </div>
                <div className="cook_trust_point">
                  <div className="cook_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="cook_trust_point_title">Rated by Real Families</h3>
                    <p className="cook_trust_point_desc">
                      Compare ratings and experience levels to select the right cook for your budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="cook_trust_img_wrap">
                <Image
                  src="/assets/bawarchi-cook.png"
                  alt="Verified home cook preparing traditional dishes on Aya Sir G!"
                  width={600}
                  height={450}
                  className="cook_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="cook_cities_sec">
        <div className="container">
          <h2 className="cook_section_heading">Find Bawarchis & Cooks in Your City</h2>
          <div className="cook_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=22${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="cook_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=22${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="cook_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=22${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="cook_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cook_faq_sec">
        <div className="container">
          <h2 className="cook_section_heading">Frequently Asked Questions</h2>
          <div className="cook_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How to hire a cook or bawarchi on Aya Sir G?</Accordion.Header>
                <Accordion.Body>
                  To hire a cook or bawarchi on Aya Sir G!, browse our list of verified kitchen experts, compare their reviews and experience, and contact the chef directly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What cuisines can the cooks prepare?</Accordion.Header>
                <Accordion.Body>
                  Our registered cooks can prepare a variety of cuisines, including traditional Pakistani (Desi), Chinese, continental, fast food, and specialized diet-friendly meals.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How much does a cook cost in Pakistan?</Accordion.Header>
                <Accordion.Body>
                  The cost of hiring a cook in Pakistan depends on whether they are hired full-time, part-time, or for a single event. Compare cook profiles to discuss rates directly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Are the cooks on Aya Sir G! verified for hygiene?</Accordion.Header>
                <Accordion.Body>
                  Yes, Aya Sir G! verifies the profiles and credentials of cooks and bawarchis. We also recommend that parents read authentic reviews and discuss hygiene standards during the interview.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Which cities have cooks and bawarchis available?</Accordion.Header>
                <Accordion.Body>
                  Our bawarchi and cooking services are currently available in Lahore, Karachi, and Islamabad, connecting you with local experts.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="cook_cta_banner">
        <div className="container">
          <h2 className="cook_cta_banner_h2">
            Hungry for Home-Cooked Food? Find a Bawarchi Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=22"
            className="cook_btn"
          >
            Browse Bawarchis & Cooks
          </Link>
        </div>
      </section>
    </div>
  );
}
