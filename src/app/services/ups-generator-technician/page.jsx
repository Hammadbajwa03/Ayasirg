"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import {
  FaBolt,
  FaWrench,
  FaBatteryThreeQuarters,
  FaGear,
  FaPlug,
  FaCircleCheck,
  FaUserShield,
  FaClock,
  FaStar,
} from "react-icons/fa6";
import { fetchCityIdByName } from "@/app/lib/cityPages";
import ServicesSteps from "@/app/components/services/Services";
import "./ups-generator-technician.css";

export default function UPSGeneratorTechnicianPage() {
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
        "name": "How do I book a UPS or generator technician on Aya Sir G!?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply browse verified profiles on Aya Sir G!, compare their reviews, previous ratings, and portfolio photos. You can contact technicians directly to explain your issue, negotiate rates, and book an onsite visit."
        }
      },
      {
        "@type": "Question",
        "name": "What generator services are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our technicians provide complete gas and diesel generator tuning, engine oil and filter replacement, valve adjustment, fuel line cleaning, alternator repair, and automatic transfer switch (ATS) installation."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my UPS not charging or not giving backup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is usually caused by a degraded battery, faulty charging circuit card, or blown fuses. Hire a technician on Aya Sir G! to inspect battery gravity and repair the inverter card."
        }
      },
      {
        "@type": "Question",
        "name": "What is an ATS (Automatic Transfer Switch) and do you install it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An ATS automatically switches your home's power source from WAPDA/electric grid to your generator when a power outage occurs, and switches back when power is restored. Technicians on Aya Sir G! can customize and install ATS panels."
        }
      },
      {
        "@type": "Question",
        "name": "Are the technicians background checked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Aya Sir G! displays verified CNIC status and customer reviews on profiles to help you find safe, professional, and reliable technicians near you."
        }
      }
    ]
  };

  return (
    <div className="ups_generator_page margin_navbar">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <header className="ups_generator_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="ups_generator_hero_content text-center text-lg-start">
                <h1 className="ups_generator_hero_h1">
                  UPS &amp; Generator Repair — Aya Sir G!
                </h1>
                <p className="ups_generator_hero_subheading">
                  Find verified local technicians for generator tuning, UPS battery diagnostics, inverter card repair, and ATS installation. Compare profiles and hire directly.
                </p>
                <div className="ups_generator_hero_ctas justify-content-center justify-content-lg-start">
                  <Link
                    href="/compnies?role=handyman&category_id=58"
                    className="ups_generator_btn ups_generator_btn_primary"
                  >
                    Find Technicians Near Me
                  </Link>
                  <Link
                    href="/register-yourself"
                    className="ups_generator_btn ups_generator_btn_secondary"
                  >
                    Register as Technician
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-none d-lg-block">
              <div
                style={{
                  background: "rgba(124, 58, 237, 0.04)",
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  border: "2px dashed rgba(124, 58, 237, 0.15)",
                }}
              >
                <FaBolt size={120} style={{ color: "#7c3aed" }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Block */}
      <section className="ups_generator_content_block">
        <div className="container">
          <div className="ups_generator_content_wrapper">
            <h2 className="ups_generator_section_heading">Trusted UPS Repair &amp; Generator Tuning Services</h2>
            <p className="ups_generator_content_text">
              Uninterrupted power supply is critical for homes and businesses in Pakistan due to regular load shedding. When your generator fails to start or your UPS stops giving backup, you need a qualified technician to troubleshoot and resolve the issue quickly. On Aya Sir G!, we connect you directly with experienced, CNIC-verified UPS and generator technicians in Lahore, Karachi, and Islamabad. They can handle gas/diesel generator tuning, engine oil filter changes, battery gravity checks, automatic transfer switch (ATS) programming, and UPS inverter card repairs. You can view technician profiles, check ratings, read client reviews, and negotiate rates directly. Keep your backup power systems in top working condition today with trusted local experts on Aya Sir G!.
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
      <section className="ups_generator_services_sec">
        <div className="container">
          <h2 className="ups_generator_section_heading">Power Backup Services Available</h2>
          <div className="ups_generator_services_grid">
            {/* Card 1 */}
            <div className="ups_generator_service_card">
              <div className="ups_generator_card_icon_wrap">
                <FaWrench />
              </div>
              <h3 className="ups_generator_card_title">Generator Tuning &amp; Oil Change</h3>
              <p className="ups_generator_card_desc">
                Tuning of gas or petrol generators, engine oil change, spark plug cleaning, air filter replacement, and valve adjustments.
              </p>
            </div>
            {/* Card 2 */}
            <div className="ups_generator_service_card">
              <div className="ups_generator_card_icon_wrap">
                <FaBatteryThreeQuarters />
              </div>
              <h3 className="ups_generator_card_title">UPS Battery Maintenance</h3>
              <p className="ups_generator_card_desc">
                Battery gravity testing, acid water topping up, terminal cleaning, and replacement of degraded lead-acid or dry batteries.
              </p>
            </div>
            {/* Card 3 */}
            <div className="ups_generator_service_card">
              <div className="ups_generator_card_icon_wrap">
                <FaPlug />
              </div>
              <h3 className="ups_generator_card_title">Inverter Card Repair</h3>
              <p className="ups_generator_card_desc">
                Troubleshooting motherboard failures, replacing blown MOSFETs/transistors, and repairing charging circuits in home UPS units.
              </p>
            </div>
            {/* Card 4 */}
            <div className="ups_generator_service_card">
              <div className="ups_generator_card_icon_wrap">
                <FaGear />
              </div>
              <h3 className="ups_generator_card_title">ATS Panel Installation</h3>
              <p className="ups_generator_card_desc">
                Custom building and installing Automatic Transfer Switch (ATS) panels for seamless automatic power changeovers.
              </p>
            </div>
            {/* Card 5 */}
            <div className="ups_generator_service_card">
              <div className="ups_generator_card_icon_wrap">
                <FaBolt />
              </div>
              <h3 className="ups_generator_card_title">Emergency Power Diagnostics</h3>
              <p className="ups_generator_card_desc">
                Quick diagnostic visits to inspect wiring shorts, selector switch failures, carbon brushes, and starter motor issues.
              </p>
            </div>
            {/* Card 6 */}
            <div className="ups_generator_service_card">
              <div className="ups_generator_card_icon_wrap">
                <FaCircleCheck />
              </div>
              <h3 className="ups_generator_card_title">Generator Overhauling</h3>
              <p className="ups_generator_card_desc">
                Complete diesel or petrol generator engine rebuilds, piston ring replacements, gasket seals, and alternator rewindings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="ups_generator_trust_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ups_generator_trust_col_text">
              <h2 className="section_heading text-start mb-2">
                Why Choose Aya Sir G! <br />
                <span className="red_title">for UPS &amp; Generators?</span>
              </h2>
              <div className="ups_generator_trust_points">
                <div className="ups_generator_trust_point">
                  <div className="ups_generator_trust_icon_box">
                    <FaUserShield />
                  </div>
                  <div>
                    <h3 className="ups_generator_trust_point_title">Vetted, Safe Electricians</h3>
                    <p className="ups_generator_trust_point_desc">
                      Every technician is fully verified with CNIC checks and profile reviews, ensuring safe handling of electrical wiring in your home.
                    </p>
                  </div>
                </div>
                <div className="ups_generator_trust_point">
                  <div className="ups_generator_trust_icon_box">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="ups_generator_trust_point_title">Quick Diagnostics</h3>
                    <p className="ups_generator_trust_point_desc">
                      Our experts carry accurate testing equipment to quickly find inverter issues, battery health problems, or fuel system failures.
                    </p>
                  </div>
                </div>
                <div className="ups_generator_trust_point">
                  <div className="ups_generator_trust_icon_box">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="ups_generator_trust_point_title">Direct Hiring — No Commision</h3>
                    <p className="ups_generator_trust_point_desc">
                      Discuss rates directly with the technician. Get transparent prices for parts replacement and labor without middleman fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="ups_generator_trust_img_wrap">
                <Image
                  src="/assets/ups-generator.png"
                  alt="Verified UPS and Generator technician on duty on Aya Sir G!"
                  width={600}
                  height={450}
                  className="ups_generator_trust_img"
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
      <section className="ups_generator_cities_sec">
        <div className="container">
          <h2 className="ups_generator_section_heading">Find Technicians in Your City</h2>
          <div className="ups_generator_city_pills">
            <Link
              href={`/compnies?role=handyman&category_id=58${
                cityIds.lahore ? `&city=${cityIds.lahore}` : ""
              }`}
              className="ups_generator_city_pill"
            >
              Lahore
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=58${
                cityIds.karachi ? `&city=${cityIds.karachi}` : ""
              }`}
              className="ups_generator_city_pill"
            >
              Karachi
            </Link>
            <Link
              href={`/compnies?role=handyman&category_id=58${
                cityIds.islamabad ? `&city=${cityIds.islamabad}` : ""
              }`}
              className="ups_generator_city_pill"
            >
              Islamabad
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="ups_generator_faq_sec">
        <div className="container">
          <h2 className="ups_generator_section_heading">Frequently Asked Questions</h2>
          <div className="ups_generator_faq_wrapper">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I book a UPS or generator technician on Aya Sir G!?</Accordion.Header>
                <Accordion.Body>
                  Simply browse verified profiles on Aya Sir G!, compare their reviews, previous ratings, and portfolio photos. You can contact technicians directly to explain your issue, negotiate rates, and book an onsite visit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What generator services are available?</Accordion.Header>
                <Accordion.Body>
                  Our technicians provide complete gas and diesel generator tuning, engine oil and filter replacement, valve adjustment, fuel line cleaning, alternator repair, and automatic transfer switch (ATS) installation.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Why is my UPS not charging or not giving backup?</Accordion.Header>
                <Accordion.Body>
                  This is usually caused by a degraded battery, faulty charging circuit card, or blown fuses. Hire a technician on Aya Sir G! to inspect battery gravity and repair the inverter card.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What is an ATS (Automatic Transfer Switch) and do you install it?</Accordion.Header>
                <Accordion.Body>
                  An ATS automatically switches your home's power source from WAPDA/electric grid to your generator when a power outage occurs, and switches back when power is restored. Technicians on Aya Sir G! can customize and install ATS panels.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Are the technicians background checked?</Accordion.Header>
                <Accordion.Body>
                  Yes, Aya Sir G! displays verified CNIC status and customer reviews on profiles to help you find safe, professional, and reliable technicians near you.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="ups_generator_cta_banner">
        <div className="container">
          <h2 className="ups_generator_cta_banner_h2">
            Generator or UPS Giving Trouble? Hire a Certified Pro Today.
          </h2>
          <Link
            href="/compnies?role=handyman&category_id=58"
            className="ups_generator_btn"
          >
            Browse Technicians
          </Link>
        </div>
      </section>
    </div>
  );
}
