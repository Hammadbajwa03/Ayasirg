"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaHeartPulse,
  FaPills,
  FaStethoscope,
  FaHandHoldingHeart,
  FaBed,
  FaHeart,
  FaUserShield,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./caretaker.css";

export default function CaretakerPage() {
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
        "name": "How do I book a caretaker on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To book a caretaker, browse through our verified profiles for elderly caregivers and patient caretakers, check customer reviews and ratings, and contact them directly to schedule shifts."
        }
      },
      {
        "@type": "Question",
        "name": "Are the caretakers trained to handle medical emergencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many of our registered caretakers have basic nursing or first-aid training. However, it is important to review individual profiles or discuss specific emergency handling protocols directly with the caretaker before hiring."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book a caretaker for night shifts only?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, caretakers offer flexible shifts, including day care, night shifts, hourly shifts, or 24/7 live-in support. You can align shift schedules directly with the professional caregiver."
        }
      },
      {
        "@type": "Question",
        "name": "How is the caretaker's background verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aya Sir G! conducts identity and credential verifications for registered service providers. We also encourage you to check reviews left by previous clients and request ID documents during your interview."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of hiring a home caretaker in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost varies depending on the caregiver's experience, patient condition, shift duration, and location. You can compare caregiver profiles to find services that fit your budget."
        }
      }
    ]
  };

  return (
    <div className="caretaker_page margin_navbar">
      {/* FAQ Schema Injection for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="caretaker_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="caretaker_hero_content text-center text-lg-start">
                <h1 className="caretaker_hero_h1">
                  Trusted Patient Caretakers & Elderly Caregivers in Pakistan — Hire on Aya Sir G!
                </h1>
                <p className="caretaker_hero_subheading">
                  Find verified home caretakers, compare caregiver profiles, read real reviews, and hire professional patient care assistants in minutes.
                </p>
                <div className="caretaker_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=66"
                    className="caretaker_btn caretaker_btn_primary"
                  >
                    Find a Caretaker
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="caretaker_btn caretaker_btn_secondary"
                  >
                    Register as Caretaker
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              {/* Caretaker visual icon */}
              <div
                style={{
                  background: "rgba(13, 138, 158, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(13, 138, 158, 0.15)",
                }}
              >
                <FaHeartPulse size={120} className="text-secondary" style={{ color: "#0d8a9e" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block (Word Count: ~140 words) */}
      <section className="caretaker_content_block">
        <div className="container">
          <div className="caretaker_content_wrapper">
            <h2 className="caretaker_section_heading">What Does a Professional Patient Caretaker Do?</h2>
            <p className="caretaker_content_text">
              A professional home patient caretaker provides essential medical, physical, and emotional support to individuals recovering from surgery, chronic illnesses, or elderly family members. On Aya Sir G!, we connect you with the most compassionate and vetted caregivers in Pakistan. Our registered caretakers manage critical daily tasks including medication schedules, vital health tracking (blood pressure, blood sugar, and pulse), mobility exercises, and physical therapy transfers. They also assist with essential personal hygiene tasks such as bathing, grooming, and nutritious meal feeding. Instead of struggling with hospital setups, you can easily hire a caregiver near me to ensure clinical comfort at home. Trust Aya Sir G! for vetted, skilled, and warm patient care that gives your family peace of mind.
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
      <section className="caretaker_services_sec">
        <div className="container">
          <h2 className="caretaker_section_heading">Caretaker Services Available on Aya Sir G!</h2>
          <div className="caretaker_services_grid">
            {/* Card 1 */}
            <div className="caretaker_service_card">
              <div className="caretaker_card_icon_wrap">
                <FaHandHoldingHeart />
              </div>
              <h3 className="caretaker_card_title">Elderly Care & Support</h3>
              <p className="caretaker_card_desc">
                Dedicated daily support for senior citizens, assisting with daily movements, hygiene, and companionship.
              </p>
            </div>
            {/* Card 2 */}
            <div className="caretaker_service_card">
              <div className="caretaker_card_icon_wrap">
                <FaBed />
              </div>
              <h3 className="caretaker_card_title">Post-Operative Recovery</h3>
              <p className="caretaker_card_desc">
                Bedside support and hygiene management for patients recovering from surgery, fractures, or major medical treatments.
              </p>
            </div>
            {/* Card 3 */}
            <div className="caretaker_service_card">
              <div className="caretaker_card_icon_wrap">
                <FaHeart />
              </div>
              <h3 className="caretaker_card_title">Mobility & Transfers</h3>
              <p className="caretaker_card_desc">
                Safe assistance for patients transferring from bed to wheelchair, daily walks, and light physical exercises.
              </p>
            </div>
            {/* Card 4 */}
            <div className="caretaker_service_card">
              <div className="caretaker_card_icon_wrap">
                <FaPills />
              </div>
              <h3 className="caretaker_card_title">Medication Management</h3>
              <p className="caretaker_card_desc">
                Strict adherence to prescribed medicine timings, dosage logging, and managing doctor appointments.
              </p>
            </div>
            {/* Card 5 */}
            <div className="caretaker_service_card">
              <div className="caretaker_card_icon_wrap">
                <FaStethoscope />
              </div>
              <h3 className="caretaker_card_title">Basic Health Monitoring</h3>
              <p className="caretaker_card_desc">
                Regular recording of blood pressure, blood sugar levels, pulse rates, and reporting changes to families.
              </p>
            </div>
            {/* Card 6 */}
            <div className="caretaker_service_card">
              <div className="caretaker_card_icon_wrap">
                <FaHeartPulse />
              </div>
              <h3 className="caretaker_card_title">Feeding & Grooming</h3>
              <p className="caretaker_card_desc">
                Preparing custom diet foods, assisting with feeding, bathing, dressing, and diaper changing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block Section */}
      <section className="caretaker_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 caretaker_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for Home Patient Caretakers?</span>
              </h2>
              <div className="caretaker_trust_points">
                <div className="caretaker_trust_point">
                  <div className="caretaker_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="caretaker_trust_point_title">Vetted & Verified Caregivers</h3>
                    <p className="caretaker_trust_point_desc">
                      Vetted profiles with verified credentials and identity checks for absolute security.
                    </p>
                  </div>
                </div>
                <div className="caretaker_trust_point">
                  <div className="caretaker_trust_icon_box">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h3 className="caretaker_trust_point_title">Home Nursing Experience</h3>
                    <p className="caretaker_trust_point_desc">
                      Experienced staff who prioritize patience, empathy, and clinical hygiene in patient care.
                    </p>
                  </div>
                </div>
                <div className="caretaker_trust_point">
                  <div className="caretaker_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="caretaker_trust_point_title">Flexible Care Schedules</h3>
                    <p className="caretaker_trust_point_desc">
                      Hire for day shifts, night care, 24-hour live-in support, or custom shift timings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="caretaker_trust_img_wrap">
                <Image
                  src="/assets/caretaker.png"
                  alt="Verified home caretaker supporting patient on Aya Sir G!"
                  width={600}
                  height={450}
                  className="caretaker_trust_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared 4 Steps Component */}
      <ServicesSteps />

      {/* Cities Section */}
      <section className="caretaker_cities_sec">
        <div className="container">
          <h2 className="caretaker_section_heading">Find Caretakers in Your City</h2>
          <div className="caretaker_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=66${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="caretaker_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=66${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="caretaker_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=66${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="caretaker_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="caretaker_faq_sec">
        <div className="container">
          <h2 className="caretaker_section_heading">Frequently Asked Questions</h2>
          <div className="caretaker_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a caretaker on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  To book a caretaker, browse through our verified profiles for elderly caregivers and patient caretakers, check customer reviews and ratings, and contact them directly to schedule shifts.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Are the caretakers trained to handle medical emergencies?</Accordion.Header>
                <Accordion.Body>
                  Many of our registered caretakers have basic nursing or first-aid training. However, it is important to review individual profiles or discuss specific emergency handling protocols directly with the caretaker before hiring.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Can I book a caretaker for night shifts only?</Accordion.Header>
                <Accordion.Body>
                  Yes, caretakers offer flexible shifts, including day care, night shifts, hourly shifts, or 24/7 live-in support. You can align shift schedules directly with the professional caregiver.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How is the caretaker's background verified?</Accordion.Header>
                <Accordion.Body>
                  Aya Sir G! conducts identity and credential verifications for registered service providers. We also encourage you to check reviews left by previous clients and request ID documents during your interview.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>What is the cost of hiring a home caretaker in Pakistan?</Accordion.Header>
                <Accordion.Body>
                  The cost varies depending on the caregiver's experience, patient condition, shift duration, and location. You can compare caregiver profiles to find services that fit your budget.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bold CTA Banner */}
      <section className="caretaker_cta_banner">
        <div className="container">
          <h2 className="caretaker_cta_banner_h2">
            Need Professional Home Care for Your Loved One? Find a Caretaker Now.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=66"
            className="caretaker_btn"
          >
            Browse Caretakers
          </Link>
        </div>
      </section>
    </div>
  );
}
