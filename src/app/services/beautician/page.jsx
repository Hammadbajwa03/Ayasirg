"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaScissors,
  FaLeaf,
  FaHandSparkles,
  FaHeart,
  FaUserShield,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./beautician.css";

export default function BeauticianPage() {
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
        "name": "How do I book a beautician at home via Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To book a beautician, simply browse our registered home beauty profiles, check reviews, ratings, and experience levels, and contact the beautician directly to discuss details."
        }
      },
      {
        "@type": "Question",
        "name": "Do home beauticians bring their own products and equipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most professional home beauticians bring their own beauty kits, products, and portable equipment. You can confirm specific product preferences or brands directly with them before booking."
        }
      },
      {
        "@type": "Question",
        "name": "Are the beauty products used safe for all skin types?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional beauticians use standard, premium products. If you have sensitive skin or allergies, we highly recommend discussing your skin type and preferred brands with the beautician beforehand."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book a bridal or party makeup artist in advance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can browse profiles of specialized bridal and event makeup artists on our platform and book their services well in advance to secure availability for your special day."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to hire home beauticians on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Aya Sir G! verifies the credentials of registered beauticians. We also encourage you to read authentic reviews from other clients and interview them before confirming a service."
        }
      }
    ]
  };

  return (
    <div className="beautician_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="beautician_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="beautician_hero_content text-center text-lg-start">
                <h1 className="beautician_hero_h1">
                  Trusted Beauticians & Makeup Artists in Pakistan — Hire on Aya Sir G!
                </h1>
                <p className="beautician_hero_subheading">
                  Find verified home beauticians, compare professional profiles, read reviews, and book premium beauty and salon services at home.
                </p>
                <div className="beautician_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=67"
                    className="beautician_btn beautician_btn_primary"
                  >
                    Find a Beautician
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="beautician_btn beautician_btn_secondary"
                  >
                    Register as Beautician
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Beautician visual icon */}
              <div
                style={{
                  background: "rgba(214, 51, 132, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(214, 51, 132, 0.15)",
                }}
              >
                <FaHeart size={120} className="text-danger" style={{ color: "#d63384" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~140 words) */}
      <section className="beautician_content_block">
        <div className="container">
          <div className="beautician_content_wrapper">
            <h2 className="beautician_section_heading">What Does a Professional Beautician Do?</h2>
            <p className="beautician_content_text">
              A professional home beautician brings the full salon experience right to your doorstep, ensuring comfort, convenience, and hygiene. On Aya Sir G!, we connect you with the most talented beauty experts and makeup artists in Pakistan. Our registered beauticians specialize in bridal and party makeup, modern hair styling, relaxing facials, body waxing, and intricate Mehndi designs. Whether you need a quick threading session or a complete bridal transformation, our verified experts use high-quality products to achieve your desired look. Instead of wasting hours in crowded salons, you can easily hire a beautician near me by checking authentic client reviews, comparing service rates, and choosing a slot that fits your schedule. Trust Aya Sir G! for premium, safe, and professional home beauty services.
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
      <section className="beautician_services_sec">
        <div className="container">
          <h2 className="beautician_section_heading">Home Beauty Services Available on Aya Sir G!</h2>
          <div className="beautician_services_grid">
            {/* Card 1 */}
            <div className="beautician_service_card">
              <div className="beautician_card_icon_wrap">
                <FaStar />
              </div>
              <h3 className="beautician_card_title">Bridal & Party Makeup</h3>
              <p className="beautician_card_desc">
                Flawless makeup looks for weddings, engagements, and parties in the comfort of your home.
              </p>
            </div>
            {/* Card 2 */}
            <div className="beautician_service_card">
              <div className="beautician_card_icon_wrap">
                <FaScissors />
              </div>
              <h3 className="beautician_card_title">Hair Styling & Care</h3>
              <p className="beautician_card_desc">
                Professional haircuts, hair styling, blow dry, keratin treatments, and coloring services.
              </p>
            </div>
            {/* Card 3 */}
            <div className="beautician_service_card">
              <div className="beautician_card_icon_wrap">
                <FaLeaf />
              </div>
              <h3 className="beautician_card_title">Skincare & Facials</h3>
              <p className="beautician_card_desc">
                Rejuvenating facials, deep cleansing, skin polishing, and customized skincare routines.
              </p>
            </div>
            {/* Card 4 */}
            <div className="beautician_service_card">
              <div className="beautician_card_icon_wrap">
                <FaHandSparkles />
              </div>
              <h3 className="beautician_card_title">Waxing & Threading</h3>
              <p className="beautician_card_desc">
                Hygienic and gentle body waxing, facial hair removal, and precise eyebrow threading.
              </p>
            </div>
            {/* Card 5 */}
            <div className="beautician_service_card">
              <div className="beautician_card_icon_wrap">
                <FaHeart />
              </div>
              <h3 className="beautician_card_title">Manicure & Pedicure</h3>
              <p className="beautician_card_desc">
                Relaxing nail spa treatments, standard grooming, cuticle care, and professional nail art.
              </p>
            </div>
            {/* Card 6 */}
            <div className="beautician_service_card">
              <div className="beautician_card_icon_wrap">
                <FaHandSparkles />
              </div>
              <h3 className="beautician_card_title">Mehndi (Henna) Art</h3>
              <p className="beautician_card_desc">
                Beautiful, intricate Arabic, bridal, and traditional Mehndi designs for all festive occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="beautician_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 beautician_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Beauticians & Makeup Artists?</span>
              </h2>
              <div className="beautician_trust_points">
                <div className="beautician_trust_point">
                  <div className="beautician_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="beautician_trust_point_title">Verified & Certified Experts</h3>
                    <p className="beautician_trust_point_desc">
                      All registered beauticians undergo background checks and credentials verification for safety.
                    </p>
                  </div>
                </div>
                <div className="beautician_trust_point">
                  <div className="beautician_trust_icon_box">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h3 className="beautician_trust_point_title">Salon Experience at Doorstep</h3>
                    <p className="beautician_trust_point_desc">
                      Available across Lahore, Karachi, and Islamabad to provide comfortable beauty sessions at home.
                    </p>
                  </div>
                </div>
                <div className="beautician_trust_point">
                  <div className="beautician_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="beautician_trust_point_title">Hygienic & Premium Standards</h3>
                    <p className="beautician_trust_point_desc">
                      Beauticians use sanitized equipment and follow high standards of personal hygiene.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="beautician_trust_img_wrap">
                <Image
                  src="/assets/beautician.png"
                  alt="Verified home beautician providing parlor service on Aya Sir G!"
                  width={600}
                  height={450}
                  className="beautician_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="beautician_cities_sec">
        <div className="container">
          <h2 className="beautician_section_heading">Find Beauticians in Your City</h2>
          <div className="beautician_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=67${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="beautician_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=67${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="beautician_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=67${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="beautician_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="beautician_faq_sec">
        <div className="container">
          <h2 className="beautician_section_heading">Frequently Asked Questions</h2>
          <div className="beautician_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a beautician at home via Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To book a beautician, simply browse our registered home beauty profiles, check reviews, ratings, and experience levels, and contact the beautician directly to discuss details.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do home beauticians bring their own products and equipment?</Accordion.Header>
                <Accordion.Body>
                  Yes, most professional home beauticians bring their own beauty kits, products, and portable equipment. You can confirm specific product preferences or brands directly with them before booking.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Are the beauty products used safe for all skin types?</Accordion.Header>
                <Accordion.Body>
                  Professional beauticians use standard, premium products. If you have sensitive skin or allergies, we highly recommend discussing your skin type and preferred brands with the beautician beforehand.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Can I book a bridal or party makeup artist in advance?</Accordion.Header>
                <Accordion.Body>
                  Yes, you can browse profiles of specialized bridal and event makeup artists on our platform and book their services well in advance to secure availability for your special day.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Is it safe to hire home beauticians on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Absolutely. Aya Sir G! verifies the credentials of registered beauticians. We also encourage you to read authentic reviews from other clients and interview them before confirming a service.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="beautician_cta_banner">
        <div className="container">
          <h2 className="beautician_cta_banner_h2">
            Ready to Glow? Book a Professional Beautician Today.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=67"
            className="beautician_btn"
          >
            Browse Home Beauticians
          </Link>
        </div>
      </section>
    </div>
  );
}
