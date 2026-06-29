"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaScissors,
  FaSpa,
  FaFaceSmile,
  FaWandMagic,
  FaCircleCheck,
  FaHandSparkles,
  FaUserShield,
  FaStar,
  FaClock,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./salon-worker.css";

export default function SalonWorkerPage() {
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
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I hire a salon worker or beautician on Aya Sir G!?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Browse verified salon worker profiles on Aya Sir G!, check their service specializations, customer ratings, and portfolio, then contact them directly to book an appointment at their salon or for a home visit.",
        },
      },
      {
        "@type": "Question",
        name: "What beauty services are available on Aya Sir G!?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our salon workers offer haircuts, hair colouring, blow-dry styling, bridal makeup, facial treatments, waxing, threading, manicure, pedicure, mehendi (henna), and complete bridal grooming packages.",
        },
      },
      {
        "@type": "Question",
        name: "Can I book a salon worker for a home visit in Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many beauticians and salon workers on Aya Sir G! offer home visit services for weddings, events, and personal grooming. Contact them directly to confirm availability, pricing, and location coverage.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a bridal makeup artist charge in Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bridal makeup costs in Pakistan vary widely — from PKR 10,000 for basic makeup to PKR 80,000+ for top artists with airbrush, HD, or international techniques. Browse and compare packages directly on Aya Sir G!.",
        },
      },
      {
        "@type": "Question",
        name: "Are the salon workers and beauticians on Aya Sir G! verified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aya Sir G! displays profile cards with CNIC verification status and genuine customer reviews to help you confidently choose the right beautician or salon worker for your needs.",
        },
      },
    ],
  };

  return (
    <div className="salon_worker_page margin_navbar">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="salon_worker_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="salon_worker_hero_content text-center text-lg-start">
                <h1 className="salon_worker_hero_h1">
                  Salon Workers &amp; Beauticians — Aya Sir G!
                </h1>
                <p className="salon_worker_hero_subheading">
                  Find verified local salon workers and beauticians for haircuts, styling, bridal makeup, facials, waxing, and all beauty services. Compare profiles and book directly.
                </p>
                <div className="salon_worker_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=45"
                    className="salon_worker_btn salon_worker_btn_primary"
                  >
                    Find Salon Workers Near Me
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="salon_worker_btn salon_worker_btn_secondary"
                  >
                    Register as Salon Worker
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              <div
                style={{
                  background: "rgba(190, 24, 93, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(190, 24, 93, 0.15)",
                }}
              >
                <FaScissors size={110} style={{ color: "#be185d" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block */}
      <section className="salon_worker_content_block">
        <div className="container">
          <div className="salon_worker_content_wrapper">
            <h2 className="salon_worker_section_heading">
              What Does a Salon Worker &amp; Beautician Do?
            </h2>
            <p className="salon_worker_content_text">
              A skilled salon worker or beautician transforms your appearance and boosts your confidence with professional grooming and beauty treatments. In Pakistan, trained salon workers handle everything from everyday haircuts and blow-dry styling to complex bridal makeup, full head hair colouring, skin care facials, threading, waxing, and nail treatments. On Aya Sir G!, we connect you with verified, experienced salon workers and freelance beauticians who can serve you at their salon or visit your home for weddings and special events. Whether you are looking for a talented bridal makeup artist in Lahore's Gulberg, a professional hairstylist in Karachi's Defence, or a reliable threading and waxing specialist near your home in Islamabad's F-7 sector, browse their profiles, check real customer reviews and portfolio photos, and contact them directly — no booking agency fees needed. Find the perfect beauty professional near you today on Aya Sir G!.
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

      {/* Services Grid */}
      <section className="salon_worker_services_sec">
        <div className="container">
          <h2 className="salon_worker_section_heading">
            Salon &amp; Beauty Services Available
          </h2>
          <div className="salon_worker_services_grid">
            {/* Card 1 */}
            <div className="salon_worker_service_card">
              <div className="salon_worker_card_icon_wrap">
                <FaScissors />
              </div>
              <h3 className="salon_worker_card_title">Haircut &amp; Styling</h3>
              <p className="salon_worker_card_desc">
                Professional haircuts, blow-dry styling, hair setting, keratin treatments, and hair smoothening for women, men, and children.
              </p>
            </div>
            {/* Card 2 */}
            <div className="salon_worker_service_card">
              <div className="salon_worker_card_icon_wrap">
                <FaWandMagic />
              </div>
              <h3 className="salon_worker_card_title">Bridal Makeup &amp; Grooming</h3>
              <p className="salon_worker_card_desc">
                Complete bridal packages including airbrush makeup, HD foundation, Walima looks, party glam, and engagement grooming for brides and grooms.
              </p>
            </div>
            {/* Card 3 */}
            <div className="salon_worker_service_card">
              <div className="salon_worker_card_icon_wrap">
                <FaFaceSmile />
              </div>
              <h3 className="salon_worker_card_title">Facial &amp; Skin Treatments</h3>
              <p className="salon_worker_card_desc">
                Deep cleansing facials, whitening treatments, anti-aging facials, blackhead removal, bleach, and skin brightening sessions for a glowing complexion.
              </p>
            </div>
            {/* Card 4 */}
            <div className="salon_worker_service_card">
              <div className="salon_worker_card_icon_wrap">
                <FaSpa />
              </div>
              <h3 className="salon_worker_card_title">Waxing &amp; Threading</h3>
              <p className="salon_worker_card_desc">
                Full body and partial waxing, eyebrow threading, upper lip threading, and facial hair removal using premium quality wax and threading techniques.
              </p>
            </div>
            {/* Card 5 */}
            <div className="salon_worker_service_card">
              <div className="salon_worker_card_icon_wrap">
                <FaHandSparkles />
              </div>
              <h3 className="salon_worker_card_title">Manicure &amp; Pedicure</h3>
              <p className="salon_worker_card_desc">
                Classic and gel nail manicure, pedicure, nail art, extension nails, and foot spa treatments for perfectly groomed hands and feet.
              </p>
            </div>
            {/* Card 6 */}
            <div className="salon_worker_service_card">
              <div className="salon_worker_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="salon_worker_card_title">Mehendi &amp; Hair Colour</h3>
              <p className="salon_worker_card_desc">
                Bridal and party mehendi (henna) application, hair colouring with highlights, balayage, ombre, and full colour treatments using global brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="salon_worker_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 salon_worker_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Salon Workers?</span>
              </h2>
              <div className="salon_worker_trust_points">
                <div className="salon_worker_trust_point">
                  <div className="salon_worker_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="salon_worker_trust_point_title">
                      Verified Beauty Professionals
                    </h3>
                    <p className="salon_worker_trust_point_desc">
                      Every salon worker and beautician on Aya Sir G! has a CNIC-verified profile with real customer ratings and work photos so you know exactly who you're booking.
                    </p>
                  </div>
                </div>
                <div className="salon_worker_trust_point">
                  <div className="salon_worker_trust_icon_box">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="salon_worker_trust_point_title">
                      Home Visits Available
                    </h3>
                    <p className="salon_worker_trust_point_desc">
                      Many beauticians offer convenient home visit services for weddings, parties, and personal grooming — beautifully done without leaving your home.
                    </p>
                  </div>
                </div>
                <div className="salon_worker_trust_point">
                  <div className="salon_worker_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="salon_worker_trust_point_title">
                      Direct Booking — No Agency Fees
                    </h3>
                    <p className="salon_worker_trust_point_desc">
                      Contact beauticians directly, get fair quotes for services, and pay only for the treatment — without extra commissions to booking platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="salon_worker_trust_img_wrap">
                <Image
                  src="/assets/salon-worker.png"
                  alt="Verified salon worker at work on Aya Sir G!"
                  width={600}
                  height={450}
                  className="salon_worker_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="salon_worker_cities_sec">
        <div className="container">
          <h2 className="salon_worker_section_heading">
            Find Salon Workers in Your City
          </h2>
          <div className="salon_worker_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=45${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="salon_worker_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=45${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="salon_worker_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=45${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="salon_worker_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="salon_worker_faq_sec">
        <div className="container">
          <h2 className="salon_worker_section_heading">
            Frequently Asked Questions
          </h2>
          <div className="salon_worker_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How do I hire a salon worker or beautician on Aya Sir G!?
                </Accordion.Header>
                <Accordion.Body>
                  Browse verified salon worker profiles on Aya Sir G!, check their service specializations, customer ratings, and portfolio, then contact them directly to book an appointment at their salon or for a home visit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What beauty services are available on Aya Sir G!?
                </Accordion.Header>
                <Accordion.Body>
                  Our salon workers offer haircuts, hair colouring, blow-dry styling, bridal makeup, facial treatments, waxing, threading, manicure, pedicure, mehendi (henna), and complete bridal grooming packages.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Can I book a salon worker for a home visit in Pakistan?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. Many beauticians and salon workers on Aya Sir G! offer home visit services for weddings, events, and personal grooming. Contact them directly to confirm availability, pricing, and location coverage.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How much does a bridal makeup artist charge in Pakistan?
                </Accordion.Header>
                <Accordion.Body>
                  Bridal makeup costs in Pakistan vary widely — from PKR 10,000 for basic makeup to PKR 80,000+ for top artists with airbrush, HD, or international techniques. Browse and compare packages directly on Aya Sir G!.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Are the salon workers and beauticians on Aya Sir G! verified?
                </Accordion.Header>
                <Accordion.Body>
                  Aya Sir G! displays profile cards with CNIC verification status and genuine customer reviews to help you confidently choose the right beautician or salon worker for your needs.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="salon_worker_cta_banner">
        <div className="container">
          <h2 className="salon_worker_cta_banner_h2">
            Looking for a Beauty Professional? Find One Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=45"
            className="salon_worker_btn"
          >
            Browse Salon Workers &amp; Beauticians
          </Link>
        </div>
      </section>
    </div>
  );
}
