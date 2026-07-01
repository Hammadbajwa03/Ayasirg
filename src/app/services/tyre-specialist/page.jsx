"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaWrench,
  FaGauge,
  FaRoad,
  FaCar,
  FaCircleCheck,
  FaTriangleExclamation,
  FaUserShield,
  FaClock,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./tyre-specialist.css";

export default function TyreSpecialistPage() {
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
        "name": "How do I book a tyre specialist on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply browse verified tyre specialist profiles on Aya Sir G!, compare their ratings, read customer reviews, and view their services. Contact them directly to negotiate rates and book an onsite visit or roadside assistance."
        }
      },
      {
        "@type": "Question",
        "name": "What services do tyre specialists offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our experts offer new tyre installation, wheel alignment, wheel balancing, tyre pressure calibration, tubeless puncture repair, and emergency roadside puncture assistance."
        }
      },
      {
        "@type": "Question",
        "name": "Do tyre specialists provide mobile or roadside assistance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many tyre specialists on Aya Sir G! offer mobile emergency services. If you have a flat tyre or puncture on the road in Lahore, Karachi, or Islamabad, you can call them directly to your location."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I align and balance my car wheels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is generally recommended to get your wheels balanced and aligned every 5,000 to 10,000 kilometres, or immediately if you feel your car pulling to one side or the steering wheel vibrating."
        }
      },
      {
        "@type": "Question",
        "name": "Are the tyre technicians on Aya Sir G! verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Aya Sir G! displays verified CNIC status and customer reviews on technician profiles so you can confidently hire trusted professionals near you."
        }
      }
    ]
  };

  return (
    <div className="tyre_specialist_page margin_navbar">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="tyre_specialist_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="tyre_specialist_hero_content text-center text-lg-start">
                <h1 className="tyre_specialist_hero_h1">
                  Professional Tyre Specialists — Aya Sir G!
                </h1>
                <p className="tyre_specialist_hero_subheading">
                  Find verified local tyre technicians for wheel alignment, wheel balancing, new tyre fitting, and mobile roadside puncture repair. Compare profiles and hire directly.
                </p>
                <div className="tyre_specialist_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=54"
                    className="tyre_specialist_btn tyre_specialist_btn_primary"
                  >
                    Find Tyre Specialists Near Me
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="tyre_specialist_btn tyre_specialist_btn_secondary"
                  >
                    Register as Specialist
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              <div
                style={{
                  background: "rgba(55, 65, 81, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(55, 65, 81, 0.15)",
                }}
              >
                <FaWrench size={120} style={{ color: "#374151" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block */}
      <section className="tyre_specialist_content_block">
        <div className="container">
          <div className="tyre_specialist_content_wrapper">
            <h2 className="tyre_specialist_section_heading">Flat Tyre? Find a Nearby Tyre Repair Specialist with Aya Sir G!</h2>
            <p className="tyre_specialist_content_text">
              Imagine you wake up on a busy morning, get ready for work and suddenly remember that your car had a flat tyre or puncture the night before. You need to leave on time but your car isn't ready. It's a stressful situation.
            </p>
            <p className="tyre_specialist_content_text">
              Aya Sir G! has a simple solution.
            </p>
            <p className="tyre_specialist_content_text">
              Just open the Aya Sir G! website, sign up and contact the nearest tyre repair specialist or puncture repair service. While you're taking a shower or having breakfast, a nearby professional can come to your location and fix the problem, helping you get back on the road without unnecessary delays.
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
      <section className="tyre_specialist_services_sec">
        <div className="container">
          <h2 className="tyre_specialist_section_heading">Tyre Services Available</h2>
          <div className="tyre_specialist_services_grid">
            {/* Card 1 */}
            <div className="tyre_specialist_service_card">
              <div className="tyre_specialist_card_icon_wrap">
                <FaWrench />
              </div>
              <h3 className="tyre_specialist_card_title">Tyre Fitting &amp; Rotation</h3>
              <p className="tyre_specialist_card_desc">
                Professional mounting of new tyres on rims, tyre rotation patterns to ensure even tread wear and extend tyre lifespan.
              </p>
            </div>
            {/* Card 2 */}
            <div className="tyre_specialist_service_card">
              <div className="tyre_specialist_card_icon_wrap">
                <FaCar />
              </div>
              <h3 className="tyre_specialist_card_title">3D Wheel Alignment</h3>
              <p className="tyre_specialist_card_desc">
                Adjusting wheel angles (camber, caster, toe) to manufacturer specifications to ensure straight tracking and prevent pulling.
              </p>
            </div>
            {/* Card 3 */}
            <div className="tyre_specialist_service_card">
              <div className="tyre_specialist_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="tyre_specialist_card_title">Computerized Wheel Balancing</h3>
              <p className="tyre_specialist_card_desc">
                Balancing wheel weight distribution to eliminate steering wheel vibration and ensure a smooth, stable ride at high speeds.
              </p>
            </div>
            {/* Card 4 */}
            <div className="tyre_specialist_service_card">
              <div className="tyre_specialist_card_icon_wrap">
                <FaRoad />
              </div>
              <h3 className="tyre_specialist_card_title">Mobile Roadside Puncture</h3>
              <p className="tyre_specialist_card_desc">
                Emergency call-out service to fix flat tyres, install spare tyres (stepney), or repair punctures anywhere on the road.
              </p>
            </div>
            {/* Card 5 */}
            <div className="tyre_specialist_service_card">
              <div className="tyre_specialist_card_icon_wrap">
                <FaTriangleExclamation />
              </div>
              <h3 className="tyre_specialist_card_title">Tubeless Puncture Repair</h3>
              <p className="tyre_specialist_card_desc">
                Safe repair of tyre punctures using advanced rubber plugs, patches, or internal cold vulcanizing to maintain structural integrity.
              </p>
            </div>
            {/* Card 6 */}
            <div className="tyre_specialist_service_card">
              <div className="tyre_specialist_card_icon_wrap">
                <FaGauge />
              </div>
              <h3 className="tyre_specialist_card_title">Pressure Calibration &amp; Check</h3>
              <p className="tyre_specialist_card_desc">
                Checking tyre pressure levels, nitrogen filling for lower heat generation, and valve replacement services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="tyre_specialist_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 tyre_specialist_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Tyre Services?</span>
              </h2>
              <div className="tyre_specialist_trust_points">
                <div className="tyre_specialist_trust_point">
                  <div className="tyre_specialist_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="tyre_specialist_trust_point_title">Experienced Techs &amp; Shops</h3>
                    <p className="tyre_specialist_trust_point_desc">
                      Hire verified technicians who understand tyre thread depth, wheel specs, and use calibrated machinery.
                    </p>
                  </div>
                </div>
                <div className="tyre_specialist_trust_point">
                  <div className="tyre_specialist_trust_icon_box">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="tyre_specialist_trust_point_title">24/7 Roadside Assistance</h3>
                    <p className="tyre_specialist_trust_point_desc">
                      Find mobile tyre experts available for late-night flat tyre emergencies or quick home services in your local area.
                    </p>
                  </div>
                </div>
                <div className="tyre_specialist_trust_point">
                  <div className="tyre_specialist_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="tyre_specialist_trust_point_title">Direct Pricing — No Extra Cost</h3>
                    <p className="tyre_specialist_trust_point_desc">
                      Get transparent service rates for alignment, balancing, or punctures directly from the technician. Zero middleman fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="tyre_specialist_trust_img_wrap">
                <Image
                  src="/assets/tyre-specialist.png"
                  alt="Verified tyre technician checking tyre on duty on Aya Sir G!"
                  width={600}
                  height={450}
                  className="tyre_specialist_trust_img"
                  style={{
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="tyre_specialist_cities_sec">
        <div className="container">
          <h2 className="tyre_specialist_section_heading">Find Tyre Specialists in Your City</h2>
          <div className="tyre_specialist_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=54${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="tyre_specialist_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=54${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="tyre_specialist_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=54${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="tyre_specialist_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="tyre_specialist_faq_sec">
        <div className="container">
          <h2 className="tyre_specialist_section_heading">Frequently Asked Questions</h2>
          <div className="tyre_specialist_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a tyre specialist on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Simply browse verified tyre specialist profiles on Aya Sir G!, compare their ratings, read customer reviews, and view their services. Contact them directly to negotiate rates and book an onsite visit or roadside assistance.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What services do tyre specialists offer?</Accordion.Header>
                <Accordion.Body>
                  Our experts offer new tyre installation, wheel alignment, wheel balancing, tyre pressure calibration, tubeless puncture repair, and emergency roadside puncture assistance.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do tyre specialists provide mobile or roadside assistance?</Accordion.Header>
                <Accordion.Body>
                  Yes, many tyre specialists on Aya Sir G! offer mobile emergency services. If you have a flat tyre or puncture on the road in Lahore, Karachi, or Islamabad, you can call them directly to your location.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How often should I align and balance my car wheels?</Accordion.Header>
                <Accordion.Body>
                  It is generally recommended to get your wheels balanced and aligned every 5,000 to 10,000 kilometres, or immediately if you feel your car pulling to one side or the steering wheel vibrating.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Are the tyre technicians on Aya Sir G! verified?</Accordion.Header>
                <Accordion.Body>
                  Yes, Aya Sir G! displays verified CNIC status and customer reviews on technician profiles so you can confidently hire trusted professionals near you.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="tyre_specialist_cta_banner">
        <div className="container">
          <h2 className="tyre_specialist_cta_banner_h2">
            Need New Tyres or Alignment? Find a Tyre Specialist Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=54"
            className="tyre_specialist_btn"
          >
            Browse Tyre Specialists
          </Link>
        </div>
      </section>
    </div>
  );
}
