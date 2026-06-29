"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaBaby,
  FaChildren,
  FaBookOpen,
  FaUtensils,
  FaPalette,
  FaMoon,
  FaUserShield,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./babysitter-nanny.css";

export default function BabysitterNannyPage() {
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
        "name": "How to hire a baby sitter or nanny on Aya Sir G?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To hire a baby sitter or nanny on Aya Sir G!, browse our list of verified childcare profiles, compare reviews, ratings, and experience levels, and contact the caregiver directly."
        }
      },
      {
        "@type": "Question",
        "name": "What age groups do the nannies service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our registered nannies offer care for various age groups, including newborns, infants, toddlers, preschoolers, and school-age children."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a nanny or baby sitter cost in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of hiring a nanny or baby sitter in Pakistan depends on the duration (part-time, full-time, or monthly) and specific duties. Compare caregiver profiles to discuss rates that suit your budget."
        }
      },
      {
        "@type": "Question",
        "name": "Are the nannies on Aya Sir G! verified for safety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Aya Sir G! verifies the profiles and credentials of nannies and baby sitters. We also encourage parents to read authentic customer reviews and conduct interviews before hiring."
        }
      },
      {
        "@type": "Question",
        "name": "Which cities have baby sitters and nannies available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our babysitting and nanny services are currently available in Lahore, Karachi, and Islamabad, connecting you with local experts."
        }
      }
    ]
  };

  return (
    <div className="nanny_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="nanny_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="nanny_hero_content text-center text-lg-start">
                <h1 className="nanny_hero_h1">
                  Trusted Baby Sitters & Nannies in Pakistan — Hire on Aya Sir G!
                </h1>
                <p className="nanny_hero_subheading">
                  Find verified baby sitters, compare professional profiles, read authentic reviews, and hire a loving caregiver in minutes.
                </p>
                <div className="nanny_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=19"
                    className="nanny_btn nanny_btn_primary"
                  >
                    Find a Baby Sitter / Nanny
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="nanny_btn nanny_btn_secondary"
                  >
                    Register as Baby Sitter / Nanny
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Caregiver visual icon */}
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
                <FaChildren size={120} className="text-danger" style={{ color: "#d63384" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: 132 words) */}
      <section className="nanny_content_block">
        <div className="container">
          <div className="nanny_content_wrapper">
            <h2 className="nanny_section_heading">What Does a Baby Sitter or Nanny Do?</h2>
            <p className="nanny_content_text">
              A professional baby sitter or nanny plays a crucial role in your child's growth, safety, and daily care. On Aya Sir G!, we connect busy parents with the most caring and trusted nanny in Pakistan. Our registered child care experts specialize in full-time or part-time babysitting service, infant care, and toddler supervision. From preparing healthy meals and helping with early education to organizing fun, creative playtime, our nannies provide dedicated attention to your children. Instead of struggling to find references, you can easily hire a nanny near me by comparing verified profiles, reading authentic reviews, and matching experience levels. Trust Aya Sir G! to help you find a reliable and loving baby sitter who ensures your peace of mind while you work or manage household chores.
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
      <section className="nanny_services_sec">
        <div className="container">
          <h2 className="nanny_section_heading">Childcare Services Available on Aya Sir G!</h2>
          <div className="nanny_services_grid">
            {/* Card 1 */}
            <div className="nanny_service_card">
              <div className="nanny_card_icon_wrap">
                <FaBaby />
              </div>
              <h3 className="nanny_card_title">Newborn and Infant Care</h3>
              <p className="nanny_card_desc">
                Specialized care for newborns, including feeding, diapering, and sleep routine management.
              </p>
            </div>
            {/* Card 2 */}
            <div className="nanny_service_card">
              <div className="nanny_card_icon_wrap">
                <FaChildren />
              </div>
              <h3 className="nanny_card_title">Toddler and Preschooler Supervision</h3>
              <p className="nanny_card_desc">
                Engaging and safe supervision for active toddlers, focusing on developmental activities.
              </p>
            </div>
            {/* Card 3 */}
            <div className="nanny_service_card">
              <div className="nanny_card_icon_wrap">
                <FaBookOpen />
              </div>
              <h3 className="nanny_card_title">School-Age Child Support</h3>
              <p className="nanny_card_desc">
                After-school care, homework assistance, and managing educational play schedules.
              </p>
            </div>
            {/* Card 4 */}
            <div className="nanny_service_card">
              <div className="nanny_card_icon_wrap">
                <FaUtensils />
              </div>
              <h3 className="nanny_card_title">Meal Preparation for Kids</h3>
              <p className="nanny_card_desc">
                Preparing nutritious, child-friendly meals and snacks based on dietary guidelines.
              </p>
            </div>
            {/* Card 5 */}
            <div className="nanny_service_card">
              <div className="nanny_card_icon_wrap">
                <FaPalette />
              </div>
              <h3 className="nanny_card_title">Creative Play and Learning</h3>
              <p className="nanny_card_desc">
                Organizing arts, crafts, storytelling, and indoor/outdoor games to support learning.
              </p>
            </div>
            {/* Card 6 */}
            <div className="nanny_service_card">
              <div className="nanny_card_icon_wrap">
                <FaMoon />
              </div>
              <h3 className="nanny_card_title">Emergency & Night Babysitting</h3>
              <p className="nanny_card_desc">
                Flexible, on-demand childcare support for date nights, work trips, or sudden emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="nanny_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 nanny_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Baby Sitters & Nannies?</span>
              </h2>
              <div className="nanny_trust_points">
                <div className="nanny_trust_point">
                  <div className="nanny_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="nanny_trust_point_title">Verified and Reviewed Caregivers</h3>
                    <p className="nanny_trust_point_desc">
                      Vetted profiles with background checks and customer reviews for complete safety.
                    </p>
                  </div>
                </div>
                <div className="nanny_trust_point">
                  <div className="nanny_trust_icon_box">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h3 className="nanny_trust_point_title">Available Across Lahore, Karachi, and Islamabad</h3>
                    <p className="nanny_trust_point_desc">
                      Connect with local caregivers in major cities of Pakistan near your area.
                    </p>
                  </div>
                </div>
                <div className="nanny_trust_point">
                  <div className="nanny_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="nanny_trust_point_title">Trusted by Real Parents</h3>
                    <p className="nanny_trust_point_desc">
                      Check reviews and ratings left by other families to choose the right fit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="nanny_trust_img_wrap">
                <Image
                  src="/assets/babysitter-nanny.png"
                  alt="Verified baby sitter and nanny providing childcare on Aya Sir G!"
                  width={600}
                  height={450}
                  className="nanny_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="nanny_cities_sec">
        <div className="container">
          <h2 className="nanny_section_heading">Find Baby Sitters & Nannies in Your City</h2>
          <div className="nanny_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=19${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="nanny_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=19${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="nanny_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=19${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="nanny_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="nanny_faq_sec">
        <div className="container">
          <h2 className="nanny_section_heading">Frequently Asked Questions</h2>
          <div className="nanny_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How to hire a baby sitter or nanny on Aya Sir G?</Accordion.Header>
                <Accordion.Body>
                  To hire a baby sitter or nanny on Aya Sir G!, browse our list of verified childcare profiles, compare reviews, ratings, and experience levels, and contact the caregiver directly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What age groups do the nannies service?</Accordion.Header>
                <Accordion.Body>
                  Our registered nannies offer care for various age groups, including newborns, infants, toddlers, preschoolers, and school-age children.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How much does a nanny or baby sitter cost in Pakistan?</Accordion.Header>
                <Accordion.Body>
                  The cost of hiring a nanny or baby sitter in Pakistan depends on the duration (part-time, full-time, or monthly) and specific duties. Compare caregiver profiles to discuss rates that suit your budget.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Are the nannies on Aya Sir G! verified for safety?</Accordion.Header>
                <Accordion.Body>
                  Yes, Aya Sir G! verifies the profiles and credentials of nannies and baby sitters. We also encourage parents to read authentic customer reviews and conduct interviews before hiring.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Which cities have baby sitters and nannies available?</Accordion.Header>
                <Accordion.Body>
                  Our babysitting and nanny services are currently available in Lahore, Karachi, and Islamabad, connecting you with local experts.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="nanny_cta_banner">
        <div className="container">
          <h2 className="nanny_cta_banner_h2">
            Need Trusted Childcare? Find a Baby Sitter Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=19"
            className="nanny_btn"
          >
            Browse Baby Sitters & Nannies
          </Link>
        </div>
      </section>
    </div>
  );
}
