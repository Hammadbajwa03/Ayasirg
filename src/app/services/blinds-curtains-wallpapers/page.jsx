"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaRulerCombined,
  FaPaintRoller,
  FaWindowMaximize,
  FaTrashCan,
  FaHammer,
  FaWrench,
  FaUserShield,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./blinds-curtains-wallpapers.css";

export default function BlindsCurtainsWallpapersPage() {
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
        "name": "How do I book an installation technician on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To book an installation expert, browse our list of verified profiles for blinds, curtains, and wallpaper service providers, read client reviews, compare experience, and contact them directly to schedule the work."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to purchase the blinds, curtains, or wallpaper myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you typically purchase the decorative materials (curtains, wallpapers, or blinds) based on your personal taste and room measurements. The technician will bring the professional tools, brackets, screws, and adhesive glue required to install them."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to install wallpaper in a room?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depending on the room size and complexity (pattern matching, wall preparation), installing wallpaper in a standard-sized room usually takes between 3 to 6 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Do installation technicians offer measurement services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can hire a professional to take precise measurements of your windows and walls. This ensures you purchase the correct quantity of wallpaper rolls or the exact size of custom window blinds."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to hire installers via Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Aya Sir G! verifies profiles and credentials. We encourage customers to read reviews, compare quotes, and conduct interviews before hiring."
        }
      }
    ]
  };

  return (
    <div className="blinds_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="blinds_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="blinds_hero_content text-center text-lg-start">
                <h1 className="blinds_hero_h1">
                  Professional Blinds, Curtains & Wallpaper Installation — Hire on Aya Sir G!
                </h1>
                <p className="blinds_hero_subheading">
                  Find verified installers, compare professional decorator profiles, read real reviews, and book blinds, curtains, and wallpaper fittings in minutes.
                </p>
                <div className="blinds_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=51"
                    className="blinds_btn blinds_btn_primary"
                  >
                    Find an Installer
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="blinds_btn blinds_btn_secondary"
                  >
                    Register as Installer
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Visual icon for Blinds/Interior */}
              <div
                style={{
                  background: "rgba(160, 120, 85, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(160, 120, 85, 0.15)",
                }}
              >
                <FaPaintRoller size={120} className="text-secondary" style={{ color: "#a07855" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~140 words) */}
      <section className="blinds_content_block">
        <div className="container">
          <div className="blinds_content_wrapper">
            <h2 className="blinds_section_heading">One Platform for All Home and Local Services — Aya Sir G!</h2>
            <p className="blinds_content_text">
              The aim of Aya Sir G! is to make life easier for customers by bringing essential home and local services onto a single platform.
            </p>
            <p className="blinds_content_text">
              If we look back 10 years, most restaurants had their own delivery riders with customized bikes and food boxes. Today, these have been replaced by food delivery apps. Similarly, traditional rickshaw booking or taxi arrangements have largely been replaced by ride-hailing apps.
            </p>
            <p className="blinds_content_text">
              In the same way, Aya Sir G! believes that customers should be able to access all essential services in one place. There is no need to visit nearby shops for curtain installation experts, knock on neighbors' doors to find a maid, call friends to ask for the best mechanic or go to local markets and chowks to find masons for construction work.
            </p>
            <p className="blinds_content_text">
              With Aya Sir G!, you can simply sign up and find nearby professionals such as blind installation experts, curtain fitters, wallpaper services, electricians, plumbers and other home service providers quickly and easily, all from one platform.
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
      <section className="blinds_services_sec">
        <div className="container">
          <h2 className="blinds_section_heading">Installation Services Available on Aya Sir G!</h2>
          <div className="blinds_services_grid">
            {/* Card 1 */}
            <div className="blinds_service_card">
              <div className="blinds_card_icon_wrap">
                <FaWindowMaximize />
              </div>
              <h3 className="blinds_card_title">Window Blinds Fitting</h3>
              <p className="blinds_card_desc">
                Installation of roman, roller, zebra, vertical, Venetian, and wooden window blinds.
              </p>
            </div>
            {/* Card 2 */}
            <div className="blinds_service_card">
              <div className="blinds_card_icon_wrap">
                <FaHammer />
              </div>
              <h3 className="blinds_card_title">Curtain Rods & Rod Hanging</h3>
              <p className="blinds_card_desc">
                Drilling brackets, mounting curtain tracks, rod installation, rings fitting, and draping curtains.
              </p>
            </div>
            {/* Card 3 */}
            <div className="blinds_service_card">
              <div className="blinds_card_icon_wrap">
                <FaPaintRoller />
              </div>
              <h3 className="blinds_card_title">Wallpaper Installation</h3>
              <p className="blinds_card_desc">
                Wall preparation, adhesive paste application, precise pattern matching, and wallpaper hanging.
              </p>
            </div>
            {/* Card 4 */}
            <div className="blinds_service_card">
              <div className="blinds_card_icon_wrap">
                <FaRulerCombined />
              </div>
              <h3 className="blinds_card_title">Measurement & Consultation</h3>
              <p className="blinds_card_desc">
                Accurate size measurements of window frames and walls to ensure perfect fitting and material estimates.
              </p>
            </div>
            {/* Card 5 */}
            <div className="blinds_service_card">
              <div className="blinds_card_icon_wrap">
                <FaTrashCan />
              </div>
              <h3 className="blinds_card_title">Wallpaper Removal</h3>
              <p className="blinds_card_desc">
                Removing old, torn, or damp wallpaper safely from wall plaster to prepare surfaces for new decor.
              </p>
            </div>
            {/* Card 6 */}
            <div className="blinds_service_card">
              <div className="blinds_card_icon_wrap">
                <FaWrench />
              </div>
              <h3 className="blinds_card_title">Repairs & Adjustments</h3>
              <p className="blinds_card_desc">
                Fixing broken blind cords, stuck curtain track runners, and re-pasting peeling wallpaper corners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="blinds_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 blinds_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Blinds, Curtains & Wallpaper Fitters?</span>
              </h2>
              <div className="blinds_trust_points">
                <div className="blinds_trust_point">
                  <div className="blinds_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="blinds_trust_point_title">Verified Installation Technicians</h3>
                    <p className="blinds_trust_point_desc">
                      Background-checked, experienced handymen who understand drywall, concrete, and woodwork mounting.
                    </p>
                  </div>
                </div>
                <div className="blinds_trust_point">
                  <div className="blinds_trust_icon_box">
                    <FaRulerCombined />
                  </div>
                  <div>
                    <h3 className="blinds_trust_point_title">Accurate Fitting & Zero Damp Damage</h3>
                    <p className="blinds_trust_point_desc">
                      Professionals apply correct adhesives and alignments to prevent peeling, bubbling, or loose screws.
                    </p>
                  </div>
                </div>
                <div className="blinds_trust_point">
                  <div className="blinds_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="blinds_trust_point_title">Highly Reviewed in Major Cities</h3>
                    <p className="blinds_trust_point_desc">
                      Vetted local professionals who are highly rated by homeowners in Lahore, Karachi, and Islamabad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="blinds_trust_img_wrap">
                <Image
                  src="/assets/blinds-curtains-wallpapers.png"
                  alt="Verified decorator installing curtains and wallpaper on Aya Sir G!"
                  width={600}
                  height={450}
                  className="blinds_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="blinds_cities_sec">
        <div className="container">
          <h2 className="blinds_section_heading">Find Installers in Your City</h2>
          <div className="blinds_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=51${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="blinds_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=51${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="blinds_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=51${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="blinds_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="blinds_faq_sec">
        <div className="container">
          <h2 className="blinds_section_heading">Frequently Asked Questions</h2>
          <div className="blinds_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book an installation technician on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To book an installation expert, browse our list of verified profiles for blinds, curtains, and wallpaper service providers, read client reviews, compare experience, and contact them directly to schedule the work.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do I need to purchase the blinds, curtains, or wallpaper myself?</Accordion.Header>
                <Accordion.Body>
                  Yes, you typically purchase the decorative materials (curtains, wallpapers, or blinds) based on your personal taste and room measurements. The technician will bring the professional tools, brackets, screws, and adhesive glue required to install them.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How long does it take to install wallpaper in a room?</Accordion.Header>
                <Accordion.Body>
                  Depending on the room size and complexity (pattern matching, wall preparation), installing wallpaper in a standard-sized room usually takes between 3 to 6 hours.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Do installation technicians offer measurement services?</Accordion.Header>
                <Accordion.Body>
                  Yes, you can hire a professional to take precise measurements of your windows and walls. This ensures you purchase the correct quantity of wallpaper rolls or the exact size of custom window blinds.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Is it safe to hire installers via Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Yes, Aya Sir G! verifies profiles and credentials. We encourage customers to read reviews, compare quotes, and conduct interviews before hiring.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="blinds_cta_banner">
        <div className="container">
          <h2 className="blinds_cta_banner_h2">
            Ready to Beautify Your Windows and Walls? Find an Expert Installer.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=51"
            className="blinds_btn"
          >
            Browse Installers
          </Link>
        </div>
      </section>
    </div>
  );
}
